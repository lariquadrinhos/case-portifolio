#!/usr/bin/env node
// Checagens que mantêm o contrato vivo.
//
// "Documentação que não é verificada apodrece. Esta é verificável por construção,
//  porque todas as âncoras já são endereçáveis por máquina."
//
// Rodar: node scripts/checagens.mjs
// Sai com código 1 se alguma checagem falhar.

import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { inflateSync } from 'node:zlib';
import { join, relative } from 'node:path';
import { BLOCOS, SOLTOS } from '../construcao/marcadores.mjs';

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

  problemas.length ? erro(`${nome}, ${problemas.join('; ')}`) : ok(nome);
}

// ─────────────────────────────────────────────────────────────
titulo(2, 'Toda @lacuna aponta para uma pergunta que existe');
nota('A frase `ver pergunta PNN` é reservada a lacunas, com ou sem maiúscula: cenário');
nota('  decidido que mencione uma pergunta usa outra redação, senão a contagem acusa');
nota('  lacuna onde não há.');

const perguntasTxt = existsSync(p('docs/perguntas-em-aberto.md'))
  ? readFileSync(p('docs/perguntas-em-aberto.md'), 'utf8')
  : '';
const perguntas = new Set([...perguntasTxt.matchAll(/^### (P\d{2})/gm)].map((m) => m[1]));
nota(`${perguntas.size} perguntas registradas`);

for (const f of contratos) {
  const nome = relative(p('docs/comportamento'), f);
  const t = readFileSync(f, 'utf8');
  const cenariosComLacuna = [...t.matchAll(/@lacuna\s*\n\s*Cenário:\s*(.+)/g)].map((m) => m[1].trim());
  const citadas = [...t.matchAll(/[Vv]er pergunta (P\d{2})/g)].map((m) => m[1]);

  if (cenariosComLacuna.length !== citadas.length) {
    erro(`${nome}: ${cenariosComLacuna.length} cenário(s) com @lacuna, ${citadas.length} citação(ões) de pergunta`);
    continue;
  }
  const inexistentes = citadas.filter((q) => !perguntas.has(q));
  inexistentes.length
    ? erro(`${nome} cita pergunta que não existe: ${inexistentes.join(', ')}`)
    : ok(`${nome}: ${citadas.length} lacuna(s), todas com pergunta`);
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
  erro('docs/spec/tokens.json não existe, reexporte do Figma');
}

const PADRAO = /`((?:space|radius|stroke|foco|text|bg|accent|size|line|margem|colunas|calha|family)\/?[a-z0-9-]*(?:\/[a-z0-9-]+)?)`/g;
let citadosTotal = 0;
for (const f of [...contratos, ...arquivosMd(p('docs/prd')), ...arquivosMd(p('docs/speclist'))]) {
  const nome = relative(p('docs'), f);
  const t = readFileSync(f, 'utf8');
  const citados = [...new Set([...t.matchAll(PADRAO)].map((m) => m[1]))].filter((c) => c.includes('/'));
  citadosTotal += citados.length;
  const orfaos = citados.filter((c) => !tokens.has(c));
  if (orfaos.length) erro(`${nome}, token inexistente: ${orfaos.join(', ')}`);
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
    pares.length ? erro(`${modo}, indistinguíveis: ${pares.join(', ')}`) : ok(`${modo}: ${niveis.length} níveis, todos distinguíveis`);
  }
} else nota('sem coleção de Tipografia no export');

titulo(4, 'Os arquivos de conteúdo seguem a convenção');

const CONTEUDO = ['case-study-financas-pf-pj.md', 'case-study-reembolso-sulamerica.md', 'quem-sou-eu.md'];
// O vocabulário mora num lugar só: o mesmo que a construção usa.
const BLOCOS_VALIDOS = BLOCOS;
const MARCADORES_SOLTOS = SOLTOS;

for (const nome of CONTEUDO) {
  const f = p(nome);
  if (!existsSync(f)) { erro(`${nome}, arquivo não encontrado`); continue; }
  const t = readFileSync(f, 'utf8');
  const problemas = [];

  const blocos = [...t.matchAll(/<!--\s*bloco:\s*([a-z-]+)\s*-->/g)].map((m) => m[1]);
  const invalidos = blocos.filter((b) => !BLOCOS_VALIDOS.includes(b));
  if (invalidos.length) problemas.push(`bloco desconhecido: ${invalidos.join(', ')}`);
  if (!blocos.length) problemas.push('nenhum marcador de bloco');

  // Marcador solto, o que não é `bloco:` nem `trilha:`. Eles escondem conteúdo: `privado`
  // tira do site, `só no desktop` tira da tela estreita. Um erro de digitação aqui não
  // quebra nada, só publica calado o que era para sumir, que é o pior tipo de falha.
  const soltos = [...t.matchAll(/<!--\s*([^:>]+?)\s*-->/g)].map((m) => m[1].trim());
  const desconhecidos = soltos.filter((b) => !MARCADORES_SOLTOS.includes(b));
  if (desconhecidos.length) problemas.push(`marcador desconhecido: ${desconhecidos.join(', ')}`);

  // capítulo = título seguido de marcador de trilha
  const trilhas = [...t.matchAll(/^<!--\s*trilha:\s*(.+?)\s*-->$/gm)];
  const linhas = t.split('\n');
  for (const m of trilhas) {
    const i = linhas.findIndex((l) => l.includes(m[0]));
    if (i <= 0 || !/^#{1,3}\s/.test(linhas[i - 1]))
      problemas.push(`marcador de trilha "${m[1]}" não está logo abaixo de um título`);
  }

  // Mídia de prova exige legenda; a foto da página não. Vídeo usa a mesma marcação de
  // imagem, e o que o distingue é a extensão: a construção lê `.mp4` e serve um vídeo com
  // pôster em vez de uma imagem. Ver decisão 171.
  const VIDEO = /\.(mp4|webm)$/i;
  linhas.forEach((l, i) => {
    const m = l.match(/^!\[(.*?)\]\((.+?)\)/);
    if (!m) return;
    const [, alt, arquivo] = m;
    if (!alt.trim()) problemas.push(`mídia na linha ${i + 1} sem texto alternativo`);
    if ((linhas[i - 1] || '').includes('<!-- bloco: foto -->')) return;

    const prox = (linhas[i + 1] || '').trim();
    if (!prox.startsWith('Legenda:')) {
      problemas.push(`mídia de prova na linha ${i + 1} sem Legenda: na linha seguinte`);
      return;
    }
    // `Convite:` é opcional, mas quando existe traz um link, senão é só uma frase solta
    const depois = (linhas[i + 2] || '').trim();
    if (depois.startsWith('Convite:') && !/\[[^\]]+\]\(https?:\/\/[^)]+\)/.test(depois))
      problemas.push(`Convite: na linha ${i + 3} sem link`);

    // vídeo pede pôster, senão a página carrega o vídeo inteiro para mostrar o primeiro quadro
    if (VIDEO.test(arquivo)) {
      const base = arquivo.replace(VIDEO, '');
      for (const tema of ['claro', 'escuro']) {
        const v = p(`${base}-${tema}${arquivo.match(VIDEO)[0]}`);
        const cartaz = p(`${base}-${tema}-poster.png`);
        if (existsSync(v) && !existsSync(cartaz))
          problemas.push(`vídeo ${relative(RAIZ, v)} sem o pôster ao lado`);
      }
    }
  });

  problemas.length
    ? erro(`${nome}, ${problemas.join('; ')}`)
    : ok(`${nome}, ${blocos.length} bloco(s), ${trilhas.length} capítulo(s)`);
}

titulo(5, 'Nenhum contrato aponta para uma regra por posição');

// A decisão 006 recusou regra por posição nos arquivos de conteúdo. O mesmo vale para os
// contratos: "as duas últimas regras" quebra em silêncio quando alguém insere uma no meio,
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
    erro(`${relative(p('docs/comportamento'), arq)}, aponta por posição: ${[...new Set(achados)].join(', ')}`);
  }
}
if (!posicionais) ok(`${contratos.length} contrato(s), nenhuma referência por posição`);

