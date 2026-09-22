---
fluxo: case/pagina-de-case
dominio: case
dono: design
status: rascunho
atualizado: 2026-09-21

figma:
  file: hwClE9Xpm51OW4vPsCCn8J
  pagina: "56:2"
  tela: "106:22 (Finanças) · 108:22 (Finanças, estreita)"
  tela2: "144:32 (Reembolso) · 148:37 (Reembolso, estreita)"
---

# Página de case

Leitura longa. É o coração do site: o portfólio existe para mostrar os cases, e **são eles
que mostram como ela trabalha** — a forma de conduzir o processo aparece dentro de cada
etapa, como evidência, não como declaração à parte.

## Regras

- A página abre com **título do case, frase de abertura e tira de destaques**, nessa ordem,
  antes de qualquer capítulo.
- **A tira de destaques é o elemento mais escaneável da página** e, para quem faz triagem
  rápida, pode ser o mais útil da tela inteira. Traz papel, método ou escopo, entregas,
  status e repositório. Em tela estreita, empilha.
- O marca-texto cobre um trecho da hero, **uma vez por página** — título **ou** frase de
  abertura. Neste case ele cobre *"Decidi transformar essa cena em um aplicativo desktop."*,
  que é a virada da frase: observação, **decisão**, resultado.
- Quando o trecho destacado atravessa mais de uma linha, **a faixa acompanha a quebra**,
  uma por linha, e não se escolhe a quebra em função dela — parágrafo reflui, título não.
- **O título fica junto do texto, acima dele.** O que fica ao lado é **a mídia que prova a
  afirmação daquele capítulo**. Na leitura: trilha nas colunas 1 e 2, título e texto nas
  3 a 8, mídia nas 9 a 12.
- **A mídia alinha com o texto, não com o título.** O topo dela acompanha a primeira linha
  do texto do capítulo — se o título quebrar em duas linhas, a mídia desce junto. O título
  pertence ao texto; a mídia é prova do que o texto afirma, e começa onde a afirmação começa.
- **Cada capítulo tem a sua prova ao lado**, com legenda abaixo dela.
- **Vídeo não é pré-carregado e não toca sozinho.** Até a pessoa pedir, baixa zero byte; o
  que carrega é a imagem de pôster, que segue as mesmas regras de qualquer imagem.
- **A imagem de pôster é um quadro do próprio vídeo.** Se for outra imagem, há salto visual
  no momento em que ele toca, e o vídeo parece quebrado.
- **A legenda do vídeo descreve o que acontece nele**, não comenta. Vídeo sem áudio exige
  alternativa em texto: para quem não consegue vê-lo, a legenda é o conteúdo. "O produto em
  uso" não cumpre; dizer o que a pessoa faz na tela, cumpre.
- **Vídeo é servido pelo próprio site, nunca incorporado de terceiro.** Incorporar do
  YouTube ou Vimeo traz script e cookie de rastreamento, e reintroduz o aviso de
  consentimento que a decisão de não medir existiu para evitar. Imagem que não prova
  nada vira galeria, e galeria ninguém olha.
- **O texto corrido ocupa seis colunas, não cinco.** Cinco dariam 61 caracteres por linha,
  abaixo do mínimo de 65 — e a regra da medida governa a largura da coluna, não o contrário.
  Ver decisão 042.
- **Em tela estreita a mídia desce para baixo do texto**, em vez de ficar ao lado: a largura
  não comporta duas faixas. A regra da mídia ao lado vale onde há grade para ela.
- **O link usa a cor do texto, não a de estado.** O sublinhado dele e o sublinhado da página
  atual na barra têm a mesma forma; a cor é o que os separa. Ver decisão 088.
- **Saída para fora do site é link, não botão.** Botão promete ação dentro do site; palavra
  sublinhada promete ir embora. O botão do fim do case é **preenchido**, como o da home — o
  site não tem botão secundário, então não há contorno marcando hierarquia. O rótulo avisa que abre em nova aba.
- Cada link externo vem **precedido de um convite** que diz o que a pessoa vai encontrar lá.
- **Protótipo só onde existe.** Reembolso tem; Finanças não tem e não terá — nele o link
  verificável é o repositório.
- Ao fim da página vêm o card do próximo case e o convite ao contato.
- A barra marca **Trabalhos** como seção, porque um case pertence a Trabalhos.

## Peças

| Nome no cenário | Figma | Storybook |
|---|---|---|
| hero do case | `106:32` | não se aplica |
| tira de destaques | `106:36` | não se aplica |
| capítulo | `107:36` | não se aplica |
| marca-texto | `110:23`, `110:24` | não se aplica |
| página em tela estreita | `108:22` | não se aplica |
| convite ao repositório | `114:27` | não se aplica |
| convite ao repositório · estreita | `115:76` | não se aplica |
| página do segundo case | `144:32` | não se aplica |
| página do segundo case · estreita | `148:37` | não se aplica |
| tabela de comparação | dentro de `144:32` | não se aplica |

## O bloco de destaque

