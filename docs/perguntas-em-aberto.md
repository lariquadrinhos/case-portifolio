# Perguntas em aberto: Portfólio

> Lista única do que ainda não foi decidido. **Uma pergunta, um lugar.**
> Cada uma traz: o que precisa ser decidido, as opções conhecidas com a consequência de
> cada uma, a classificação, e, para as que esperam, **o momento em que deixa de poder
> esperar**, sempre um ponto do trabalho, nunca uma data.
>
> Pergunta respondida **sai daqui**. A resposta vira regra no contrato ou nas definições,
> e entrada no log se tiver alternativa real. Lista com metade dos itens riscados deixa de
> ser consultável.

**Atualizado:** 1 de outubro de 2026 · **16 perguntas**, nenhuma travando

---

## Travam

Nenhuma.

### P31 · O texto da página de erro, em rascunho
Onde ele vive está decidido (011): no contrato da tela. O texto em si é rascunho meu e
precisa da voz dela.
**Momento:** antes de desenhar a página de erro. · *Contrato, `erro/`*

### P32 · O nome aparece duas vezes na home
As definições dizem que a home tem "nome, cargo, uma frase e um parágrafo", e que a barra
tem "meu nome (clicar volta para a home)". No wireframe isso virou "Larissa" na barra e
"LARISSA QUADROS · UX DESIGNER" na hero. A demonstração do Figma não repete: lá o nome só
aparece na barra.
**Opções:** a barra conta como o nome da home e a hero começa pela frase · o nome fica nos
dois, com pesos diferentes · a hera traz só o cargo.
**Momento:** antes de fechar o wireframe da home. · *Contrato, `home/`*

### ~~P44~~ · Resolvida pela decisão 053
O parágrafo não será escrito. O site publica com dois cases e sem comentar a ausência.

### ~~P45~~ · Resolvida pela decisão 054
"Apresentação" era rótulo de estrutura e virou `<!-- bloco: apresentacao -->`.

### ~~P47~~ · Resolvida pela decisão 056
Texto aprovado e escrito no contrato.

### ~~P48~~ · Resolvida pela decisão 118
Ganhou contrato próprio em `moldura/atalho-de-salto.md`, componente `273:114` e duas telas de
estado. É link e não botão, tem superfície opaca porque flutua, não empurra a barra, e na tela
estreita cobre a faixa de progresso. O destino recebe o foco de verdade, sem isso o salto
seria visual e não de navegação.

### ~~P49~~ · Resolvida pela decisão 084
Roxo para estado, verde para hero, rosa para o terceiro case. Criadas `accent/estado/*` e
`accent/hero/*` como referências.

### ~~P50~~ · Resolvida pela decisão 085
Sem conflito: a página *Sistema visual* nomeia "marcador da trilha" entre os usos do tom forte
do case. O marcador ativo veste a cor do case.

### ~~P52~~ · Resolvida pela decisão 087
O gatilho não muda de aparência, mas declara o estado na marcação. E o véu passou a parar na
barra, que continua clara e tocável.

### ~~P51~~ · Resolvida pela decisão 088
Link não usa a cor de estado: ela é o que distingue o sublinhado de página atual do sublinhado
de link, que têm a mesma forma.

### ~~P53~~ · Resolvida pela decisão 098
Em tela estreita o bloco sangra até as bordas, e o texto dentro fica com a mesma medida da
prosa. No desktop ele fica na coluna, com 66 caracteres, dentro da faixa.

### ~~P54~~ · Resolvida pela decisão 120
A medida real era **105 caracteres**, não 122 nem 148: a banda encolheu quando passou a começar
na margem do texto do case. Criado `line/corpo-largo`: 34 no desktop, 30 em tela pequena. Mesmo
corpo, mais respiro. A escala ganhou um token em vez de um par novo, porque o corpo não muda.

### ~~P55~~ · Resolvida pela decisão 124
O que informa passou para `text/secondary`: 62 nós nas telas e as raízes em três componentes.
`text/tertiary` fica como tom de anotação, que não vai ao ar. Escurecer a cor foi descartado:
sobre o creme não há folga para um terceiro nível que passe. Zero reprovações nos dois temas.

