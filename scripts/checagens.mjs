#!/usr/bin/env node
// Checagens que mantêm o contrato vivo.
//
// "Documentação que não é verificada apodrece. Esta é verificável por construção,
//  porque todas as âncoras já são endereçáveis por máquina."
//
// Rodar: node scripts/checagens.mjs
// Sai com código 1 se alguma checagem falhar.

import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';

const RAIZ = new URL('..', import.meta.url).pathname;
const p = (...t) => join(RAIZ, ...t);

let falhas = 0;
const linha = (s = '') => console.log(s);
const ok = (t) => linha(`  ✓ ${t}`);
const erro = (t) => { falhas++; linha(`  ✗ ${t}`); };
const nota = (t) => linha(`  · ${t}`);

function titulo(n, t) {
  linha();
  linha(`${n}. ${t}`);
}

function arquivosMd(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir).flatMap((n) => {
    const f = join(dir, n);
    return statSync(f).isDirectory() ? arquivosMd(f) : n.endsWith('.md') ? [f] : [];
  });
}

const contratos = arquivosMd(p('docs/comportamento')).filter(
  (f) => !f.endsWith('README.md') && !f.endsWith('_template.md')
);

// ─────────────────────────────────────────────────────────────
titulo(1, 'Todo contrato bate com o template');

const CAMPOS = ['fluxo', 'dominio', 'dono', 'status', 'atualizado'];
const SECOES = ['## Regras', '## Comportamento', '## Transições'];

for (const f of contratos) {
  const nome = relative(p('docs/comportamento'), f);
  const t = readFileSync(f, 'utf8');
  const fm = t.startsWith('---') ? t.split('---')[1] : '';
  const problemas = [];

  for (const c of CAMPOS) if (!new RegExp(`^${c}:`, 'm').test(fm)) problemas.push(`sem \`${c}\``);
  for (const s of SECOES) if (!t.includes(s)) problemas.push(`sem seção ${s}`);

  const temTela = /^figma:/m.test(fm);
  if (temTela && !t.includes('## Peças')) problemas.push('tem tela mas não tem ## Peças');
  if (t.includes('```gherkin') && !t.includes('# language: pt')) problemas.push('gherkin sem `# language: pt`');

  const fluxo = fm.match(/^fluxo:\s*(.+)$/m)?.[1].trim();
  const esperado = nome.replace(/\.md$/, '');
  if (fluxo && fluxo !== esperado) problemas.push(`\`fluxo:\` diz ${fluxo}, arquivo é ${esperado}`);

  if (/^status:\s*aprovado/m.test(fm) && t.includes('@lacuna'))
    problemas.push('status aprovado com @lacuna no arquivo');

  problemas.length ? erro(`${nome} — ${problemas.join('; ')}`) : ok(nome);
}

// ─────────────────────────────────────────────────────────────
titulo(2, 'Toda @lacuna aponta para uma pergunta que existe');
nota('A frase `ver pergunta PNN` é reservada a lacunas: cenário decidido que mencione uma');
nota('  pergunta relacionada usa outra redação, senão a contagem acusa lacuna onde não há.');

const perguntasTxt = existsSync(p('docs/perguntas-em-aberto.md'))
  ? readFileSync(p('docs/perguntas-em-aberto.md'), 'utf8')
  : '';
