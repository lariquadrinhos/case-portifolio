# Design system

**O sistema inteiro vive numa página só:** arquivo Figma `hwClE9Xpm51OW4vPsCCn8J`, página
**Sistema visual** (`34:2`).

Ela começou como o lugar onde a aparência foi pensada e as regras dela escritas. A biblioteca
de peças nasceu numa página separada e voltou para cá — porque as duas iam repetir cor e
tipografia, e informação repetida diverge. **Um lugar só é impossível de divergir.**

| Quadro | O que traz |
|---|---|
| 00 · Princípios | por que cada cor existe, e o que bloco colorido faz |
| 01 · Neutros | os sete neutros, nos dois temas, com contraste medido |
| 02 · Acentos, tema claro | as cinco cores de case, com contraste de cada par |
| 03 · Acentos, tema escuro | os mesmos cinco papéis, com valores próprios |
| 04 · Tipografia | os oito níveis e o que cada um faz |
| 05 · Espaço, forma e foco | a escala, os cantos, o traço, e o anel de foco em cada tipo de alvo |
| 06 · Grade | 12 colunas no desktop, 1 na tela estreita |
| 07 · Componentes | as dez peças, como componentes de verdade |
| 08–09 · Demonstrações | hero e leitura de case, **recortados das telas reais** e montados com as peças |

**O custo aceito:** a página é longa, e mistura dois ritmos — as regras quase não mudam, a
biblioteca muda toda semana. Aceito porque o outro arranjo já tinha começado a divergir no
primeiro dia.

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

**Três autoridades, sem sobreposição.** Valor é a variável. Regra de aparência é a página
*Sistema visual*. Comportamento é o contrato. Quem discordar de uma delas está errado no seu
próprio terreno.

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
| Botão preenchido | ação que acontece aqui **e é a principal da página** | dois lugares: a ação da home e o convite ao contato no fim de um case |
| Palavra sublinhada | vai para fora do site | currículo, LinkedIn, e-mail, repositório |
| Palavra simples | outra página daqui | barra, menu, saídas da página de erro |

**Botão não usa cor de acento.** É preenchido em `text/primary`, com rótulo em `bg/surface`
— os dois invertem junto com o tema. **Não existe botão secundário**, porque botão é a ação
principal da página e o site nunca tem duas; por isso não há variante de contorno para marcar
uma hierarquia que não existe.

**Link não usa a cor de estado.** O sublinhado da página atual e o sublinhado de um link são
a mesma forma — traço de 2px sob a palavra — e hoje só a cor os separa: roxo num, cor de texto
no outro. Pintar links de roxo colapsaria a única distinção entre *onde estou* e *isto sai
daqui*. A cor de estado fica para a posição do leitor; a forma já diz o destino.

**Alvo nunca abaixo de 44px.** Vale para toda linha de lista, toda opção, todo botão. A
checagem 6 cobra nas sobreposições.

**Foco visível em tudo que recebe foco**, inclusive região que rola. Foco é o que mostra em
que elemento a pessoa está quando navega pelo teclado em vez do rato — sem ele, quem aperta
Tab navega às cegas. Aparece só na navegação por teclado.

O anel tem **afastamento**, e ele não é enfeite: é o que garante que o anel caia sempre sobre
a superfície de fundo, nunca sobre a cor do próprio elemento — e é por isso que **uma cor de
anel basta por tema**, sem precisar de dois tons. O quadro 05 mostra os dois estados lado a
lado e o anel em cada tipo de alvo que o site tem.

**Medida de linha entre 65 e 75 caracteres no texto corrido, onde houver largura.** Blocos
curtos em grade podem ficar abaixo, com piso por volta de 45. Tabela não obedece: é dado, e o
que governa é a comparação ficar legível lado a lado. **A banda do extra é a única exceção
declarada** — 148 caracteres, o dobro do teto, porque ali a largura é o que diz que aquilo
não é o case.

---

## As dez peças

Descrição, estados e quando não usar ficam no inventário. Aqui ficam só os endereços.

As peças vivem no quadro **07 · Componentes**.

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

**Papéis de acento, resolvidos.** Das cinco cores, **azul** é o case de Finanças, **laranja**
o de Reembolso, **roxo** é a cor de estado, **verde** é a da hero e **rosa** fica para o
terceiro case. Estado e hero existem como referência — `accent/estado/*` e `accent/hero/*` —
apontando para roxo e verde: trocar um papel é trocar num lugar só.

**~~Acento de sistema~~** (era P49). As definições, três contratos e três decisões citam um *acento de
sistema*. Não existe variável com esse nome — **mas ele foi planejado.** O quadro **02 · Acentos** diz, sobre as cinco cores: *"duas cores sobram para o sistema: uma para
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
4. **Rode `node scripts/checagens.mjs`.** Oito checagens. A sexta e a sétima imprimem a data
   do export, para você saber se está conferindo o presente ou o passado.

**Quadro não corta o próprio conteúdo, e a checagem 8 cobra.** Conteúdo cortado é o defeito
mais silencioso deste arquivo: ele existe, cabe na estrutura e simplesmente não aparece.
Aconteceu quatro vezes num dia. Os dois cortes legítimos — janela sobre uma página maior e
conteúdo que rola — ficam declarados **no nome do quadro**: `· recorte` e
`rola na horizontal`.

**Conjunto de variantes cabe na largura da seção.** As variantes se organizam em linhas que
quebram em 1440 — a largura útil do quadro. Em fila única, o card de case dava 2054px e a
trilha 2057: **o que passava da borda era cortado e simplesmente não existia para quem
olhasse**. Variante escondida é pior que variante ausente, porque a lista parece completa.

**Quadro de arrumação não tem fundo.** Só três coisas pintam superfície neste site: a página
(`bg/page`), a sobreposição (`bg/surface`) e o card, que usa o tom pálido do case. Coluna,
capítulo, linha de tabela, cabeçalho — tudo isso é transparente, e é o creme da página que
aparece através. Um quadro branco no meio de uma página creme é quase invisível no Figma e
gritante na tela.

**Toda cor vem de variável, e a checagem 7 cobra.** O único isento é o que está marcado como
*anotação* no próprio nome do nó — cromo de documentação, como as colunas do diagrama de
grade. A marca fica no nome para a isenção ser visível no Figma, e não só no script.
