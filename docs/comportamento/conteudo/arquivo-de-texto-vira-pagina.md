---
fluxo: conteudo/arquivo-de-texto-vira-pagina
dominio: conteudo
dono: design
status: rascunho
atualizado: 2026-09-18
---

# Como um arquivo de texto vira página

Comportamento puro, sem tela própria. É o que quebra primeiro quando um arquivo for editado
daqui a três meses. **Atualizar uma página é editar um arquivo de texto**, e o site não
inventa conteúdo: tudo que aparece na tela veio de um desses arquivos ou está escrito aqui.

## A regra única

> **Marcador é comentário HTML. Título é conteúdo.**

Tudo que a construção precisa ler é invisível na leitura do arquivo. Tudo que é título
aparece no site. Não há seção reconhecida por nome: nome muda, marcador não.

## Os marcadores

| Marcador | O que declara |
|---|---|
| `<!-- bloco: card -->` | O que segue é o texto do card no índice: um título e uma linha |
| `<!-- bloco: case -->` | Começa o corpo do case |
| `<!-- bloco: home -->` | O que segue são os textos da home |
| `<!-- bloco: hero -->` | Dentro da home: a frase de abertura e o parágrafo. Dentro de um case: o título, a frase de abertura e a tira de destaques, que termina na última linha `**Chave** · valor` (decisão 176) |
| `<!-- bloco: quem-sou-eu -->` | Começa a página "Quem sou eu" |
| `<!-- bloco: apresentacao -->` | Dentro de "Quem sou eu": os parágrafos de apresentação, sem título visível |
| `<!-- bloco: foto -->` | A imagem na linha seguinte é a foto da página, não imagem de texto corrido |
| `<!-- bloco: provas -->` | O que segue é o bloco de provas do case: pares de uma linha de descrição e um link logo abaixo. Link com endereço vazio é prova que falta |
| `<!-- bloco: par -->` | As duas imagens nas linhas seguintes são **uma peça só**, com **uma** `Legenda:` depois da segunda. No desktop, as duas lado a lado na largura inteira do conteúdo, depois do texto do capítulo; em tela estreita, uma embaixo da outra. Cada imagem tem o seu texto alternativo |
| `<!-- bloco: extra -->` | O que segue é conteúdo extra do case: vem depois do último capítulo, **fora da trilha**, e não é subseção do capítulo anterior |
| `<!-- trilha: Rótulo -->` | O título imediatamente acima é um capítulo, e `Rótulo` é o nome dele na trilha |
| `<!-- privado -->` | A seção seguinte, e tudo abaixo dela até um título de nível igual ou superior, **não vai para o site** |
| `<!-- só no desktop -->` | A seção seguinte, e tudo abaixo dela até um título de nível igual ou superior, **não aparece em tela estreita**. Vai para o site, mas só numa largura |
| `Legenda:` | Linha imediatamente após uma imagem ou vídeo: é a legenda dela |
| `Convite:` | Linha imediatamente após uma `Legenda:`: é o convite ao link, e o único lugar do corpo do case onde um link aparece fora do bloco de provas |

## Regras

- Os arquivos de conteúdo são três: `case-study-financas-pf-pj.md`,
  `case-study-reembolso-sulamerica.md` e `quem-sou-eu.md`.
- A home não tem arquivo próprio. Seus textos vivem em `quem-sou-eu.md`, sob
  `<!-- bloco: home -->`.
- **Capítulo é o título seguido de `<!-- trilha: -->`.** Título sem esse marcador é
  subseção do capítulo corrente, e não aparece na trilha.
- A ordem das etapas na trilha é a ordem em que os marcadores aparecem no arquivo. **Não
  existe lista de etapas em outro lugar**, assim um erro de ordem é impossível de não ver.
- Seção marcada `<!-- privado -->` não é publicada e não conta para a trilha.
- **Seção marcada `<!-- só no desktop -->` é publicada, mas some em tela estreita.** Ela também
  não conta para a trilha: é subseção de um capítulo, não capítulo.
- **Os dois marcadores soltos escondem conteúdo, e é por isso que a checagem cobra a grafia.**
  Um erro de digitação em `<!-- bloco: -->` faz a construção falhar; um erro em marcador solto
  **publica calado o que era para sumir**. A checagem 4 recusa marcador solto que não esteja na
  lista conhecida.
- **Privado tem dois usos, e os dois são legítimos:** anotação de trabalho que nunca sai do
  arquivo, e **material de origem**, texto escrito para alimentar outra peça, como as
  legendas das imagens, em vez de virar prosa na página.
- **Toda imagem tem texto alternativo**, sem exceção: é exigência de acessibilidade.
- **Imagem de prova exige `Legenda:` na linha seguinte, e sem ela não entra.** A legenda
  carrega o detalhe que o texto abriu mão de contar, e é por isso que a imagem prova alguma
  coisa. Sem legenda, vira galeria.
- **Toda mídia de prova tem duas versões, uma por tema**, com o mesmo nome e sufixo `-claro` e
  `-escuro`. **O arquivo de conteúdo cita o nome sem o sufixo**: `reembolso-2-diagnostico`, e a
  construção escolhe qual servir. Uma declaração, dois arquivos: assim o texto não repete a regra
  do tema, e trocar de tema não passa por editar conteúdo.
- **Por que duas e não uma transparente.** Tentamos: exportar sem fundo deixa a página aparecer
  nos vãos e serviria aos dois temas com um arquivo. Mas mídia é montagem, e a montagem pode
  querer coisas diferentes em cada tema, não só o fundo. Duas versões preservam essa liberdade.
  Ver decisão 153.
- **A foto declarada por `<!-- bloco: foto -->` é exceção**: ela não prova afirmação
  nenhuma, é peça da página. Texto alternativo continua obrigatório; legenda, não.
- A tira de destaques de um case são as linhas `**Chave** · valor` logo abaixo da frase de
  abertura do capítulo 1.
- **Negrito e itálico dentro de frase, de lista e de tabela ficam marcados, mas não aparecem.**
  O site guarda a ênfase no HTML e não lhe dá peso nem inclinação, como no Figma. Só o
  parágrafo inteiro em negrito muda de forma: vira frase de destaque. Ver decisão 180.
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

A regra da decisão 006 (*marcador é comentário HTML, título é conteúdo*) diz qual forma
usar, mas não diz qual dos dois um texto é. O teste é a **quem a palavra se dirige**:

- **"Meus valores" é dito ao leitor.** É uma frase que Larissa diria a alguém visitando a
  página. Continua título.
- **"Apresentação" é dito ao autor.** É a palavra que se usa para organizar o arquivo, não
  para apresentar a seção a quem lê: ninguém escreve "Apresentação" acima da própria
  apresentação. Virou marcador.

Quando a dúvida aparecer de novo: se a palavra some da tela sem que o leitor perca nada,
ela nunca foi título.
