---
fluxo: case/pagina-de-case
dominio: case
dono: design
status: rascunho
atualizado: 2026-09-21

figma:
  file: hwClE9Xpm51OW4vPsCCn8J
  pagina: "56:2"
  tela: "106:22"
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
- **Cada capítulo tem a sua prova ao lado**, com legenda abaixo dela. Imagem que não prova
  nada vira galeria, e galeria ninguém olha.
- **O texto corrido ocupa seis colunas, não cinco.** Cinco dariam 61 caracteres por linha,
  abaixo do mínimo de 65 — e a regra da medida governa a largura da coluna, não o contrário.
  Ver decisão 042.
- **Em tela estreita a mídia desce para baixo do texto**, em vez de ficar ao lado: a largura
  não comporta duas faixas. A regra da mídia ao lado vale onde há grade para ela.
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

  Cenário: A pessoa lê um capítulo em tela estreita
    Dado que a página está aberta em tela estreita
    Quando um capítulo aparece
    Então o título fica acima do texto
    E a mídia desce para baixo do texto, em vez de ficar ao lado
    E a tira de destaques aparece empilhada

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
| Case | Botão de protótipo | Nova aba |