const perguntas = new Set([...perguntasTxt.matchAll(/^### (P\d{2})/gm)].map((m) => m[1]));
nota(`${perguntas.size} perguntas registradas`);

for (const f of contratos) {
  const nome = relative(p('docs/comportamento'), f);
  const t = readFileSync(f, 'utf8');
  const cenariosComLacuna = [...t.matchAll(/@lacuna\s*\n\s*Cenário:\s*(.+)/g)].map((m) => m[1].trim());
  const citadas = [...t.matchAll(/ver pergunta (P\d{2})/g)].map((m) => m[1]);

  if (cenariosComLacuna.length !== citadas.length) {
    erro(`${nome} — ${cenariosComLacuna.length} cenário(s) com @lacuna, ${citadas.length} citação(ões) de pergunta`);
    continue;
  }
  const inexistentes = citadas.filter((q) => !perguntas.has(q));
  inexistentes.length
    ? erro(`${nome} — cita pergunta que não existe: ${inexistentes.join(', ')}`)
    : ok(`${nome} — ${citadas.length} lacuna(s), todas com pergunta`);
}

// ─────────────────────────────────────────────────────────────
titulo(3, 'Todo token citado existe no inventário');

const specTxt = existsSync(p('docs/spec/README.md')) ? readFileSync(p('docs/spec/README.md'), 'utf8') : '';
const tokens = new Set();
for (const bloco of specTxt.matchAll(/```([\s\S]*?)```/g)) {
  for (const m of bloco[1].matchAll(/[a-z]+\/[a-z-]+(?:\/\{[^}]+\}|\/[a-z-]+)?/g)) {
    const nome = m[0];
    if (nome.includes('{')) {
      const [base, chaves] = nome.split('/{');
      for (const k of chaves.replace('}', '').split(',')) tokens.add(`${base}/${k.trim()}`);
    } else tokens.add(nome);
  }
}
// famílias com variantes por acento
for (const cor of ['roxo', 'laranja', 'verde', 'rosa', 'azul'])
  for (const tom of ['surface', 'strong']) tokens.add(`accent/${cor}/${tom}`);
for (const n of [4, 8, 12, 16, 24, 32, 48, 64, 96, 128]) tokens.add(`space/${n}`);
nota(`${tokens.size} tokens no inventário`);

const PADRAO = /`((?:space|radius|stroke|foco|text|bg|accent|size|line|grade)\/[a-z0-9-]+(?:\/[a-z0-9-]+)?)`/g;
let citadosTotal = 0;
for (const f of [...contratos, ...arquivosMd(p('docs/prd'))]) {
  const nome = relative(p('docs'), f);
  const t = readFileSync(f, 'utf8');
  const citados = [...new Set([...t.matchAll(PADRAO)].map((m) => m[1]))];
  citadosTotal += citados.length;
  const orfaos = citados.filter((c) => !tokens.has(c));
  if (orfaos.length) erro(`${nome} — token inexistente: ${orfaos.join(', ')}`);
}
if (citadosTotal === 0) nota('nenhum contrato cita token ainda — a checagem passa por vacuidade');
else ok(`${citadosTotal} citação(ões) de token, todas resolvidas`);

// ─────────────────────────────────────────────────────────────
titulo(4, 'Os arquivos de conteúdo seguem a convenção');

const CONTEUDO = ['case-study-financas-pf-pj.md', 'case-study-reembolso-sulamerica.md', 'quem-sou-eu.md'];
const BLOCOS_VALIDOS = ['card', 'case', 'home', 'hero', 'quem-sou-eu', 'foto'];

for (const nome of CONTEUDO) {
  const f = p(nome);
  if (!existsSync(f)) { erro(`${nome} — arquivo não encontrado`); continue; }
  const t = readFileSync(f, 'utf8');
  const problemas = [];

  const blocos = [...t.matchAll(/<!--\s*bloco:\s*([a-z-]+)\s*-->/g)].map((m) => m[1]);
  const invalidos = blocos.filter((b) => !BLOCOS_VALIDOS.includes(b));
  if (invalidos.length) problemas.push(`bloco desconhecido: ${invalidos.join(', ')}`);
  if (!blocos.length) problemas.push('nenhum marcador de bloco');

  // capítulo = título seguido de marcador de trilha
  const trilhas = [...t.matchAll(/^<!--\s*trilha:\s*(.+?)\s*-->$/gm)];
  const linhas = t.split('\n');
  for (const m of trilhas) {
    const i = linhas.findIndex((l) => l.includes(m[0]));
    if (i <= 0 || !/^#{1,3}\s/.test(linhas[i - 1]))
      problemas.push(`marcador de trilha "${m[1]}" não está logo abaixo de um título`);
  }

  // imagem exige legenda na linha seguinte
  linhas.forEach((l, i) => {
    if (/^!\[.*\]\(.+\)/.test(l)) {
      const prox = (linhas[i + 1] || '').trim();
      if (!prox.startsWith('Legenda:')) problemas.push(`imagem na linha ${i + 1} sem Legenda: na linha seguinte`);
    }
  });

  problemas.length
    ? erro(`${nome} — ${problemas.join('; ')}`)
    : ok(`${nome} — ${blocos.length} bloco(s), ${trilhas.length} capítulo(s)`);
}

// ─────────────────────────────────────────────────────────────
titulo('—', 'Checagens declaradas e ainda bloqueadas');

nota('Todo `figma.tela` resolve — exige um token pessoal do Figma. Sem ele, nenhum script');
nota('  fora do editor lê o arquivo. Os node-id dos contratos seguem @lacuna de qualquer forma.');
nota('Todo `Cenário:` é citado por um teste — a suíte usará `node --test testes/`, decidida');
nota('  na pesquisa da spec 001. A checagem entra quando o primeiro teste existir.');
nota('Todo `storybook.usa` existe — não se aplica: não há Storybook. Ver pergunta P17.');
nota('Dois níveis tipográficos nunca compartilham corpo E entrelinha no mesmo modo —');
nota('  a escala converge por construção, e é a entrelinha que separa quem divide o corpo.');
nota('  Bloqueada: os valores da escala não estão no repositório. Ver pergunta P07.');
nota('Todo frame bate com o token de grade do seu modo — a grade do Figma não aceita vínculo');
nota('  com variável (decisão 021), então a conferência não pode ser automática daqui.');

// ─────────────────────────────────────────────────────────────
linha();
if (falhas) {
  linha(`${falhas} checagem(ns) falharam.`);
  process.exit(1);
}
linha('Todas as checagens que podem rodar hoje passaram.');
