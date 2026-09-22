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

Demonstrado no quadro **05 · Espaço, forma e foco** da página *Sistema visual*.

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

Doze, conferidos contra as telas desenhadas — a lista abriu em sete e já mudou cinco vezes. Cada um vira arquivo próprio quando for
desenhado.

| # | Componente | Onde aparece | Existe no Figma? |
|---|---|---|---|
| 1 | barra fixa | as cinco telas, nas duas larguras | **sim**, `174:21` |
| 2 | card de case | índice e fim de case | **sim**, `101:8` |
| 3 | trilha | trilha lateral no desktop, faixa de progresso no estreito | **sim**, `173:31` e `174:35` |
| 4 | tira de destaques | case, chave e valor | **sim**, `173:38` |
| 5 | bloco de mídia com legenda | case, 12 ocorrências | **sim**, `174:26` |
| 6 | botão | dois lugares: a ação da home e o convite ao contato no fim do case | **sim**, 2 variantes |
| 7 | marca-texto | home e case, nas duas larguras | **sim**, `174:30` |
| 8 | marcador de falta | case e "Quem sou eu", 19 ocorrências | **sim**, `173:34` |
| 9 | tabela de comparação | case de Reembolso, nas duas larguras | **sim**, `173:49` |
| 10 | sobreposição | contato, menu e tema — 4 telas, as duas larguras | **sim**, `173:13` e `173:19` |
| 11 | item da barra | dentro da barra, 27 ocorrências | **sim** |
| 12 | bloco de destaque | case de Reembolso, 4 por largura | **sim**, 4 variantes |

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

### barra fixa

**Seis variantes: duas larguras por três páginas atuais.**

- **Altura 64 nas duas larguras.** O conteúdo é do mesmo tamanho nos dois, então não havia o
  que justificasse 72 no desktop. O respiro passa a ser consequência da altura, não escolha.
- **O sublinhado da página atual mora dentro da peça**, como variante — antes era retângulo
  solto, posicionado à mão em cada tela.
- **Em tela estreita, `atual=quem-sou-eu` sublinha "Menu"**, porque é lá que essa página mora.
  A variante carrega essa regra em vez de deixá-la para quem monta a tela lembrar.
- **Home e erro usam `atual=nenhuma`.** Não é ausência de indicador: na home a pessoa está na
  entrada, e na página de erro não está em lugar nenhum.
- Nenhum item recebe borda, fundo ou destaque. Toda cor vem de variável.
- **Os itens são instâncias de `barra / item`.** As seis variantes guardavam 27 nós de texto
  com o mesmo estilo; mudar o corpo dos itens era editar 27 lugares. Agora é um.
- **Contato, Tema e Menu não têm componente próprio, e não precisam.** São o mesmo item da
  barra — a barra **não distingue navegação de gatilho por aparência, só por comportamento**,
  e foi a decisão 030 que estabeleceu isso. Um componente por gatilho acrescentaria camada
  sem tirar cópia, e criaria uma diferença visual onde o projeto decidiu não ter nenhuma.

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
- **A caixa é casca, não recipiente.** Instância do Figma não aceita filho novo, então uma
  sobreposição com número variável de linhas — a lista de etapas tem cinco num case e seis no
  outro — é montada copiando a casca e instanciando as linhas. Só a linha é reutilizável de
  verdade. **É por isso que a checagem 6 precisa existir:** ela é o que mantém as cópias da
  casca honestas umas com as outras.
- **A checagem 6 confere as quatro contra `docs/spec/sobreposicoes.json`**, que é exportado do
  Figma. Ela existe porque a peça ainda é quatro cópias: se virar componente de verdade, a
  uniformidade passa a ser imposta e a checagem vira redundante.

### marca-texto

Realce atrás da frase que carrega a home ou o case. É o único uso de acento fora dos cases.

- **Altura: 75% da entrelinha, centrada na linha.** Vinte e seis numa linha de 34, vinte e
  quatro numa de 32, setenta e dois numa de 96. Antes cada realce era ajustado à mão e a
  proporção variava de 71% a 79% conforme o tamanho.
- **Um realce por linha quebrada.** No site é um elemento só e o navegador desenha por linha;
  no Figma cada linha precisa do seu retângulo. Quando a frase quebra diferente entre as
  larguras, o número de realces muda — e é aí que se esquece um.
