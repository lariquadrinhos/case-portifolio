# Log de decisões — Portfólio

> Registro cronológico. Cada entrada foi escrita no momento em que a decisão aconteceu.
> Entrada nunca é editada depois: decisão que mudou ganha entrada nova, que cita a anterior.
> Este documento não manda em nada — é memória, não fonte. O que vale hoje está nas
> definições e no contrato.

---

## 001 · Manter um log de decisões, em arquivo único e cronológico

**Quando** 2026-09-18 · **Fase** 0 · **Domínio** — · `#escopo`

**Gatilho.** O projeto começou a produzir decisões antes de existir qualquer lugar para
registrá-las. Quatro já tinham acontecido sem registro.

**Decisão.** Manter um log cronológico, arquivo único, entradas numeradas e imutáveis,
escritas no momento em que a decisão acontece.

**Alternativa descartada.** Não manter log e confiar no histórico do Git. Perdeu porque
o Git registra o que mudou, não o que foi considerado e descartado — e a alternativa
descartada é justamente o campo que dá valor ao registro.

**Custo aceito.** Atrito em cada decisão, e um arquivo que cresce sem nunca encolher.
O atrito é reduzido pela skill escrever a entrada e Larissa só confirmar.

**Consequência.** Diretriz 9 das diretrizes passa a apontar para este arquivo.

---

## 002 · Os briefings prevalecem sobre a skill loop-produto na estrutura de documentos

**Quando** 2026-09-18 · **Fase** 0 · **Domínio** — · `#escopo`

**Gatilho.** Duas estruturas de documentação incompatíveis, ambas escritas por Larissa:
a skill `loop-produto` do projeto bigorna prescreve `/docs/prd/`, `/docs/adr/` e
`/docs/specs/`; os briefings deste projeto prescrevem `docs/comportamento/` e `docs/spec/`.
A colisão perigosa era `docs/specs/` contra `docs/spec/` — nomes quase idênticos, conteúdos
sem relação.

**Decisão.** A estrutura dos briefings vale. `docs/adr/` e `docs/specs/` foram apagados.

**Alternativa descartada.** Manter as duas, como sugerido inicialmente por Larissa. Perdeu
por dois motivos: `docs/spec/` e `docs/specs/` conviverem seria a colisão que ninguém
percebe até errar; e o log já é um conjunto de ADRs — entradas numeradas, imutáveis, com
alternativa descartada — acrescido da ordem cronológica, que o ADR não tem. Um terceiro
lugar para a mesma decisão contraria a regra de trabalho 2, que prevê dois.

**Custo aceito.** Perde-se o índice por decisão: para saber por que X foi escolhido, lê-se
o log em vez de abrir um arquivo. Mitigado porque o contrato responde "qual é a regra hoje",
que é a pergunta mais frequente.

**Consequência.** `docs/adr/` e `docs/specs/` removidos. Diretriz 9 reescrita. A skill
`loop-produto` não é copiada para este projeto enquanto prescrever a estrutura antiga.

---

## 003 · O card do próximo case é circular, sem exceção no último

**Quando** 2026-09-18 · **Fase** 0 · **Domínio** case · `#escopo`

**Gatilho.** O event storming perguntou o que o card ao fim do segundo case oferece, já que
o site nasce com dois. Parecia oferecer algo já lido.

**Decisão.** O card de cada case aponta para o outro. Não há caso especial para o último.

**Alternativa descartada.** Levar ao índice de Trabalhos, ou fazer o card sumir no último
case. Perderam quando ficou claro que um dos três públicos chega direto numa página interna
por link compartilhado — para quem cai no segundo case sem passar pela home, o card
circular aponta para conteúdo novo, não repetido. As duas alternativas também criariam uma
exceção no componente, contra a promessa de que um terceiro case cabe sem redesenhar nada.

**Custo aceito.** Quem leu os dois na ordem recebe, ao fim, a oferta do que acabou de ler.

**Consequência.** `docs/comportamento/case/card-proximo-case.md` criado. Abre uma lacuna
nova: com três cases, a ordem do "próximo" não está definida — marcada no contrato, sem
travar.

---

## 004 · O botão de contato revela o e-mail escrito, em vez de disparar mailto

**Quando** 2026-09-18 · **Fase** 0 · **Domínio** moldura · `#recusa-de-ia`

**Gatilho.** As definições dizem que contato é e-mail e LinkedIn e que o botão dispara a
ação direto — mas são dois destinos e uma ação só.

**Decisão.** O botão fica à direita da barra, como definido, e ao ser acionado revela o
endereço `llquadros95@gmail.com` escrito por extenso, copiável, com o LinkedIn ao lado.

**Alternativa descartada.** Duas. Disparar `mailto:` direto e deixar o LinkedIn em "Quem
sou eu" — perdeu porque `mailto:` sem cliente configurado falha calado, e o público de
triagem costuma estar no computador, em webmail. E a proposta de Larissa de deixar o e-mail
visível ao lado do nome na barra — perdeu por três motivos: não cabe em tela estreita sem
truncar, o que torna o endereço inútil; tornaria o contato a informação mais destacada de
toda página, contra a regra de que contato não deve competir com os cases; e ocuparia mais
espaço horizontal que "Trabalhos" e "Quem sou eu" somados.

**Custo aceito.** Um toque a mais que a versão com o e-mail sempre visível, e um componente
novo a desenhar.

**Consequência.** `docs/comportamento/moldura/botao-contato.md` criado. A lacuna do
comportamento em tela estreita aponta para a pergunta P10.

---

## 005 · O site é construído por camadas: HTML entrega o produto, JavaScript acrescenta

**Quando** 2026-09-18 · **Fase** 1 · **Domínio** — · `#restricao`

**Gatilho.** O event storming levantou duas perguntas que travavam a escolha de stack:
o que acontece sem JavaScript, e como aplicar o tema certo antes da primeira pintura sem
contrariar a regra de que o conteúdo não depende de script.

**Decisão.** O HTML entrega o produto inteiro — textos, imagens, navegação, âncoras da
trilha, contato, e o tema seguindo a preferência do sistema. O JavaScript acrescenta três
coisas e só elas: a troca manual de tema com memória, a trilha que se marca sozinha ao
rolar, e o visualizador de imagem com zoom. Sem script, o site perde essas conveniências
e não perde nada do produto.

**Alternativa descartada.** Montar a página no navegador, como faz a maior parte das
ferramentas atuais. Perdeu por dois motivos. O primeiro é a regra já escrita nas
definições: conteúdo legível sem depender de script. O segundo é mais forte e não é sobre
quem desliga JavaScript — é que todo visitante passa pelo momento em que o script ainda
não chegou. Com a exigência de primeira leitura em menos de 2,5 segundos em rede móvel, o
relógio só para quando o texto aparece; se ele depender de script, começa depois do
download e da execução.

**Custo aceito.** A trilha não marca sozinha e o tema não troca manualmente quando o
script falha. Duas conveniências perdidas, nenhuma informação.

**Consequência.** Elimina de saída qualquer stack que renderize no navegador — restam
gerador de site estático e HTML escrito à mão, o que estreita a pergunta P05.
`docs/comportamento/tema/tema-claro-e-escuro.md` criado. Resolve a tensão da P01: o script
de tema é bloqueante mas falha em segurança, caindo na preferência do sistema.

---