titulo(6, 'As sobreposições são todas a mesma peça');

// Contato, menu e tema são um componente só (decisão 071), mas nenhum deles é componente de
// verdade no Figma: são quatro cópias. Divergência entre cópias não aparece olhando uma:
// três conferências seguidas em 21/09 acharam um vão de 16 onde as outras tinham 12, três
// famílias de miolo, e o resto disso. Esta checagem transforma "comparar lado a lado" em
// algo que acontece sozinho.
//
// Lê docs/spec/sobreposicoes.json, que é EXPORTADO do Figma. Se o export envelhecer, a
// checagem valida o passado: a mesma limitação de tokens.json, declarada na decisão 007.

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

  // O miolo é igual dentro de cada largura: o tipo e a altura da linha mudam com a escala.
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
      problemas.push(`${s.nome}: a linha não ocupa a caixa, alvos de tamanhos diferentes na mesma lista`);
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
    : ok(`${sobre.length} sobreposições conferem, casca idêntica, miolo igual por largura, alvo ≥ ${ALVO_MINIMO}px`);
  nota(`medidas exportadas do Figma em ${exportado}; se o desenho mudou depois, reexporte`);
}

titulo(7, 'Toda cor vem de variável');

// Três peças apareceram no mesmo dia com cor escrita à mão e fora da paleta: o card (branco,
// cinza e quase-preto), o marca-texto (três cores, duas inexistentes) e os links (#2E2E2E,
// quando text/primary é #221F20). Nenhuma respondia ao tema escuro. A varredura que veio
// depois achou 774 cores soltas: os wireframes inteiros estavam numa paleta de cinzas que
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
    ok(`${nosVarridos} nós varridos, ${variaveisDeCor} variáveis de cor, nenhuma cor de produto escrita à mão`);
    if (soltas.length) nota(`${soltas.length} isenta(s), todas marcadas como anotação`);
  }
  nota(`varredura exportada do Figma em ${exportado}; se o desenho mudou depois, reexporte`);
}

