#!/usr/bin/env node
// Pré-visualização local de site/, sem dependência. Endereço que não existe recebe o
// 404.html, como no GitHub Pages.

import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { join, extname, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const SITE = fileURLToPath(new URL('../site/', import.meta.url));
const PORTA = Number(process.env.PORTA ?? 8080);
const TIPOS = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.mp4': 'video/mp4', '.woff2': 'font/woff2', '.pdf': 'application/pdf', '.webmanifest': 'application/manifest+json', '.svg': 'image/svg+xml', '.ico': 'image/x-icon', '.txt': 'text/plain',
};

createServer(async (pedido, resposta) => {
  let caminho = normalize(decodeURIComponent(new URL(pedido.url, 'http://x').pathname));
  if (caminho.includes('..')) caminho = '/';
  let arquivo = join(SITE, caminho);
  try {
    if ((await stat(arquivo)).isDirectory()) arquivo = join(arquivo, 'index.html');
    const corpo = await readFile(arquivo);
    resposta.writeHead(200, { 'Content-Type': TIPOS[extname(arquivo)] ?? 'application/octet-stream' });
    resposta.end(corpo);
  } catch {
    resposta.writeHead(404, { 'Content-Type': TIPOS['.html'] });
    resposta.end(await readFile(join(SITE, '404.html')));
  }
}).listen(PORTA, () => console.log(`site/ em http://localhost:${PORTA}`));
