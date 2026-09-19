---
fluxo: home/home
dominio: home
dono: design
status: rascunho
atualizado: 2026-09-19

figma:
  file: hwClE9Xpm51OW4vPsCCn8J
  pagina: "34:2"
  tela: "@lacuna · a home não foi desenhada; o frame 37:88 é demonstração"
---

# Home

É capa, não resumo. Nome, cargo, uma frase e um parágrafo. A função dela é fazer a pessoa
querer ver os trabalhos.

## Regras

- O caminho para Trabalhos é **o elemento mais evidente da tela**, rotulado
  **Ver os meus trabalhos**.
- **Uma ação principal só.** A home não repete o contato como botão: a barra é fixa, então
  o contato já está visível no topo. Duplicar divide a atenção no único momento em que o
  site quer uma direção só.
- Os quatro textos vêm de `quem-sou-eu.md`, sob `<!-- bloco: home -->`: nome
  **Larissa Quadros**, cargo **UX Designer**, a frase de abertura e o parágrafo.
- O marca-texto cobre parte do título, **uma vez por página**, no acento de sistema.
  Fora da hero não existe.
- A home não tem arquivo de conteúdo próprio — são quatro linhas que mudam junto com a
  forma como ela se apresenta.

**Por que o frame 37:88 não vale como referência:** ele é demonstração, tem dois botões e
diz `UX/UI Designer`. Demonstração não vira regra por estar desenhada.

## Texto

Copy de interface, que por decisão 011 vive aqui e não nos arquivos de conteúdo:

| Peça | Texto |
|---|---|
| Ação principal | **Ver os meus trabalhos** |

Nome, cargo, frase e parágrafo **não** estão aqui: são conteúdo autoral e vêm de
`quem-sou-eu.md`, sob `<!-- bloco: home -->`.

## Peças

| Nome no cenário | Figma | Storybook |
|---|---|---|
| marca-texto da hero | `@lacuna` | não se aplica |
| caminho para Trabalhos | `@lacuna` | não se aplica |

## Comportamento

```gherkin
# language: pt
Funcionalidade: Home

  Cenário: Quem faz triagem abre a home
    Quando a home abre
    Então o nome, o cargo, a frase de abertura e o parágrafo aparecem
    E o caminho para Trabalhos aparece rotulado "Ver os meus trabalhos"
    E ele é o elemento mais evidente da tela
    E não há segunda ação principal competindo com ele

  Cenário: A pessoa segue para os trabalhos
    Dado que a home está aberta
    Quando a pessoa aciona o caminho para Trabalhos
    Então o índice de trabalhos abre

  @lacuna
  Cenário: Um dos quatro textos da home falta no arquivo
    Dado que o bloco da home não traz um dos quatro elementos
    Então A DEFINIR — ver pergunta P08
```

## Transições

| De | Gatilho | Para |
|---|---|---|
| Home | Caminho para Trabalhos | Índice de trabalhos |
| Home | Nome na barra | Home, sem efeito visível |