## 006 · Os arquivos de conteúdo seguem uma convenção declarada, em vez de o site se adaptar a eles

**Quando** 2026-09-18 · **Fase** 1 · **Domínio** conteudo · `#restricao`

**Gatilho.** A medição dos três arquivos encontrou cinco inconsistências estruturais —
duas grafias de "Texto para o card", `#` significando coisas diferentes em arquivos
diferentes, `##` ora capítulo ora subseção, um `##` sobrando no fim de um título, e uma
seção de anotação interna sem nada que a marcasse como não publicável.

**Decisão.** Uma convenção declarada, com uma regra única: **marcador é comentário HTML,
título é conteúdo.** Os três arquivos foram normalizados — só marcadores, nenhuma palavra
de prosa alterada.

**Alternativa descartada.** A construção tolerar as variações: aceitar as duas grafias,
tratar `##` por posição, ignorar a seção chamada "Notas de trabalho" pelo nome. Perdeu
porque "ignora a seção chamada Notas de trabalho" não é regra verificável — é exceção com
nome próprio, que quebra no dia em que o título virar "Notas finais". E porque daqui a três
meses a edição será feita por uma pessoa lendo o arquivo, não por um analisador adivinhando.

**Custo aceito.** Arquivos aprovados foram editados. O risco foi contido restringindo a
mudança a marcadores e a um `##` sobrando; nenhuma frase mudou.

**Consequência.** `docs/comportamento/conteudo/arquivo-de-texto-vira-pagina.md` criado.
Abre a pergunta P22, sobre o bloco "O Produto". Requisito novo para a stack: a ferramenta
precisa ler comentários HTML como marcadores estruturais.

---

## 007 · O mecanismo de exportação dos tokens não se decide agora

**Quando** 2026-09-18 · **Fase** 1 · **Domínio** — · `#recusa-de-ia` `#reversao`

**Gatilho.** Larissa interrompeu a discussão sobre como exportar as variáveis do Figma:
o design system ainda não existe, e decidir a exportação antes de haver o que exportar é
decidir no vazio.

**Decisão.** A P07 se divide. O **princípio** fica decidido agora, porque restringe o
resto: os valores descem das variáveis, o nome é preservado (`bg/page` → `--bg-page`,
barra vira hífen e nada mais muda), e existe um único lugar de onde tudo deriva. O
**mecanismo** — transcrição, exportação para arquivo, ou leitura pela API na construção —
fica para depois da Fase 2, quando o design system estiver fechado no Figma.

**Alternativa descartada.** Fechar o mecanismo agora, como eu vinha propondo. Perdeu
porque a escolha depende do que o design system for quando existir — quantas coleções,
quantos componentes, com que frequência muda — e nenhuma dessas informações existe hoje.

**Custo aceito.** Nenhum identificado. A P07 também não era bloqueio da stack, ao
contrário do que eu havia classificado: qualquer gerador de site estático consome um
arquivo CSS gerado, então ela não elimina candidato nenhum.

**Consequência.** P07 sai de "travam" para "esperam", com momento "depois da Fase 2".
A P05 deixa de esperar por ela. O inventário em `docs/spec/README.md` passa a valer como
retrato de um sistema incompleto, não como especificação fechada.

**Correção de rota minha**, não dela: eu li "como os tokens entram no código" na Fase 1
como escolha de ferramenta, quando o que está escrito é princípio.

---

## 008 · Os números de ritmo ficam no documento; só os valores de token vivem no Figma

**Quando** 2026-09-18 · **Fase** 1 · **Domínio** — · `#reversao`

**Gatilho.** A revisão encontrou uma contradição no documento de definições: ele afirma
duas vezes não conter nenhum valor visual — *"este documento não tem nenhum, de
propósito"* — e contém 96 entre capítulos, 28 entre parágrafos, 8 ou 12 dentro de um
bloco, grade de 12 colunas, margem de 80 e medida de linha entre 65 e 75 caracteres.

**Decisão.** A frase muda; os números ficam. O documento passa a distinguir duas perguntas:
*"quanto vale?"* é do Figma — hex, tamanho de fonte, entrelinha, quanto mede `space/96`.
*"quanto disso, e onde?"* é do documento — espaço entre capítulos, colunas da grade,
caracteres por linha.

**Alternativa descartada.** Levar os números de ritmo para o Figma, para que a afirmação
original ficasse verdadeira. Perdeu porque eles não são valores: não definem token nenhum,
escolhem qual token se aplica onde. Levá-los para variáveis criaria tokens sem papel
semântico — `espaco-entre-capitulos` seria um apelido de `space/96`, e apelido de token é
a duplicação que a separação existe para evitar.

**Custo aceito.** A regra de fronteira deixa de caber numa frase e passa a exigir duas.
Alguém com pressa pode ler o documento e achar que ele contradiz a si mesmo — agora a
distinção está escrita, mas precisa ser lida.

**Consequência.** `_privado/definicoes-produto-portfolio.md` alterado em três pontos, na
seção *Especificação visual*. As sete regras acrescentadas ao PRD nesta mesma revisão
passam a ter fundamento explícito: elas citam números de ritmo, não valores.

---

## 009 · A stack é HTML e CSS próprios, com uma construção escrita por nós, sem framework

**Quando** 2026-09-18 · **Fase** 1 · **Domínio** — · `#restricao`

**Gatilho.** A P05 era a última pergunta travando. Os requisitos vinham acumulados de
decisões anteriores: HTML completo na construção, script curto e bloqueante no `<head>`,
leitura dos marcadores próprios, três arquivos de conteúdo sem frontmatter, CSS gerado,
hospedagem estática.

**Decisão.** HTML e CSS escritos por nós, com uma etapa de construção própria que lê os
três arquivos de conteúdo e gera as páginas. Sem framework. A construção existe porque a
regra é que atualizar uma página seja editar um arquivo de texto — sem ela, editar uma
página seria editar HTML.

**Alternativa descartada.** Astro, que eu havia recomendado, e Eleventy. O argumento que eu
usei a favor do Astro era a otimização de imagem — e ele caiu quando ficou claro que o
conjunto de imagens dos cases é **fixo**, preparado uma vez, não gerado a cada construção.
O que sobrou do outro lado pesou mais: a convenção de marcadores é própria, então o código
de leitura seria nosso em qualquer opção; são cinco páginas e três arquivos; e um framework
esconderia justamente a parte que o terceiro case existe para mostrar.

**Custo aceito.** Imagens responsivas e pré-visualização durante o desenvolvimento passam
a ser trabalho nosso. Nenhum dos dois é difícil neste tamanho, mas nenhum vem de graça.

**Consequência.** P05 fecha na metade da stack. A hospedagem continua em aberto. **Nada
disso autoriza começar a escrever código:** o produto é desenhado inteiro no Figma antes
de virar código, e nada foi desenhado ainda.

---

## 010 · O Spec Kit fica, com saída em `docs/speclist/`

**Quando** 2026-09-18 · **Fase** 1 · **Domínio** — · `#recusa-de-ia` `#reversao`

**Gatilho.** Eu havia recomendado desinstalar o Spec Kit, sob o argumento de que as specs
duplicariam o contrato de comportamento.

**Decisão.** O Spec Kit fica, com invocação automática mantida. A saída passa de `specs/`
para `docs/speclist/`, e o formato por funcionalidade — `spec.md`, `plan.md`, `tasks.md` —
permanece.

