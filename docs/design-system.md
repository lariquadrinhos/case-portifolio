# Design system

**O sistema mora em duas páginas do arquivo `hwClE9Xpm51OW4vPsCCn8J`, e elas não são cópias
uma da outra.**

**Sistema visual** (`34:2`) é o **argumento**: por que o fundo é creme e não branco, por que
cada case adota uma cor, o que o tom pálido faz e o que o tom forte faz. E carrega a **prova**
— doze pares de contraste medidos, nos dois temas, com o valor de cada um. É lá que se
descobre *por quê*.

**Design System** (`171:14`) é a **referência**: as variáveis como espécime vivo, a escala, a
grade e as peças como componentes de verdade. É daqui que se monta uma tela.

Quando as duas divergirem, a referência está errada até prova em contrário — mas o argumento
é que explica, e apagá-lo perderia a razão das escolhas.

### Seções da página Design System

| Seção | Nó | O que traz |
|---|---|---|
| Cor | `171:15` | 17 variáveis, dois modos, amostras vinculadas à variável |
| Tipografia | `171:159` | 8 níveis, dois modos, espécime de cada um |
| Espaço e forma | `172:2` | escala de espaço, cantos, traço, foco |
| Grade | `172:77` | 12 colunas no desktop, 1 na tela estreita |
| Componentes | `174:81` | as dez peças, como componentes de verdade |

---

## O que este documento não faz

**Não repete nenhum valor.** Cor, tamanho, espaço e canto vivem nas variáveis do Figma e são
exportados para `docs/spec/tokens.json`. Escrever "18px" aqui criaria a segunda fonte de
verdade que o projeto existe para evitar — e ela envelheceria em silêncio no primeiro ajuste.

O que entra aqui é **o que a variável não diz**: qual coleção governa o quê, que regras
atravessam todas as peças, e o que o sistema ainda não tem.

Comportamento de tela fica nos contratos, em `docs/comportamento/`. Descrição de cada peça
fica no inventário, em `docs/comportamento/componentes/inventario.md`. Este documento é o mapa
que liga os três.

---

## As quatro coleções, e o que cada uma decide

**Cor** · modos *Claro* e *Escuro*. Os dois foram escolhidos e verificados em separado:
nenhum valor de um deriva do outro, nem no Figma nem no código. As cinco cores de acento
pertencem aos cases, não ao sistema — cada case tem a sua, e ela domina a página dele.

**Tipografia** · modos *Desktop* e *Tela pequena*. Oito níveis. Dois níveis nunca dividem
tamanho **e** entrelinha ao mesmo tempo; a checagem 3 recusa se dividirem.

**Espaço e forma** · modo único. Uma escala só serve respiro e distância. Medida fora da
escala se arredonda para o degrau mais próximo, e só fica fora quando a razão estiver escrita.

**Grade** · modos *Desktop* e *Tela pequena*. **O Figma não aceita vincular grade de layout a
variável**, então estes três números são declarados aqui e aplicados à mão. É a única parte do
sistema sem vínculo, e por isso a única cuja conferência não pode ser automática.

---

## Regras que atravessam todas as peças

**Nível se marca pelo tamanho, nunca pela cor.** Cor marca outra coisa — interatividade,
estado — e as duas não devem se misturar. Foi essa regra que corrigiu o rótulo do menu.

**Cor sozinha nunca basta.** Todo estado marcado por cor vem acompanhado de forma: sublinhado
na página atual, sinal na opção escolhida, tamanho no marcador ativo da trilha.

**A forma promete o destino.** Três formas, e a pergunta nunca é *quanto destaque isso
merece*, é *para onde isso leva*:

| Forma | Promete | Onde |
|---|---|---|
| Contorno de botão | ação que acontece aqui **e é a principal da página** | um lugar: o convite ao contato no fim de um case |
| Palavra sublinhada | vai para fora do site | currículo, LinkedIn, e-mail, repositório |
| Palavra simples | outra página daqui | barra, menu, saídas da página de erro |

**Alvo nunca abaixo de 44px.** Vale para toda linha de lista, toda opção, todo botão. A
checagem 6 cobra nas sobreposições.

**Foco visível em tudo que recebe foco**, inclusive região que rola. O anel tem afastamento —
e é o afastamento que faz uma cor bastar por tema, porque o anel cai sempre sobre a superfície
de fundo, nunca sobre a cor do elemento.

