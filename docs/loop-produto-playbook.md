# Playbook do loop de produto — Portfólio

> Registro de como o trabalho foi conduzido com o Claude.
> Os prompts estão copiados literalmente. Nenhum foi reescrito depois para parecer melhor.

> **Declaração de origem.** Esta primeira leva de entradas foi escrita **ao fim da sessão
> de 18/09/2026, não durante ela.** Os prompts não foram reconstruídos de memória — foram
> copiados do registro literal da conversa, que estava inteiro disponível. O que não
> sobreviveu é a sensação do momento: o que pareceu certo antes de se mostrar errado. As
> entradas seguintes serão escritas durante o trabalho, como o método exige.

> **Dado pessoal.** Os prompts contêm nome e e-mail da autora. Não houve substituição:
> ambos já são públicos por decisão dela, registrada no log (004).

---

## Trecho 1 · Do material de referência às diretrizes do projeto

**Para que serve.** Transformar textos de método em um documento que governa o projeto.
**Antes de começar, precisa existir:** os materiais de referência, e um repositório.

### Volta 1 — a proposta genérica, recusada

**Pedido**

> Quero criar um site (portfolio) e linkar com meu figma, linkedin e github. Um site estático. O que vc me sugere de mais simples possível e até gratuito?

**Voltou.** Um `index.html` pronto, com placeholders, publicado no GitHub Pages em poucos
minutos. Funcionava. Era irrelevante.

**Conferi contra.** Nada escrito — e esse é o ponto. Não havia critério ainda, então
qualquer resultado plausível passava. A resposta veio do padrão de mercado, não do projeto.

**Corrigi com**

> não é nada disso que eu quero fazer agora. brigada pela explicação, mas eu tenho outro plano. eu quero criar todo o meu portfolio do zero. da ideia ao codigo, depois eu vejo onde ele vai viver. pode ser?

### Volta 2 — o processo proposto, também recusado

**Voltou.** Um processo de quatro etapas, meu, com cinco perguntas de descoberta em bloco.

**Conferi contra.** Ela não tinha pedido processo.

**Corrigi com**

> também não querso seguir esse processo, vem comigo que vou te explicando no caminho. o plano é bem maior que esse. vamos considerar agora o maarco zero. ponto de inicio e começamos, beleza?

**O que isso ensinou.** Duas recusas seguidas antes de qualquer trabalho útil. As duas
pelo mesmo motivo: eu propondo direção em vez de executar. Virou a Diretriz 0.1, escrita
só muito depois, porque o erro se repetiu mais duas vezes.

### Volta 3 — o pedido que produziu o documento

**Pedido** (acompanhado de cinco links: guia de campo do Fable, A Arte de Fazer Perguntas,
Loop Engineering, PRD da PM3, Artifacts no Claude Code)

> Dado todo o material e instruções acima, vamos construir um documento de instruções para esse projeto novo, a fim de criar uma habilidade que poderá ser usada em qualquer etapa do processo, refletindo os pensamentos e diretrizes do projeto. Não assuma premissas e adicione isso como uma das principais diretrizes.

**Voltou.** A skill `diretrizes`, com a Diretriz 0 — não assumir premissas — declarada com
precedência sobre todas as outras, e um registro de incógnitas com doze itens em aberto.

**Conferi contra.** Os cinco materiais, lidos antes de escrever. O da EPAM bloqueou acesso
automatizado duas vezes (403) e só foi lido abrindo no Chrome — registrado porque escrever
"baseado no artigo" sem ter lido o artigo violaria a diretriz principal na primeira linha.

**Terminou quando.** O documento passou a recusar preencher lacuna com conteúdo plausível,
e as lacunas viraram lista.

**O que costuma dar errado.** Responder a um pedido de método propondo método próprio.

---

## Trecho 2 · Instrumentação

**Para que serve.** Pôr de pé ferramenta e estrutura antes de qualquer conteúdo.

### Volta 1 — o Spec Kit instalado cedo demais

**Pedido**

> instala o spec kit