**Alternativa descartada.** Desinstalar, como eu propunha. Perdeu porque a premissa estava
errada: contrato e spec não descrevem a mesma coisa. **O contrato é o manual de telas** —
para cada tela criada no Figma, uma entrada que a descreve e a liga ao frame e às peças,
permanente, organizada por tela. **A spec é plano de trabalho** — o que se constrói agora,
em que passos, temporária, organizada por funcionalidade. Uma spec consome o contrato; não
o substitui. Em um projeto onde designer e desenvolvedor são a mesma pessoa, o contrato é
justamente o que unifica os dois lados, e derrubá-lo em favor da spec eliminaria a ponte.

**Custo aceito.** Três pastas vizinhas com nomes parecidos — `spec/`, `speclist/`,
`comportamento/`. Contido com um README em cada uma dizendo o que é e o que não é.

**Consequência.** `speckit-specify` alterada para gravar em `docs/speclist/`.
A skill `contrato-de-comportamento` reescrita: a identidade dela passa a ser *manual de
telas*, com o handoff entre design e desenvolvimento no topo do documento em vez de nota
de rodapé. P20 encerrada.

**Erro meu de leitura**, não dela: o briefing define o contrato como a escrita única do
comportamento consumida por quatro leitores sem tradução. Eu li isso como justificativa e
não como definição, e daí tratei a spec como concorrente.

---

## 011 · Copy de interface vive no contrato; conteúdo autoral vive nos arquivos de texto

**Quando** 2026-09-18 · **Fase** 1 · **Domínio** conteudo · `#escopo`

**Gatilho.** Escrever o contrato da página de erro expôs que o texto dela não tinha origem
prevista. A regra diz que o site não inventa conteúdo — tudo vem de um dos três arquivos ou
está escrito no contrato — e o texto da página de erro não estava em nenhum dos dois.

**Decisão.** Conteúdo autoral vive nos arquivos de texto; **copy de interface vive no
contrato da tela que a exibe.** A exceção declarada são os rótulos da trilha, que ficam nos
arquivos dos cases porque separá-los tornaria um erro de ordem invisível.

**Alternativa descartada.** Um quarto arquivo de conteúdo, ou um bloco novo dentro de
`quem-sou-eu.md`. Perderam porque copy de interface não é texto de autoria: rótulo de botão
e mensagem de erro pertencem ao comportamento da tela, e separá-los do contrato faria a
mesma decisão morar em dois lugares.

**Custo aceito.** Mudar o texto de um botão passa a ser mudar um arquivo de contrato, não
um arquivo de conteúdo — um pouco menos direto para quem só quer trocar uma palavra.

**Consequência.** Resolve mais do que a página de erro: "Ver meus trabalhos", "Próximo
case", o rótulo do contato e os rótulos da tira de destaques tinham o mesmo problema e
agora têm origem. O texto da página de erro foi rascunhado no contrato e aguarda a voz dela
— pergunta P31.

---

## 012 · A foto da página "Quem sou eu" entra por marcador, não por posição

**Quando** 2026-09-18 · **Fase** 1 · **Domínio** conteudo · `#escopo`

**Gatilho.** A convenção de conteúdo cobre imagem dentro do texto — markdown mais
`Legenda:` — mas a foto da página não é imagem de texto corrido, e não havia marcador
para ela.

**Decisão.** `<!-- bloco: foto -->` seguido da imagem em markdown. Reaproveita o vocabulário
existente, declara a intenção, e o texto alternativo obrigatório vem de graça no markdown.

**Alternativa descartada.** "A primeira imagem do bloco é a foto" — regra por posição, o
mesmo defeito que a decisão 006 recusou em "ignora a seção chamada Notas de trabalho".
E caminho fixo declarado no contrato, que tiraria a foto do arquivo de conteúdo e quebraria
a regra de que atualizar uma página é editar um arquivo de texto.

**Custo aceito.** Mais um marcador na convenção — oito, agora.

**Consequência.** Trocar a foto passa a ser trocar o arquivo apontado, sem tocar em código.

---

## 013 · A ordem dos cards é fixa e declarada, com Finanças primeiro

**Quando** 2026-09-18 · **Fase** 1 · **Domínio** trabalhos · `#escopo`

**Gatilho.** Escrever o contrato do índice expôs que a ordem dos cards nunca tinha sido
escolhida, e que ela comunica prioridade quer alguém decida quer não.

**Decisão.** Ordem fixa e declarada no contrato: Finanças PF+PJ primeiro, Reembolso
SulAmérica em seguida.

**Alternativa descartada.** Duas. *Mais recente primeiro* perdeu por decidir sozinha para
sempre — o terceiro case subiria ao topo automaticamente, sem ninguém olhar, contra a regra
de que nada avança sem decisão registrada. E *Reembolso primeiro* perdeu por pouco: ele é
mais fácil de ler de relance — "toda semana, do zero" entrega na hora, contra um tempo a
mais de "a planilha que virou produto" — mas redesenho de fluxo é o formato que quem faz
triagem já viu muitas vezes, enquanto designer que foi até código em uso por pessoa real
é raro.

**Custo aceito.** O primeiro card exige um segundo a mais de leitura do que exigiria o
outro, justamente no momento em que o tempo é mais curto.

**Consequência.** A ordem passa a ser regra no contrato do índice. Acrescentar um terceiro
case passa a exigir uma decisão de ordem explícita, em vez de ela acontecer sozinha.

---

## 014 · A constituição técnica é ratificada na versão 1.0.0

**Quando** 2026-09-18 · **Fase** 1 · **Domínio** — · `#escopo`

**Gatilho.** `/speckit-constitution` nunca havia rodado, e `.specify/memory/constitution.md`
continuava sendo o modelo em branco desde a instalação. Era um arquivo que afirmava guardar
os princípios do projeto e não guardava nenhum.

**Decisão.** Constituição escrita em cinco princípios, mais restrições técnicas, fluxo de
trabalho e governança. **Todo princípio deriva de uma decisão já registrada no log, com a
entrada de origem citada** — nada foi inventado para preencher a estrutura do modelo.

**Alternativa descartada.** Duas. Preenchê-la mais cedo, quando eu a apontei como vazia —
perdeu na hora, porque as respostas dependiam da stack, do comportamento sem script e da
convenção de conteúdo, e nenhuma das três existia. E escrevê-la a partir dos exemplos do
modelo, que sugerem princípios genéricos como *Library-First* e *Test-First* — perdeu
porque princípio que não vem de decisão tomada aqui é enfeite, e enfeite em documento de
governança é pior que ausência.

**Custo aceito.** Mais um documento na pilha, e a fronteira com as `diretrizes` precisa ser
lida para não confundir: método e conduta lá, princípios técnicos aqui. A própria
constituição declara essa divisão no topo, mas depender de alguém ler é custo real.

**Consequência.** `.specify/memory/constitution.md` deixa de ser modelo em branco. Toda
emenda futura passa a exigir entrada no log com a alternativa descartada. A seção
"Constituição técnica" das `diretrizes`, que estava vazia de propósito, passa a apontar
para cá.

---

## 015 · A medida de linha vale onde há largura; em tela estreita quem governa é a margem

**Quando** 2026-09-19 · **Fase** 3 · **Domínio** — · `#restricao`

