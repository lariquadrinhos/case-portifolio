// Peça que falta (decisão 023): visível na tela no modo local, bloqueante no modo de
// publicação. A decisão 177 pôs o site no ar no modo local por enquanto; o modo de
// publicação continua recusando.

import { escapar } from './markdown.mjs';

export function criarAusencias(modo) {
  const faltas = [];

  return {
    modo,
    faltas,
    // Devolve o marcador para pôr na página, e guarda a falta para o relatório.
    marcar(peca, onde, { classe = 'falta' } = {}) {
      faltas.push({ peca, onde });
      return `<span class="${classe}">FALTA · ${escapar(peca)}</span>`;
    },
    // A mesma peça aparece em toda página que a usa (o contato está em todas): o
    // relatório lista cada uma uma vez.
    unicas() {
      return [...new Map(faltas.map((f) => [`${f.onde}|${f.peca}`, f])).values()];
    },
    relatorio() {
      return this.unicas().map((f) => `  · ${f.onde}: ${f.peca}`).join('\n');
    },
  };
}