**Voltou.** Spec Kit v1.0.8 instalado, dez skills, `.specify/`. E uma constatação minha
logo depois: o fluxo dele duplicava o método próprio do projeto.

**Conferi contra.** O documento de definições — que eu **ainda não tinha lido**, porque
ainda não sabia que existia. Foi esse o erro: recomendei e instalei uma ferramenta de
processo sem conhecer o processo que já existia.

**O que isso ensinou.** A instalação não foi revertida no fim (decisão 010), mas pelo
motivo oposto ao que eu supunha. Eu queria desinstalar por achar que spec e contrato
diziam a mesma coisa. Não dizem — e quem corrigiu foi ela.

### Volta 2 — o `git add -A` que publicou o que ninguém tinha olhado

**Voltou.** Um commit meu levou seis arquivos dela para um repositório público: o documento
de definições, os dois cases, o "Quem sou eu" e três briefings. Eu não sabia que existiam.

**Conferi contra.** A Diretriz 8, que eu mesma havia escrito duas horas antes: *"público
por padrão é risco"*. Escrevi a regra e violei pelo mecanismo exato que ela descreve.

**Corrigi com** a remoção do documento de definições para `_privado/`, a pedido dela — e o
aviso de que os outros cinco continuavam públicos, em vez de decidir por ela.

**O que costuma dar errado.** `git add -A` varre o que ninguém examinou. O histórico do Git
guarda o que foi publicado mesmo depois de remover.

---

## Trecho 3 · Do documento de definições ao PRD

**Para que serve.** Extrair a camada de produto de um documento que contém muito mais que produto.

**Pedido**

> leia o documento definicoes-produto-portfolio.md e a partir dele crie o prd

**Voltou.** Um PRD de 338 linhas. O trabalho não foi resumir — foi **separar camadas**.
Ficou de fora, de propósito: valores visuais (vivem no Figma), comportamento de tela (vive
no contrato), método e arquitetura de documentação (vivem nas definições).

**Conferi contra.** A regra de trabalho 1 dela: cada coisa em um lugar só. Copiar o visual
para o PRD teria criado a segunda fonte de verdade que o documento inteiro existe para evitar.

**Terminou quando.** O PRD registrou oito decisões em aberto, e duas delas eram ausências
no documento de origem: o nome dela e o cargo nunca apareciam nas 462 linhas, e nenhum
domínio havia sido escolhido apesar de "domínio próprio" ser critério de liberação.

**O que costuma dar errado.** Deduzir o cargo do contexto. "Designer de Produto" teria
passado despercebido e viraria a primeira linha do site sem ela ter escolhido a palavra.
A resposta estava no `quem-sou-eu.md`: **UX Designer**, escrito por ela.

---

## Trecho 4 · Event storming

**Para que serve.** Mapear eventos e atores antes de decidir qualquer comportamento.

**Pedido**

> Bora para o event storming, usa a skill

**Voltou.** A skill não existia neste projeto — estava em `bigorna`, outro projeto dela.
Localizada, lida e seguida sem ser copiada. Resultado: seis linhas de tempo, dez hotspots,
nenhum preenchido.

**Conferi contra.** A referência de event storming dela, que avisa: em green field, o risco
é convergir cedo demais. Por isso o mapa não decidiu nada.

**Terminou quando.** O mapa confirmou os nove domínios das definições sem sugerir nenhum
novo — sinal a favor do documento original, não do mapa.

**O que costuma dar errado.** Em revisão posterior apareceram duas lacunas minhas: a
página "Quem sou eu" não tinha linha do tempo nenhuma, e a prévia do link compartilhado —
que acontece antes de qualquer página carregar — não estava mapeada.

---

## Trecho 5 · Construir as skills a partir dos briefings

**Para que serve.** Transformar três briefings em três skills operacionais.

**Pedido**

> e por ultimo leia: skill-contrato-de-comportamento, skill-log-de-decisoes e skill-loop-produto-playbook e crie as skills a partir das instruções

**Voltou.** Três skills. As de log e playbook saíram fiéis. **A do contrato saiu com a
identidade errada.**