**Gatilho.** O wireframe da home em 375px expôs que a regra *"medida de linha entre 65 e 75
caracteres — é o número que governa a largura da coluna, não o contrário"* não pode ser
cumprida em tela estreita.

**Decisão.** A regra passa a ser escopada. Onde a largura permite, a medida governa a coluna
e nunca passa de 75. **Em tela estreita quem governa é a margem**, que não desce de 24, e a
medida resultante fica entre 35 e 45 caracteres — faixa confortável para leitura em tela
estreita.

**Alternativa descartada.** Duas, e as duas caíram por aritmética, não por preferência.
*Encolher a margem para ganhar caracteres:* em 375px com **margem zero**, DM Sans a 18px
cabe **44 caracteres** — 21 a menos que o alvo. Nenhuma margem alcança 65. *Encolher o
corpo:* para 65 caracteres em 327px o corpo precisaria de cerca de **10px**, abaixo de
qualquer piso de legibilidade e contra a regra de que corpo e apoio não encolhem.

**Custo aceito.** A regra deixa de ser uma frase e passa a ter duas metades, uma por
contexto. Quem ler só a primeira vai achar que o celular está errado.

**Consequência.** Definições e PRD alterados. A medição também encontrou o erro inverso no
desktop: o parágrafo do wireframe estava em 720px, o que dá **82 caracteres** — acima do
limite de 75. Corrigido para **628px**, que são seis colunas da grade de doze e dão 72
caracteres. **A grade e a medida coincidem em seis colunas**, o que torna a regra
verificável sem contar caractere: se o texto corrido ocupa metade da grade, a medida está
certa.

---

## 016 · A medida em tela estreita é de 34 a 45 caracteres, não de 35 a 45

**Quando** 2026-09-19 · **Fase** 3 · **Domínio** — · `#reversao` `#restricao`

**Reverte parcialmente a entrada 015.**

**Gatilho.** A 015 fixou a faixa de tela estreita em 35 a 45 caracteres, calculada sobre um
corpo de 18px que eu havia **suposto**. A leitura das variáveis mostrou os valores reais do
modo `Tela pequena`, e o parágrafo da home usa `abertura`, que ali vale 20/32 — não 18/30.

**Decisão.** A faixa passa a ser **34 a 45 caracteres**, e deixa de ser arbitrada: ela é o
resultado da escala estreita aplicada aos 327px de coluna. `abertura` a 20px dá 34
caracteres; `corpo` a 18px dá 38; `apoio` a 15px dá 45. **Os extremos da faixa são os
extremos da própria escala** — não há número escolhido à mão.

**Alternativa descartada.** Manter 35 e usar `corpo` em vez de `abertura` no parágrafo da
home, o que daria 38 e caberia na faixa antiga. Perdeu porque trocaria o nível tipográfico
para salvar um número: no desktop o parágrafo é `abertura`, e mudar de nível só em tela
estreita quebraria a correspondência entre as duas larguras.

**Custo aceito.** Nenhum além de uma entrada de reversão logo depois da original.

**Consequência.** Definições e PRD atualizados. O wireframe estreito foi refeito com os
valores reais.

---

## 017 · O PRD deixa de repetir as regras de uso e passa a apontar para as definições

**Quando** 2026-09-19 · **Fase** 3 · **Domínio** — · `#recusa-de-ia`

**Gatilho.** Larissa perguntou onde as regras estavam sendo registradas. A conferência
mostrou que as regras visuais existiam **nos dois** arquivos: definições e PRD. Cinco
testadas, cinco duplicadas.

**Decisão.** As definições são a fonte das regras de uso. O PRD guarda direção de produto —
contenção, a trilha como único elemento gráfico, a riqueza vindo das imagens, cor como
exceção, uma cor por case — e **aponta** para as definições no resto.

**Alternativa descartada.** Manter a repetição e assumir o compromisso de atualizar os dois
a cada mudança. Perdeu porque foi exatamente o que falhou: a regra da medida de linha
mudou na 015 e eu precisei editar dois arquivos, o que é a definição do problema.

**Custo aceito.** O PRD fica mais magro, e o ponteiro só resolve para quem tem acesso às
definições — que hoje estão em `_privado/`. Isso amarra a leitura do PRD à pergunta P16,
sobre o que fica público.

**Consequência.** Duplicação desfeita. **Erro meu, criado ao escrever o PRD e agravado na
revisão**, quando acrescentei sete regras que já existiam na fonte.

---

## 018 · A home abre pela frase; nome e cargo vêm depois do parágrafo

**Quando** 2026-09-19 · **Fase** 3 · **Domínio** home · `#reversao`

**Reverte a ordem implícita no wireframe original**, que vinha da leitura literal de
"nome, cargo, uma frase e um parágrafo" como sequência.

**Gatilho.** Larissa reorganizou o frame à mão. A linha de identificação, que estava acima
do título, desceu para logo abaixo do parágrafo, imediatamente antes da ação.

**Decisão.** A ordem na tela é **frase → parágrafo → nome e cargo → ação**. A página abre
pelo que ela pensa, não por quem ela é: a identificação chega depois de a frase ter feito
o trabalho, e encosta na ação.

**Alternativa descartada.** Abrir pela identificação, que era o wireframe anterior. Perdeu
porque para quem faz triagem em segundos o gancho é a frase, não o nome — o nome já está
na barra, e repeti-lo no topo gastava a primeira linha de atenção com um dado que não
convence ninguém a continuar.

**Custo aceito.** A lista das definições — "nome, cargo, uma frase e um parágrafo" — deixa
de ser lida como ordem. Quem ler o documento sem ver a tela vai supor a sequência errada.

**Consequência.** Contrato da home atualizado com a ordem e com o cenário em Gherkin
correspondente. O parágrafo foi reescrito para não repetir o cargo: *"Sou UX Designer,
curiosa por natureza e apaixonada..."* virou *"Sou curiosa e apaixonada..."*, e
`quem-sou-eu.md` foi sincronizado — **a mudança tinha sido feita só no Figma, e o arquivo
de texto é a fonte.**

---

## 019 · O respiro da hero é uma relação, não um valor

**Quando** 2026-09-19 · **Fase** 3 · **Domínio** home · `#restricao`

**Gatilho.** Larissa ajustou o respiro do frame à mão e depois explicou a intenção: hero
com bastante ar, **com o mesmo respiro entre a barra e a frase e entre a frase e o
parágrafo**, e os três elementos do bloco de apresentação igualmente espaçados entre si.
Os valores que ela usou — 100 e 30 — não existem na coleção de espaço.

**Decisão.** A regra fixa a **relação**, não o número: respiro igual acima e abaixo da
frase, espaçamento uniforme dentro do bloco de apresentação. Os valores saem da escala e
mudam com a largura — hoje 96 e 32 em desktop, 64 e 24 em tela estreita.

**Alternativa descartada.** Duas. *Acrescentar `space/100` e `space/30` à coleção*, para
que os valores manuais virassem tokens — perdeu porque quebraria o ritmo da escala, que
progride por volta de 1,5× e não comporta 100 entre 96 e 128. E *deixar como estava*, com
medidas fora da escala — perdeu contra a regra dela de que espaço só sai de `space/*`.

**Custo aceito.** Quatro pixels a menos de respiro que ela tinha escolhido à mão, e dois a
mais entre os elementos do bloco. Diferença imperceptível; se não for, a escala é que
precisa de decisão, não o frame.

