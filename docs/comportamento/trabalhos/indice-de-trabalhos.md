---
fluxo: trabalhos/indice-de-trabalhos
dominio: trabalhos
dono: design
status: rascunho
atualizado: 2026-09-18

figma:
  file: hwClE9Xpm51OW4vPsCCn8J
  pagina: "34:2"
  tela: "@lacuna · não desenhado"
---

# Índice de trabalhos

Os cases em cards. É para onde a home leva e para onde a barra aponta. Existe porque a home
é capa e não lista — e porque é aqui que um terceiro case cabe sem redesenhar nada.

## Regras

- **Cada card precisa pagar o clique que custa:** imagem de capa, o título do case, e uma
  linha que entrega a tensão ou o resultado — **nunca a categoria do produto**.
- O card inteiro é clicável, não só o título.
- É o mesmo componente do card do próximo case, ao fim de um case.
- Cada card carrega a cor do seu case: Finanças azul, Reembolso laranja.
- Título e linha vêm do bloco `<!-- bloco: card -->` do arquivo de cada case.
- **O site nasce com dois cases e sem card de "em breve".**

## Peças

| Nome no cenário | Figma | Storybook |
|---|---|---|
| card de case | `@lacuna` | não se aplica |
| imagem de capa | `@lacuna` | não se aplica |

## Comportamento

```gherkin
# language: pt
Funcionalidade: Índice de trabalhos

  Contexto:
    Dado que existem dois cases publicados

  Cenário: A pessoa escolhe entre os trabalhos
    Quando o índice abre
    Então cada case aparece como um card, com capa, título e uma linha
    E cada card carrega a cor do seu case
    E nenhum card mostra a categoria do produto

  Cenário: A pessoa abre um case
    Dado que o índice está aberto
    Quando a pessoa toca em qualquer parte de um card
    Então o case abre pelo topo

  @lacuna
  Cenário: A ordem dos cards
    Dado que existem dois ou mais cases
    Então A DEFINIR — ver pergunta P27

  @lacuna
  Cenário: A imagem de capa não existe
    Dado que o arquivo de capa de um case não foi produzido
    Então A DEFINIR — ver pergunta P08
```

## Transições

| De | Gatilho | Para |
|---|---|---|
| Índice | Toque num card | Topo do case correspondente |
