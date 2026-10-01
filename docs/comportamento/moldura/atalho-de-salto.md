---
fluxo: moldura/atalho-de-salto
dominio: moldura
dono: design
status: rascunho
atualizado: 2026-09-24

figma:
  file: hwClE9Xpm51OW4vPsCCn8J
  pagina: "56:2"
  tela: "274:243"
---

# Atalho de salto

A primeira parada da navegação por teclado, em toda página do site. Ele não aparece para quem
usa o rato: existe só enquanto tem foco. Quem chega pelo teclado o encontra antes de qualquer
item da barra e, acionando, vai direto ao começo do conteúdo, sem atravessar a navegação de
novo em cada página.

## Regras

- **Toda página tem um.** Home, Trabalhos, case, "Quem sou eu" e erro. Nenhuma exceção: a razão
  de existir dele é ser o mesmo gesto em qualquer lugar do site.
- **É o primeiro elemento que recebe foco.** Antes do nome na barra, antes de Trabalhos.
- **Só existe enquanto tem foco.** Aparece ao receber foco, some ao perdê-lo. Quem usa o rato
  nunca o vê, e ele não ocupa espaço na leitura de ninguém.
- **É um só.** Não há "pular para a trilha" nem "pular para o rodapé". A primeira tecla de uma
  página não é lugar de oferecer escolha.
- **É link, não botão.** O botão do site continua sendo um só, "Falar comigo". Este move a
  pessoa dentro da própria página.
- **Usa `radius/bloco`, como toda superfície que flutua.** Antes usava o raio do card, que é de
  outra família. Ver decisão 139.
- **Tem superfície opaca.** Ele flutua sobre o conteúdo, e sem superfície o texto da página
  apareceria por trás do rótulo.
- **Não empurra nada.** A barra não desce e o conteúdo não se move quando ele aparece.
- **Na tela estreita ele cobre a faixa de progresso.** A faixa é indicador passivo e não recebe
  foco; o atalho é a única coisa acionável ali naquele instante.
- **O destino recebe o foco, não só a rolagem.** Acionar leva o foco ao início do conteúdo, e a
  tecla seguinte continua de lá.

**Por que o destino precisa receber foco de verdade.** Um atalho que só rola a página deixa o
foco onde estava: a pessoa vê o conteúdo, aperta Tab e volta para o segundo item da barra. O
salto teria sido visual e não de navegação, que é justamente o que ele existe para resolver.

**Por que ele não empurra a barra.** Empurrar desloca a página inteira no instante em que
alguém está se orientando, e desloca para quem já não está vendo o cursor do rato. Flutuar
custa uma superfície opaca; empurrar custa a estabilidade da página.

## Peças

| Nome no cenário | Figma | Storybook |
|---|---|---|
| atalho de salto | `273:114` | não se aplica |
| atalho com foco, desktop | `274:243` | não se aplica |
| atalho com foco, tela estreita | `274:279` | não se aplica |
| o anel de foco em cada tipo de alvo | `155:80` | não se aplica |

## Comportamento

```gherkin
# language: pt
Funcionalidade: Atalho de salto

  Contexto:
    Dado que a pessoa navega pelo teclado
    E que qualquer página do site está aberta

  Cenário: O atalho é a primeira parada
    Dado que a página acabou de abrir
    Quando a pessoa aperta Tab pela primeira vez
    Então o atalho de salto aparece abaixo da barra
    E recebe o anel de foco
    E nenhum item da barra recebeu foco antes dele

  Cenário: Quem usa o rato não o vê
    Dado que a página está aberta
    Quando a pessoa usa o rato e nunca aperta Tab
    Então o atalho não aparece em momento nenhum
    E não ocupa espaço na página

  Cenário: Sair do atalho sem acionar
    Dado que o atalho tem foco
    Quando a pessoa aperta Tab de novo
    Então o atalho some
    E o primeiro item da barra recebe foco

  Cenário: Acionar o atalho leva o foco, não só a rolagem
    Dado que o atalho tem foco
    Quando a pessoa aciona o atalho
    Então o início do conteúdo da página recebe o foco
    E a tecla seguinte continua a partir do conteúdo
    E não volta para a barra

  Cenário: Na tela estreita ele cobre a faixa de progresso
    Dado que a tela é estreita
    E que a página é um case
    Quando o atalho recebe foco
    Então o atalho aparece sobre a faixa de progresso
    E a barra continua visível e no lugar
    E nada na página se desloca

  Cenário: Acionar o atalho com movimento reduzido
    Dado que a pessoa desligou animações no sistema
    Quando ela aciona o atalho
    Então a página salta para o conteúdo, sem rolagem suave
    E o conteúdo recebe o foco do mesmo jeito

  Cenário: O atalho não desloca a página
    Dado que a página está aberta
    Quando o atalho recebe foco
    Então a barra continua na mesma posição
    E o conteúdo continua na mesma posição
```

## Transições

| De | Gatilho | Para |
|---|---|---|
| Qualquer página, sem foco | primeira tecla Tab | atalho com foco |
| Atalho com foco | Tab | atalho some, primeiro item da barra com foco |
| Atalho com foco | Enter ou Espaço | foco no início do conteúdo da página |
| Atalho com foco | clique fora, ou foco perdido | atalho some |
