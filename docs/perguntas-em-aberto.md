# Perguntas em aberto — Portfólio

> Lista única do que ainda não foi decidido. **Uma pergunta, um lugar.**
> Cada uma traz: o que precisa ser decidido, as opções conhecidas com a consequência de
> cada uma, a classificação, e — para as que esperam — **o momento em que deixa de poder
> esperar**, sempre um ponto do trabalho, nunca uma data.
>
> Pergunta respondida **sai daqui**. A resposta vira regra no contrato ou nas definições,
> e entrada no log se tiver alternativa real. Lista com metade dos itens riscados deixa de
> ser consultável.

**Atualizado:** 18 de setembro de 2026 · **17 perguntas**, nenhuma travando

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
"LARISSA QUADROS · UX DESIGNER" na hero. A demonstração do Figma não repete — lá o nome só
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

### P48 · O atalho de salto não existe em nenhum contrato
Um case tem 7.000px e toda página tem barra fixa. Sem um "Pular para o conteúdo", quem
navega por teclado atravessa a barra inteira em cada página antes de chegar ao texto. Ele é
um elemento que **só existe enquanto tem foco** — invisível para quem usa o rato. Está desenhado como proposta no quadro 05 da página *Sistema visual*.
**Momento:** antes de publicar.

### P49 · Qual das cinco cores é o acento de sistema
As definições, três contratos e três decisões citam um *acento de sistema* — o sublinhado da
página atual, o que é interativo num case, e agora o anel de foco. **Não existe variável com
esse nome.**

**Mas ele foi planejado.** A página *Sistema visual* (`34:2`) diz, sobre os cinco acentos:
*"Duas cores sobram para o sistema: uma para estado (link, foco, item ativo) e uma livre para
a hero."* Ou seja: a cor de estado sempre saiu de dentro das cinco — só nunca foi escolhida.

Com dois cases usando **azul** (Finanças) e **laranja** (Reembolso), sobram **roxo, verde e
rosa**. Duas delas são o sistema; a terceira fica para o terceiro case.

**O que falta:** escolher qual é a de estado, criar `accent/sistema/*` apontando para ela, e
decidir se o anel de foco passa a usá-la ou continua em `text/primary`.
**Momento:** antes do visual design. Não bloqueia: o anel já está definido sem ela.

### P43 · A coluna de mídia comporta captura de tela de desktop?
A grade nova dá **411px** à mídia de prova. As definições dizem que o case de Finanças mostra
telas de desktop largas e que elas **são a prova visual do trabalho** — reduzidas demais,
viram mancha ilegível. Em 411px uma captura de 1440 cabe em 29% do tamanho.
**Opções:** a mídia larga rompe a coluna e ocupa a largura inteira, quebrando o padrão de
"ao lado" em casos específicos · a captura mostra recorte de detalhe em vez da tela inteira,
o que as definições já preveem para tela estreita · a coluna de mídia cresce e a leitura
encolhe, o que a regra da medida não permite.
**Momento:** antes de produzir as imagens do case de Finanças.

### P42 · Como a construção separa o hero dos capítulos
Nos arquivos de case, o título, a frase de abertura e a tira de destaques estão **dentro do
primeiro capítulo**, antes da prosa dele. A construção precisa distingui-los — e hoje só
conseguiria por posição, que é o tipo de regra que a decisão 006 recusou.
**Opções:** marcar o hero com `<!-- bloco: hero -->`, que já existe no vocabulário e é usado
em `quem-sou-eu.md` · separar o hero num bloco próprio antes do primeiro capítulo · aceitar
regra por posição só neste caso.
**Momento:** antes de implementar a construção da página de case.

### P41 · O texto do título de Trabalhos, em rascunho
Que a página tem título está decidido (040). O texto — *"Dois problemas que eu vi de perto,
e o que fiz com eles."* — é rascunho meu e precisa da voz dela.
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

### P11 · Trilha que se move × movimento reduzido
Tensão entre duas regras: o marcador se move sozinho, e nada se move sem o leitor pedir.
**Opções:** salta sem transição quando movimento reduzido está ligado · transição curta
demais para contar como animação · a regra não se aplica a indicador de posição.
**Momento:** antes de desenhar a trilha. · *Event storming, hotspot 6*

### P12 · Endereço para uma seção do case
Quem recebe link de outra pessoa pode querer apontar para uma etapa específica.
**Momento:** antes de desenhar o domínio Case. · *Event storming, hotspot 8*

### P14 · Volta do protótipo
A pessoa abre o protótipo em nova aba e volta. Trilha e rolagem preservadas?
**Momento:** antes do código. · *Event storming, hotspot 7*

### P15 · Qual domínio
"Domínio próprio" é critério de liberação; nenhum foi escolhido. Publicar em
`lariquadrinhos.github.io` funciona desde já, e apontar um domínio depois não gera
retrabalho — por isso espera.
**Momento:** antes da Fase 6. Comprar leva minutos, mas a propagação de DNS e a emissão do
certificado levam horas.

### P16 · Os textos do site ficam públicos desde já
Seis arquivos entraram no repositório público por um `git add -A`. Os três textos do site
serão públicos no site de qualquer forma; a questão é se antes dele existir.
**Momento:** a qualquer tempo — mas cada dia conta.

---

## Adaptações dos briefings a este projeto

### P17 · Não há Storybook
A checagem de CI 1 e o campo `storybook.usa` se aplicam?
**Momento:** primeira execução da skill do contrato.

## ~~P46~~ — Resolvida pela decisão 051

A regra de medida foi escopada: 65–75 governa leitura contínua; blocos curtos em grade podem
ficar abaixo, com piso em torno de 45.
