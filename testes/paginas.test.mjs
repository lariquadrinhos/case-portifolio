// Cenários dos contratos que a construção consegue provar sozinha, sem navegador.
// O que depende de rolagem, foco e clique é conferido no navegador, e está dito no PR.

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { raizTemporaria, construirEm, texto, RAIZ } from './ajuda.mjs';
import { TEXTOS } from '../construcao/interface.mjs';

const site = construirEm(raizTemporaria());

// ── home/home.md ──────────────────────────────────────────────────────────────

test('Quem faz triagem abre a home', () => {
  const home = site.pagina('index.html');
  const ordem = ['Se existe uma', 'Sou curiosa', 'Larissa Quadros · UX Designer', 'Ver os meus trabalhos']
    .map((t) => texto(home).indexOf(t));
  assert.ok(ordem.every((i) => i >= 0), 'os quatro elementos aparecem');
  assert.deepEqual([...ordem].sort((a, b) => a - b), ordem, 'frase, parágrafo, identificação, ação');
  assert.equal((home.match(/class="botao"/g) ?? []).length, 1, 'não há segunda ação principal');
});

test('A pessoa segue para os trabalhos', () => {
  assert.match(site.pagina('index.html'), /<a class="botao" href="\/trabalhos\/">Ver os meus trabalhos<\/a>/);
});

test('Um dos quatro textos da home falta no arquivo', () => {
  const raiz = raizTemporaria({ 'quem-sou-eu.md': (t) => t.replace(/\nSou curiosa[^\n]*\n/, '\n') });
  assert.match(construirEm(raiz).pagina('index.html'), /FALTA · o parágrafo/);
  assert.equal(construirEm(raiz, 'publicar').ok, false);
});

// ── trabalhos/indice-de-trabalhos.md ──────────────────────────────────────────

test('A ordem dos cards', () => {
  const indice = site.pagina('trabalhos/index.html');
  assert.ok(indice.indexOf('A planilha que virou produto') < indice.indexOf('Toda semana, do zero'));
});

test('A pessoa abre um case', () => {
  const indice = site.pagina('trabalhos/index.html');
  assert.match(indice, /<a class="card cor-azul" href="\/trabalhos\/financas-pf-pj\/">/, 'o card inteiro é o link');
  assert.match(indice, /<a class="card cor-laranja" href="\/trabalhos\/reembolso-sulamerica\/">/);
});

// ── case/card-proximo-case.md ─────────────────────────────────────────────────

test('Leitor termina o case de Finanças', () => {
  const fim = site.pagina('trabalhos/financas-pf-pj/index.html').split('class="proximo"')[1];
  assert.match(fim, /class="card cor-laranja" href="\/trabalhos\/reembolso-sulamerica\/"/);
});

test('Leitor termina o case de Reembolso', () => {
  const fim = site.pagina('trabalhos/reembolso-sulamerica/index.html').split('class="proximo"')[1];
  assert.match(fim, /class="card cor-azul" href="\/trabalhos\/financas-pf-pj\/"/);
});

// ── case/pagina-de-case.md ────────────────────────────────────────────────────

test('A pessoa abre um case', () => {
  const caso = site.pagina('trabalhos/financas-pf-pj/index.html');
  const t = texto(caso);
  assert.ok(t.indexOf('A planilha que virou produto') < t.indexOf('Papel') && t.indexOf('Papel') < t.indexOf('Estive em todas'),
    'título, frase de abertura e tira aparecem antes dos capítulos');
  assert.match(caso, /aria-current="page">Trabalhos</, 'a barra marca Trabalhos como seção');
  assert.equal((caso.match(/class="marca-texto"/g) ?? []).length, 1, 'o marca-texto cobre um trecho, uma vez só');
});