**Consequência.** As duas larguras passam a seguir a regra. A tela estreita foi
reestruturada para a mesma ordem do desktop, que ainda não tinha recebido a decisão 018, e
o texto do parágrafo foi sincronizado — **ele estava desatualizado lá também.**

**A observação dela é o ponto.** Ajuste manual não se reproduz na próxima tela; regra se
reproduz. Foi ela quem disse: *"talvez eu devia ter explicado o que eu queria ao invés de
fazer manualmente"*. É exatamente para isso que o contrato existe.

---

## 020 · A escala de espaço fica como está; o que muda é quando se escolhe o valor

**Quando** 2026-09-19 · **Fase** 3 · **Domínio** — · `#restricao`

**Gatilho.** Três valores de espaço apareceram fora da coleção: **28**, citado nas
definições para distância entre parágrafos, e **100** e **30**, escolhidos à mão no frame
da hero. A regra diz que espaço só sai de `space/*`.

**Decisão.** A coleção não muda. As definições passam a dizer **32** entre parágrafos, e
ganham uma regra nova: **todo valor sai da coleção, inclusive quando foi escolhido a olho.**
Número ajustado na tela até parecer certo é arredondado para o token mais próximo antes de
ser escrito em qualquer lugar.

**Alternativa descartada.** Duas. *Acrescentar `space/28` e `space/30`* — perdeu porque a
escala progride alternando ×1,5 e ×1,33 de ponta a ponta, e esses dois criariam passos de
×1,17 e ×1,14 num trecho só, quebrando o ritmo para resolver dois casos. E *aceitar valor
fora da escala quando o olho pedir* — perdeu porque é a própria regra que o projeto tem,
e abandoná-la na primeira vez que incomoda é não ter regra.

**O que decidiu a questão.** Os três valores estão a **4px ou menos** de um token existente:
100 fica a 4 de 96, 30 a 2 de 32, 28 a 4 dos dois vizinhos. **Nenhum deles aponta para um
passo faltando** — apontam para um momento em que ninguém consultou a escala. O problema
não era a ferramenta, era o procedimento.

**Custo aceito.** Continua possível que um dia a escala realmente falte um passo, e a regra
de arredondar esconda isso. Por isso a regra tem uma saída declarada: se o token mais
próximo parecer errado **por mais de um passo**, a decisão volta para a escala.

**Consequência.** Definições alteradas em dois pontos. P35 encerrada.

---

## 021 · A grade vira coleção própria, com dois modos

**Quando** 2026-09-19 · **Fase** 3 · **Domínio** — · `#restricao`

**Gatilho.** A auditoria deixou a margem de 80 como única medida fora da escala, e o
diagnóstico foi mais fundo: **nenhum valor de grade era token** — nem margem, nem colunas,
nem calha.

**Decisão.** Coleção **Grade**, com modos `Desktop` e `Tela pequena`, e três variáveis:
`margem` (80 / 24), `colunas` (12 / 1), `calha` (24 / 0). A regra de que espaço só sai de
`space/*` passa a declarar que **não alcança a grade** — composição é outro sistema.

**Alternativa descartada.** Três. *Acrescentar `grade/*` à coleção Espaço e forma* — perdeu
porque aquela coleção tem um modo só, e a grade muda com a largura; dar-lhe dois modos
obrigaria todos os valores de espaço a existirem em duplicata sem variar. *Deixar a grade só
nas definições e amendar a regra de espaço* — perdeu porque o código precisa da margem, e a
constituição diz que nenhum valor visual é digitado à mão sem vir de uma coleção; a saída
seria abrir exceção para valor em prosa, que é o buraco que o sistema de tokens existe para
fechar. *Mudar a margem para 64 ou 96* — perdeu por reconstruir o layout inteiro para
obedecer uma regra que não era sobre ele.

**Custo aceito, e é grande.** **A grade do Figma não aceita vínculo com variável** —
testado, `setBoundVariable` recusa o campo `layoutGrids`. O token é fonte para o código e
referência declarada, mas **não propaga para os frames**: mudar a margem continua exigindo
edição manual em cada frame. O ganho é ter um lugar declarado e um valor que o código pode
consumir legalmente; não é propagação automática.

**Consequência.** Quarta coleção no arquivo, e as definições passam a dizer quatro em vez de
três. `colunas` em tela pequena vale **1** — isso descreve o que existe hoje, uma coluna
única entre margens, e não uma decisão de grade estreita, que ninguém tomou. A grade foi
aplicada aos dois frames. Pede uma checagem nova: **todo frame bate com o token do seu
modo** — hoje ninguém verifica isso.

---

## 022 · As checagens são escritas em Node, sem dependência nenhuma

**Quando** 2026-09-19 · **Fase** 3 · **Domínio** — · `#restricao`

**Gatilho.** O script das quatro checagens era a última entrega pendente da primeira
execução da skill do contrato, e escrevê-lo obriga a escolher uma linguagem — a primeira
coisa do projeto a fazer isso.

**Decisão.** Node, sem dependência nenhuma. `scripts/checagens.mjs`, executável com
`node scripts/checagens.mjs`.

**Alternativa descartada.** Python, que está disponível na máquina e é mais curto para
manipular texto. Perdeu porque a construção do site será a mesma linguagem, e ter duas
linguagens num projeto de cinco páginas é custo sem ganho — a decisão 009 já disse que a
construção é nossa, e o ecossistema de site estático é Node.

**Custo aceito.** A escolha da linguagem de construção foi feita aqui, por um script
auxiliar, em vez de na decisão que tratava de stack. Fica registrado que foi assim, e não
por análise do que a construção precisa.

**Consequência.** Das quatro checagens do briefing, **duas rodam hoje** — estrutura do
contrato, e toda `@lacuna` apontando para pergunta que existe. Uma passa por vacuidade:
nenhum contrato cita token ainda. Uma quarta foi acrescentada por mim: os arquivos de
conteúdo seguem a convenção de marcadores.

**As quatro bloqueadas estão declaradas na saída do script**, não omitidas: `figma.tela`
resolve (exige token pessoal do Figma), `Cenário:` tem teste (P19), `storybook.usa` (P17,
não se aplica), e frame batendo com token de grade — que a decisão 021 mostrou não ser
automatizável, porque a grade do Figma recusa vínculo com variável.

---

## 023 · Peça ausente: visível na construção local, bloqueante na publicação

**Quando** 2026-09-19 · **Fase** 4 · **Domínio** conteudo · `#restricao`

**Gatilho.** A clarificação da spec 001 pegou a pergunta mais antiga ainda aberta: o que a
construção faz quando uma peça esperada não está no arquivo — rótulo de trilha, imagem,
legenda, currículo.

**Decisão.** Os dois comportamentos, por contexto. Na **construção local**, a página gera
com a falta **visível na tela**, nomeando a peça. No **caminho de publicação**, a construção
recusa e nada sobe. A lacuna é vista por quem trabalha e nunca por quem visita.

**Alternativa descartada.** Três, e cada uma escolhia um lado perdendo o outro. *Falhar
sempre* — seguro para o site, mas uma legenda por escrever impediria qualquer
pré-visualização. *Gerar com aviso em log* — o site nunca trava, mas o aviso é ignorável e
a página quebrada vai ao ar; é falha silenciosa, que este projeto trata como o pior tipo.
*Lacuna visível sempre* — impossível de ignorar, inclusive para quem visita.