**Medida de linha entre 65 e 75 caracteres no texto corrido, onde houver largura.** Blocos
curtos em grade podem ficar abaixo, com piso por volta de 45. Tabela não obedece: é dado, e o
que governa é a comparação ficar legível lado a lado.

---

## As dez peças

Descrição, estados e quando não usar ficam no inventário. Aqui ficam só os endereços.

| Peça | Nó | Variantes |
|---|---|---|
| barra fixa | `174:21` | largura: desktop, estreita |
| card de case | `101:8` | — |
| trilha / item | `173:31` | estado: ativo, inativo |
| faixa de progresso | `174:35` | — |
| tira de destaques / item | `173:38` | — |
| mídia com legenda | `174:26` | — |
| botão | conjunto | largura: desktop, estreita |
| marca-texto | `174:30` | — |
| marcador de falta | `173:34` | — |
| tabela / linha | `173:49` | tipo: dado, cabeçalho |
| sobreposição / linha | `173:13` | sinal: nenhum, vazio, marcado |
| sobreposição / caixa | `173:19` | — |

São dez peças em doze entradas: a trilha aparece nas duas formas que ela toma, e a
sobreposição é montada de duas partes.

**Um elemento entra no inventário quando aparece em mais de uma tela ou em mais de uma
largura.** Foi esse teste que trouxe o marca-texto, o marcador de falta, a tabela e a
sobreposição — nenhum dos quatro estava na lista original de sete.

---

## O que o sistema ainda não tem

**Acento de sistema** (P49). As definições, três contratos e três decisões citam um *acento de
sistema*. Não existe variável com esse nome — **mas ele foi planejado.** A página *Sistema
visual* diz, sobre as cinco cores de acento: *"duas cores sobram para o sistema: uma para
estado (link, foco, item ativo) e uma livre para a hero."* Com dois cases usando azul e
laranja, sobram **roxo, verde e rosa**. Falta escolher qual é a de estado e batizá-la. O anel
de foco usa `text/primary` até lá.

**Trava de proporção da capa do card.** A API do Figma expõe `targetAspectRatio` como somente
leitura; ligar a trava é ação de interface, à mão. Sem ela, redimensionar o card pode
desalinhar a capa.

**Atalho de salto** (P48). Existe desenhado como proposta e não está em contrato nenhum.

**Traço fora do token, encontrado ao componentizar.** Os botões do desktop usavam 1,5 e os da
tela estreita 1, com `stroke/padrao` valendo 1. Corrigido nos cinco. O defeito sobreviveu
porque ninguém compara o traço de um botão com o de outro numa tela diferente — e é
exatamente o que um componente impede.

**As telas ainda não usam os componentes.** Eles foram criados depois dos wireframes, que
seguem montados com cópias. Enquanto isso não for trocado, a checagem 6 é a única coisa que
compara as sobreposições entre si — e ela compara um export, não o arquivo.

---

## Uma armadilha do Figma, anotada porque já custou caro

**`resize(largura, altura)` desliga o auto-ajuste do texto.** Um texto com `textAutoResize`
em `HEIGHT` que recebe `resize(760, 10)` passa a ter 10px de altura fixa e mostra só a
primeira linha — o texto continua lá, invisível. A ordem certa é redimensionar **e depois**
ligar o auto-ajuste, ou usar `layoutSizingHorizontal = 'FILL'` e deixar o auto-layout medir.

Isso já aconteceu três vezes neste projeto: na frase de abertura do case de Reembolso, em
catorze textos da mesma tela, e em **vinte e nove** textos desta página. Nas três vezes a
estrutura estava certa e o conteúdo estava escondido — nenhuma checagem pega, porque o nó
existe e cabe no pai.

## Como mexer nele

1. **Valor muda na variável**, nunca na peça. Se uma peça tem cor ou medida escrita na mão, é
   defeito.
2. **Peça nova vira componente antes de ser usada duas vezes.** A regra existe porque o
   contrário aconteceu: as sobreposições nasceram como quatro cópias e divergiram em vão,
   tipo, respiro e área de toque — nada disso apareceu até serem comparadas lado a lado.
3. **Reexporte `docs/spec/tokens.json` e `docs/spec/sobreposicoes.json`** depois de mexer no
   Figma. Os dois são gerados; editar à mão quebra o propósito.
4. **Rode `node scripts/checagens.mjs`.** Seis checagens, e a sexta imprime a data do export
   para você saber se está conferindo o presente ou o passado.