**Conferi contra.** Nada, na primeira volta — e foi esse o defeito. Eu transcrevi as
mecânicas do briefing sem entender o que o documento é.

**Corrigi com**

> contrato-de-comportamento é um documento que contem o manual de telas, pra cada tela criada no figma elas vão ser descrevidas e linkadas com o intuito de unificar o trabalho de designer e desenvolvedor que é o que eu to fazendo aqui, eu sou os dois, então para facilitar o desenvolvimento sera criado esse manual. os documentos da spec são diferentes, isso nào é conteudo repetido. le de novo skill-contrato-de-comportamento e revisa a skill, esse documento é um dos mais importantes, preciso que você entenda bem o que ele é

**O que isso ensinou.** O briefing abre dizendo que o comportamento de uma tela é
*"redigitado quatro vezes, por quatro pessoas, com quatro interpretações"* e que o contrato
move a escrita para quem tem a informação, uma vez só. **Eu li isso como justificativa. É a
definição.** Daí tratei a spec do Spec Kit como concorrente do contrato e recomendei
desinstalar o Spec Kit — recomendação errada, com argumento errado.

A skill foi reescrita: a identidade dela passou a ser *manual de telas*, e ganhou a seção
que faltava inteira — por que o contrato importa **mais**, e não menos, quando designer e
desenvolvedor são a mesma pessoa. O handoff não desapareceu; deixou de atravessar duas
pessoas e passou a atravessar o tempo.

**O que costuma dar errado.** Transcrever mecânica sem entender identidade. O documento
fica correto em cada regra e errado no todo.

---

## Trecho 6 · Resolver as perguntas que travavam

**Para que serve.** Fechar o que impedia qualquer avanço, uma de cada vez.

### Volta 1 — as duas decisões de produto

Resolvidas P03, o card do próximo case, e P04, o contato com dois destinos. A proposta dela
para o contato — e-mail visível ao lado do nome, na barra — foi recusada com três motivos
medidos: não cabe em tela estreita sem truncar, tornaria o contato a informação mais
destacada de toda página, e ocuparia mais largura que "Trabalhos" e "Quem sou eu" somados.

**Conferi contra.** As definições: *"misturar os dois faz o contato competir por atenção
com os cases"*. O motivo da ideia dela sobreviveu na contraproposta, como cenário no
contrato: se o cliente de e-mail não abrir, o endereço continua visível e copiável.

### Volta 2 — a decisão que eu estava tomando cedo demais

**Voltou.** Eu comparando três mecanismos de exportação de tokens do Figma.

**Corrigi com**

> eu acho que você ainda não precisa exportar nenhuma cor porque eu ainda vou criar o design system lá no figma com todos as variaies e componentes, porque você ta decidindo isso agor?

**O que isso ensinou.** A Fase 1 dela pede *"como os tokens entram no código"*. Eu li como
escolha de ferramenta; o texto diz princípio. E a pergunta nunca tinha sido bloqueio da
stack — eu a havia classificado como travando por associação, não por análise.

### Volta 3 — a stack, e o argumento que caiu

**Voltou.** Recomendação de Astro, sustentada principalmente pela otimização de imagem.

**Corrigi com**

> pensei que a gente ia escrever juntos aqui

**O que isso ensinou.** O argumento caiu sozinho quando examinado: o conjunto de imagens
dos cases é **fixo**, preparado uma vez, não gerado a cada construção. Sem isso, sobrava
pouco a favor de quatrocentos megabytes de dependência — e do outro lado havia a dívida de
compreensão, que eu tinha escrito nas diretrizes e não apliquei.

### Volta 4 — ir para o código antes de qualquer desenho

**Voltou.** Eu perguntando por onde começar a escrever.

**Corrigi com**

> beleza, mas pera ai. le de novo o definicoes-produto, lá diz que tudo existe primeiro no figma antes de qualquer codigo e eu também já falei pra você que devia me seguir. a gente nem fez nada no figma ainda

**O que isso ensinou.** Decidir a stack era correto — a Fase 1 se chama "Decidir antes de
desenhar". Começar a escrever não era. Eu tinha o parágrafo em contexto: *"o código vem
depois, implementando o que já foi decidido, não decidindo enquanto constrói"*.

