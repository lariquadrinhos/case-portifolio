---
fluxo: case/trilha
dominio: case
dono: design
status: rascunho
atualizado: 2026-09-28

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
  Os pontos de troca não são escritos por case: são **os começos dos capítulos**, e os
  capítulos vêm dos marcadores `<!-- trilha: -->` do arquivo de conteúdo. Muda-se o arquivo,
  mudam-se os pontos, sem tocar em regra nenhuma.
- **Por que não é "a etapa que ocupa a maior parte da tela"**, que valeu até a decisão 079:
  ela castiga capítulo curto e faz a duração depender de quem está ao lado. Com a linha de um
  terço, **cada etapa dura exatamente o comprimento do próprio capítulo**: a janela cancela na
  conta, então a distribuição é a mesma em qualquer monitor. Ver decisões 079 e 135.
- **A duração de uma etapa é propriedade do texto, não da trilha.** Não há como a trilha deixar
  uma etapa curta demais: se isso acontecer, o capítulo é que é curto. A checagem 10 mede os
  capítulos por isso, e o piso é **um terço de tela**: a distância entre o topo e a linha de
  troca, abaixo da qual a etapa não chega a se assentar.
- Cada item é clicável e leva à seção correspondente.
- **Os rótulos vêm dos arquivos dos cases**, como comentário abaixo de cada título de
  capítulo. Não existe lista de etapas em outro lugar, assim um erro de ordem é impossível
  de não ver.
- Os rótulos usam termos conhecidos do processo de design e **não repetem o título do
  capítulo**.
- **A trilha tem três estados, não dois: percorrido, atual e por vir.** O traço e o marcador
  ficam coloridos **até a bolinha da etapa atual** e neutros daí para baixo. A trilha vai se
  enchendo conforme a pessoa avança.
- **A cor para exatamente na bolinha atual**, não no começo nem no fim do item dela. Por isso o
  traço é duas peças: a de cima da bolinha e a de baixo. No item atual a de cima está colorida e
  a de baixo não.
- **A trilha nunca anima.** O marcador e o traço são função da posição de rolagem, não há
  transição entre um estado e outro, então não há nada que `prefers-reduced-motion` desligue. A
  regra *"nada se move sem o leitor pedir"* também não é contrariada: o marcador se move porque
  a pessoa rolou. Ver decisão 138.
- **O estado da trilha é derivado da posição, não acumulado.** Rolando de volta para cima, a
  trilha **perde a cor de novo**: as etapas que ficaram abaixo voltam a neutro. A trilha
  responde *onde você está*, não *até onde você já chegou*.
- **Por que não guardar o ponto mais longe alcançado.** Isso faria a cor passar da bolinha atual,
  contradizendo a regra de que a cor para na bolinha, e daria dois significados à mesma marca: parte da linha colorida
  querendo dizer "você leu" e parte querendo dizer "você passou por aqui antes". Derivar da
  posição mantém uma leitura só e dispensa memória de sessão.
- **Vale para qualquer forma de chegar.** Rolagem, clique num item da trilha, link direto para
  uma seção: a trilha mostra a etapa de agora e colore até ela. Chegar ao meio do case por link
  pinta metade da trilha sem que nada tenha sido lido, e está certo, porque a trilha diz
  posição, não leitura.
- **O rótulo de uma etapa percorrida não muda.** Lido não é o mesmo que atual: se o rótulo
  também mudasse, metade da trilha pareceria ativa.
- A etapa atual se distingue por **marcador maior, peso do rótulo e cor**: três marcas, porque
  cor sozinha não basta. Contra as por vir, as três valem; contra as percorridas, valem tamanho
  e peso, que é o que garante que a distinção não depende de enxergar cor.
- **A cor do marcador é o tom forte do case, não a cor de estado do site.** A página
  *Sistema visual* nomeia *"marcador da trilha"* entre os usos do tom forte, e a trilha é do
  case. O "item ativo" que usa a cor de estado é outro: item da barra, opção de tema.
- **O que ainda não foi lido fica neutro, em `border/percurso`.** A trilha existe por função,
  não por decoração: pintar a linha **inteira** de cor forte a transformaria em ornamento,
  porque linha sempre igual não informa nada. Linha que enche informa quanto já passou, e é por
  isso que a cor entra só até onde a leitura chegou.
- **O traço do que falta tem token próprio, separado de `border`.** São trabalhos diferentes:
  `border` é divisória, `border/percurso` responde *quanto falta*. Ele é o mais visível que cabe
  **sem que a fronteira entre percorrido e por vir caia abaixo de 3,21:1**, e esse teto é
  desigual nos dois temas: no claro não sobra espaço nenhum, no escuro sobra. Ver decisão 131.
- **O traço acompanha a altura do item.** Rótulo que ocupa duas linhas faz o item crescer, e o
  traço cresce junto: senão a linha abre uma falha justamente onde ela promete continuidade.
- **A barra da faixa, em tela estreita, usa a mesma cor do marcador ativo.** É a trilha em
  outra forma, e a cor do case a acompanha. **As duas se enchem**: a faixa por proporção de
  rolagem, a trilha por etapa alcançada. Ver decisão 129.
- **O traço vive dentro de cada item**, não como linha à parte. Empilhar itens produz linha
  contínua para qualquer número de capítulos, e um case com cinco etapas e outro com seis
  usam a mesma peça. O item tem três posições (primeira, meio, última) porque o traço
  começa no ponto na primeira e termina no ponto na última.

### Em tela estreita

- A trilha **não cabe** e vira uma **faixa fina de progresso**, logo abaixo da barra,
  tocável para abrir a lista completa de etapas.