- **É um parágrafo inteiro sobre fundo pálido da cor do case**, e serve para **dar respiro
  numa leitura longa**. Não marca importância: marca ritmo. Uma por capítulo, no máximo, e
  zero é permitido.
- **Mesmo corpo e mesmo peso da prosa em volta.** Se o texto mudasse de tamanho ou de peso, o
  bloco passaria a dizer "isto é mais importante", que é outra coisa.
- **Não usar nas frases curtas em peso forte.** Elas já estão marcadas, e pôr fundo atrás de
  uma linha só faz uma etiqueta, não um respiro.
- **Não usar em lista.** Lista já tem ritmo próprio; o fundo compete com ele.
- **O texto dentro do bloco tem a mesma medida da prosa em volta.** Um respiro que aperta a
  linha é contraditório — ele existe para o olho descansar, não para a linha quebrar mais
  vezes.
- **Em tela estreita, o bloco sangra até as bordas.** A cor vai de ponta a ponta e o respiro
  do bloco ocupa o lugar da margem da página, então o texto fica em 327, igual ao resto. No
  desktop ele fica na coluna de leitura: o respiro de 32 deixa a linha em 66 caracteres, que
  continua dentro da faixa.

### Os três do case de Reembolso

| Capítulo | Parágrafo | Quanto do capítulo |
|---|---|---|
| 1 · Introdução | nenhum — tem um parágrafo só, e colorir seria colorir o capítulo | — |
| 2 · Diagnóstico | *"Percebi que muitas das etapas mais pesadas…"* | 33% |
| 3 · Novo fluxo | *"Separei o que acontece uma vez na vida…"* | 14% |
| 4 · Wireframes e interface | *"Então reconstruí, o mais fielmente possível…"* | 25% |
| 5 · Resultados | nenhum — só tem listas | — |

Três em cinco capítulos, e espaçados: 2, 3, 4. O respiro se distribui pela leitura em vez de
se concentrar num ponto.

## Tabelas dentro do case

- **Tabela ocupa a largura inteira do conteúdo, não a coluna de leitura.** A regra da medida
  governa prosa; tabela é dado, e o que governa é a comparação ficar legível lado a lado.
- **Em tela estreita a tabela rola na horizontal**, dentro da própria janela, e a página não
  rola junto. Empilhar as linhas destruiria a comparação, que é a única razão de a tabela
  existir.
- **A rolagem é avisada em palavras** logo abaixo. Sem aviso, quem não arrasta nunca descobre
  que existe uma coluna à direita.

## Comportamento

```gherkin
# language: pt
Funcionalidade: Página de case

  Cenário: A pessoa abre um case
    Quando a página abre
    Então o título, a frase de abertura e a tira de destaques aparecem antes dos capítulos
    E a barra marca "Trabalhos" como seção
    E o marca-texto cobre um trecho da hero, uma vez só

  Cenário: O trecho destacado atravessa mais de uma linha
    Dado que o trecho destacado está no meio de um parágrafo
    Quando a página é montada
    Então a faixa acompanha a quebra de linha, uma por linha atravessada
    E a quebra do parágrafo não é alterada para acomodar a faixa

  Cenário: A pessoa lê um capítulo em desktop
    Dado que a página está aberta em tela larga
    Quando um capítulo aparece
    Então o título dele fica acima do texto a que pertence
    E o texto corrido ocupa seis colunas
    E a mídia que prova aquele capítulo fica ao lado, com legenda abaixo
    E o topo da mídia alinha com a primeira linha do texto, não com o título

  Cenário: A pessoa vai para fora do site
    Dado que o case tem link externo
    Quando ela chega ao fim da leitura
    Então um convite diz o que ela vai encontrar
    E o endereço aparece como palavra sublinhada, não como botão
    E o rótulo avisa que abre em nova aba

  Cenário: Alguém não consegue ver o vídeo
    Dado que a mídia daquele capítulo é um vídeo sem áudio
    Quando alguém chega à legenda sem ver as imagens
    Então a legenda descreve o que acontece na tela
    E a afirmação do capítulo continua provada

  Cenário: A pessoa abre um capítulo que tem vídeo
    Dado que a mídia daquele capítulo é um vídeo
    Quando a página abre
    Então só a imagem de pôster é baixada
    E o vídeo não toca sozinho
    Quando a pessoa aciona o vídeo
    Então ele é baixado e tocado, servido pelo próprio site

  Cenário: A pessoa lê um capítulo em tela estreita
    Dado que a página está aberta em tela estreita
    Quando um capítulo aparece
    Então o título fica acima do texto
    E a mídia desce para baixo do texto, em vez de ficar ao lado
    E a tira de destaques aparece empilhada
    E a legenda de cada mídia continua logo abaixo dela

  @lacuna
  Cenário: A construção separa o hero dos capítulos
    Dado que o hero está dentro do primeiro capítulo do arquivo
    Então A DEFINIR — ver pergunta P42
```

## Transições

| De | Gatilho | Para |
|---|---|---|
| Case | Fim da página | Card do próximo case e convite ao contato |
| Case | Item da trilha | A mesma página, na seção correspondente |
| Case | Link externo | Nova aba |
