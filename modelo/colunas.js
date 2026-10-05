// Colunas separadas (decisões 204, 207 e 208), só no desktop dos cases em que a mídia é mais
// alta que o texto. Entra na página logo depois dos capítulos e roda na hora, sem defer: assim
// as mídias ganham o lugar antes de a região ser pintada. O texto já nasce no layout certo pelo
// CSS (o <head> marca "com script"); aqui só se calcula onde cada mídia fica.
//
// O topo de cada mídia é o mais baixo entre a primeira linha do texto do capítulo e o fim da
// mídia anterior mais o respiro de capítulo. O par de telas fica o respiro depois da coluna que
// terminar por último. Se algo falhar, a página volta ao layout de cada mídia ao lado do seu
// capítulo, e nada some.
(function () {
  var main = document.querySelector('.case--colunas-separadas');
  if (!main) return;
  var colunas = main.querySelector('.case__capitulos');
  var largo = window.matchMedia('(min-width: 1024px)');

  // A conta, separada da página para poder ser testada sozinha (testes/paginas.test.mjs):
  // o topo de cada mídia, a partir da primeira linha de cada capítulo e da altura de cada mídia.
  function topos(primeirasLinhas, alturas, respiro) {
    var resultado = [];
    var fimAnterior = -Infinity;
    for (var i = 0; i < primeirasLinhas.length; i++) {
      var topo = Math.max(primeirasLinhas[i], fimAnterior + respiro);
      resultado.push(topo);
      fimAnterior = topo + alturas[i];
    }
    return resultado;
  }

  // A margem do par: o respiro depois do texto, mais o que faltar para ficar o respiro depois
  // da coluna de mídia, se ela terminar mais baixo.
  function margemDoPar(topoNatural, fimDasMidias, respiro) {
    return respiro + Math.max(0, fimDasMidias + respiro - topoNatural);
  }

  function limpar() {
    colunas.querySelectorAll('.capitulo__provas').forEach(function (p) { p.style.top = ''; });
    var par = colunas.querySelector('.capitulo__par');
    if (par) par.style.marginTop = '';
    colunas.style.paddingBottom = '';
  }

  function posicionar() {
    try {
      limpar();
      if (!largo.matches) { colunas.classList.remove('colunas-posicionadas'); return; }
      var respiro = parseFloat(getComputedStyle(colunas).getPropertyValue('--space-96'));
      var origem = colunas.getBoundingClientRect().top;
      var midias = Array.prototype.slice.call(colunas.querySelectorAll('.capitulo__provas'));
      var primeirasLinhas = midias.map(function (provas) {
        return provas.parentNode.querySelector('.capitulo__leitura').getBoundingClientRect().top - origem;
      });
      var alturas = midias.map(function (provas) { return provas.offsetHeight; });
      var calculados = topos(primeirasLinhas, alturas, respiro);
      midias.forEach(function (provas, i) { provas.style.top = calculados[i] + 'px'; });
      var ultima = midias.length - 1;
      var fimAnterior = ultima >= 0 ? calculados[ultima] + alturas[ultima] : -Infinity;
      var par = colunas.querySelector('.capitulo__par');
      if (par) {
        // O CSS já põe o respiro depois do texto; se a coluna de mídia termina mais baixo, o
        // par desce o que faltar.
        var natural = par.getBoundingClientRect().top - origem;
        par.style.marginTop = margemDoPar(natural, fimAnterior, respiro) + 'px';
      } else {
        var fimDoTexto = colunas.getBoundingClientRect().bottom - origem;
        colunas.style.paddingBottom = Math.max(0, fimAnterior - fimDoTexto) + 'px';
      }
      colunas.classList.add('colunas-posicionadas');
    } catch (erro) {
      limpar();
      main.classList.add('sem-colunas');
    }
  }

  posicionar();
  var pedido = false;
  function depois() {
    if (pedido) return;
    pedido = true;
    window.requestAnimationFrame(function () { pedido = false; posicionar(); });
  }
  window.addEventListener('resize', depois);
  largo.addEventListener('change', posicionar);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(posicionar);
  colunas.querySelectorAll('img').forEach(function (img) {
    if (!img.complete) img.addEventListener('load', posicionar);
  });
  window.addEventListener('load', posicionar);
})();