- **A faixa nomeia a etapa atual e diz a posição**: "Descoberta · 2 de 6". Sem isso ela
  daria só *quanto falta* e perderia *onde estou*, que é metade da razão de a trilha
  existir. Ver decisão 043.
- **A barra mede quanto da leitura já passou, não a proporção de etapas**, e isso é
  deliberado, não descuido. As duas medidas divergem: no case de Reembolso, ao fim do
  Diagnóstico, a proporção de etapas dá 40% e a rolagem real dá 24%. Numa página de 9.214px,
  **dezesseis pontos são cerca de 1.500px que a barra estaria prometendo já terem passado.**
  O texto responde *onde estou*; a barra responde *quanto falta*. Ver decisão 080.
- **Não iguale as duas.** Fazer a barra acompanhar "2 de 5" deixaria os dois indicadores
  coerentes entre si e mentirosos sobre o resto da leitura.
- **Tocar a faixa abre a lista completa**, que é a sobreposição do site: mesma casca, mesmas
  linhas, mesma forma de fechar. A etapa atual vem marcada com sinal, como a opção em vigor
  no controle de tema.
- **A lista ocupa a largura inteira e nasce colada na faixa**: ela é a faixa crescendo, não uma
  caixa nova. É o que a diferencia do menu e do contato, que são caixas com margem.
- **O véu não cobre a faixa.** Nas outras sobreposições ele começa abaixo da barra; nesta começa
  abaixo da faixa também, porque aqui a faixa **é o gatilho**, e velar o gatilho diria "isto
  não está disponível" sobre a única coisa que fecha a lista. É a regra da decisão 087 aplicada
  a um gatilho que não é da barra. Ver decisão 133.

## Peças

| Nome no cenário | Figma | Storybook |
|---|---|---|
| item da trilha | componente, 15 variantes | não se aplica |
| trilha montada | exemplo de 5 etapas, quadro 07 | não se aplica |
| faixa de progresso | componente, 2 cores | não se aplica |
| faixa aberta | `346:664` (clara) · `347:13` (escura) | não se aplica |

## Comportamento

```gherkin
# language: pt
Funcionalidade: Trilha de leitura

  Cenário: A pessoa rola o case
    Dado que a trilha está visível
    Quando o início de um capítulo cruza a linha a um terço do topo da tela
    Então o marcador se move para a etapa daquele capítulo
    E a etapa ativa se distingue por marcador maior, peso e cor

  Cenário: A etapa dura exatamente o capítulo dela
    Dado que um case tem capítulos de alturas diferentes
    Quando a pessoa rola do começo ao fim
    Então cada etapa fica ativa enquanto o capítulo dela é o que está sendo lido
    E a duração de cada etapa não muda com o tamanho da janela
    E o marcador não pisca entre duas etapas enquanto a rolagem segue numa direção

  Cenário: Capítulo curto demais não vira um piscar
    Dado que um capítulo é mais curto que um terço da janela
    Então a etapa dele apareceria e sairia antes de se assentar
    E isso é defeito do capítulo, não da trilha

  Cenário: A trilha veste a cor do case
    Dado que o leitor está num case
    Quando a trilha aparece
    Então o marcador da etapa atual usa o tom forte daquele case
    E dois cases diferentes mostram marcadores de cores diferentes

  Cenário: A trilha se enche conforme a leitura avança
    Dado que a pessoa está na terceira de cinco etapas
    Quando a trilha aparece
    Então as duas etapas anteriores têm marcador e traço na cor do case
    E a cor do traço para na bolinha da etapa atual
    E as etapas seguintes ficam neutras

  Cenário: Rolar de volta para cima devolve a trilha ao neutro
    Dado que a pessoa chegou à quarta etapa e a trilha está colorida até ela
    Quando a pessoa rola de volta até a segunda etapa
    Então a segunda etapa passa a ser a atual
    E a terceira e a quarta voltam a ficar neutras
    E a cor do traço para na bolinha da segunda

  Cenário: Voltar por um item da trilha também devolve ao neutro
    Dado que a pessoa está na quinta etapa
    Quando ela aciona o item da segunda etapa
    Então a página vai até a segunda seção
    E a trilha fica colorida só até a segunda

  Cenário: Chegar por link direto colore até onde se chegou
    Dado que a pessoa abre um endereço que aponta para a quarta seção
    Quando a página abre
    Então a trilha aparece colorida até a quarta etapa
    E nenhuma etapa depois dela fica colorida

  Cenário: A etapa atual não se confunde com uma já percorrida
    Dado que a etapa anterior e a atual têm a mesma cor
    Então a atual tem marcador maior
    E o rótulo dela tem peso diferente
    E o rótulo de uma etapa percorrida continua igual ao de uma por vir

  Cenário: Rótulo de duas linhas não abre falha na linha
    Dado que o rótulo de uma etapa ocupa duas linhas
    Quando a trilha aparece
    Então o traço daquela etapa acompanha a altura dela
    E a linha continua sem interrupção até a etapa seguinte

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

  Cenário: A trilha não anima, com ou sem movimento reduzido
    Dado que a pessoa desligou animações no sistema
    Quando o marcador muda de etapa
    Então o marcador aparece na etapa nova sem transição
    E o comportamento é o mesmo de quem não desligou nada
    E isso vale também para o traço que se enche

  Cenário: Pular para uma etapa com movimento reduzido
    Dado que a pessoa desligou animações no sistema
    Quando ela aciona um item da trilha
    Então a página salta para a seção, sem rolagem suave
```

## Transições

| De | Gatilho | Para |
|---|---|---|
| Qualquer ponto do case | Item da trilha | A seção correspondente, na mesma página |
| Rolagem | Seção domina a tela | Marcador muda de etapa |