**Terminou quando.** Nenhuma pergunta travando, e nada de código escrito.

**O que costuma dar errado.** Tratar a resolução de uma pergunta como autorização para a
etapa seguinte. Resolver a stack não abre a fase de código — só tira um impedimento.

---

## O que se repetiu ao longo da sessão

Quatro correções dela sobre a mesma coisa: eu propondo a direção do trabalho em vez de
executar e parar. Virou a Diretriz 0.1 e uma memória de projeto, na quarta vez — tarde.

Três erros meus por ler definição como justificativa: o contrato tratado como concorrente
da spec, a Fase 1 lida como escolha de ferramenta, e duas perguntas abertas para coisas
que o documento dela já respondia.

Um erro de mecanismo: `git add -A` publicando seis arquivos que ninguém tinha examinado.

---

## Trecho 7 · Auditoria do que foi criado e não está sendo usado

**Para que serve.** Achar o que existe no projeto e está parado.
**Antes de começar, precisa existir:** as skills, os contratos e o log.

**Pedido**

> confere se tem mais alguma coisa que foi criada e deveria estar sendo usada mas não esta

**Voltou.** Sete achados. Três substanciais: cinco dos nove domínios sem contrato nenhum;
a skill do log se comportando ao contrário do que o briefing manda; e Artifacts nunca usado,
apesar de ser um dos cinco materiais de referência e de a skill `loop-produto` pedir o PRD
materializado como um.

**Conferi contra.** Os briefings, um por um, na seção "o que a skill deve entregar na
primeira execução".

**O que isso ensinou.** O padrão por trás dos três é o mesmo: eu criei documento quando
alguma coisa forçou — uma decisão precisava de registro, uma pergunta precisava virar
regra — e não quando o método mandava. O playbook foi a vítima mais clara porque é o único
cujo gatilho é o trabalho simplesmente acontecer.

**O que costuma dar errado.** Construir a ferramenta e considerar a tarefa encerrada.
A primeira execução é parte da entrega, não um passo futuro.

---

## Trecho 8 · Completar o contrato de comportamento

**Para que serve.** Levar o manual de telas de quatro para nove domínios, com template.

### Volta 1 — o template, e o defeito que ele revelou

**Pedido**

> cria o template e confere se os quatro contratos batem com ele

**Voltou.** Template criado, e a conferência achou três coisas. A primeira parecia erro de
contrato e era erro do template: o domínio `conteudo` não tem bloco `figma:` nem seção de
peças — e está certo, porque é comportamento puro e não tem tela. O template exigia de
todos o que só faz sentido para quem tem tela.

**Conferi contra.** As definições: *"é comportamento puro e não tem tela própria"*.

**As outras duas.** Duas `@lacuna` não apontavam para pergunta nenhuma, contra a regra de
que toda lacuna cita a pergunta correspondente. Uma tinha pergunta e faltava a citação;
a outra **não tinha pergunta nenhuma** — a decisão estava marcada como pendente dentro do
contrato e invisível para quem lê a lista.

### Volta 2 — os cinco domínios que faltavam

**Pedido**

> cria os cinco contratos que faltam

**Voltou.** home, trabalhos, quem-sou-eu, erro e componentes. E aconteceu o que o briefing
promete: escrever os cinco **revelou quatro decisões que ninguém tinha tomado** — a ordem
dos cards no índice, como a foto entra na página, de onde vem o texto da página de erro, e
a lista de componentes.

**Terminou quando.** Nove contratos, nove batendo com o template, e cada `@lacuna` apontando
para uma pergunta que existe.

**O que costuma dar errado.** Achar que a lista de perguntas cobre o que falta. Ela só
cobre o que alguém já percebeu que falta — escrever o contrato é o que faz o resto aparecer.

---

## Trecho 9 · Constituição técnica

**Pedido**

> roda o /speckit-constitution

**Voltou.** Constituição em cinco princípios, versão 1.0.0, **cada princípio derivado de uma
decisão já registrada no log, com a entrada de origem citada dentro dele.**

