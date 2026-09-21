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
- **A ordem na tela é: frase, parágrafo, nome e cargo, ação.** A página abre pelo que ela
  pensa, não por quem ela é — a identificação vem depois de a frase ter feito o trabalho,
  imediatamente antes da ação.
- **O cargo aparece uma vez só**, na linha de identificação. O parágrafo não o repete.

### Respiro

- **A frase tem o mesmo respiro acima e abaixo.** A distância entre a barra e a frase é
  igual à distância entre a frase e o parágrafo. É isso que faz a hero respirar sem que ela
  fique deslocada para cima ou para baixo.
- **Parágrafo, identificação e ação são igualmente espaçados entre si**, dentro de um bloco
  próprio. O bloco se lê como uma unidade; a frase se lê sozinha.
- Os dois valores saem da escala de espaço. Hoje: **96 e 32** em desktop, **64 e 24** em
  tela estreita.

O que a regra fixa é a **relação** — respiro igual em cima e embaixo, espaçamento uniforme
dentro do bloco. Os números mudam com a largura; a relação não.
- O marca-texto cobre um trecho da hero, **uma vez por página**, no acento de sistema.
  Na home esse trecho está no título; num case pode estar na frase de abertura. Fora da
  hero não existe.
- **O destaque é de sentido, não de ritmo.** Ele cobre um trecho que fecha uma ideia, e a
  quebra de linha de cada largura é escolhida em função dele — não o contrário. Hoje o
  trecho é *"forma melhor"*, que em 1440 divide linha com o resto da frase e em 375 ocupa
  uma linha só.
- **A quebra da frase é escolhida, não automática.** Cada linha fecha uma unidade de
  sentido. Em 1440 são três linhas; em 375, quatro:
  *"Se existe uma / forma melhor / de fazer, eu quero / descobrir qual é."*
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
    Então a frase de abertura aparece primeiro
    E o parágrafo aparece abaixo dela
    E o nome e o cargo aparecem depois do parágrafo
    E o caminho para Trabalhos aparece por último, rotulado "Ver os meus trabalhos"
    E ele é o elemento mais evidente da tela
    E não há segunda ação principal competindo com ele

  Cenário: A pessoa segue para os trabalhos
    Dado que a home está aberta
    Quando a pessoa aciona o caminho para Trabalhos
    Então o índice de trabalhos abre

  Cenário: Um dos quatro textos da home falta no arquivo
    Dado que o bloco da home não traz um dos quatro elementos
    Quando a construção acontece localmente
    Então a página gera com a falta visível, nomeando o elemento
    Quando a construção acontece no caminho de publicação
    Então ela recusa e nada é publicado
```

## Transições

| De | Gatilho | Para |
|---|---|---|
| Home | Caminho para Trabalhos | Índice de trabalhos |
| Home | Nome na barra | Home, sem efeito visível |