test('A pessoa abre um capítulo que tem vídeo', () => {
  const caso = site.pagina('trabalhos/reembolso-sulamerica/index.html');
  const videos = caso.match(/<video[^>]+>/g) ?? [];
  assert.equal(videos.length, 2, 'uma versão por tema');
  for (const v of videos) {
    assert.match(v, /preload="none"/, 'só o pôster é baixado');
    assert.doesNotMatch(v, /autoplay/, 'o vídeo não toca sozinho');
    assert.match(v, /src="\/publico\/midias\/reembolso-5-prototipo-(claro|escuro)\.mp4"/, 'servido pelo próprio site');
  }
});

test('A pessoa vai para fora do site', () => {
  const caso = site.pagina('trabalhos/reembolso-sulamerica/index.html');
  // O endereço é conteúdo e muda; o que o contrato pede é a forma: palavra sublinhada,
  // nova aba, e o rótulo avisando.
  assert.match(caso, /href="https:\/\/www\.figma\.com\/proto\/[^"]+" target="_blank" rel="noopener">Abrir o protótipo<span class="aviso-nova-aba"> abre em nova aba<\/span>/);
});

// ── erro/endereco-inexistente.md ──────────────────────────────────────────────

test('A pessoa pede um endereço que não existe', () => {
  const erro = site.pagina('404.html');
  assert.match(erro, /<header class="barra">/, 'a barra fixa continua visível');
  assert.match(texto(erro), /Esse endereço não leva a lugar nenhum\./);
  for (const saida of ['Ver os trabalhos', 'Voltar para a home', 'Falar comigo']) assert.match(erro, new RegExp(saida));
});

test('As saídas não se disfarçam de outra coisa', () => {
  const erro = site.pagina('404.html');
  assert.doesNotMatch(erro, /aria-current="page"/, 'nenhum item da barra aparece como página atual');
  assert.doesNotMatch(erro.split('erro__saidas')[1], /class="botao"/, 'nenhuma saída é botão');
});

// ── moldura/botao-contato.md e tema/tema-claro-e-escuro.md ────────────────────

test('O leitor está na home ou na página de erro', () => {
  for (const p of ['index.html', '404.html']) {
    assert.doesNotMatch(site.pagina(p), /aria-current="page"|barra__item--atual/);
  }
});

test('O leitor está em Quem sou eu, em tela estreita', () => {
  assert.match(site.pagina('quem-sou-eu/index.html'), /class="barra__item barra__item--atual" type="button" popovertarget="menu"/);
});

test('Leitor procura como falar com ela', () => {
  const home = site.pagina('index.html');
  assert.match(home, /<div class="caixa caixa--contato" id="contato" popover>/);
  assert.match(home, /href="mailto:llquadros95@gmail\.com">llquadros95@gmail\.com</, 'o endereço aparece escrito por extenso');
});

test('O script de tema não executa', () => {
  const home = site.pagina('index.html');
  assert.match(home, /<html lang="pt-BR" class="sem-js">/, 'sem script, a página começa marcada como sem script');
  assert.match(home, /class="caixa caixa--tema so-com-js"/, 'e o controle de tema não promete o que não pode cumprir');
  const css = readFileSync(join(site.saida, 'estilo.css'), 'utf8');
  assert.match(css, /\.sem-js \.so-com-js \{ display: none !important; \}/);
  assert.match(css, /@media \(prefers-color-scheme: dark\)/, 'o CSS segue o tema do sistema');
});

// ── A copy de interface tem uma fonte só ─────────────────────────────────────

test('Todo texto de interface que cita um contrato está escrito nele', () => {
  for (const [chave, { texto: t, fonte }] of Object.entries(TEXTOS)) {
    if (!fonte.startsWith('contrato:')) continue;
    const contrato = readFileSync(join(RAIZ, 'docs/comportamento', fonte.slice('contrato:'.length)), 'utf8')
      .replace(/\s+/g, ' ');
    assert.ok(contrato.includes(t), `${chave}: "${t}" não está em ${fonte}`);
  }
});
