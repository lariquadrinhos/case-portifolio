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

const tokensPath = p('docs/spec/tokens.json');
let tokens = new Set(), colecoes = null;
if (existsSync(tokensPath)) {
  colecoes = JSON.parse(readFileSync(tokensPath, 'utf8')).colecoes;
  for (const c of Object.values(colecoes)) for (const nome of Object.keys(c.variaveis)) tokens.add(nome);
  nota(`${tokens.size} tokens exportados do Figma, em ${Object.keys(colecoes).length} coleções`);
} else {
  erro('docs/spec/tokens.json não existe — reexporte do Figma');
}

const PADRAO = /`((?:space|radius|stroke|foco|text|bg|accent|size|line|margem|colunas|calha|family)\/?[a-z0-9-]*(?:\/[a-z0-9-]+)?)`/g;
let citadosTotal = 0;
for (const f of [...contratos, ...arquivosMd(p('docs/prd')), ...arquivosMd(p('docs/speclist'))]) {
  const nome = relative(p('docs'), f);
  const t = readFileSync(f, 'utf8');
  const citados = [...new Set([...t.matchAll(PADRAO)].map((m) => m[1]))].filter((c) => c.includes('/'));
  citadosTotal += citados.length;
  const orfaos = citados.filter((c) => !tokens.has(c));
  if (orfaos.length) erro(`${nome} — token inexistente: ${orfaos.join(', ')}`);
}
if (citadosTotal === 0) nota('nenhum documento cita token ainda');
else ok(`${citadosTotal} citação(ões) de token, todas resolvidas`);

// ─────────────────────────────────────────────────────────────
titulo('3b', 'Dois níveis tipográficos nunca compartilham corpo e entrelinha');

if (colecoes && colecoes['Tipografia']) {
  const tp = colecoes['Tipografia'];
  const niveis = [...new Set(Object.keys(tp.variaveis).filter((k) => k.startsWith('size/')).map((k) => k.slice(5)))];
  for (const modo of tp.modos) {
    const pares = [];
    for (let i = 0; i < niveis.length; i++)
      for (let j = i + 1; j < niveis.length; j++) {
        const a = niveis[i], b = niveis[j];
        const mesmoCorpo = tp.variaveis[`size/${a}`][modo] === tp.variaveis[`size/${b}`][modo];
        const mesmaLinha = tp.variaveis[`line/${a}`][modo] === tp.variaveis[`line/${b}`][modo];
        if (mesmoCorpo && mesmaLinha) pares.push(`${a} = ${b}`);
        else if (mesmoCorpo) nota(`${modo}: ${a} e ${b} dividem o corpo ${tp.variaveis[`size/${a}`][modo]}, separados pela entrelinha`);
      }
    pares.length ? erro(`${modo} — indistinguíveis: ${pares.join(', ')}`) : ok(`${modo} — ${niveis.length} níveis, todos distinguíveis`);
  }
} else nota('sem coleção de Tipografia no export');

titulo(4, 'Os arquivos de conteúdo seguem a convenção');

const CONTEUDO = ['case-study-financas-pf-pj.md', 'case-study-reembolso-sulamerica.md', 'quem-sou-eu.md'];
const BLOCOS_VALIDOS = ['card', 'case', 'home', 'hero', 'quem-sou-eu', 'apresentacao', 'foto'];

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

  // imagem de prova exige legenda; a foto da página não
  linhas.forEach((l, i) => {
    if (/^!\[.*\]\(.+\)/.test(l)) {
      const alt = l.match(/^!\[(.*?)\]/)?.[1] ?? '';
      if (!alt.trim()) problemas.push(`imagem na linha ${i + 1} sem texto alternativo`);
      const ehFoto = (linhas[i - 1] || '').includes('<!-- bloco: foto -->');
      if (ehFoto) return;
      const prox = (linhas[i + 1] || '').trim();
      if (!prox.startsWith('Legenda:')) problemas.push(`imagem de prova na linha ${i + 1} sem Legenda: na linha seguinte`);
    }
  });

  problemas.length
    ? erro(`${nome} — ${problemas.join('; ')}`)
    : ok(`${nome} — ${blocos.length} bloco(s), ${trilhas.length} capítulo(s)`);
}