### ~~P56~~ · Resolvida pelas decisões 126 e 127
Criado `border/elevado`: **`#817D74`** no claro, **`#6C6255`** no escuro. Mexer no véu foi
descartado por cálculo. O problema era maior que a pergunta dizia: as sobreposições do desktop e
o atalho de salto não têm véu e reprovavam **também no claro**. O valor claro foi corrigido na
127, depois de eu descobrir que tinha lido o alfa do véu errado. Doze superfícies flutuantes,
zero reprovações nos dois temas.

### P57 · O que a tela estreita deixou de mostrar com a saída das tabelas
A decisão 132 tirou as duas tabelas do estreito. **Alguns números não existem em nenhum outro
lugar do case**, e some quem lê no celular, que é a maioria de quem abre link de portfólio.

| Sai do estreito | Onde mais esse número aparece |
|---|---|
| ~12 → 5 etapas com digitação | *"cinco etapas"* está na prosa; **o "~12" não está em lugar nenhum** |
| 30+ → ~10 telas até o envio | em nenhum |
| 3 → 0 modais em cima do fluxo | em nenhum |
| 44 telas desenhadas | em nenhum |
| 43 telas alcançáveis, 145 ligações | em nenhum |
| 94 variáveis, 18 componentes, 148 ícones | em nenhum |
| 14 scripts de medição | em nenhum |

A frase de abertura do capítulo 5 salva uma parte: *"de dezoito etapas para cinco"*. As demais
não têm resgate.

**Opções:** escrever um parágrafo curto no capítulo 3 e outro no 5 que carreguem os números que
importam, e aí o estreito não perde argumento, é texto autoral, dela · aceitar a perda e deixar
o desktop ser a versão completa · devolver só a tabela de entregas ao estreito como lista de
pares, já que ela nunca foi comparação e empilha sem custo.

**Momento:** antes de publicar. Não trava o desenho.

### ~~P58~~ · Resolvida pela decisão 135
Nenhuma das três opções valia: as três supunham defeito na trilha. **A etapa dura exatamente o
comprimento do capítulo dela**: a janela cancela na conta, então o cenário media capítulo,
não trilha. Reescrito como invariante, com o piso movido de meia tela para um terço e a razão
registrada. **Fica de pé uma observação de conteúdo:** a Introdução do Reembolso tem 240px no
desktop, contra 420 do próximo capítulo mais curto do site. É o único abaixo de 420 e é decisão
dela crescê-lo ou não.

### ~~P62~~ · Resolvida pela decisão 167
**A pergunta estava errada nos fatos.** As lacunas existiam, montadas à mão como quadro solto
mais um texto irmão, em vez de instância do componente. A checagem 14 as ignorou porque procura
pelo nome `mídia de prova`. Nenhuma das três opções que eu listei era a certa: a resposta foi
aplicar uma regra que já estava decidida, peça repetida vira instância, nas doze que tinham
ficado de fora.

### ~~P61~~ · Resolvida pela decisão 163
Ela montou uma segunda mídia para o capítulo: dois mockups no sistema visual remontado, e o
capítulo 4 passou a ser **o único com duas lacunas**. A coluna de prova nasceu daí: no desktop a
mídia era filha única de uma linha horizontal, e duas exigiram uma coluna vertical que as
empilhasse. Nenhuma das três opções que eu tinha listado foi escolhida: a resposta foi produzir a
prova que faltava.

### ~~P60~~ · Resolvida pela decisão 157
**A pergunta estava mal posta.** Não era claro contra escuro: era **temperatura**. O fundo das
versões escuras já era a cor quente da página; o das claras era o cinza neutro que a ferramenta
entrega. A `#F5F5F5` fica a **1,05:1** do creme e ainda assim se vê, porque o olho lê temperatura
antes de claridade. Nenhuma das três opções que eu listei era necessária: **mídia sangra na
página, sem moldura**, e o material é produzido sobre `bg/page` do tema.

