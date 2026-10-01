// Cenários dos contratos que a construção consegue provar sozinha, sem navegador.
// O que depende de rolagem, foco e clique é conferido no navegador, e está dito no PR.

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync, statSync } from 'node:fs';
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
  // nova aba, e o rótulo avisando. E o protótipo abre no fluxo do app (decisão 185): sem
  // ponto de partida, o Figma abre outro fluxo do arquivo. O nó em si não é fixado aqui.
  const prototipos = [...caso.matchAll(/href="(https:\/\/www\.figma\.com\/proto\/[^"]+)" target="_blank" rel="noopener">Abrir o protótipo<span class="aviso-nova-aba"> abre em nova aba<\/span>/g)];
  assert.ok(prototipos.length >= 1, 'o link do protótipo é palavra sublinhada que abre em nova aba');
  for (const [, url] of prototipos) assert.match(url, /starting-point-node-id=/, `sem ponto de partida: ${url}`);
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

// ── Ícone de aba (decisão 187) ────────────────────────────────────────────────

test('Toda página declara o ícone de aba', () => {
  // Sem declaração, o navegador pede /favicon.ico na raiz do domínio, fora do site.
  for (const p of ['index.html', 'trabalhos/index.html', 'trabalhos/financas-pf-pj/index.html',
    'trabalhos/reembolso-sulamerica/index.html', 'quem-sou-eu/index.html', '404.html']) {
    const html = site.pagina(p);
    for (const arquivo of ['favicon.ico', 'icone.svg', 'apple-touch-icon.png']) {
      assert.match(html, new RegExp(`href="/publico/icone/${arquivo.replace('.', '\\.')}"`), `${p} sem ${arquivo}`);
    }
  }
});

test('O manifesto nomeia o site e os ícones', () => {
  const m = JSON.parse(readFileSync(join(site.saida, 'manifest.webmanifest'), 'utf8'));
  assert.equal(m.name, 'Larissa Quadros', 'o nome vem de quem-sou-eu.md');
  assert.equal(m.short_name, 'Larissa', 'o nome curto é o da barra');
  assert.equal(m.background_color, '#F4EFE4', 'o fundo claro da página, de tokens.json');
  assert.deepEqual(m.icons.map((i) => i.sizes), ['192x192', '512x512', 'any']);
  assert.match(site.pagina('404.html'), /<link rel="manifest" href="\/manifest\.webmanifest">/);
});

test('Todo endereço local de toda página existe no site', () => {
  // Declarar um arquivo que não foi publicado é 404 calado: o ícone, uma mídia, uma página.
  const PAGINAS = ['index.html', 'trabalhos/index.html', 'trabalhos/financas-pf-pj/index.html',
    'trabalhos/reembolso-sulamerica/index.html', 'quem-sou-eu/index.html', '404.html'];
  const existe = (caminho) => {
    const alvo = join(site.saida, caminho.split('#')[0]);
    return existsSync(alvo) && (!statSync(alvo).isDirectory() || existsSync(join(alvo, 'index.html')));
  };
  for (const p of PAGINAS) {
    for (const [, url] of site.pagina(p).matchAll(/(?:href|src|poster)="(\/[^"]*)"/g)) {
      assert.ok(existe(url), `${p} aponta para ${url}, que não está no site`);
    }
  }
  const manifesto = JSON.parse(readFileSync(join(site.saida, 'manifest.webmanifest'), 'utf8'));
  for (const icone of manifesto.icons) {
    assert.ok(existsSync(join(site.saida, icone.src)), `o manifesto aponta para ${icone.src}, que não está no site`);
  }
});

test('O ícone da tela de início não tem transparência', () => {
  // O iOS pinta de preto o que é transparente (decisão 188). No PNG, o byte 25 é o tipo de
  // cor do cabeçalho: 2 é RGB, 6 é RGBA.
  const png = readFileSync(join(site.saida, 'publico/icone/apple-touch-icon.png'));
  assert.equal(png[25], 2, `tipo de cor ${png[25]}: o ícone tem canal de transparência`);
});