**Conferi contra.** O próprio log. A regra que me segurou: princípio que não vem de decisão
tomada aqui é enfeite, e enfeite em documento de governança é pior que ausência, porque dá
aparência de governo onde não há. O modelo do Spec Kit sugere *Library-First* e *Test-First*
— teriam preenchido a estrutura e parecido profissionais. Ficaram de fora.

**O que costuma dar errado.** Preencher a estrutura de um modelo porque ela existe.

---

## Trecho 10 · O PRD como Artifact

**Pedido**

> cria o artifact do prd, e abre tudo no vs code pra eu ver todos os documentos

**Voltou.** Página publicada, renderizada no sistema visual do próprio projeto: as cores
lidas das variáveis do Figma, DM Sans em família única, trilha à esquerda com marcador que
acompanha a rolagem, título ao lado do texto e coluna entre 65 e 75 caracteres.

**Conferi contra.** As regras visuais dela — cor só onde significa alguma coisa, bloco
colorido uma por capítulo, o marca-texto uma vez por página. E a regra da fonte única, que
mudou onde o arquivo mora: ele ficou **fora do repositório**, porque contém hexadecimais
escritos à mão e commitá-lo criaria a segunda lista de valores que o projeto existe para
impedir.

**O efeito colateral que vale.** Ela vê o próprio sistema aplicado a um documento longo
antes de o site existir. Problema de medida de linha ou de contraste no escuro aparece
agora, e não na Fase 3.

---

## Nota de honestidade, segunda vez

Na primeira leva eu escrevi ao fim da sessão e declarei isso, prometendo registrar durante
daí em diante. **Os trechos 7 a 10 foram escritos depois também**, quando ela perguntou se
o playbook estava atualizado. Mesmo erro, com a agravante de já ter sido nomeado.

O que sobrevive é o registro literal da conversa, que continua disponível. O que não
sobrevive é a ordem em que as coisas pareceram certas.

---

## Estado ao fim desta etapa

| | |
|---|---|
| Decisões no log | 14 |
| Contratos de comportamento | 9 domínios, 11 lacunas, todas apontando para perguntas |
| Perguntas em aberto | 16, nenhuma travando |
| Constituição | ratificada, 1.0.0 |
| Desenhado no Figma | sistema visual; nenhuma tela |
| Código escrito | nenhum |

---

## Trecho 11 · Do contrato ao Figma

**Para que serve.** Levar o que está decidido nos documentos para o Figma, começando pelo
fluxo de usuário.
**Antes de começar, precisa existir:** os nove contratos de comportamento, o event storming
e o sistema visual em variáveis. Todos existem.

> **Este é o primeiro dos cinco trechos previstos nas definições.** Os dez anteriores foram
> anteriores a ele — instrumentação, documentação e decisão.

### Volta 1 — o fluxo de usuário em FigJam

**Pedido**

> boa, agora cria um documento lá no figjam e cria o fluxo de usuário, pode já usar as informações do visual design

**Voltou.** Um board em FigJam com o fluxo completo, colorido pela semântica do sistema:
azul no case de Finanças, laranja no de Reembolso, roxo no que é interação — contato e
barra — e neutro nas páginas e nas entradas.

**Conferi contra.** O event storming, para as três entradas e as saídas; o contrato de
`trabalhos/`, para a ordem dos cards; o de `case/`, para o card do próximo ser circular;
o de `moldura/`, para o contato revelar o e-mail escrito. Nenhum nó foi inventado.

**O que não entrou, de propósito.** O comportamento em tela estreita e a prévia do link
compartilhado. Os dois estão no event storming, mas não são fluxo de navegação — misturá-los
tornaria o board ilegível sem acrescentar decisão.

**Limitação a corrigir no Figma.** A trilha aparece como laço sobre o próprio case, porque
é navegação interna e não transição entre páginas.

### Volta 2 — refeito, porque não era um fluxo de usuário

**Corrigi com**

> https://www.figma.com/resource-library/user-flow/ le aqui pra você entender como fazer o fluxo de usuario e refaça