### P59 · As duas versões da mídia do capítulo 3 têm altura diferente
O recorte claro tem **411×254** e o escuro **411×240**: 14px de diferença, que é margem do
recorte e não conteúdo: os dois mostram o mesmo trecho do fluxograma. Era 31px antes de ela
refazer os recortes em 30/09.

**No desktop não custa nada:** a mídia vive numa linha de altura fixa, mais alta que ela, e as
duas telas continuam com 7994px. **Na tela estreita custa:** a coluna empilha, e a tela escura
fica **11px mais curta** que a clara, 11.106 contra 11.117.

Isso contraria a ideia de que o tema escuro é a mesma página noutra paleta. Nenhum visitante vê
os dois lados a lado, mas a conferência lado a lado: o método que achou quase todos os defeitos
deste arquivo: passa a acusar diferença em tudo que vem abaixo do capítulo 3 no estreito.

**Opções:** aceitar, porque 25px em 10.950 não muda nada que se veja · igualar os dois recortes
em 279, tirando 31px de margem do claro, que não perde conteúdo · igualar pelo mockup, dando à
moldura a altura maior nos dois temas e deixando uma faixa vazia no escuro, que é a única que
introduz um defeito visível.

**Momento:** antes da próxima conferência lado a lado das telas estreitas. Não trava.

### P43 · A coluna de mídia comporta captura de tela de desktop?
A grade nova dá **411px** à mídia de prova. As definições dizem que o case de Finanças mostra
telas de desktop largas e que elas **são a prova visual do trabalho**: reduzidas demais,
viram mancha ilegível. Em 411px uma captura de 1440 cabe em 29% do tamanho.
**Opções:** a mídia larga rompe a coluna e ocupa a largura inteira, quebrando o padrão de
"ao lado" em casos específicos · a captura mostra recorte de detalhe em vez da tela inteira,
o que as definições já preveem para tela estreita · a coluna de mídia cresce e a leitura
encolhe, o que a regra da medida não permite.
**Momento:** antes de produzir as imagens do case de Finanças.

### ~~P42~~ · Resolvida pela decisão 176
Os dois cases ganharam `<!-- bloco: hero -->` antes do título. O hero termina na última linha
da tira; a prosa do capítulo 1 começa logo depois.

### P63 · As larguras entre 375 e 1440 não foram desenhadas
As telas existem em 1440 e em 375. O código precisava de um ponto de troca e usa **1024**: daí
para cima vale o modo Desktop (grade de 12 colunas, tipografia e margem do desktop); abaixo, o
modo Tela pequena. O número é suposição minha, não decisão.
O que se vê nas pontas: em 1024 a coluna de leitura do case fica com cerca de 48 caracteres,
abaixo do piso de 65; logo abaixo de 1024, a coluna única da tela estreita fica larga demais e
passa dos 75. Acima de 1440 o conteúdo fica centrado em 1440 e as faixas de cor sangram.
**Opções:** desenhar uma largura intermediária (768 ou 1024) · mover o ponto de troca para onde
a medida do texto ainda cabe (perto de 1280) e limitar a largura da coluna estreita · aceitar
como está.
**Momento:** antes de divulgar o endereço. Não trava a revisão. · *Código: `QUEBRA_DESKTOP` em `construcao/tokens.mjs`*

### P64 · Os endereços das páginas
Nenhum documento fixava o caminho de cada página. O código usa, derivado dos nomes dos
arquivos: `/`, `/trabalhos/`, `/trabalhos/financas-pf-pj/`, `/trabalhos/reembolso-sulamerica/`,
`/quem-sou-eu/`, e `404.html` para endereço inexistente (é o que o GitHub Pages serve). Endereço
publicado é promessa: trocar depois quebra link compartilhado.
**Opções:** manter · nomes mais curtos (`/financas/`, `/reembolso/`) · outro.
**Momento:** antes de divulgar o endereço.