test('O vídeo ocupa a coluna na proporção dele, e só o vídeo em pé tem área fixa', () => {
  // O deitado do Finanças é 411x344 como no Figma (decisão 189); o em pé do Reembolso vive
  // numa área fixa com o pôster contido (379:454).
  const videos = (p) => site.pagina(p).match(/<video class="[^"]*"/g) ?? [];
  const fin = videos('trabalhos/financas-pf-pj/index.html');
  const ree = videos('trabalhos/reembolso-sulamerica/index.html');
  assert.equal(fin.length, 2, 'o vídeo do Finanças tem as duas versões de tema');
  for (const v of fin) assert.doesNotMatch(v, /prova__video--retrato/, `deitado com área fixa: ${v}`);
  for (const v of ree) assert.match(v, /prova__video--retrato/, `em pé sem área fixa: ${v}`);
  const { base } = regrasPorLargura(readFileSync(join(site.saida, 'estilo.css'), 'utf8'));
  assert.doesNotMatch(base['.prova__video'] ?? '', /aspect-ratio/, 'todo vídeo com proporção fixa');
  assert.match(base['.prova__video--retrato'] ?? '', /aspect-ratio/, 'o vídeo em pé sem a área fixa');
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

test('O título do case quebra onde o Figma quebra', () => {
  const fin = site.pagina('trabalhos/financas-pf-pj/index.html');
  assert.match(fin, /<h1 class="case__titulo"><span class="linha-estreita">A planilha que<\/span> <span class="linha-estreita">virou produto<\/span><\/h1>/,
    'Finanças: quebra escolhida');
  assert.match(site.pagina('trabalhos/reembolso-sulamerica/index.html'), /<h1 class="case__titulo">Toda semana, do zero<\/h1>/,
    'Reembolso: quebra natural');
  // A quebra só existe se o CSS a desenha: cada linha é bloco na tela estreita e volta a
  // correr numa linha no desktop. Sem isso o HTML estaria certo e a tela, não.
  const css = readFileSync(join(site.saida, 'estilo.css'), 'utf8');
  const { base, largo } = regrasPorLargura(css);
  assert.match(base['.case__titulo .linha-estreita'] ?? '', /display:\s*block/, 'na tela estreita cada linha é bloco');
  assert.match(largo['.case__titulo .linha-estreita'] ?? '', /display:\s*inline/, 'no desktop o título corre numa linha');
  const mudou = raizTemporaria({ 'case-study-financas-pf-pj.md': (t) => t.replace('# A planilha que virou produto\n\n**Vi', '# A planilha virou produto\n\n**Vi') });
  assert.match(construirEm(mudou).pagina('trabalhos/financas-pf-pj/index.html'), /<h1 class="case__titulo">A planilha virou produto<\/h1>/,
    'se o título muda no arquivo, a quebra escolhida deixa de valer');
});

// Lê o CSS gerado contando chaves: as regras de fora de qualquer @media (a tela estreita, que
// é a base) e as de dentro de `@media (min-width: 1024px)`. Seletor repetido acumula.
function regrasPorLargura(css) {
  const base = {};
  const largo = {};
  const semComentarios = css.replace(/\/\*[\s\S]*?\*\//g, '');
  let i = 0;
  const lerBloco = (destino, fim) => {
    while (i < fim) {
      const abre = semComentarios.indexOf('{', i);
      if (abre < 0 || abre >= fim) break;
      const seletor = semComentarios.slice(i, abre).trim();
      let profundidade = 1;
      let j = abre + 1;
      while (profundidade && j < semComentarios.length) {
        if (semComentarios[j] === '{') profundidade++;
        else if (semComentarios[j] === '}') profundidade--;
        j++;
      }
      const corpo = semComentarios.slice(abre + 1, j - 1);
      if (seletor.startsWith('@media')) {
        if (/^@media \(min-width: 1024px\)$/.test(seletor)) {
          const salvo = i;
          i = abre + 1;
          lerBloco(largo, j - 1);
          i = salvo;
        }
      } else if (destino) {
        for (const sel of seletor.split(',').map((x) => x.trim())) destino[sel] = (destino[sel] ?? '') + corpo;
      }
      i = j;
    }
  };
  lerBloco(base, semComentarios.length);
  return { base, largo };
}