**Custo aceito.** A construção passa a ter dois modos, e alguém pode publicar achando que
está em modo local. O modo precisa ser evidente na saída, não inferido.

**Consequência.** FR-011 fechado. **Quatro contratos tinham `@lacuna` apontando para esta
pergunta** — conteúdo, home, trabalhos e quem sou eu — e os quatro viraram cenário real.
É a Diretriz 0 aplicada à construção: a lacuna é marcada, nunca preenchida, e nunca
publicada em silêncio.

---

## 024 · A construção terá analisador de markdown próprio, e os testes usam o Node

**Quando** 2026-09-21 · **Fase** 4 · **Domínio** — · `#restricao`

**Gatilho.** A Fase 0 do plano da spec 001 precisava resolver duas incógnitas técnicas:
quanto de markdown a construção entende, e como testar sem acrescentar dependência.

**Decisão.** Analisador próprio do subconjunto medido — títulos, negrito, itálico, tabelas,
listas, réguas e parágrafos, mais o padrão `**Chave** ·` da tira de destaques. Testes com
`node:test`, embutido.

**Alternativa descartada.** *Uma biblioteca de markdown* — uma linha de código contra
centenas de recursos não usados e atualizações de segurança para acompanhar; contraria a
decisão 022. *Vitest ou Jest* — melhores em projeto grande, dependências que envelhecem.

**O que decidiu foi medição, não preferência.** Os três arquivos de conteúdo usam um
subconjunto pequeno, e **três recursos não aparecem em lugar nenhum**: citação, código
embutido e link. O único `[link]` existente é marcador não resolvido. Isso põe o analisador
na casa de 150 a 200 linhas.

**Custo aceito, e é o maior deste plano.** Um erro no analisador corrompe os textos dela em
silêncio — e os textos são o produto. Por isso a suíte de testes deixa de ser desejável e
passa a ser condição: cada recurso do subconjunto precisa de teste que o cite pelo nome.

**Consequência.** A **P19** fecha: ela estava bloqueada por falta de suíte, e `node:test`
existe no Node instalado. A checagem 3 do contrato — *"todo `Cenário:` é citado por um
teste"* — deixa de ser impossível e passa a ser pendente. O script de checagens foi
atualizado para dizer isso.

---

## 025 · Publicação por GitHub Pages, com a automação versionada

**Quando** 2026-09-21 · **Fase** 4 · **Domínio** — · `#restricao`

**Gatilho.** FR-012 foi retirado da clarificação por ser comparação de stack, e delegado ao
plano. A Fase 0 o resolveu.

**Decisão.** GitHub Pages, com um arquivo de automação no repositório que constrói a cada
envio e publica a saída.

**Alternativa descartada.** *Cloudflare Pages* — constrói sozinho, sem arquivo de automação,
e entrega mais rápido; perdeu porque a configuração de construção passaria a viver num
painel web que o Git não vê. *Commitar a saída construída* — dispensa automação, mas mistura
fonte com gerado e enche o histórico de HTML.

**O que pesou mais.** Não foi o desempenho nem a conveniência: foi **a configuração de
publicação ser um arquivo versionado**. Num projeto cuja regra é decisão registrada em
arquivo, ter parte de como o site é construído fora do repositório seria incoerente.

**Custo aceito.** A entrega do Pages é mais lenta que a do Cloudflare. Para cinco páginas de
texto e imagem, a diferença é pequena diante do requisito de 2,5 segundos — mas existe.

**Consequência.** O domínio segue adiado (P15), e até lá o endereço é o do Pages. Apontar um
domínio depois não gera retrabalho.

---

## 026 · Itens de navegação são do mesmo nível e não se diferenciam por cor

**Quando** 2026-09-21 · **Fase** 3 · **Domínio** moldura · `#recusa-de-ia`

**Gatilho.** Larissa perguntou por que "Quem sou eu" tinha cor diferente de "Trabalhos" no
wireframe da barra.

**Decisão.** Os itens de navegação são do mesmo nível e usam o mesmo peso e a mesma cor.

**Alternativa descartada.** Dar mais peso a "Trabalhos", que era o que eu tinha feito.
Perdeu por dois motivos, e o segundo é mais forte que o primeiro. As definições dizem
*"Trabalhos em primeiro lugar"* — **isso é ordem, não ênfase**, e eu li como ênfase. E mesmo
que fosse ênfase, o canal estaria errado: a regra dela é que *"o nível se marca pelo
tamanho, nunca pela cor"*, e dois itens do mesmo nível não têm o que marcar.

**Custo aceito.** Nenhum. A barra fica mais quieta, que é o que a direção de contenção pede.

**Consequência.** Corrigido nas duas larguras. A regra subiu para o contrato da moldura,
onde vale para a barra inteira e não só para o contato. **Abriu a pergunta P37**: estando
numa das páginas, o item correspondente indica isso? A trilha tem marcador de etapa ativa
dentro de um case; a navegação não tem equivalente declarado.

---

## 027 · O controle de tema é espaço reservado rotulado, não um círculo mudo

**Quando** 2026-09-21 · **Fase** 3 · **Domínio** tema · `#recusa-de-ia`

**Gatilho.** Larissa perguntou o que era "aquela bolinha vazia" na barra.

**Decisão.** O espaço do controle de tema é uma peça **rotulada** — lê-se "tema" — em vez de
um círculo cinza sem legenda.

**Alternativa descartada.** Desenhar o controle de verdade agora. Perdeu porque sua forma
depende da P26, ainda aberta: se o controle tem dois estados ou três, com a posição "seguir
o sistema", muda o que ele é.

**Custo aceito.** Um rótulo em texto onde provavelmente haverá um ícone. É wireframe: a
palavra diz o que a forma ainda não pode dizer.

**O que isso ensinou.** Espaço reservado sem rótulo não é neutro — **é ambíguo**. Um círculo
cinza numa barra pode ser avatar, ícone ou foto, e quem olha precisa perguntar. A mesma
regra do contrato vale para o desenho: a lacuna é marcada, nunca deixada em branco.

---

## 028 · A barra não indica a página atual visualmente, mas declara na marcação

**Quando** 2026-09-21 · **Fase** 3 · **Domínio** moldura · `#restricao`

**Gatilho.** A correção da decisão 026 deixou os dois itens iguais, e isso expôs uma
pergunta que ninguém tinha feito: como alguém sabe em que página está?

**Decisão.** Nenhuma indicação visual. O item correspondente é **declarado como página atual
na marcação**, para quem navega por leitor de tela.

**Alternativa descartada.** Duas. *Dar o acento de sistema ao item atual* — é cor de estado,
que a regra permite; perdeu no teste dela: *"se a cor sair e a tela continuar dizendo a mesma
coisa, ela não deveria estar lá"*, e a página de Trabalhos continua dizendo que é Trabalhos
sem o destaque. E perdeu num segundo ponto: indicar só por cor contraria a exigência de não
depender de cor sozinha, e o canal alternativo seria peso — que a decisão 026 acabou de
remover. *Tornar o item atual não clicável* — some sem avisar, que é pior que não indicar.

