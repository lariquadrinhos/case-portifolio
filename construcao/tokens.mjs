// Gera as custom properties a partir de docs/spec/tokens.json.
//
// O nome é preservado: `/` vira `-` e nada mais muda (bg/page → --bg-page).
// O modo nunca entra no nome: Cor vira um bloco por tema, Tipografia e Grade um
// bloco por largura. É isso que permite escrever var(--bg-page) uma vez só.

import { readFileSync } from 'node:fs';

// A largura a partir da qual vale o modo Desktop. As telas foram desenhadas em 1440 e
// 375; o ponto de troca entre as duas não foi decidido. Ver o PR e perguntas-em-aberto.
export const QUEBRA_DESKTOP = 1024;

const nomeCss = (nome) => `--${nome.replaceAll('/', '-')}`;

function valorCss(colecao, nome, valor) {
  if (typeof valor === 'string' && valor.startsWith('→')) {
    return `var(${nomeCss(valor.replace('→', '').trim())})`;
  }
  if (nome === 'family') return `"${valor}"`;
  if (typeof valor === 'number') {
    // `colunas` é contagem, não medida.
    return colecao === 'Grade' && nome === 'colunas' ? String(valor) : `${valor}px`;
  }
  return valor;
}

function bloco(colecao, variaveis, modo) {
  return Object.entries(variaveis)
    .map(([nome, modos]) => `  ${nomeCss(nome)}: ${valorCss(colecao, nome, modos[modo])};`)
    .join('\n');
}

export function lerTokens(caminho) {
  return JSON.parse(readFileSync(caminho, 'utf8'));
}

export function gerarCssDeTokens(tokens) {
  const { Cor, Tipografia, Grade } = tokens.colecoes;
  const espaco = tokens.colecoes['Espaço e forma'];

  const claro = bloco('Cor', Cor.variaveis, 'Claro');
  const escuro = bloco('Cor', Cor.variaveis, 'Escuro');

  return `/* GERADO de docs/spec/tokens.json (exportado em ${tokens.exportado}). Não editar à mão. */

:root {
${bloco('Espaço e forma', espaco.variaveis, 'Padrão')}
${bloco('Tipografia', Tipografia.variaveis, 'Tela pequena')}
${bloco('Grade', Grade.variaveis, 'Tela pequena')}
}

@media (min-width: ${QUEBRA_DESKTOP}px) {
  :root {
${bloco('Tipografia', Tipografia.variaveis, 'Desktop').replaceAll('\n  ', '\n    ').replace(/^  /, '    ')}
${bloco('Grade', Grade.variaveis, 'Desktop').replaceAll('\n  ', '\n    ').replace(/^  /, '    ')}
  }
}

/* Tema. Sem escolha salva, segue o sistema; com escolha, data-tema manda. */
:root,
:root[data-tema="claro"] {
  color-scheme: light;
${claro}
}

@media (prefers-color-scheme: dark) {
  :root:not([data-tema="claro"]) {
    color-scheme: dark;
${escuro.replaceAll('\n  ', '\n    ').replace(/^  /, '    ')}
  }
}

:root[data-tema="escuro"] {
  color-scheme: dark;
${escuro}
}
`;
}