titulo(8, 'Nenhum quadro corta o próprio conteúdo');

// Quatro vezes em um dia: a frase de abertura presa em 10px, vinte e nove textos encolhidos
// na página do sistema, duas variantes de componente cortadas pela seção, e dois capítulos
// do case de Finanças que não cresceram quando o bloco de destaque entrou.
//
// O padrão é sempre o mesmo e sempre silencioso: o conteúdo existe, cabe na estrutura, e
// simplesmente não aparece. Nenhuma outra checagem pega: a de cor pergunta se a cor vem de
// variável, a de sobreposição compara peças entre si, e conteúdo cortado passa por todas.
//
// Três cortes são de propósito. Dois ficam declarados NO NOME do quadro, para a exceção ser
// visível no Figma: "· recorte" mostra uma janela sobre uma página maior, e "rolável" ou
// "rola na horizontal" é conteúdo que rola dentro da própria caixa.
//
// O terceiro não se declara pelo nome, e sim por estar listado em midias.json: um quadro de
// mídia recorta material maior do que ele, e é isso que ele existe para fazer. Exigir "·
// recorte" no nome brigaria com a convenção de nome das mídias, que é
// <caso>-<capítulo>-<nome>-<tema> e não comporta sufixo.

const fCortes = p('docs/spec/cortes.json');
if (!existsSync(fCortes)) erro('docs/spec/cortes.json não encontrado');
else {
  const { exportado, cortando, nosVarridos } = JSON.parse(readFileSync(fCortes, 'utf8'));
  // "· recorte" não fica sempre no fim: a gêmea escura é "… · recorte · tema escuro".
  // Ancorar no fim deixava as seis telas escuras de fora, e o export velho escondia isso
  // porque só trazia as claras.
  const DECLARADOS = /· recorte(?: ·|$)|rola na horizontal|rolável/;

  // nomes de mídia, lidos do outro export em vez de repetidos aqui
  const nomesDeMidia = new Set();
  const fM = p('docs/spec/midias.json');
  if (existsSync(fM)) for (const m of JSON.parse(readFileSync(fM, 'utf8')).midias) nomesDeMidia.add(m.nome);

  const isento = (q) => DECLARADOS.test(q) || nomesDeMidia.has(q);
  const inesperados = cortando.filter((c) => !isento(c.quadro));

  if (inesperados.length)
    for (const c of inesperados)
      erro(`${c.pagina} › "${c.quadro}" (${c.tam}) esconde ${c.sobra}`);
  else {
    ok(`${nosVarridos} nós varridos, nenhum conteúdo escondido por corte`);
    const porNome = cortando.filter((c) => DECLARADOS.test(c.quadro)).length;
    const porMidia = cortando.length - porNome;
    nota(`${cortando.length} corte(s) de propósito: ${porNome} declarado(s) no nome, ${porMidia} por ser quadro de mídia`);
  }
  nota(`varredura exportada do Figma em ${exportado}; se o desenho mudou depois, reexporte`);
}

titulo(9, 'Mesmo papel, mesmo formato');

// A tira de destaques estava escrita em duas línguas: Finanças trazia PAPEL, ESCOPO,
// ENTREGAS em caixa alta sobre text/secondary, e Reembolso trazia Papel, Método, Entregas
// capitalizado sobre text/tertiary. As legendas de mídia, na mesma dupla de telas, estavam
// em duas cores. Nenhuma das oito checagens anteriores viu: a cor vinha de variável, nada
// estava cortado, nenhuma peça se sobrepunha. Estava tudo certo e diferente.
//
// O papel é o par PAI › NOME do nó. Mesmo papel, mesma largura, um formato só: em todas
// as telas. É a lente que acha uma tela que saiu da linha.
//
// Nó de primeiro nível entra como "(topo) › nome", não com o nome da tela como pai. A
// primeira versão usava o nome da tela, e com isso cada tela virava uma chave só dela:
// nenhum elemento de topo era comparado com o das outras. Foi por esse furo que a nota das
// duas telas do atalho de salto saiu em 15/24 Regular sobre text/secondary enquanto as
// quatro telas de estado anteriores usavam 13/18 Medium sobre text/tertiary, e a checagem
// passou. Uma checagem estreia com o defeito que ela deveria ter pego já dentro do arquivo.
//
// O que esta checagem NÃO pega, e é deliberado: o mesmo nome com formatos diferentes sob
// PAIS diferentes na mesma tela. Foi assim que o marcador de falta ficou em Regular dentro
// da capa enquanto os outros sete da mesma tela estavam em Medium. A versão que pega isso
// acusou 15 inocentes de uma vez: o título a 56px no hero contra 36px no card, a frase de
// abertura em escala de hero, o rótulo do botão contra o da trilha. Todos legítimos, e sem
// sinal estrutural que os separe do marcador. Uma checagem que acusa inocente ensina a
// ignorar a checagem, então esta ficou com a lente precisa e a lacuna declarada.
//
// A saída para um papel que é mesmo outro papel é dar nome próprio a ele, não afrouxar a
// checagem: foi assim que nasceram `frase de abertura`, `rótulo · atual` e
// `célula de cabeçalho`, que antes se chamavam parágrafo, rótulo e célula.