**O argumento que eu não tinha visto antes de mapear.** Com dois itens e seis páginas, o
indicador **ficaria mudo em quatro**: na home ninguém está em Trabalhos nem em Quem sou eu, e
nas duas páginas de case nenhum dos dois é a página atual. **Os cases são onde a pessoa passa
mais tempo.** Um sinal ausente onde mais se lê é um sinal fraco.

**Por que a metade não visual fica mesmo assim.** Quem enxerga recebe a orientação da própria
página — título, conteúdo, trilha. Quem percorre a barra por leitor de tela, item a item,
não tem esse contexto naquele momento. A declaração na marcação **compensa uma diferença no
modo de consumir a página**, e não acrescenta nada para quem não precisa dela. Não é
inconsistência: é o mesmo conteúdo chegando por canais diferentes.

**Custo aceito.** Um comportamento que não se vê no Figma e só se verifica em teste ou com
leitor de tela. Por isso virou dois cenários no contrato, nomeados — incluindo o caso do
case, em que **nenhum** item é anunciado.

---

## 029 · A escolha de tema vale até ser trocada de novo; o controle tem duas posições

**Quando** 2026-09-21 · **Fase** 3 · **Domínio** tema · `#restricao`

**Gatilho.** O contrato do tema tinha uma lacuna desde o primeiro dia: o leitor escolhe um
tema no site e depois muda a preferência do sistema operacional — qual ganha? A pergunta
também segurava a forma do controle, e com ela o wireframe da barra.

**Decisão.** A escolha manual vale até ser trocada de novo. Mudança na preferência do
sistema não a desfaz. O controle tem **duas posições**, claro e escuro; não há posição
"seguir o sistema" — o automático vale enquanto ninguém tiver escolhido, e não volta depois.

**Alternativa descartada.** Duas. *A preferência do sistema voltar a mandar* — perdeu porque
a pessoa escolheu e o site desfaria; mesmo sendo defensável como "a preferência mais
recente", **isso lê como defeito**: ela volta, vê o tema que não escolheu, e conclui que o
site esqueceu. Falha que parece bug é pior que falha que ninguém nota. *Uma terceira posição,
"seguir o sistema"* — perdeu por custo: na barra, isso é um seletor segmentado largo demais
para uma tela estreita que já está no mínimo de nome e Trabalhos, ou um botão que cicla,
em que não se sabe o estado atual sem olhar duas vezes.

**Custo aceito, e é o mais concreto desta decisão.** Quem usa sistema que troca sozinho de
claro para escuro à noite, e tocou no controle uma vez, **perde essa troca automática neste
site, em silêncio**. Há saída — voltar o controle para o tema que bate com o sistema — mas
ela devolve a cor, não o automático. Se algum dia isso incomodar, a reversão é a terceira
posição, e esta entrada é o ponto de partida dela.

**Consequência.** Duas lacunas do contrato do tema viraram cenário, incluindo o caso
simétrico que faltava: quem **nunca** escolheu continua acompanhando o sistema. A forma do
controle deixa de estar bloqueada — duas posições —, mas o **desenho** dele segue sendo
trabalho da Fase 2, não desta decisão.

---

## 030 · A barra é uniforme: contato sem destaque, tema por último

**Quando** 2026-09-21 · **Fase** 3 · **Domínio** moldura · `#reversao`

**Reverte a regra de que o contato é visualmente distinto**, escrita nas definições.

**Gatilho.** Larissa pediu barra uniforme: tirar o destaque do contato e mover o controle de
tema para o último item.

**Decisão.** Todos os itens da barra usam o mesmo peso e a mesma cor. Nenhum recebe borda,
fundo ou destaque. A ordem é: nome · Trabalhos · Quem sou eu · Contato · controle de tema.

**Alternativa descartada.** Manter o contato como botão com borda, que era a regra escrita:
*"Fica na direita da barra, visualmente distinto dos itens de menu"*.

**O que decidiu foi a própria razão da regra, que apontava para o outro lado.** A frase
seguinte das definições diz: *"misturar os dois faz o contato competir por atenção com os
cases"*. **Um botão com borda compete mais que texto simples** — a regra pedia destaque, e o
motivo pedia discrição. A mudança segue o motivo e a regra foi reescrita.

A distinção entre navegação e ação **não desaparece: deixa de ser de aparência e passa a ser
só de comportamento.** Contato continua disparando a ação em vez de levar a uma página.

**Custo aceito.** Nada na barra indica que o contato se comporta diferente dos vizinhos.
Quem toca espera mudar de página e recebe uma revelação sobre a mesma página. É surpresa
pequena e de baixo custo, mas é surpresa.

**Consequência.** Definições reescritas no ponto do contato. O contrato mudou de nome —
`botão-contato.md` continua sendo o arquivo, mas o título passou a ser "Contato na barra",
porque botão era o que ele deixou de ser. A regra de uniformidade subiu para valer sobre a
barra inteira, incluindo o controle de tema, que eu havia deixado em cinza mais claro —
mesmo erro do círculo sem rótulo: um item mais apagado lê como menos importante, não como
espaço reservado.

---

## 031 · A barra indica a página atual com sublinhado no acento de sistema

**Quando** 2026-09-21 · **Fase** 3 · **Domínio** moldura · `#reversao`

**Reverte a decisão 028**, que estabelecia indicação só na marcação, sem canal visual.

**Gatilho.** Larissa, depois de ler a 028, decidiu que a página atual deve ganhar destaque.

**Decisão.** O item da página atual recebe **sublinhado no acento de sistema**, e continua
sendo declarado como página atual na marcação. Dois canais: cor e sublinhado.

**Alternativa descartada.** *Peso*, como segundo canal no lugar do sublinhado — perdeu
porque a decisão 026 acabou de remover diferença de peso da barra, e reintroduzi-la
confundiria **estado** com **hierarquia**, que são coisas diferentes no sistema dela.
*Marcador gráfico*, como o da trilha — perdeu porque a trilha é declarada como o único
elemento gráfico distintivo do site, e repetir seu vocabulário na barra diluiria isso.

**O que mudou em relação à 028.** Nada nos fatos: o indicador continua aparecendo em **duas
das seis páginas**, e continua mudo nos dois cases, que é onde a pessoa passa mais tempo.
O que mudou foi o peso dado a esse custo — **é decisão dela, e ela a tomou com o argumento
na mão.** A 028 está registrada e não foi apagada; esta a substitui.

**Custo aceito.** O destaque existe em duas páginas e falta em quatro, o que pode ler como
inconsistência em vez de ausência intencional.

**Consequência.** Abre a **P38**: a página de case sublinha "Trabalhos" como seção? Responder
que sim exigiria declarar o que é seção, coisa que o documento não faz. O wireframe da home
**não pode demonstrar a regra** — na home nenhum item de navegação é a página atual, porque
ela é alcançada pelo nome. O primeiro desenho que mostra o destaque é o de Trabalhos.

---

## 032 · A página de case sublinha "Trabalhos" como seção

**Quando** 2026-09-21 · **Fase** 3 · **Domínio** moldura · `#escopo`

**Gatilho.** A decisão 031 deu sublinhado ao item da página atual, e o indicador aparecia em
duas das seis páginas — mudo justamente nos dois cases, que é onde a pessoa passa mais
tempo.

**Decisão.** Um case pertence a Trabalhos, e numa página de case "Trabalhos" recebe o mesmo
sublinhado, como seção. **É a única relação de pertencimento do site** — nenhuma outra página
está dentro de outra.

