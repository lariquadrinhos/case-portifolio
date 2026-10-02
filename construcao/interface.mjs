// Copy de interface (decisão 011): vive no contrato da tela que a exibe, não nos arquivos
// de conteúdo. Cada texto aqui diz de onde veio. Os que citam um contrato são conferidos
// por teste: se o contrato mudar e este arquivo não, o teste falha. Os que citam um nó do
// Figma ainda não estão escritos em contrato nenhum, e por isso aparecem no PR.

export const TEXTOS = {
  trabalhos: { texto: 'Trabalhos', fonte: 'contrato:moldura/botao-contato.md' },
  quemSouEu: { texto: 'Quem sou eu', fonte: 'contrato:moldura/botao-contato.md' },
  contato: { texto: 'Contato', fonte: 'contrato:moldura/botao-contato.md' },
  tema: { texto: 'Tema', fonte: 'contrato:moldura/botao-contato.md' },
  menu: { texto: 'Menu', fonte: 'contrato:moldura/botao-contato.md' },
  temaClaroCurto: { texto: 'Claro', fonte: 'contrato:tema/tema-claro-e-escuro.md' },
  temaEscuroCurto: { texto: 'Escuro', fonte: 'contrato:tema/tema-claro-e-escuro.md' },
  temaClaro: { texto: 'Tema claro', fonte: 'contrato:tema/tema-claro-e-escuro.md' },
  temaEscuro: { texto: 'Tema escuro', fonte: 'contrato:tema/tema-claro-e-escuro.md' },
  email: { texto: 'llquadros95@gmail.com', fonte: 'contrato:moldura/botao-contato.md' },
  linkedin: { texto: 'LinkedIn', fonte: 'contrato:moldura/botao-contato.md' },

  verTrabalhos: { texto: 'Ver os meus trabalhos', fonte: 'contrato:home/home.md' },
  tituloTrabalhos: {
    texto: 'Dois problemas que eu vi de perto, e o que fiz com eles.',
    fonte: 'contrato:trabalhos/indice-de-trabalhos.md',
  },

  vamosConversar: { texto: 'Vamos conversar?', fonte: 'contrato:case/pagina-de-case.md' },
  tudoAberto: { texto: 'Está tudo aberto.', fonte: 'contrato:case/pagina-de-case.md' },
  leiaMais: { texto: 'Leia mais sobre o produto', fonte: 'contrato:case/pagina-de-case.md' },
  falarComigo: { texto: 'Falar comigo', fonte: 'contrato:erro/endereco-inexistente.md' },
  voltarAoTopo: { texto: 'Voltar ao topo', fonte: 'contrato:moldura/voltar-ao-topo.md' },
  maisSobreMim: { texto: 'Mais sobre mim:', fonte: 'contrato:quem-sou-eu/quem-sou-eu.md' },

  erroTitulo: { texto: 'Esse endereço não leva a lugar nenhum.', fonte: 'contrato:erro/endereco-inexistente.md' },
  erroCorpo: {
    texto: 'Pode ser um link meu que envelheceu, ou um erro de digitação. De qualquer forma, o que você procurava deve estar em um desses caminhos.',
    fonte: 'contrato:erro/endereco-inexistente.md',
    // O contrato quebra o corpo em duas linhas de markdown; a conferência ignora a quebra.
  },
  erroVerTrabalhos: { texto: 'Ver os trabalhos', fonte: 'contrato:erro/endereco-inexistente.md' },
  erroVoltarHome: { texto: 'Voltar para a home', fonte: 'contrato:erro/endereco-inexistente.md' },

  // Desenhados no Figma, sem texto escrito em contrato.
  pularParaConteudo: { texto: 'Pular para o conteúdo', fonte: 'figma:273:114' },
  proximoCase: { texto: 'Próximo case', fonte: 'figma:111:99' },
  abreEmNovaAba: { texto: 'abre em nova aba', fonte: 'figma:245:243' },
  verRepositorio: { texto: 'Ver o repositório', fonte: 'figma:260:126' },
  baixarCurriculo: { texto: 'Baixar currículo em PDF', fonte: 'figma:127:38' },
  verLinkedin: { texto: 'Ver LinkedIn', fonte: 'figma:127:32' },
  faleDireto: { texto: 'Ou fale direto comigo:', fonte: 'figma:127:37' },
  posicaoNaTrilha: { texto: '{n} de {total}', fonte: 'figma:199:352' },
};

export const t = (chave) => TEXTOS[chave].texto;

// A frase da home tem quebra escolhida, não automática (contrato home/home.md): cada linha
// fecha uma unidade de sentido, e o trecho com marca-texto é de sentido, não de ritmo.
// As quebras e o trecho são os do Figma: 61:2 (desktop) e 94:22 (estreita).
// A construção confere que as linhas, juntas, são exatamente a frase do quem-sou-eu.md;
// se a frase mudar no arquivo, a quebra escolhida deixa de valer e o navegador quebra.
export const FRASE_DA_HOME = {
  marcaTexto: 'forma melhor de fazer,',
  desktop: ['Se existe uma', 'forma melhor de fazer,', 'eu quero descobrir qual é.'],
  estreita: ['Se existe uma', 'forma melhor', 'de fazer, eu quero', 'descobrir qual é.'],
};

// O trecho com marca-texto no hero de cada case. É sempre a virada da frase de abertura:
// observação, decisão, resultado. Figma 110:23 e 110:24 (Finanças) e 144:32 (Reembolso).
export const MARCA_TEXTO_DO_CASE = {
  financas: 'Decidi transformar essa cena em um aplicativo desktop.',
  reembolso: 'Decidi redesenhar o fluxo para que a segunda vez fosse diferente da primeira.',
};

// O título do case quebra onde o Figma quebra (decisão 186). Quebra escolhida só na tela
// estreita, e só onde o desenho a escolheu: Finanças em 108:22. Os outros quebram pela
// largura. A construção confere que as linhas, juntas, são o título do arquivo; se o título
// mudar, a quebra escolhida deixa de valer e o navegador quebra.
export const QUEBRA_DO_TITULO_ESTREITA = {
  financas: ['A planilha que', 'virou produto'],
};

// Cases em que a mídia é mais alta que o texto: no desktop, texto e mídia correm em colunas
// separadas, cada uma com o respiro de capítulo (case/pagina-de-case.md, decisão 204). Nos
// outros, cada mídia fica alinhada ao seu capítulo.
export const COLUNAS_SEPARADAS = ['financas'];

// A cor de cada case (design-system.md, "Papéis de acento").
export const COR_DO_CASE = { financas: 'azul', reembolso: 'laranja' };

// A ordem dos cards é fixa e declarada, nunca derivada de data (indice-de-trabalhos.md).
export const ORDEM_DOS_CASES = ['case-study-financas-pf-pj.md', 'case-study-reembolso-sulamerica.md'];

// Qual parágrafo de cada capítulo recebe o bloco de destaque é decisão de conteúdo, e
// está escrita no contrato case/pagina-de-case.md ("Os dois do case de Finanças", "Os três
// do case de Reembolso"). Aqui fica o começo de cada um, conferido contra o contrato por
// teste. Parágrafo cujo texto começa assim recebe o bloco.
export const BLOCO_DE_DESTAQUE = {
  financas: ['Conduzi o projeto inteiro com IA', 'E a documentação virou artefato de handoff'],
  reembolso: [
    'Percebi que muitas das etapas mais pesadas',
    'Separei o que acontece uma vez na vida',
    'Então reconstruí, o mais fielmente possível',
  ],
};