const fPapeis = p('docs/spec/papeis.json');
if (!existsSync(fPapeis)) erro('docs/spec/papeis.json não encontrado');
else {
  const { exportado, divergentes, nosVarridos, papeisDistintos, telas } = JSON.parse(readFileSync(fPapeis, 'utf8'));

  if (divergentes.length)
    for (const d of divergentes)
      erro(`"${d.papel}" [${d.largura}] aparece em ${d.formatos.length} formatos: ` +
        d.formatos.map((f) => `${f.fmt} (${f.telas.join(', ')})`).join('  ||  '));
  else ok(`${papeisDistintos} papéis em ${telas} telas, ${nosVarridos} textos, cada papel com um formato só`);
  nota(`varredura exportada do Figma em ${exportado}; se o desenho mudou depois, reexporte`);
  nota('não cobre o mesmo nome sob pais diferentes na mesma tela. Ver o comentário da checagem');
}

titulo(10, 'Nenhum capítulo é curto demais para virar etapa da trilha');

// Esta checagem começou errada e vale contar por quê. Ela nasceu como "nenhuma etapa fica
// ativa por menos de meia tela": cenário escrito na decisão 079, e reprovou o Reembolso no
// desktop. Ao investigar, a aritmética mostrou outra coisa:
//
//   a etapa k assume em  inicio[k] - janela/3
//   a etapa k+1 assume em inicio[k+1] - janela/3
//   logo ela dura        inicio[k+1] - inicio[k], a janela CANCELA
//
// Ou seja: **a etapa fica ativa exatamente enquanto o capítulo dela é o que está sendo
// lido**. Isso é o comportamento certo, e é invariante, não há como a trilha violá-lo.
// O que o cenário media, sem dizer, era o COMPRIMENTO DO CAPÍTULO. É regra de conteúdo
// vestida de regra de trilha, e por isso o título desta checagem mudou.
//
// O piso passou de meia tela para um terço, e isso precisa de justificativa porque afrouxar
// limite para calar alarme é exatamente o movimento suspeito. Duas razões: a meia tela veio
// de um cálculo errado na 079, que supunha 760px onde a regra dá 336; e um terço é a única
// constante que o mecanismo já tem, é onde fica a linha de troca. Etapa que dura menos que
// a distância entre o topo e a linha nunca chega a se assentar.
//
// O capítulo mais curto do site continua sendo reportado, passando ou não: é o número que
// diz se algum capítulo virou um piscar.

const fTrilha = p('docs/spec/trilha.json');
if (!existsSync(fTrilha)) erro('docs/spec/trilha.json não encontrado');
else {
  const { exportado, janelaSuposta, telas } = JSON.parse(readFileSync(fTrilha, 'utf8'));
  for (const [nome, t] of Object.entries(telas)) {
    const janela = janelaSuposta[t.largura];
    const ini = t.capitulos.map((c) => c[1]);
    const maxRolagem = t.pagina - janela;
    let pior = null;
    for (let k = 0; k < ini.length; k++) {
      const dura = k + 1 < ini.length ? ini[k + 1] - ini[k] : Math.round(maxRolagem - (ini[k] - janela / 3));
      if (!pior || dura < pior.dura) pior = { etapa: t.capitulos[k][0], dura };
    }
    const piso = Math.round(janela / 3);
    const emTelas = (pior.dura / janela).toFixed(2);
    if (pior.dura < piso)
      erro(`${nome}, "${pior.etapa}" dura ${pior.dura}px (${emTelas} tela), abaixo do piso de ${piso}px`);
    else
      ok(`${nome}, capítulo mais curto: "${pior.etapa}", ${pior.dura}px (${emTelas} tela)`);
  }
  nota('a etapa dura exatamente o comprimento do capítulo dela, a janela cancela na conta');
  nota(`inícios de capítulo exportados do Figma em ${exportado}; reexporte se um capítulo mudar`);
}

titulo(11, 'Toda tela termina uma margem depois do conteúdo');

