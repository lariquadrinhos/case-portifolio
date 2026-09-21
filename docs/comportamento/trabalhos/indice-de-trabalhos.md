---
fluxo: trabalhos/indice-de-trabalhos
dominio: trabalhos
dono: design
status: rascunho
atualizado: 2026-09-21

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
- **A página tem título**, acima dos cards, convidando a olhá-los.
- **A ordem dos cards é fixa e declarada, nunca derivada de data.** Hoje: Finanças PF+PJ,
  depois Reembolso SulAmérica.

**Por que ordem fixa e não "mais recente primeiro":** uma regra automática decide para
sempre sem ninguém olhar — o terceiro case subiria ao topo sozinho, talvez certo, talvez
não. Fixa, cada mudança de ordem é uma decisão que alguém tomou.

**Por que Finanças primeiro:** o primeiro card é o que a maioria abre, e esse case é a
resposta mais completa a "o que essa pessoa sabe fazer" — vai da ideia ao código em uso por
uma pessoa real. Reembolso é mais fácil de ler de relance, mas redesenho de fluxo é o
formato que quem faz triagem já viu muitas vezes.

## Texto

Copy de interface, que por decisão 011 vive aqui e não nos arquivos de conteúdo:

| Peça | Texto |
|---|---|
| Título da página | **Dois problemas que eu vi de perto, e o que fiz com eles.** |

> `@lacuna` · **Rascunho meu, à espera da voz dela.** É ela falando no site dela. O título
> convida e diz algo verdadeiro dos dois cases — os dois começaram observando uma pessoa
> travar numa tarefa comum. Ver pergunta P41.

Título e linha de cada card **não** estão aqui: são conteúdo autoral e vêm do bloco
`<!-- bloco: card -->` do arquivo de cada case.

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
    Então o título da página aparece acima dos cards
    Então cada case aparece como um card, com capa, título e uma linha
    E cada card carrega a cor do seu case
    E nenhum card mostra a categoria do produto

  Cenário: A pessoa abre um case
    Dado que o índice está aberto
    Quando a pessoa toca em qualquer parte de um card
    Então o case abre pelo topo

  Cenário: A ordem dos cards
    Quando o índice abre
    Então o card de Finanças PF+PJ aparece primeiro
    E o card de Reembolso SulAmérica aparece em seguida
    E a ordem não é derivada de data de publicação

  Cenário: A imagem de capa não existe
    Dado que o arquivo de capa de um case não foi produzido
    Quando a construção acontece localmente
    Então o card gera com a falta visível no lugar da capa
    Quando a construção acontece no caminho de publicação
    Então ela recusa e nada é publicado
```

## Transições

| De | Gatilho | Para |
|---|---|---|
| Índice | Toque num card | Topo do case correspondente |
