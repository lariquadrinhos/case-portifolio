// Mídia de prova: uma declaração no arquivo de conteúdo, dois arquivos no disco.
//
// O conteúdo cita o nome sem sufixo (reembolso-2-diagnostico.png) e a construção escolhe
// as versões `-claro` e `-escuro`. Vídeo traz também o pôster de cada tema,
// `<nome>-<tema>-poster.png`, que é um quadro do próprio vídeo.

import { existsSync, readFileSync } from 'node:fs';

const TEMAS = ['claro', 'escuro'];

// Largura e altura em pixels, lidas do cabeçalho do arquivo. Servem para o navegador
// reservar o espaço antes de a imagem chegar: nada se desloca quando ela carrega.
export function dimensoes(caminho) {
  const b = readFileSync(caminho);
  if (b.toString('ascii', 1, 4) === 'PNG') {
    return { largura: b.readUInt32BE(16), altura: b.readUInt32BE(20) };
  }
  if (b[0] === 0xff && b[1] === 0xd8) {
    let i = 2;
    while (i < b.length) {
      if (b[i] !== 0xff) { i++; continue; }
      const marca = b[i + 1];
      const tamanho = b.readUInt16BE(i + 2);
      if (marca >= 0xc0 && marca <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marca)) {
        return { altura: b.readUInt16BE(i + 5), largura: b.readUInt16BE(i + 7) };
      }
      i += 2 + tamanho;
    }
  }
  return null;
}

// Devolve as versões que existem: [{ tema, arquivo, poster? }]. Lista vazia é falta.
export function resolverMidia(raiz, caminho) {
  const m = caminho.match(/^(.*)\.(\w+)$/);
  if (!m) return [];
  const [, base, ext] = m;
  const versoes = [];
  for (const tema of TEMAS) {
    const arquivo = `${base}-${tema}.${ext}`;
    if (!existsSync(`${raiz}/${arquivo}`)) continue;
    const versao = { tema, arquivo };
    if (ext === 'mp4') {
      const poster = `${base}-${tema}-poster.png`;
      if (existsSync(`${raiz}/${poster}`)) versao.poster = poster;
    }
    versoes.push(versao);
  }
  if (!versoes.length && existsSync(`${raiz}/${caminho}`)) versoes.push({ tema: null, arquivo: caminho });
  return versoes;
}

// A capa do card: uma versão só, salvo quando o produto retratado tem tema próprio
// (decisões 174 e 175). `<prefixo>-capa.jpg`, ou `<prefixo>-capa-<tema>.jpg`.
export function resolverCapa(raiz, prefixo) {
  return resolverMidia(raiz, `publico/midias/${prefixo}-capa.jpg`);
}