titulo(5, 'Nenhum contrato aponta para uma regra por posição');

// A decisão 006 recusou regra por posição nos arquivos de conteúdo. O mesmo vale para os
// contratos: "as duas últimas regras" quebra em silêncio quando alguém insere uma no meio —
// foi o que aconteceu no contrato do tema em 21/09/2026.
//
// Só conta apontar para o DOCUMENTO. "logo abaixo da barra" descreve a tela e é legítimo;
// "a regra acima" aponta para o texto e quebra quando o texto se mexe. A primeira versão
// desta checagem não separava os dois e acusou seis frases corretas.
const POSICIONAL = new RegExp(
  '\\b(?:' +
    '(?:as|os)\\s+(?:duas|dois|tr\u00eas|quatro|cinco)?\\s*(?:\u00faltim[ao]s?|primeir[ao]s?|anterior(?:es)?)\\s+(?:regras?|itens|pontos|cen\u00e1rios?|par\u00e1grafos?)' +
    '|(?:a|o)\\s+(?:regra|item|ponto|cen\u00e1rio|par\u00e1grafo|lista|tabela)\\s+(?:acima|abaixo|anterior|seguinte|de cima|de baixo)' +
  ')\\b',
  'gi'
);

let posicionais = 0;
for (const arq of contratos) {
  const t = readFileSync(arq, 'utf8');
  const achados = [...t.matchAll(POSICIONAL)].map((m) => m[0]);
  if (achados.length) {
    posicionais += achados.length;
    erro(`${relative(p('docs/comportamento'), arq)} — aponta por posição: ${[...new Set(achados)].join(', ')}`);
  }
}
if (!posicionais) ok(`${contratos.length} contrato(s) — nenhuma referência por posição`);

titulo(6, 'As sobreposições são todas a mesma peça');

// Contato, menu e tema são um componente só (decisão 071), mas nenhum deles é componente de
// verdade no Figma — são quatro cópias. Divergência entre cópias não aparece olhando uma:
// três conferências seguidas em 21/09 acharam um vão de 16 onde as outras tinham 12, três
// famílias de miolo, e o resto disso. Esta checagem transforma "comparar lado a lado" em
// algo que acontece sozinho.
//
// Lê docs/spec/sobreposicoes.json, que é EXPORTADO do Figma. Se o export envelhecer, a
// checagem valida o passado — a mesma limitação de tokens.json, declarada na decisão 007.

const fSobre = p('docs/spec/sobreposicoes.json');
if (!existsSync(fSobre)) erro('docs/spec/sobreposicoes.json não encontrado');
else {
  const { exportado, sobreposicoes: sobre } = JSON.parse(readFileSync(fSobre, 'utf8'));
  const problemas = [];

  // A casca é igual nas quatro, sem exceção de largura.
  for (const campo of ['vao', 'raio', 'traco', 'sombra', 'respiro', 'gapEntreLinhas']) {
    const vistos = [...new Set(sobre.map((s) => JSON.stringify(s.casca[campo])))];
    if (vistos.length > 1)
      problemas.push(`casca.${campo} diverge: ` + sobre.map((s) => `${s.nome}=${s.casca[campo]}`).join(', '));
  }

  // O miolo é igual dentro de cada largura — o tipo e a altura da linha mudam com a escala.
  for (const largura of ['desktop', 'estreita']) {
    const grupo = sobre.filter((s) => s.largura === largura);
    for (const campo of ['respiroDaLinha', 'alturaDaLinha', 'tipo']) {
      const vistos = [...new Set(grupo.map((s) => JSON.stringify(s.miolo[campo])))];
      if (vistos.length > 1)
        problemas.push(`${largura}: miolo.${campo} diverge: ` + grupo.map((s) => `${s.nome}=${s.miolo[campo].join('|')}`).join(', '));
    }
    for (const s of grupo)
      if (s.miolo.alturaDaLinha.length > 1)
        problemas.push(`${s.nome}: linhas de alturas diferentes (${s.miolo.alturaDaLinha.join(', ')})`);
  }

  // Invariantes que valem para qualquer sobreposição, em qualquer largura.
  const ALVO_MINIMO = 44;
  for (const s of sobre) {
    if (!s.miolo.linhaPreencheCaixa)
      problemas.push(`${s.nome}: a linha não ocupa a caixa — alvos de tamanhos diferentes na mesma lista`);
    if (!s.miolo.rotulosAlinhados)
      problemas.push(`${s.nome}: rótulos em colunas diferentes`);
    if (s.miolo.temColunaDoSinal && !s.miolo.colunaEmTodasAsLinhas)
      problemas.push(`${s.nome}: só algumas linhas reservam a coluna do sinal`);
    const alvo = Math.min(...s.miolo.alturaDaLinha);
    if (alvo < ALVO_MINIMO)
      problemas.push(`${s.nome}: alvo de ${alvo}px, abaixo dos ${ALVO_MINIMO} confortáveis para dedo`);
  }

  problemas.length
    ? problemas.forEach(erro)
    : ok(`${sobre.length} sobreposições conferem — casca idêntica, miolo igual por largura, alvo ≥ ${ALVO_MINIMO}px`);
  nota(`medidas exportadas do Figma em ${exportado}; se o desenho mudou depois, reexporte`);
}

