---
fluxo: componentes/inventario
dominio: componentes
dono: design
status: lista fechada, sete por desenhar
atualizado: 2026-09-21
---

# Inventário de componentes

> **As peças existem como componentes de verdade** no quadro **07 · Componentes** da página
> **Sistema visual** (`34:2`) do arquivo de design. Os endereços de cada uma estão em [`docs/design-system.md`](../../design-system.md),
> que também traz as quatro coleções de variáveis e as regras que atravessam todas as peças.

O design system. **Cada componente ganha o seu próprio arquivo neste domínio** quando for
desenhado; este inventário existe para que a lista seja visível antes de qualquer um
existir.

## Regras

- **Valores não entram aqui.** Cor, tamanho e espaço vivem nas variáveis do Figma; repetir
  criaria a segunda fonte de verdade que o projeto existe para evitar.
- O que entra é **o que a variável não diz**: para que serve, quando não usar, que estados
  existem.
- Todo componente lista os estados que tem — vazio, carregando, erro, foco, sobre, ativo,
  desabilitado, o que existir. **Estado que não está escrito é estado que alguém vai
  inventar na hora de construir.**
- **Acessibilidade não é componente à parte.** Foco visível, navegação por teclado e
  respeito a movimento reduzido aparecem dentro de cada um.

### O anel de foco, que vale para todos

Demonstrado em `155:42`.

- **Anel de 2px, afastado 2px do elemento, seguindo a forma dele** — canto arredondado no
  botão, canto do card no card, caixa do texto no link.
- **O afastamento é o que permite uma cor só por tema.** Como o anel nunca encosta no
  elemento, ele cai sempre sobre a superfície de fundo — e dentro de um tema todas as
  superfícies são da mesma família de claridade, inclusive as cinco cores de case. Sem o
  afastamento, o anel disputaria com a cor do próprio elemento e precisaria de dois tons.
- **Aparece no foco por teclado, não no clique.** Quem usa o rato não vê anel nenhum; quem
  navega por teclado vê sempre.
- **O que recebe foco é o alvo inteiro, não o texto dentro dele.** No card de case o anel
  envolve o card, porque o card todo é o link — não só o título.
- **Região que rola recebe foco.** A tabela em tela estreita precisa ser alcançável pelo
  teclado para poder ser rolada; sem isso, metade da comparação fica inacessível a quem não
  usa o dedo.
- A cor do anel usa `text/primary` do tema em vigor. **Não usa "acento de sistema"** — que é
  citado em três contratos e nas definições, e não existe como token. Ver P49.
- Um nome só, nos três lugares: frame no Figma, título aqui, nome no código.

## A lista

Dez, conferidos contra as telas desenhadas — a lista abriu em sete e já mudou três vezes. Cada um vira arquivo próprio quando for
desenhado.

| # | Componente | Onde aparece | Existe no Figma? |
|---|---|---|---|
| 1 | barra fixa | as cinco telas, nas duas larguras | **sim**, `174:21` |
| 2 | card de case | índice e fim de case | **sim**, `101:8` |
| 3 | trilha | trilha lateral no desktop, faixa de progresso no estreito | **sim**, `173:31` e `174:35` |
| 4 | tira de destaques | case, chave e valor | **sim**, `173:38` |
| 5 | bloco de mídia com legenda | case, 12 ocorrências | **sim**, `174:26` |
| 6 | botão | **um lugar só**: o convite ao contato no fim do case | **sim**, `173:22` |
| 7 | marca-texto | home e case, nas duas larguras | **sim**, `174:30` |
| 8 | marcador de falta | case e "Quem sou eu", 19 ocorrências | **sim**, `173:34` |
| 9 | tabela de comparação | case de Reembolso, nas duas larguras | **sim**, `173:49` |
| 10 | sobreposição | contato, menu e tema — 4 telas, as duas larguras | **sim**, `173:13` e `173:19` |

### O que mudou em relação aos sete previstos

- **Entraram dois** que a lista não tinha: **marca-texto** e **marcador de falta**. Os dois se
  repetem em mais de uma tela e em mais de uma largura, que é o teste.
- **Saiu um: campo de foco.** Não é componente — é token. A regra deste inventário já diz que
  acessibilidade vive dentro de cada componente, e `foco/largura` e `foco/afastamento` já
  existem nas variáveis. Mantê-lo na lista criaria uma peça que ninguém instancia.
- **O botão encolheu de escopo.** Depois das decisões 047, 052 e 055 ele sobrevive em um único
  lugar. Continua componente, mas com uma variante e um uso.

### A nona entrou pelo próprio teste

A **tabela de comparação** apareceu quando o segundo case foi desenhado, dias depois de a
lista ser fechada em oito. Ela entrou sozinha: aparece nas duas larguras, que é o teste. Isso
é a lista funcionando, não a lista furando — o inventário foi escrito para crescer assim.

### O que a lista revelou

**Quando esta lista foi fechada, só um dos oito era componente de verdade.** A barra estava
copiada dez vezes: mudá-la era mudar dez lugares à mão. Isso foi resolvido em 22/09 — as dez
peças viraram componentes na página Design System.

