// O subconjunto de markdown que os três arquivos de conteúdo usam, e nada além.
// Medido na pesquisa da spec 001: títulos de 1 a 3, negrito, itálico, tabela, lista,
// régua, parágrafo e imagem. Mais duas convenções do projeto: a linha `Legenda:` e a
// linha `Convite:` logo abaixo de uma imagem, e o comentário HTML como marcador.

const RE_TITULO = /^(#{1,6})\s+(.*)$/;
const RE_COMENTARIO = /^<!--\s*(.*?)\s*-->$/;
const RE_IMAGEM = /^!\[([^\]]*)\]\(([^)\s]+)\)\s*$/;
const RE_ITEM = /^(?:([-*])|(\d+)\.)\s+(.*)$/;
const RE_REGUA = /^(?:-{3,}|\*{3,})$/;

// Cada nó guarda a linha de origem, para que todo erro diga arquivo e linha.
export function lerBlocos(texto) {
  const linhas = texto.replace(/\r\n?/g, '\n').split('\n');
  const nos = [];
  let i = 0;

  while (i < linhas.length) {
    const bruta = linhas[i];
    const linha = bruta.trim();
    const n = i + 1;

    if (linha === '') { i++; continue; }

    let m;
    if ((m = linha.match(RE_COMENTARIO))) {
      nos.push({ tipo: 'comentario', texto: m[1], linha: n });
      i++; continue;
    }
    if (RE_REGUA.test(linha)) {
      nos.push({ tipo: 'regua', linha: n });
      i++; continue;
    }
    if ((m = linha.match(RE_TITULO))) {
      nos.push({ tipo: 'titulo', nivel: m[1].length, texto: m[2].trim(), linha: n });
      i++; continue;
    }
    if ((m = linha.match(RE_IMAGEM))) {
      const no = { tipo: 'imagem', alt: m[1], caminho: m[2], legenda: null, convite: null, linha: n };
      i++;
      if (i < linhas.length && linhas[i].trim().startsWith('Legenda:')) {
        no.legenda = linhas[i].trim().slice('Legenda:'.length).trim();
        i++;
        if (i < linhas.length && linhas[i].trim().startsWith('Convite:')) {
          no.convite = linhas[i].trim().slice('Convite:'.length).trim();
          i++;
        }
      }
      nos.push(no);
      continue;
    }
    if (linha.startsWith('|')) {
      const tabela = [];
      while (i < linhas.length && linhas[i].trim().startsWith('|')) {
        tabela.push(linhas[i].trim());
        i++;
      }
      nos.push(lerTabela(tabela, n));
      continue;
    }
    if ((m = linha.match(RE_ITEM))) {
      const ordenada = Boolean(m[2]);
      const itens = [];
      while (i < linhas.length) {
        const atual = linhas[i];
        const t = atual.trim();
        const item = t.match(RE_ITEM);
        if (item && Boolean(item[2]) === ordenada) {
          itens.push(item[3]);
          i++;
        } else if (t !== '' && /^\s+/.test(atual) && itens.length && !RE_TITULO.test(t)) {
          // Continuação de item: linha recuada, sem marcador.
          itens[itens.length - 1] += ' ' + t;
          i++;
        } else break;
      }
      nos.push({ tipo: 'lista', ordenada, itens, linha: n });
      continue;
    }

    // Parágrafo: linhas seguidas até uma linha em branco ou um começo de outro bloco.
    const partes = [];
    while (i < linhas.length) {
      const t = linhas[i].trim();
      if (t === '' || RE_COMENTARIO.test(t) || RE_TITULO.test(t) || RE_IMAGEM.test(t)
        || t.startsWith('|') || RE_REGUA.test(t) || (partes.length && RE_ITEM.test(t))) break;
      partes.push(t);
      i++;
    }
    nos.push({ tipo: 'paragrafo', linhas: partes, texto: partes.join(' '), linha: n });
  }
  return nos;
}

function celulas(linha) {
  return linha.replace(/^\|/, '').replace(/\|$/, '').split('|').map((c) => c.trim());
}

function lerTabela(linhas, n) {
  const [cabecalho, separador, ...corpo] = linhas;
  if (!separador || !/^\|?\s*:?-{3,}/.test(separador)) {
    throw new Error(`linha ${n}: tabela sem a linha separadora logo abaixo do cabeçalho`);
  }
  return { tipo: 'tabela', cabecalho: celulas(cabecalho), linhas: corpo.map(celulas), linha: n };
}

export function escapar(texto) {
  return texto.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

// Inline: negrito, itálico e link. `[texto]` sem endereço é link que ainda não existe, e
// quem decide o que fazer com ele é quem chama (`aoFaltarLink`).
export function inline(texto, { aoFaltarLink } = {}) {
  let html = escapar(texto);
  html = html.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, rotulo, url) =>
    `<a href="${url}" target="_blank" rel="noopener">${rotulo}</a>`);
  html = html.replace(/\[([^\]]+)\](?!\()/g, (_, rotulo) =>
    aoFaltarLink ? aoFaltarLink(rotulo) : `[${rotulo}]`);
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/(^|[^*])\*(?!\s)(.+?)\*(?!\*)/g, '$1<em>$2</em>');
  return html;
}

// Parágrafo inteiro em negrito: é a frase que abre um trecho, não ênfase dentro de frase.
export function ehFraseInteiraEmNegrito(texto) {
  return /^\*\*[^*]+\*\*$/.test(texto.trim());
}

export function semNegrito(texto) {
  return texto.trim().replace(/^\*\*/, '').replace(/\*\*$/, '');
}