titulo(7, 'Toda cor vem de variável');

// Três peças apareceram no mesmo dia com cor escrita à mão e fora da paleta: o card (branco,
// cinza e quase-preto), o marca-texto (três cores, duas inexistentes) e os links (#2E2E2E,
// quando text/primary é #221F20). Nenhuma respondia ao tema escuro. A varredura que veio
// depois achou 774 cores soltas — os wireframes inteiros estavam numa paleta de cinzas que
// não era a do sistema.
//
// Só é isento o que está marcado como anotação: cromo de documentação, não cor de produto.
// A marca fica no NOME do nó, para a isenção ser visível no Figma e não só aqui.

const fCores = p('docs/spec/cores-soltas.json');
if (!existsSync(fCores)) erro('docs/spec/cores-soltas.json não encontrado');
else {
  const { exportado, soltas, nosVarridos, variaveisDeCor } = JSON.parse(readFileSync(fCores, 'utf8'));
  const naoIsentas = soltas.filter((s) => !/· anotação$/.test(s.nome));

  if (naoIsentas.length) {
    const porCor = {};
    for (const s of naoIsentas) (porCor[s.cor] ||= []).push(`${s.pagina} › ${s.nome}`);
    for (const [cor, onde] of Object.entries(porCor))
      erro(`${cor} escrita à mão em ${onde.length} lugar(es): ${onde.slice(0, 3).join(', ')}${onde.length > 3 ? '…' : ''}`);
  } else {
    ok(`${nosVarridos} nós varridos, ${variaveisDeCor} variáveis de cor — nenhuma cor de produto escrita à mão`);
    if (soltas.length) nota(`${soltas.length} isenta(s), todas marcadas como anotação`);
  }
  nota(`varredura exportada do Figma em ${exportado}; se o desenho mudou depois, reexporte`);
}

// ─────────────────────────────────────────────────────────────
titulo('—', 'Checagens declaradas e ainda bloqueadas');

nota('Todo `figma.tela` resolve — exige um token pessoal do Figma. Sem ele, nenhum script');
nota('  fora do editor lê o arquivo. Os node-id dos contratos seguem @lacuna de qualquer forma.');
nota('Todo `Cenário:` é citado por um teste — a suíte usará `node --test testes/`, decidida');
nota('  na pesquisa da spec 001. A checagem entra quando o primeiro teste existir.');
nota('Todo `storybook.usa` existe — não se aplica: não há Storybook. Ver pergunta P17.');
nota('Todo frame bate com o token de grade do seu modo — a grade do Figma não aceita vínculo');
nota('  com variável (decisão 021), então a conferência não pode ser automática daqui.');

// ─────────────────────────────────────────────────────────────
linha();
if (falhas) {
  linha(`${falhas} checagem(ns) falharam.`);
  process.exit(1);
}
linha('Todas as checagens que podem rodar hoje passaram.');