- **A cor vem de variável**, e é a reservada à hero: as cinco cores de acento pertencem aos
  cases, menos duas que ficam para o sistema — uma para estado e uma para a hero. Ver P49.
- **Cobre a frase, não a linha.** Começa onde a frase começa, mesmo que seja no meio de uma
  linha, e termina onde ela termina.

### bloco de destaque

Fundo pálido da cor do case atrás da **frase que sustenta um capítulo**. Quatro variantes:
duas cores por duas larguras.

- **Uma por capítulo, no máximo.** Bloco colorido é pontuação, não estilo de parágrafo: texto
  corrido inteiro sobre cor cansa e anula o efeito.
- Usa o **tom pálido** do case, que é o papel de superfície — recebe texto escuro e não disputa
  com a prosa em volta.
- **Em tela estreita a instância ocupa a largura da tela**, não a da coluna: o respiro do
  bloco substitui a margem da página, e o texto dentro fica com a mesma medida da prosa. Por
  isso o capítulo estreito passou a ter 375 de largura, com o respiro dentro das colunas de
  leitura em vez de no capítulo.
- **Em uso nos dois cases**: três capítulos no Reembolso, dois no de Finanças. A diferença
  vem do texto — o Reembolso tem capítulos longos, o outro tem capítulos curtos e uniformes.
- **Qual frase recebe o bloco é decisão de conteúdo**, não de layout: é escolher qual frase
  sustenta o capítulo. Ver as escolhas em `case/pagina-de-case.md`.
- **Ele caiu da lista quando a P30 foi resolvida**, e o motivo provável é colisão de nome: o
  case tem uma "tira de destaques" — as chaves do topo — que é outra peça. Nomes parecidos
  para coisas diferentes fazem uma passar pela outra.

### botão

Duas variantes: desktop, que abraça o rótulo, e estreita, que ocupa a coluna.

- **Preenchido em `text/primary`, rótulo em `bg/surface`.** Os dois invertem junto com o tema.
- **Não existe contorno.** Botão é a ação principal da página e o site nunca tem duas — não há
  botão secundário para um contorno marcar. Antes do acerto, "Falar comigo" era contorno no
  desktop e preenchido no estreito: a mesma peça com dois pesos, sem razão.
- **Não usa cor de acento.** A cor de estado ficou reservada à posição do leitor — foco e
  página atual. Ver decisão 093.
- Existe em dois lugares: a ação da home e o convite ao contato no fim de um case.

### card de case

Usado no índice de Trabalhos e ao fim de cada case. **Quatro variantes: cor × largura.**

- **A superfície do card carrega a cor do case de destino**, no tom pálido — que é o papel
  de `surface` no sistema: recebe texto escuro e não disputa com a leitura. O tom forte fica
  para detalhe gráfico, e o card não usa nenhum.
- **Capa em 3:2 exato**, no topo, ocupando a largura do card. A proporção foi escolhida pela
  tela estreita: em 327 de largura, 2:1 daria 163px de altura, curto demais para uma
  composição de produto continuar legível.
- **Título em `titulo-cap`** (36 desktop / 26 estreito). O card mostra um título de case, que
  na página dele é `titulo-case`; um degrau abaixo é a forma reduzida do mesmo texto.
- **Linha de tensão em `corpo`**. É frase para ler, não metadado.
- **Toda cor vem de variável.** O card funciona nos dois temas — antes tinha branco, cinza e
  preto escritos à mão, e teria ficado branco numa página escura.
- **Acrescentar um case é acrescentar variante, não redimensionar à mão.** As larguras eram
  ajustadas instância a instância; agora cada largura é uma variante, e a capa não sai do 3:2
  porque ninguém a estica.
- **O texto padrão do componente é genérico** — "Título do case". Isso resolve a assimetria
  que existia: quando o padrão era o conteúdo de um dos cases, corrigir o arquivo de texto
  sincronizava aquele e deixava o outro para trás. Com padrão genérico, **toda instância
  sobrescreve**, e nenhuma finge estar sincronizada.
- **Alturas diferentes entre instâncias são do texto, não do desenho.** Uma linha de tensão
  que ocupa três linhas faz o card crescer; isso é o componente funcionando.

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
