// O vocabulário fechado de marcadores, como está em
// docs/comportamento/conteudo/arquivo-de-texto-vira-pagina.md.
//
// Marcador fora da lista recusa a construção, nomeando arquivo, linha e marcador:
// um erro de digitação num marcador solto publicaria calado o que era para sumir.

export const BLOCOS = ['card', 'case', 'home', 'hero', 'quem-sou-eu', 'apresentacao', 'foto', 'provas', 'extra'];
export const SOLTOS = ['privado', 'só no desktop'];

export function lerMarcador(texto) {
  let m;
  if ((m = texto.match(/^bloco:\s*(.+)$/))) return { tipo: 'bloco', nome: m[1].trim() };
  if ((m = texto.match(/^trilha:\s*(.+)$/))) return { tipo: 'trilha', rotulo: m[1].trim() };
  if (SOLTOS.includes(texto.trim())) return { tipo: texto.trim() };
  return { tipo: 'desconhecido', texto };
}

export function validarMarcadores(nos, arquivo) {
  const erros = [];
  for (const no of nos) {
    if (no.tipo !== 'comentario') continue;
    const m = lerMarcador(no.texto);
    if (m.tipo === 'desconhecido') {
      erros.push(`${arquivo}:${no.linha}: marcador fora do vocabulário: <!-- ${no.texto} -->`);
    } else if (m.tipo === 'bloco' && !BLOCOS.includes(m.nome)) {
      erros.push(`${arquivo}:${no.linha}: bloco desconhecido: <!-- bloco: ${m.nome} -->`);
    }
  }
  return erros;
}