// Ela viu 470px de vazio ao fim de "Trabalhos · tela estreita" e perguntou por quê. A resposta:
// a altura daquele quadro foi posta à mão e não acompanhou quando o conteúdo encolheu. As telas
// de case não tinham o problema porque são reempilhadas por código a cada mudança, e é
// exatamente essa a diferença que esta checagem apaga.
//
// Vazio no fim não quebra nada e não aparece em conferência de cor, de corte ou de papel. Some
// só quando alguém rola até embaixo, que é o que ela fez.
//
// Quadro marcado "· recorte" é isento: ele mostra uma janela sobre uma página maior, então o
// conteúdo passa do fim de propósito. É a mesma isenção da checagem 8, declarada no nome.

const fTelas = p('docs/spec/telas.json');
if (!existsSync(fTelas)) erro('docs/spec/telas.json não encontrado');
else {
  const { exportado, margens, telas } = JSON.parse(readFileSync(fTelas, 'utf8'));
  const problemas = [];
  let recortes = 0;
  for (const t of telas) {
    if (/ · recorte$/.test(t.nome)) { recortes++; continue; }
    const margem = margens[t.nome.includes('375') ? 'estreita' : 'desktop'];
    const sobra = t.altura - t.conteudoAte;
    if (sobra !== margem)
      problemas.push(`${t.nome}, sobra ${sobra}px, esperado ${margem} (${sobra > margem ? 'vazio a mais' : 'conteúdo encostando'})`);
  }
  problemas.length
    ? problemas.forEach(erro)
    : ok(`${telas.length - recortes} telas terminam exatamente uma margem depois do conteúdo`);
  if (recortes) nota(`${recortes} recorte(s) isento(s), declarados no nome`);
  nota(`medidas exportadas do Figma em ${exportado}; reexporte se uma tela mudar de tamanho`);
}

titulo(12, 'Todo endereço do Figma citado na documentação existe');

// O inventário citava quatro endereços mortos: `174:21`, `174:30` e `174:35` não existiam
// mais, e `101:8` apontava para um card órfão, componente removido que sobrevive porque
// alguma instância o segura. Outros seis estavam mortos em quatro arquivos diferentes.
//
// Endereço velho não quebra nada. Manda a pessoa para o lugar errado, ou para lugar nenhum,
// e some no meio de uma tabela de peças que parece completa. Recriar um componente muda o
// id: foi o que aconteceu com a barra, o card, a faixa e o marca-texto quando viraram
// componentes de verdade.
//
// A resolução acontece dentro do Figma, porque só de lá dá para saber se um id existe. Aqui
// se confere o resultado, e que o número de endereços citados não mudou desde o export.

const fEnd = p('docs/spec/enderecos.json');
if (!existsSync(fEnd)) erro('docs/spec/enderecos.json não encontrado');
else {
  const { exportado, citados, mortos, orfaos } = JSON.parse(readFileSync(fEnd, 'utf8'));
  const docs = arquivosMd(p('docs')).filter((f) => !/log-de-decisoes|perguntas-em-aberto/.test(f));
  const agora = new Set();
  for (const f of docs)
    for (const m of readFileSync(f, 'utf8').matchAll(/`(\d+[:-]\d+)`/g)) agora.add(m[1].replace('-', ':'));

  for (const id of mortos) erro(`\`${id}\` é citado na documentação e não existe mais no Figma`);
  for (const o of orfaos) erro(`${o}, existe, mas não está em página nenhuma`);
  if (agora.size !== citados)
    erro(`a documentação cita ${agora.size} endereços, e o export conferiu ${citados}, reexporte`);
  if (!mortos.length && !orfaos.length && agora.size === citados)
    ok(`${citados} endereços citados, todos vivos e em página`);
  nota(`resolvido dentro do Figma em ${exportado}; recriar um componente muda o id`);
}

// ─────────────────────────────────────────────────────────────
titulo(13, 'Toda mídia sangra na página');

