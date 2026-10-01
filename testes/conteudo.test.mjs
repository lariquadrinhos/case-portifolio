// Contrato conteudo/arquivo-de-texto-vira-pagina.md. Cada teste tem o nome do cenário.

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { cpSync } from 'node:fs';
import { raizTemporaria, construirEm, texto } from './ajuda.mjs';

const FINANCAS = 'case-study-financas-pf-pj.md';
const REEMBOLSO = 'case-study-reembolso-sulamerica.md';

test('Construir a página de um case', () => {
  const { pagina } = construirEm(raizTemporaria());
  const indice = pagina('trabalhos/index.html');
  assert.match(indice, /A planilha que virou produto/, 'o bloco do card vira o card no índice');

  const caso = pagina('trabalhos/financas-pf-pj/index.html');
  const rotulos = [...caso.matchAll(/class="trilha__rotulo">([^<]+)</g)].map((m) => m[1]);
  assert.deepEqual(rotulos,
    ['Introdução', 'Descoberta', 'Desenho e documentação', 'Design system', 'Desenvolvimento', 'Resultados'],
    'a trilha lista os rótulos na ordem em que aparecem no arquivo');
  assert.equal((caso.match(/<section class="capitulo"/g) ?? []).length, 6, 'cada título com marcador vira capítulo');
});

test('Título sem marcador de trilha', () => {
  const { pagina } = construirEm(raizTemporaria());
  const caso = pagina('trabalhos/reembolso-sulamerica/index.html');
  assert.match(caso, /<h4 class="subtitulo">O achado que mudou meu diagnóstico<\/h4>/,
    'aparece como subseção dentro do capítulo corrente');
  assert.doesNotMatch(caso, /trilha__rotulo">O achado/, 'e não aparece na trilha');
});

test('Seção marcada como privada', () => {
  const { pagina } = construirEm(raizTemporaria());
  const caso = pagina('trabalhos/reembolso-sulamerica/index.html');
  assert.doesNotMatch(caso, /Notas de trabalho/, 'nada daquela seção aparece no site');
  assert.doesNotMatch(caso, /Linha editorial/);
});

test('Seção de material de origem', () => {
  const raiz = raizTemporaria({
    [FINANCAS]: (t) => t.replace('<!-- bloco: provas -->',
      '<!-- privado -->\n## Material das legendas\n\nTexto que só alimenta as legendas.\n\n<!-- bloco: provas -->'),
  });
  const { pagina } = construirEm(raiz);
  assert.doesNotMatch(pagina('trabalhos/financas-pf-pj/index.html'), /Material das legendas|só alimenta/);
});

test('Imagem de prova com legenda', () => {
  const { pagina } = construirEm(raizTemporaria());
  const caso = pagina('trabalhos/reembolso-sulamerica/index.html');
  assert.match(caso, /alt="Quatro anotações sobre capturas do aplicativo/, 'o texto alternativo é preservado');
  assert.match(caso, /<figcaption class="prova__legenda">Quatro das dezoito etapas do fluxo atual/, 'a imagem aparece com sua legenda');
  assert.match(caso, /reembolso-2-diagnostico-claro\.png/, 'a versão clara é servida');
  assert.match(caso, /reembolso-2-diagnostico-escuro\.png/, 'a versão escura é servida');
});

test('Imagem de prova sem legenda', () => {
  const raiz = raizTemporaria({
    [REEMBOLSO]: (t) => t.replace(/\nLegenda: Quatro das dezoito etapas[^\n]*/, ''),
  });
  const { pagina } = construirEm(raiz);
  const caso = pagina('trabalhos/reembolso-sulamerica/index.html');
  assert.doesNotMatch(caso, /reembolso-2-diagnostico-claro\.png/, 'ela não é publicada');
  assert.match(caso, /FALTA · a legenda de publico\/midias\/reembolso-2-diagnostico\.png/);
});

test('A foto da página', () => {
  const { pagina } = construirEm(raizTemporaria());
  const quem = pagina('quem-sou-eu/index.html');
  assert.match(quem, /<div class="quem__foto"><img class="quem__foto-img" src="\/publico\/larissa\.jpg" alt="Larissa Quadros"/,
    'é tratada como foto da página, e o texto alternativo é preservado');
  assert.doesNotMatch(quem, /class="prova"/, 'não como imagem de texto corrido');
});

test('A foto é trocada', () => {
  const raiz = raizTemporaria({ 'quem-sou-eu.md': (t) => t.replace('publico/larissa.jpg', 'publico/outra.jpg') });
  cpSync(`${raiz}/publico/larissa.jpg`, `${raiz}/publico/outra.jpg`);
  assert.match(construirEm(raiz).pagina('quem-sou-eu/index.html'), /src="\/publico\/outra\.jpg"/,
    'a página mostra a nova foto, sem nenhum código alterado');
});

test('A foto da página não exige legenda', () => {
  const raiz = raizTemporaria();
  const { pagina } = construirEm(raiz);
  const quem = pagina('quem-sou-eu/index.html');
  assert.match(quem, /<img class="quem__foto-img" src="\/publico\/larissa\.jpg" alt="Larissa Quadros"/,
    'ela aparece sem exigir legenda, e o texto alternativo continua');
  assert.doesNotMatch(quem, /FALTA · a foto/);
});

test('Uma peça esperada não está no arquivo', () => {
  const raiz = raizTemporaria({
    'quem-sou-eu.md': (t) => t.replace('**Cargo:** UX Designer\n', ''),
  });
  const local = construirEm(raiz, 'local');
  assert.equal(local.ok, true);
  assert.match(local.pagina('index.html'), /FALTA · o cargo/, 'localmente a falta fica visível, nomeando a peça');

  const publicacao = construirEm(raiz, 'publicar');
  assert.equal(publicacao.ok, false, 'no caminho de publicação a construção recusa');
});

test('Marcador fora do vocabulário recusa a construção', () => {
  const raiz = raizTemporaria({
    [FINANCAS]: (t) => t.replace('<!-- bloco: extra -->', '<!-- privada -->\n<!-- bloco: extra -->'),
  });
  assert.throws(() => construirEm(raiz), /marcador fora do vocabulário: <!-- privada -->/);
});

test('Prova com endereço vazio é prova que falta', () => {
  const { pagina } = construirEm(raizTemporaria());
  const caso = pagina('trabalhos/reembolso-sulamerica/index.html');
  assert.match(caso, /FALTA · o endereço de &quot;Ver o repositório&quot;/);
  assert.match(caso, /href="https:\/\/www\.figma\.com\/board\/lCpgyPMBg7BXj0DxgiOUh1"/, 'a prova com endereço vira link');
  assert.match(texto(caso), /Ver o board no FigJam abre em nova aba/, 'o rótulo avisa que abre em nova aba');
});
