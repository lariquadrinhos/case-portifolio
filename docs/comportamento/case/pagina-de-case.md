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
- O marca-texto cobre parte do título, **uma vez por página**.
- **Título ao lado do texto, não acima dele.** Na leitura, a trilha ocupa as colunas 1 e 2,
  o título do capítulo as colunas 4 a 6, e o texto as colunas 7 a 12.
- **O texto corrido ocupa seis colunas, não cinco.** Cinco dariam 61 caracteres por linha,
  abaixo do mínimo de 65 — e a regra da medida governa a largura da coluna, não o contrário.
  Ver decisão 042.
- **Em tela estreita o título do capítulo fica acima do texto**, não ao lado: a largura não
  comporta duas faixas. A regra do título ao lado vale onde há grade para ela.
- Ao fim da página vêm o card do próximo case e o convite ao contato.
- A barra marca **Trabalhos** como seção, porque um case pertence a Trabalhos.

## Peças

| Nome no cenário | Figma | Storybook |
|---|---|---|
| hero do case | `106:32` | não se aplica |
| tira de destaques | `106:36` | não se aplica |
| capítulo | `107:36` | não se aplica |
| marca-texto | `106:34` | não se aplica |
| página em tela estreita | `108:22` | não se aplica |

## Comportamento

```gherkin
# language: pt
Funcionalidade: Página de case

  Cenário: A pessoa abre um case
    Quando a página abre
    Então o título, a frase de abertura e a tira de destaques aparecem antes dos capítulos
    E a barra marca "Trabalhos" como seção
    E o marca-texto cobre parte do título, uma vez só

  Cenário: A pessoa lê um capítulo em desktop
    Dado que a página está aberta em tela larga
    Quando um capítulo aparece
    Então o título dele fica ao lado do texto, não acima
    E o texto corrido ocupa seis colunas

  Cenário: A pessoa lê um capítulo em tela estreita
    Dado que a página está aberta em tela estreita
    Quando um capítulo aparece
    Então o título dele fica acima do texto
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