**Alternativa descartada.** Duas. *Deixar só a página exata* — o indicador ficaria mudo em
quatro de seis, e nos cases a ausência seria sentida como esquecimento. *A home sublinhar o
próprio nome*, o que daria simetria — perdeu porque transformaria o elemento de identidade
em item de navegação; o nome é a marca do site, não uma aba.

**O que decidiu não foi simetria.** Foi perceber que **as duas ausências que sobram são
respostas certas, não falhas**: na home a pessoa está na entrada, não dentro de uma seção;
na página de erro não está em lugar nenhum. Quatro de seis com motivo vale mais que seis de
seis por preenchimento.

**Custo aceito.** "Estou em Trabalhos" e "estou dentro de Trabalhos" ficam indistinguíveis.
Diferenciá-las exigiria um terceiro tratamento visual, e as duas significam a mesma coisa
para quem se orienta.

**Verificado contra a regra da cor dominante.** Numa página de case o sublinhado é roxo, de
sistema, enquanto a trilha é azul ou laranja. Isso não viola *"uma cor dominante por tela"*:
a regra diz que, dentro de um case, a cor do case domina e **a de sistema aparece só nos
elementos interativos** — e o item da barra é um link.

---

## 033 · A barra estreita é toda palavra: nome, Trabalhos, Contato e menu

**Quando** 2026-09-21 · **Fase** 3 · **Domínio** moldura · `#restricao`

**Gatilho.** Larissa propôs usar ícones para caber tudo na barra estreita, dizendo que
gostava da literalidade do texto e perguntando o que eu achava. É a pergunta P10, aberta
desde o começo.

**Decisão.** Barra estreita com **nome · Trabalhos · Contato · menu**, tudo em palavra.
"Quem sou eu" e o controle de tema vão para dentro do menu. **Nenhum item vira ícone.**

**Alternativa descartada.** *Quatro ícones com o nome em texto* — perdeu por medição, antes
de qualquer argumento: em 327px de largura útil, quatro ícones ocupam 300 e a versão toda em
palavra ocupa 309. **Os ícones economizariam nove pixels.** *Tudo em texto sem menu* — não
cabe: 434.

**Os argumentos que vieram depois do número, e que sustentariam a decisão sozinhos.** A
direção visual já excluía ícones — *"tipografia e cor fazem o trabalho, e fazem sozinhas;
sem ornamento"* — e a regra de cor os antecipava, ao listar *"ícone que não é estado"* entre
os lugares onde a cor não entra. A trilha é declarada o **único** elemento gráfico
distintivo do site, e quatro ícones criariam um segundo vocabulário presente em toda página.
E **"Quem sou eu" não tem ícone**: uma silhueta de pessoa diz perfil, conta ou login, não
"quem eu sou".

**Custo aceito.** "Quem sou eu" e o tema ficam a um toque de distância em tela estreita —
que é onde a maior parte das pessoas abre portfólio.

**Consequência.** P10 encerrada, e com ela as duas últimas lacunas dos contratos de moldura
e tema. A decisão 032 ganhou um caso novo: quando a página atual está dentro do menu, **é a
palavra "menu" que recebe o sublinhado** — sem isso, a única página escondida seria também a
única sem indicador. A forma do menu aberto é trabalho da Fase 3; o comportamento dele já
está contratado.

---

## 034 · O display de tela pequena baixa de 44 para 42, para a frase caber em quatro linhas

**Quando** 2026-09-21 · **Fase** 3 · **Domínio** home · `#restricao`

**Gatilho.** Larissa achou a quebra da hero estreita estranha em cinco linhas e pediu
quatro, com *"de fazer,"* e *"eu quero"* na mesma linha — antecipando que talvez fosse
preciso diminuir um pouco.

**Decisão.** `size/display` no modo `Tela pequena` passa de **44 para 42**. `line/display`
fica em 48. A frase quebra em quatro linhas: *"Se existe uma / forma melhor / de fazer, eu
quero / descobrir qual é."*

**Alternativa descartada.** Três. *Manter 44 e cinco linhas* — a quebra partia "de fazer,"
de "eu quero", separando uma unidade de sentido. *Usar 43* — cabe, mas em **327 exatos**,
sem nenhuma folga: qualquer diferença de renderização quebraria a linha. *Apertar o
espaçamento entre letras* — traria os 334 para dentro de 327, mas seria valor visual
escolhido à mão numa tela, exatamente o que a decisão 020 proíbe.

**O que decidiu entre 42 e 43 foi a folga, não o tamanho.** Em 42 a linha mais larga mede
319, com oito pixels de margem. Em 43 mede 327, que é o limite. E 42 é par, como todos os
outros valores da escala estreita.

**Custo aceito.** A hero da home encolhe 2px em tela estreita. `line/display` fica em 48
para um corpo de 42, proporção maior que a de antes — o que é desejável em tamanho menor,
mas foi consequência, não escolha deliberada de entrelinha.

**Consequência.** A quebra da frase subiu para o contrato da home: **ela é escolhida, não
automática**, e cada linha fecha uma unidade de sentido. Nenhum outro elemento usa `display`
em tela estreita, então a mudança não alcança nada além da hero da home.

---

## 035 · A abertura em tela estreita baixa para 18, com a entrelinha preservada em 32

**Quando** 2026-09-21 · **Fase** 3 · **Domínio** home · `#restricao`

**Gatilho.** Larissa pediu o mesmo tratamento do título para o parágrafo da home estreita,
e perguntou como isso alteraria as regras. A pergunta valeu mais que o ajuste.

**Decisão.** `size/abertura` no modo `Tela pequena` passa de **20 para 18**. `line/abertura`
**permanece em 32**.

**Alternativa descartada.** Duas. *Trocar o parágrafo para `corpo` só em tela estreita* —
perdeu pelo mesmo motivo da decisão 016: mudaria o nível tipográfico entre as larguras, e o
parágrafo da home é `abertura` no desktop. *Baixar `line/abertura` junto, para 30* — perdeu
porque igualaria `abertura` e `corpo` por completo; mantendo 32 contra 30, os dois ficam com
o mesmo corpo e **entrelinhas diferentes**, e a distinção sobrevive no ar entre as linhas,
que é onde ela faz sentido numa linha de abertura.

**O que a medição expôs, e é mais importante que o ajuste.** O parágrafo a 20px cabia
**33 caracteres**, não 34 — abaixo do piso que a decisão 016 fixou. O motivo não é erro de
cálculo: aquele piso foi medido com **o texto antigo**, que Larissa reescreveu depois.
**Medida em caracteres depende do texto, não só do corpo** — letras têm larguras
diferentes, e o mesmo tamanho dá contagens diferentes em frases diferentes.

**Consequência: a regra da medida foi reescrita para ser verificável.** O que se verifica é
a **coluna** — largura da tela menos as duas margens —, e a medida em caracteres passa a ser
declarada como **consequência, não alvo**, em torno de 35 a 45. Uma regra que só pode ser
conferida contra um texto específico não é regra, é observação.

**Segundo achado.** A escala estreita tem **oito níveis e sete valores distintos**:
`subtitulo` e `abertura` eram ambos 20. A colapso não é novo, só mudou de lugar — agora
`abertura` e `corpo` compartilham o corpo 18, mas com entrelinhas diferentes, o que é menos
colapso do que havia antes.
