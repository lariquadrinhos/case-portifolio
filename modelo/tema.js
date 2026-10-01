// Roda bloqueante no <head>, antes da primeira pintura: marca o tema escolhido no elemento
// raiz, para nunca haver troca visível depois que a página apareceu. Se não rodar, o CSS
// cai na preferência do sistema e todo o conteúdo continua legível (contrato tema/).
(function () {
  var raiz = document.documentElement;
  raiz.className = raiz.className.replace('sem-js', 'com-js');
  try {
    var tema = localStorage.getItem('tema');
    if (tema === 'claro' || tema === 'escuro') raiz.setAttribute('data-tema', tema);
  } catch (e) {}
})();