// A decisão 157 diz que mídia de prova não tem moldura e que o fundo do material é o
// `bg/page` do tema dela. Duas metades, porque só uma é conferível de cada lado:
//
//   · fundo SÓLIDO e moldura: lidos do Figma, em docs/spec/midias.json.
//   · fundo RASTER: a cor está nos pixels, e nenhum export do Figma a revela.
//     Só o PNG responde. Por isso esta checagem também abre os arquivos de
//     publico/midias/ e amostra os quatro cantos.
//
// A tolerância depende de ONDE o material nasceu, e são duas.
//
//   figma · 2 pontos. Absorve o perfil de cor de um PNG exportado, e nada mais.
//   video · 6 pontos. Gravação de tela converte de Display P3 para sRGB. A conversão
//           preserva as pontas e desloca o meio: no vídeo do protótipo o branco do app
//           sai exato em #FFFFFF e o creme da página sai #F2ECE0 contra #F4EFE4, errando
//           2, 3 e 4 pontos. Não é defeito do material: é propriedade da gravação.
//
// Corrigir a cor para caber em 2 foi considerado e recusado: puxar o creme três pontos
// exige mexer na curva da imagem inteira, e quem mais se desloca é o laranja, que é a cor
// da marca e o argumento do capítulo 4. Trocar fidelidade de marca por três pontos de
// fundo é mau negócio.
//
// Afrouxar não desarma a checagem. O defeito que ela existe para pegar, o cinza neutro que
// a ferramenta entrega, erra por 17 pontos no canal azul: quase três vezes a folga maior.
const TOLERANCIA = { figma: 2, video: 6 };
const INSET_BORDA = 4;   // pixels descartados em cada borda antes de amostrar
const INSET_BLOCO = 8;   // lado do bloco amostrado em cada canto

const fMidias = p('docs/spec/midias.json');
if (!existsSync(fMidias)) erro('docs/spec/midias.json não encontrado, reexporte do Figma');
else {
  const { exportado, tokenBgPage, midias, aindaSemNome } = JSON.parse(readFileSync(fMidias, 'utf8'));

  const aHex = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
  const perto = (a, b, tol) => a.every((v, i) => Math.abs(v - b[i]) <= tol);

  // ── PNG mínimo: cabeçalho, inflate, desfiltra, devolve os quatro cantos.
  // Só 8 bits por canal, cor 2 (RGB) e 6 (RGBA), sem entrelaçamento, que é o que o
  // Figma exporta. Qualquer outra coisa devolve null e a mídia conta como não conferida.
  function cantosDoPng(arq) {
    const d = readFileSync(arq);
    if (d.readUInt32BE(0) !== 0x89504e47) return null;
    let i = 8, larg = 0, alt = 0, prof = 0, tipo = -1, entrelace = 0;
    const pedacos = [];
    while (i < d.length) {
      const n = d.readUInt32BE(i), marca = d.toString('ascii', i + 4, i + 8);
      if (marca === 'IHDR') {
        larg = d.readUInt32BE(i + 8); alt = d.readUInt32BE(i + 12);
        prof = d[i + 16]; tipo = d[i + 17]; entrelace = d[i + 20];
      } else if (marca === 'IDAT') pedacos.push(d.subarray(i + 8, i + 8 + n));
      else if (marca === 'IEND') break;
      i += 12 + n;
    }
    if (prof !== 8 || entrelace !== 0 || (tipo !== 2 && tipo !== 6)) return null;
    const canais = tipo === 2 ? 3 : 4;
    const bruto = inflateSync(Buffer.concat(pedacos));
    const passo = larg * canais;
    let ant = Buffer.alloc(passo), pos = 0;
    const topo = [], base = [];
    for (let y = 0; y < alt; y++) {
      const filtro = bruto[pos++];
      const lin = Buffer.from(bruto.subarray(pos, pos + passo)); pos += passo;
      for (let x = 0; x < passo; x++) {
        const a = x >= canais ? lin[x - canais] : 0, b = ant[x];
        const c = x >= canais ? ant[x - canais] : 0;
        if (filtro === 1) lin[x] = (lin[x] + a) & 255;
        else if (filtro === 2) lin[x] = (lin[x] + b) & 255;
        else if (filtro === 3) lin[x] = (lin[x] + ((a + b) >> 1)) & 255;
        else if (filtro === 4) {
          const pr = a + b - c, pa = Math.abs(pr - a), pb = Math.abs(pr - b), pc = Math.abs(pr - c);
          lin[x] = (lin[x] + (pa <= pb && pa <= pc ? a : pb <= pc ? b : c)) & 255;
        }
      }
      if (y >= INSET_BORDA && y < INSET_BORDA + INSET_BLOCO) topo.push(Buffer.from(lin));
      if (y >= alt - INSET_BORDA - INSET_BLOCO && y < alt - INSET_BORDA) base.push(Buffer.from(lin));
      ant = lin;
    }
    // Amostra um bloco afastado da borda, não o pixel exato do canto: num PNG tirado de
    // vídeo o canto é justamente onde a compressão mais erra, e um pixel sozinho mede o
    // artefato em vez de medir o fundo. A mediana de um bloco ignora o pixel estranho.
    const mediana = (v) => v.slice().sort((x, y) => x - y)[v.length >> 1];
    const bloco = (linhas, x0) => {
      const canal = [[], [], []];
      for (const lin of linhas)
        for (let x = x0; x < x0 + INSET_BLOCO; x++)
          for (let k = 0; k < 3; k++) canal[k].push(lin[x * canais + k]);
      return canal.map(mediana);
    };
    return {
      larg, alt,
      cantos: [
        ['superior esquerdo', bloco(topo, INSET_BORDA)],
        ['superior direito', bloco(topo, larg - INSET_BORDA - INSET_BLOCO)],
        ['inferior esquerdo', bloco(base, INSET_BORDA)],
        ['inferior direito', bloco(base, larg - INSET_BORDA - INSET_BLOCO)],
      ],
    };
  }

  let conferidas = 0, semPng = 0;
  for (const m of midias) {
    const esperado = tokenBgPage[m.tema];
    if (!esperado) { erro(`${m.nome}, tema "${m.tema}" não tem bg/page no export`); continue; }

    // ── metade 1: moldura, que a decisão 157 proíbe em qualquer mídia
    const enfeites = [];
    if (m.moldura.contorno) enfeites.push('contorno');
    if (m.moldura.raio !== 0) enfeites.push(`raio ${m.moldura.raio}`);
    if (m.moldura.efeitos > 0) enfeites.push(`${m.moldura.efeitos} efeito(s)`);
    if (enfeites.length)
      erro(`${m.nome}, mídia não tem moldura, e esta tem ${enfeites.join(', ')}`);

    // ── metade 2: o fundo
    const tol = TOLERANCIA[m.origem] ?? TOLERANCIA.figma;

    if (m.fundo.tipo === 'solido') {
      if (!perto(aHex(m.fundo.hex), aHex(esperado), tol))
        erro(`${m.nome}, fundo ${m.fundo.hex}, e o bg/page ${m.tema} é ${esperado}`);
      else conferidas++;
    } else if (m.fundo.tipo === 'nenhum') {
      erro(`${m.nome}, sem fundo nenhum; o material precisa nascer sobre ${esperado}`);
    } else {
      // raster: só o PNG responde
      const arq = p('publico/midias', m.arquivo || `${m.nome}.png`);
      if (!existsSync(arq)) { semPng++; continue; }
      const lido = cantosDoPng(arq);
      if (!lido) { erro(`${m.nome}.png, formato que este script não lê (8 bits, RGB ou RGBA, sem entrelace)`); continue; }
      const fora = lido.cantos.filter(([, c]) => !perto(c, aHex(esperado), tol));
      if (fora.length) {
        const conta = (c) => '#' + c.map((v) => v.toString(16).padStart(2, '0')).join('').toUpperCase();
        erro(`${m.arquivo || m.nome + '.png'}, ${fora.length} de 4 cantos fora de ${esperado} ` +
             `com folga de ${tol}: ` + fora.map(([n, c]) => `${n} ${conta(c)}`).join(', '));
      } else conferidas++;
    }
  }

  if (conferidas) ok(`${conferidas} de ${midias.length} mídias sangram na página, sem moldura`);
  if (semPng)
    nota(`${semPng} com fundo em pixel e sem PNG em publico/midias/, a cor delas só se confere ali`);
  if (aindaSemNome && aindaSemNome.length)
    nota(`${aindaSemNome.length} quadro(s) solto(s) fora da convenção de nome, ainda não conferidos: ` +
         aindaSemNome.map((x) => x.nome).join(', '));
  nota(`fundos lidos do Figma em ${exportado}; reexporte se uma mídia mudar de fundo`);
  nota(`tolerância por origem: ${TOLERANCIA.figma} pontos no que vem do Figma, ${TOLERANCIA.video} no que vem de vídeo`);
  nota('  a folga maior absorve a conversão de Display P3 da gravação de tela, e segue longe dos');
  nota('  17 pontos do cinza de ferramenta, que é o defeito que esta checagem existe para pegar');
}

