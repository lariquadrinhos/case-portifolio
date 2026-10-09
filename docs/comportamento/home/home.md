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
- **A ação é botão preenchido**, a mesma peça do convite ao contato no fim de um case. Os
  dois são a ação principal da sua página, e o site nunca tem duas: por isso há um estilo só.
- **Uma ação principal só.** A home não repete o contato como botão: a barra é fixa, então
  o contato já está visível no topo. Duplicar divide a atenção no único momento em que o
  site quer uma direção só.
- Os quatro textos vêm de `quem-sou-eu.md`, sob `<!-- bloco: home -->`: nome
  **Larissa Quadros**, cargo **UX Designer**, a frase de abertura e o parágrafo.
- **A ordem na tela é: frase, parágrafo, nome e cargo, ação.** A página abre pelo que ela
  pensa, não por quem ela é, a identificação vem depois de a frase ter feito o trabalho,
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

O que a regra fixa é a **relação**: respiro igual em cima e embaixo, espaçamento uniforme
dentro do bloco. Os números mudam com a largura; a relação não.

### Sem rolagem no desktop

- **No desktop, a Home ocupa a altura da janela e cabe inteira, sem rolagem.** Respiro igual
  acima e abaixo do conteúdo, entre a barra e o pé da janela.
- **A referência mínima é 1366×768**, com uns 650 px visíveis. Nela: frase em **64/64**,
  espaço entre frase e bloco **48**, bloco com **24** entre as peças e parágrafo em **22/33**.
  Sobram 27 de respiro acima e abaixo.
- **Em janelas mais altas o conteúdo cresce junto, até o tamanho original** (frase em 96, espaço
  de 96, bloco com 32, parágrafo em 26/39), alcançado com perto de 980 px de altura. Em 790 px:
  frase em 80, espaço de 64, bloco com 32, parágrafo em 26.
- **Abaixo de 1280 de largura, vale sempre o desenho do mínimo**, qualquer que seja a altura: é
  o tamanho em que a frase mantém as suas três linhas escolhidas. Ver decisão 212.
- **Abaixo do mínimo, a página volta a rolar**, sem cortar nada. Em tela estreita, nada muda.
  Ver decisão 211. Figma: seção "proposta · Home e Trabalhos sem rolagem (desktop)".
- O marca-texto cobre um trecho da hero, **uma vez por página**, no acento de sistema.
  Na home esse trecho está no título; num case pode estar na frase de abertura. Fora da
  hero não existe.
- **O destaque é de sentido, não de ritmo.** Ele cobre um trecho que fecha uma ideia, e a
  quebra de linha de cada largura é escolhida em função dele, não o contrário. Hoje o
  trecho é *"forma melhor de fazer,"*: em 1440 é a segunda linha inteira, e em 375 passa por
  duas linhas, *"forma melhor"* e o começo da seguinte, *"de fazer,"*. Ver decisão 181.
- **A quebra da frase é escolhida, não automática.** Cada linha fecha uma unidade de
  sentido. Em 1440 são três linhas; em 375, quatro:
  *"Se existe uma / forma melhor / de fazer, eu quero / descobrir qual é."*
- A home não tem arquivo de conteúdo próprio, são quatro linhas que mudam junto com a
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

  Cenário: A Home cabe na janela do desktop
    Dado que a janela é de desktop, com pelo menos 650 de altura visível
    Quando a Home abre
    Então a página inteira cabe na janela, sem rolagem
    E o respiro acima da frase é igual ao respiro abaixo do botão

  Cenário: A janela é mais baixa que o mínimo
    Dado que a janela de desktop tem menos de 650 de altura visível
    Quando a Home abre
    Então a página rola, e nada fica cortado ou sobreposto
```

## Transições

| De | Gatilho | Para |
|---|---|---|
| Home | Caminho para Trabalhos | Índice de trabalhos |
| Home | Nome na barra | Home, sem efeito visível |