**O que estava errado.** O que eu entreguei era um **sitemap com setas**: o sistema inteiro
de uma vez, sem usuário definido, sem objetivo único, sem ponto de decisão e sem fim.

**Conferi contra.** A biblioteca de recursos da Figma, que define fluxo de usuário como
*"os passos que ele dá para completar uma tarefa específica"*, com **um objetivo por fluxo**,
entrada, decisões e um fim que significa tarefa concluída — e avisa que fluxo com
ramificação demais fica difícil de acompanhar.

**Voltou.** Três fluxos, um por público, cada um com o seu objetivo: triagem em segundos ·
avaliar profundidade · chegou por link, sem contexto.

**A decisão de cor que a regra dela forçou.** Fluxo costuma pintar sucesso de verde e falha
de vermelho. A regra dela é *"cor não julga — nada é vermelho por ser ruim nem verde por ser
bom"*, e verde e rosa estão reservados para um terceiro case. Os fins são distinguidos por
forma e por texto, nunca por cor.

**O que isso ensinou.** Cada fluxo tem pelo menos um fim de fracasso. Um fluxo só com
caminhos felizes não serve para achar obstáculo, que é para o que ele existe.

### Volta 3 — o fluxo de telas, que é outro artefato

**Pedido**

> pode apagar o diagrama antigo. faz um fluxo de telas

**Voltou.** Primeiro diagrama apagado — 40 nós, formas e conectores. Depois, o fluxo de
telas: cada tela com o que ela contém, e **o elemento exato que dispara cada transição**
escrito em cada seta.

**Conferi contra.** A própria biblioteca da Figma, que distingue os dois: fluxo de usuário
segue o caminho de uma pessoa até um objetivo; fluxo de telas — *UI flow* — tem "foco mais
profundo em interações de tela específicas". São artefatos diferentes, e agora o board tem
os dois.

**A diferença que importa na prática.** O fluxo de usuário responde *"a pessoa consegue?"*.
O fluxo de telas responde *"o que exatamente ela toca para ir daqui para lá?"* — e é esse
o que a Fase 3 consome, porque é dele que sai a lista de telas a desenhar.

**O que ele expõe que não estava visível.** Três coisas aparecem como nós próprios pela
primeira vez: a barra fixa como moldura presente em toda página, o contato revelado como
sobreposição sobre a página em vez de destino, e o visualizador de imagem, que só existe
em tela estreita.

**Lacuna que o desenho revelou.** O contato revelado precisa voltar para onde estava, e o
diagrama só consegue apontar para uma página.

### Volta 4 — refeito: fluxo de telas é alto nível

**Corrigi com**

> https://creately.com/guides/what-is-a-screen-flow-diagram/ le aqui pra entender sobre fluxo de telas. o fluxo de telas deve conter só o nome das telas, refaça

**O que estava errado.** Eu tinha enchido cada nó com os elementos de interface da tela —
"hero, tira de destaques, trilha, capítulos, mídia" — e cada seta com lógica de interação —
"Esc ou toque fora", "item da trilha rola até a seção". O primeiro é território de
*wireflow*; o segundo, de fluxo de usuário.

**Conferi contra.** O guia, que define fluxo de telas como **alto nível**, com quatro
componentes e só quatro: telas, caminhos de navegação, pontos de decisão e **anotações**.
E é explícito no que fica de fora — ao contrário do wireflow, não traz elementos de
interface; ao contrário do fluxo de usuário, não traz lógica de interação de baixo nível.

**Voltou.** Dez nós: seis telas pelo nome, duas sobreposições, dois pontos de decisão.
Mais quatro anotações — que eu tinha ignorado como componente, e que é onde a barra fixa
passou a viver.

**O que isso ensinou.** A barra fixa não é tela e não devia ser nó. Como só ela leva a
"Quem sou eu", tirá-la deixaria a página órfã no diagrama — e a saída certa não era
mantê-la como nó, era usar o componente que eu não tinha usado. **Anotação é parte do
artefato, não comentário sobre ele.**