// ─────────────────────────────────────────────────────────────
titulo(14, 'Toda legenda diz a mesma coisa em todo lugar');

// Uma legenda vive em cinco lugares: nas quatro telas do case, dentro do Figma, e na linha
// `Legenda:` do arquivo de conteúdo. Cada um deles, sozinho, está sempre certo. O defeito
// só existe entre eles, e por isso nenhuma checagem anterior podia vê-lo: foi assim que a
// legenda do capítulo 4 ficou com dois-pontos no Figma e vírgula no conteúdo.
//
// Três afirmações, e a ordem importa: se uma lacuna nem existe em todas as telas, comparar
// texto acusaria o sintoma no lugar da causa.

const fLeg = p('docs/spec/legendas.json');
if (!existsSync(fLeg)) erro('docs/spec/legendas.json não encontrado, reexporte do Figma');
else {
  const { exportado, marcadorDeNaoEscrita, cases } = JSON.parse(readFileSync(fLeg, 'utf8'));

  let slotsOk = 0, escritas = 0, porEscrever = 0;
  for (const [arquivo, caso] of Object.entries(cases)) {
    const cam = p(arquivo);
    if (!existsSync(cam)) { erro(`${arquivo} não existe, e ${caso.slots.length} lacuna(s) apontam para ele`); continue; }

    // ── 1 · a lacuna existe nas quatro telas do case?
    const faltando = [];
    for (const s of caso.slots) {
      const ausentes = caso.telas.filter((t) => !(t in s.porTela));
      if (ausentes.length) faltando.push(`cap. ${s.capitulo}.${s.ordem} não existe em ${ausentes.join(' e ')}`);
    }
    if (faltando.length) {
      // uma tela inteira sem lacuna nenhuma é um recado, não vinte
      const vazias = caso.telas.filter((t) => !caso.slots.some((s) => t in s.porTela));
      vazias.length
        ? erro(`${arquivo}: ${vazias.join(' e ')} não tem lacuna nenhuma, e a gêmea tem ${caso.slots.length}`)
        : faltando.forEach((f) => erro(`${arquivo}: ${f}`));
      continue;
    }

    // ── 2 · a legenda é a mesma nas quatro telas?
    let divergiu = false;
    for (const s of caso.slots) {
      const vozes = [...new Set(Object.values(s.porTela))];
      if (vozes.length > 1) {
        divergiu = true;
        // mostra o ponto onde as versões se separam, não os primeiros 40 caracteres:
        // legendas de um mesmo slot costumam diferir no meio, e o começo é sempre igual
        let k = 0;
        while (vozes.every((v) => v[k] !== undefined && v[k] === vozes[0][k])) k++;
        const linhas = Object.entries(s.porTela).map(([t, v]) =>
          `        ${t.padEnd(26)} …${v.slice(Math.max(0, k - 16), k + 26)}…`);
        erro(`${arquivo}, cap. ${s.capitulo}.${s.ordem}: ${vozes.length} versões da legenda, ` +
             `divergem no caractere ${k}\n${linhas.join('\n')}`);
      }
    }
    if (divergiu) continue;

    // ── 3 · a legenda escrita bate com a linha do arquivo de conteúdo?
    const doArquivo = readFileSync(cam, 'utf8')
      .split('\n').filter((l) => l.startsWith('Legenda: ')).map((l) => l.slice('Legenda: '.length).trim());
    const doFigma = caso.slots
      .map((s) => ({ s, t: Object.values(s.porTela)[0] }))
      .filter((x) => x.t !== marcadorDeNaoEscrita);

    porEscrever += caso.slots.length - doFigma.length;

    if (doFigma.length !== doArquivo.length) {
      erro(`${arquivo}: ${doFigma.length} legenda(s) escrita(s) no Figma e ${doArquivo.length} no conteúdo`);
      continue;
    }
    let bateu = true;
    doFigma.forEach((x, i) => {
      if (x.t !== doArquivo[i]) {
        bateu = false;
        const corte = (a, b) => { let k = 0; while (k < a.length && a[k] === b[k]) k++; return k; };
        const k = corte(x.t, doArquivo[i]);
        erro(`${arquivo}, cap. ${x.s.capitulo}.${x.s.ordem}: diverge a partir do caractere ${k}\n` +
             `        figma:    …${x.t.slice(Math.max(0, k - 20), k + 30)}…\n` +
             `        conteúdo: …${doArquivo[i].slice(Math.max(0, k - 20), k + 30)}…`);
      }
    });
    if (bateu) { slotsOk += caso.slots.length; escritas += doFigma.length; }
  }

  if (slotsOk) ok(`${slotsOk} lacuna(s) conferidas: mesma legenda nas quatro telas, e ${escritas} batendo com o conteúdo`);
  if (porEscrever) nota(`${porEscrever} lacuna(s) ainda com "${marcadorDeNaoEscrita}", fora da comparação com o conteúdo`);
  nota(`legendas lidas do Figma em ${exportado}; reexporte se uma legenda mudar`);
  nota('o texto alternativo não entra aqui: ele não existe no Figma, só no arquivo de conteúdo');
}

// ─────────────────────────────────────────────────────────────
titulo('·', 'Checagens declaradas e ainda bloqueadas');

nota('Todo `figma.tela` resolve: exige um token pessoal do Figma. Sem ele, nenhum script');
nota('  fora do editor lê o arquivo. Os node-id dos contratos seguem @lacuna de qualquer forma.');
nota('Todo `Cenário:` é citado por um teste, a suíte usará `node --test testes/`, decidida');
nota('  na pesquisa da spec 001. A checagem entra quando o primeiro teste existir.');
nota('Todo `storybook.usa` existe, não se aplica: não há Storybook. Ver pergunta P17.');
nota('Todo frame bate com o token de grade do seu modo, a grade do Figma não aceita vínculo');
nota('  com variável (decisão 021), então a conferência não pode ser automática daqui.');

// ─────────────────────────────────────────────────────────────
linha();
if (falhas) {
  linha(`${falhas} checagem(ns) falharam.`);
  process.exit(1);
}
linha('Todas as checagens que podem rodar hoje passaram.');
