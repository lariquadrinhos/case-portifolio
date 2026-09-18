---
fluxo: case/card-proximo-case
dominio: case
dono: design
status: rascunho
atualizado: 2026-09-18

figma:
  file: hwClE9Xpm51OW4vPsCCn8J
  pagina: "@lacuna · nada desenhado ainda"
  tela: "@lacuna · nada desenhado ainda"
---

# Card do próximo case

Ao fim de um case, um card oferece o outro. Quem terminou de ler está no pico de interesse
e não deveria ter que voltar ao índice — o objetivo é que ninguém leia só um.

## Regras

- O card aparece ao fim de todo case, sem exceção.
- É o mesmo componente de card do índice de Trabalhos, clicável inteiro.
- Um rótulo acima dele diz que aquilo é o próximo.
- Com dois cases, o card de cada um aponta para o outro. **Não há caso especial para o
  último case.**
- O card carrega a cor do case de destino, não a do case em que o leitor está.
- O fim do case também convida ao contato, em elemento separado deste card.

**Por que circular, e não uma exceção no último case:** um dos três públicos chega direto
numa página interna, por link compartilhado, sem passar pela home. Quem cai no segundo case
por esse caminho nunca viu o primeiro — para essa pessoa, o card circular aponta para
conteúdo novo, não repetido. E sem exceção, o componente sustenta a promessa de que um
terceiro case cabe sem redesenhar nada.

## Peças

| Nome no cenário | Figma | Storybook |
|---|---|---|
| card do próximo case | `@lacuna` | não se aplica — não há Storybook neste projeto |
| rótulo do próximo | `@lacuna` | — |

## Comportamento

```gherkin
# language: pt
Funcionalidade: Card do próximo case

  Contexto:
    Dado que o site tem dois cases publicados
    E que o leitor chegou ao fim de um deles

  Cenário: Leitor termina o case de Finanças
    Quando o leitor alcança o fim do case de Finanças
    Então o card do próximo case mostra o case de Reembolso
    E o card carrega a cor do case de Reembolso
    E o rótulo do próximo aparece acima dele

  Cenário: Leitor termina o case de Reembolso
    Quando o leitor alcança o fim do case de Reembolso
    Então o card do próximo case mostra o case de Finanças
    E o card carrega a cor do case de Finanças
    E o rótulo do próximo aparece acima dele

  Cenário: Leitor abre o próximo case
    Dado que o card do próximo case está visível
    Quando o leitor toca em qualquer parte do card
    Então o case de destino abre pelo topo

  @lacuna
  Cenário: Um terceiro case é publicado
    Dado que existem três cases
    Quando o leitor alcança o fim de um deles
    Então A DEFINIR — ver pergunta P21
    # A decisão de circular resolve dois cases sem exceção, mas não define a ordem
    # com três. Opções: ordem fixa do índice, com o último voltando ao primeiro ·
    # o case ainda não lido nesta sessão · o mais recente primeiro.
    # Não trava: só precisa ser decidido antes de o terceiro case existir.
```

## Transições

| De | Gatilho | Para |
|---|---|---|
| Fim do case atual | Toque no card | Topo do case de destino |
| Fim do case atual | Toque no convite ao contato | Ação de contato, sem sair da página |