**Mas as telas ainda não os usam.** Os wireframes seguem montados com cópias, feitas antes de
os componentes existirem. Trocar cópia por instância é trabalho que falta, e até lá a
divergência entre telas continua possível.

### sobreposição

Contato revelado, menu da tela estreita e controle de tema. **É uma peça só**, e só ficou
claro depois de conferir as quatro lado a lado.

- **Casca:** canto de 10, traço de 1, sombra a 8 de deslocamento e 24 de raio, respiro de 8
  em cima e embaixo, sem espaço entre as linhas.
- **Miolo:** lista de linhas. **A linha inteira é o alvo**, com 12 de respiro em cima e
  embaixo — 54px de alvo no desktop, 56 na estreita. Texto solto daria 32, abaixo dos 44
  confortáveis para dedo.
- **A linha ocupa a caixa mesmo com texto curto**, senão opções irmãs ficam com alvos
  diferentes.
- **Coluna do sinal** só existe onde há escolha marcada — tema e menu têm, contato não. Onde
  existe, todas as linhas a reservam, inclusive as sem marca, para os rótulos alinharem.
- **Largura:** abraça o conteúdo no desktop, ocupa a largura disponível na estreita. Nunca é
  número escolhido.
- **Fica a 12 do que a abriu.** Quando o gatilho é item da barra, pende da borda de baixo da
  barra, não da palavra.
- **Véu só na tela estreita** — ali o dedo não tem mira fina e o véu é o alvo grande para
  recolher; no desktop o clique fora já é preciso.
- Esc ou acionar fora recolhe, e o foco volta para o que a abriu.
- **A checagem 6 confere as quatro contra `docs/spec/sobreposicoes.json`**, que é exportado do
  Figma. Ela existe porque a peça ainda é quatro cópias: se virar componente de verdade, a
  uniformidade passa a ser imposta e a checagem vira redundante.

### card de case

Usado no índice de Trabalhos e ao fim de cada case. Carrega a cor do case de destino.

- **Capa em 3:2 exato**, no topo, ocupando a largura do card. **Quem decide a proporção é a
  tela estreita.** A mesma imagem serve os dois tamanhos: em 628 ela tem 417px de altura, em
  327 tem 218. Uma proporção mais rasa — 2:1 — daria 163px no card estreito, curto demais
  para uma composição de produto continuar legível. O desktop toleraria qualquer coisa; o
  estreito não.
- **Consequência da proporção: a capa é composição, não captura.** Nenhum dos dois cases tem
  material nativo em 3:2 — Finanças são capturas largas de desktop, Reembolso são telas altas
  de celular. As duas capas precisam ser montadas.
- Abaixo dela, título e a linha de tensão, com respiro entre os dois e margem em volta.
- **O componente não mantém a proporção da capa ao ser redimensionado** — a altura é fixa e
  precisa ser ajustada em cada instância. É limitação da construção de hoje, e a Fase 2
  precisa resolver, senão cada tela ajusta à mão e elas divergem.
- **Texto padrão do componente propaga para as instâncias; texto sobrescrito, não.** O card
  traz o conteúdo de um dos cases como padrão, e o outro é sobrescrito em cada uso — então
  corrigir o arquivo de conteúdo sincroniza um e deixa o outro para trás. Enquanto o Figma
  guardar cópia do texto, essa assimetria existe.
- **Título em `titulo-cap`** (36 desktop / 26 estreito). O card mostra um **título de case**,
  que na página do case é `titulo-case`. Um degrau abaixo é a forma reduzida do mesmo texto.
  Dois degraus — `subtitulo`, 22 — poriam o título de um case abaixo dos nomes dos valores em
  "Quem sou eu", invertendo a ordem das coisas.
- **Linha de tensão em `corpo`** (18/30). É frase para ler, não metadado. `apoio` a
  rebaixaria a legenda; `abertura` a faria competir com o título.
- **A trava de proporção da capa é ação de interface.** A API expõe `targetAspectRatio` como
  somente leitura, então ligar a trava precisa ser feito no Figma à mão. Enquanto não for,
  redimensionar o card à mão pode desalinhar a capa — hoje as nove cópias estão em 1,501.

## Peças

| Nome no cenário | Figma | Storybook |
|---|---|---|
| card de case | `101:8` | não se aplica |
| — os outros sete | por desenhar | não se aplica |

## Comportamento

```gherkin
# language: pt
Funcionalidade: Inventário de componentes

  Cenário: Um componente novo é desenhado
    Quando um componente é fechado no Figma
    Então ele ganha um arquivo próprio neste domínio
    E o arquivo lista suas variantes, seus estados e quando não usar
    E o arquivo não repete nenhum valor que já vive nas variáveis

  Cenário: A lista de componentes está fechada
    Dado que as cinco telas estão desenhadas nas duas larguras
    Então o inventário lista oito componentes
    E cada um deles aparece em mais de uma tela ou em mais de uma largura
    E nenhum item da lista é um valor que já vive nas variáveis

  Cenário: Um elemento repetido que não está na lista
    Quando um elemento passa a aparecer em mais de uma tela ou largura
    Então ele entra neste inventário
    E deixa de ser cópia solta
```

## Transições

| De | Gatilho | Para |
|---|---|---|
| — | — | Componentes não têm transição própria; ela vive na tela que os usa |
