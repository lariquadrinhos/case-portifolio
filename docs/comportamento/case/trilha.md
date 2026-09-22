---
fluxo: case/trilha
dominio: case
dono: design
status: rascunho
atualizado: 2026-09-21

figma:
  file: hwClE9Xpm51OW4vPsCCn8J
  pagina: "56:2"
  tela: "107:22"
---

# Trilha de leitura

Fixa à esquerda durante a leitura do case. **Dá duas informações ao mesmo tempo: onde a
pessoa está e quanto falta.** É o único elemento gráfico distintivo do site, e existe por
função, não por decoração.

## Regras

- A trilha é **do case, não do sistema**: existe só dentro de um case e carrega a cor dele.
- **A etapa ativa é a última cujo início já passou de uma linha a um terço do topo da tela.**
  O marcador se move sozinho conforme a pessoa rola.
- **Onde ele muda, em qualquer case:** um capítulo assume quando seu topo cruza essa linha.
  Os pontos de troca não são escritos por case — são **os começos dos capítulos**, e os
  capítulos vêm dos marcadores `<!-- trilha: -->` do arquivo de conteúdo. Muda-se o arquivo,
  mudam-se os pontos, sem tocar em regra nenhuma.
- **Por que não é "a etapa que ocupa a maior parte da tela"**, que valeu até a decisão 079:
  ela castiga capítulo curto. A Introdução do case de Reembolso tem 240px de altura contra 898 do
  Diagnóstico — ela nunca chega a ocupar mais da janela que o vizinho, e ficaria ativa por
  **400px de rolagem, menos de meia tela**. Com a linha de um terço, fica 760px. Ver decisão
  079.
- Cada item é clicável e leva à seção correspondente.
- **Os rótulos vêm dos arquivos dos cases**, como comentário abaixo de cada título de
  capítulo. Não existe lista de etapas em outro lugar — assim um erro de ordem é impossível
  de não ver.
- Os rótulos usam termos conhecidos do processo de design e **não repetem o título do
  capítulo**.
- A etapa ativa se distingue por **marcador maior, peso e cor** — três marcas, porque cor
  sozinha não basta.
- **O traço vive dentro de cada item**, não como linha à parte. Empilhar itens produz linha
  contínua para qualquer número de capítulos, e um case com cinco etapas e outro com seis
  usam a mesma peça. O item tem três posições — primeira, meio, última — porque o traço
  começa no ponto na primeira e termina no ponto na última.

### Em tela estreita

- A trilha **não cabe** e vira uma **faixa fina de progresso**, logo abaixo da barra,
  tocável para abrir a lista completa de etapas.
- **A faixa nomeia a etapa atual e diz a posição** — "Descoberta · 2 de 6". Sem isso ela
  daria só *quanto falta* e perderia *onde estou*, que é metade da razão de a trilha
  existir. Ver decisão 043.
- **A barra mede quanto da leitura já passou, não a proporção de etapas** — e isso é
  deliberado, não descuido. As duas medidas divergem: no case de Reembolso, ao fim do
  Diagnóstico, a proporção de etapas dá 40% e a rolagem real dá 24%. Numa página de 9.214px,
  **dezesseis pontos são cerca de 1.500px que a barra estaria prometendo já terem passado.**
  O texto responde *onde estou*; a barra responde *quanto falta*. Ver decisão 080.
- **Não iguale as duas.** Fazer a barra acompanhar "2 de 5" deixaria os dois indicadores
  coerentes entre si e mentirosos sobre o resto da leitura.
- **Tocar a faixa abre a lista completa**, que é a sobreposição do site: mesma casca, mesmas
  linhas, mesma forma de fechar. A etapa atual vem marcada com sinal, como a opção em vigor
  no controle de tema.

## Peças

| Nome no cenário | Figma | Storybook |
|---|---|---|
| item da trilha | componente, 6 variantes | não se aplica |
| trilha montada | exemplo de 5 etapas, quadro 07 | não se aplica |
| faixa de progresso | componente | não se aplica |
| faixa aberta | exemplo no quadro 07 | não se aplica |

## Comportamento

```gherkin
# language: pt
Funcionalidade: Trilha de leitura

  Cenário: A pessoa rola o case
    Dado que a trilha está visível
    Quando o início de um capítulo cruza a linha a um terço do topo da tela
    Então o marcador se move para a etapa daquele capítulo
    E a etapa ativa se distingue por marcador maior, peso e cor

  Cenário: Nenhuma etapa fica ativa por menos de meia tela
    Dado que um case tem capítulos de alturas diferentes
    Quando a pessoa rola do começo ao fim
    Então cada etapa fica ativa por pelo menos meia tela de rolagem
    E o marcador nunca volta para uma etapa que já deixou

  Cenário: O case tem outro número de etapas
    Dado que um case tem cinco capítulos e outro tem seis
    Então os dois montam a trilha com o mesmo item
    E a linha continua contínua entre os pontos

  Cenário: A pessoa pula para uma etapa
    Quando a pessoa aciona um item da trilha
    Então a página vai até a seção correspondente
    E o marcador acompanha

  Cenário: A trilha sem script
    Dado que o JavaScript está indisponível
    Então os itens continuam levando às seções, por âncora
    E o marcador não acompanha a rolagem
    E nenhum conteúdo do case deixa de ser legível

  Cenário: A trilha em tela estreita
    Dado que a tela é estreita
    Quando o case abre
    Então a trilha aparece como faixa fina de progresso, abaixo da barra
    E a faixa nomeia a etapa atual e diz a posição dela no total
    Quando a pessoa toca a faixa
    Então a lista completa de etapas aparece
    E a etapa atual aparece marcada
    E a lista fecha por Esc ou toque fora, como as outras sobreposições

  Cenário: A barra e o número medem coisas diferentes
    Dado que a faixa mostra "2 de 5"
    Quando dois quintos das etapas já passaram mas só um quarto da leitura
    Então a barra mostra um quarto
    E não dois quintos

  @lacuna
  Cenário: A trilha e o respeito a movimento reduzido
    Dado que a pessoa desligou animações no sistema
    Quando o marcador muda de etapa
    Então A DEFINIR — ver pergunta P11
```

## Transições

| De | Gatilho | Para |
|---|---|---|
| Qualquer ponto do case | Item da trilha | A seção correspondente, na mesma página |
| Rolagem | Seção domina a tela | Marcador muda de etapa |
