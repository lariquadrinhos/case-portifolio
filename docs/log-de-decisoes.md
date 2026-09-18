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
