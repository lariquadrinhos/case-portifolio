---
fluxo: conteudo/arquivo-de-texto-vira-pagina
dominio: conteudo
dono: design
status: rascunho
atualizado: 2026-09-18
---

# Como um arquivo de texto vira página

Comportamento puro, sem tela própria. É o que quebra primeiro quando um arquivo for editado
daqui a três meses. **Atualizar uma página é editar um arquivo de texto** — e o site não
inventa conteúdo: tudo que aparece na tela veio de um desses arquivos ou está escrito aqui.

## A regra única

> **Marcador é comentário HTML. Título é conteúdo.**

Tudo que a construção precisa ler é invisível na leitura do arquivo. Tudo que é título
aparece no site. Não há seção reconhecida por nome — nome muda, marcador não.

## Os marcadores

| Marcador | O que declara |
|---|---|
| `<!-- bloco: card -->` | O que segue é o texto do card no índice: um título e uma linha |
| `<!-- bloco: case -->` | Começa o corpo do case |
| `<!-- bloco: home -->` | O que segue são os textos da home |
| `<!-- bloco: hero -->` | Dentro da home: a frase de abertura e o parágrafo |
| `<!-- bloco: quem-sou-eu -->` | Começa a página "Quem sou eu" |
| `<!-- bloco: apresentacao -->` | Dentro de "Quem sou eu": os parágrafos de apresentação, sem título visível |
| `<!-- bloco: foto -->` | A imagem na linha seguinte é a foto da página, não imagem de texto corrido |
| `<!-- trilha: Rótulo -->` | O título imediatamente acima é um capítulo, e `Rótulo` é o nome dele na trilha |
| `<!-- privado -->` | A seção seguinte, e tudo abaixo dela até um título de nível igual ou superior, **não vai para o site** |
| `Legenda:` | Linha imediatamente após uma imagem — é a legenda dela |

## Regras

- Os arquivos de conteúdo são três: `case-study-financas-pf-pj.md`,
  `case-study-reembolso-sulamerica.md` e `quem-sou-eu.md`.
- A home não tem arquivo próprio. Seus textos vivem em `quem-sou-eu.md`, sob
  `<!-- bloco: home -->`.
- **Capítulo é o título seguido de `<!-- trilha: -->`.** Título sem esse marcador é
  subseção do capítulo corrente, e não aparece na trilha.
- A ordem das etapas na trilha é a ordem em que os marcadores aparecem no arquivo. **Não
  existe lista de etapas em outro lugar** — assim um erro de ordem é impossível de não ver.
- Seção marcada `<!-- privado -->` não é publicada e não conta para a trilha.
- **Privado tem dois usos, e os dois são legítimos:** anotação de trabalho que nunca sai do
  arquivo, e **material de origem** — texto escrito para alimentar outra peça, como as
  legendas das imagens, em vez de virar prosa na página.
- **Toda imagem tem texto alternativo**, sem exceção — é exigência de acessibilidade.
- **Imagem de prova exige `Legenda:` na linha seguinte, e sem ela não entra.** A legenda
  carrega o detalhe que o texto abriu mão de contar, e é por isso que a imagem prova alguma
  coisa. Sem legenda, vira galeria.
- **A foto declarada por `<!-- bloco: foto -->` é exceção**: ela não prova afirmação
  nenhuma, é peça da página. Texto alternativo continua obrigatório; legenda, não.
- A tira de destaques de um case são as linhas `**Chave** · valor` logo abaixo da frase de
  abertura do capítulo 1.
- **Conteúdo autoral vive nos arquivos de texto; copy de interface vive no contrato da tela
  que a exibe.** Rótulo de botão, texto da página de erro e rótulo de seção são interface.
  A exceção declarada são os rótulos da trilha, que ficam nos arquivos dos cases porque
  separá-los tornaria um erro de ordem invisível.

## Comportamento

```gherkin
# language: pt
Funcionalidade: Um arquivo de texto vira página

  Cenário: Construir a página de um case
    Dado um arquivo de case com marcadores de bloco e de trilha
    Quando a construção acontece
    Então o bloco do card vira o card daquele case no índice
    E o bloco do case vira a página do case
    E cada título seguido de marcador de trilha vira um capítulo
    E a trilha lista os rótulos na ordem em que aparecem no arquivo

  Cenário: Título sem marcador de trilha
    Dado um título de segundo nível sem marcador de trilha abaixo dele
    Quando a construção acontece
    Então ele aparece como subseção dentro do capítulo corrente
    E não aparece na trilha

  Cenário: Seção marcada como privada
    Dado uma seção precedida de marcador privado
    Quando a construção acontece
    Então nada daquela seção aparece no site
    E ela não conta para a trilha

  Cenário: A foto da página
    Dado um marcador de foto seguido de uma imagem
    Quando a construção acontece
    Então a imagem é tratada como foto da página, não como imagem de texto corrido
    E o texto alternativo dela é preservado

  Cenário: Imagem de prova com legenda
    Dada uma imagem seguida de uma linha iniciada por "Legenda:"
    Quando a construção acontece
    Então a imagem aparece com sua legenda
    E o texto alternativo da imagem é preservado

  Cenário: Imagem de prova sem legenda
    Dada uma imagem de prova sem "Legenda:" na linha seguinte
    Quando a construção acontece
    Então ela não é publicada

  Cenário: A foto da página não exige legenda
    Dada a imagem declarada por marcador de foto
    Quando a construção acontece
    Então ela aparece sem exigir legenda
    E o texto alternativo dela continua obrigatório

  Cenário: Uma peça esperada não está no arquivo
    Dado que uma peça esperada falta
    Quando a construção acontece localmente
    Então a página gera com a falta visível na tela, nomeando a peça
    Quando a construção acontece no caminho de publicação
    Então ela recusa e nada é publicado

  Cenário: Seção de material de origem
    Dado um título precedido de marcador privado
    Quando a construção acontece
    Então nada dela aparece na página
    E ela continua no arquivo, disponível para quem escreve as legendas
```

## Transições

| De | Gatilho | Para |
|---|---|---|
| Arquivo editado | Construção | Páginas geradas |
| Marcador de trilha lido | Construção | Etapa na trilha do case |
| Marcador privado lido | Construção | Conteúdo excluído da saída |

## Como separar título de rótulo

A regra da decisão 006 — *marcador é comentário HTML, título é conteúdo* — diz qual forma
usar, mas não diz qual dos dois um texto é. O teste é a **quem a palavra se dirige**:

- **"Meus valores" é dito ao leitor.** É uma frase que Larissa diria a alguém visitando a
  página. Continua título.
- **"Apresentação" é dito ao autor.** É a palavra que se usa para organizar o arquivo, não
  para apresentar a seção a quem lê — ninguém escreve "Apresentação" acima da própria
  apresentação. Virou marcador.

Quando a dúvida aparecer de novo: se a palavra some da tela sem que o leitor perca nada,
ela nunca foi título.