### P65 · Valores que o Figma desenha sem variável
O código os concentra num bloco só, no topo de `modelo/estilo.css`, cada um com o nó de origem.
Os que mais pesam: o parágrafo da home no desktop em **26/39** e a identificação em **16**, fora da
escala de tipo (a estreita usa `abertura` e `etiqueta`); o rastreio dos títulos (−2%, −1,5%,
−1%, +6%), que não tem coleção; a sombra das superfícies que flutuam; a barra de 64, a faixa de
44 e a trilha a 100 do topo; o respiro de 20 das pastilhas; a entrada do conteúdo da página de
erro em 160 no desktop. Dois vãos fora da escala foram arredondados para o degrau mais
próximo, como o design system manda: provas → extra (60 → 64, e 28 → 32 na estreita).
**Opções:** criar as variáveis no Figma e reexportar `tokens.json` · corrigir no desenho os que
fugiram da escala · aceitar como medida de componente.
**Momento:** a qualquer tempo; nenhum trava.

### P41 · O texto do título de Trabalhos, em rascunho
Que a página tem título está decidido (040). O texto (*"Dois problemas que eu vi de perto,
e o que fiz com eles."*) é rascunho meu e precisa da voz dela.
**Momento:** antes de publicar Trabalhos.

### ~~P40~~ · Resolvida pela decisão 059
Os três valores foram escolhidos e deixaram de ser provisórios. Capa 3:2 porque a tela
estreita decide; título um degrau abaixo de `titulo-case`; linha em `corpo`.

### P21 · A ordem do "próximo case" com três cases
A decisão 003 resolve dois cases sem exceção, mas não define a ordem com três.
**Opções:** ordem fixa do índice, com o último voltando ao primeiro · o case ainda não lido
nesta sessão · o mais recente primeiro.
**Momento:** antes de o terceiro case existir. · *Contrato, `case/card-proximo-case.md`*

### P09 · Como a estrutura recebe um segundo idioma
**O comportamento já está definido:** trocar de idioma mantém a pessoa na mesma página e na
mesma altura da leitura; o conteúdo já vive separado do código e o controle está previsto
na barra. Falta só o mecanismo estrutural.
**Momento:** Fase 1.

### ~~P11~~ · Resolvida pela decisão 138
A tensão era falsa: *"nada se move sem o leitor pedir"* fala de movimento autônomo, e o marcador
se move porque a pessoa rolou. A terceira opção estava certa e virou regra geral, em três
categorias: o que é derivado da rolagem **não anima nunca**; o que a pessoa aciona e move a
página **salta sem transição** com movimento reduzido; o que aparece ou some **nunca tem
transição**. O sistema não precisa de token de duração.

### P12 · Endereço para uma seção do case
Quem recebe link de outra pessoa pode querer apontar para uma etapa específica.
**Momento:** antes de desenhar o domínio Case. · *Event storming, hotspot 8*

### P14 · Volta do protótipo
A pessoa abre o protótipo em nova aba e volta. Trilha e rolagem preservadas?
**Momento:** antes do código. · *Event storming, hotspot 7*

### P15 · Qual domínio
"Domínio próprio" é critério de liberação; nenhum foi escolhido. Publicar em
`lariquadrinhos.github.io` funciona desde já, e apontar um domínio depois não gera
retrabalho: por isso espera.
**Momento:** antes da Fase 6. Comprar leva minutos, mas a propagação de DNS e a emissão do
certificado levam horas.

### P16 · Os textos do site ficam públicos desde já
Seis arquivos entraram no repositório público por um `git add -A`. Os três textos do site
serão públicos no site de qualquer forma; a questão é se antes dele existir.
**Momento:** a qualquer tempo, mas cada dia conta.

---

## Adaptações dos briefings a este projeto

### P17 · Não há Storybook
A checagem de CI 1 e o campo `storybook.usa` se aplicam?
**Momento:** primeira execução da skill do contrato.

## ~~P46~~: Resolvida pela decisão 051

A regra de medida foi escopada: 65–75 governa leitura contínua; blocos curtos em grade podem
ficar abaixo, com piso em torno de 45.
