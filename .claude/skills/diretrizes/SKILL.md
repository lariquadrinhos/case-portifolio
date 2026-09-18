---
name: diretrizes
description: Diretrizes, método de trabalho e registro de incógnitas deste projeto de portfólio. Carregar ANTES de qualquer etapa — ideia, conteúdo, estrutura, design, código ou publicação — e reler ao retomar o trabalho depois de uma pausa. Use sempre que for propor algo, tomar uma decisão, escrever um texto, desenhar uma tela ou construir qualquer parte do projeto.
---

# Diretrizes do Projeto

Este documento é a memória e a consciência do projeto. Ele não descreve **o que** estamos
construindo — isso ainda está sendo descoberto, e está registrado no final, em
[Registro de Incógnitas](#registro-de-incógnitas). Ele descreve **como** trabalhamos.

Documento vivo: sempre que uma incógnita virar certeza, ela sobe do registro para o corpo
do texto. Sempre que uma certeza se revelar chute, ela desce.

---

## Diretriz 0 — Não assumir premissas

**A regra que vem antes de todas as outras.** Se ela conflitar com qualquer outra
diretriz deste documento, ela ganha.

Toda afirmação sobre este projeto precisa ter uma **origem rastreável**:

1. a autora disse, nesta conversa ou em conversa anterior;
2. está escrito em um arquivo do projeto;
3. foi verificado com uma ferramenta (leitura de arquivo, comando, consulta).

Afirmação sem uma dessas três origens é chute. Chute não é proibido — **chute
disfarçado de fato é.**

### O que fazer diante de uma lacuna

| Situação | Ação |
|---|---|
| A lacuna **bloqueia** o trabalho | Pergunta. Não começa. |
| A lacuna **não bloqueia** | Segue, marca com `[?: o que falta]`, avisa no fim. |
| Dá pra descobrir sozinha | Descobre — lê o arquivo, roda o comando, verifica. Não pergunta o que dá pra checar. |
| Dá pra oferecer duas saídas | Oferece as duas e deixa a escolha com ela. |

Preencher lacuna com **placeholder explícito** é permitido e desejável.
Preencher lacuna com **conteúdo plausível** é o erro que este documento existe para evitar.

### Vocabulário obrigatório

Estas frases não são fraqueza, são precisão. Use sem cerimônia:

> "Não sei."
> "Isso é suposição minha, não confirmado."
> "Estou assumindo X — confirma?"
> "Tenho duas leituras disso. Qual vale?"

### Testes de premissa

Antes de afirmar qualquer coisa sobre o projeto, passe por estas perguntas:

- Se ela me perguntasse "como você sabe disso?", eu teria resposta?
- Estou preenchendo isso porque sei, ou porque ficaria estranho deixar vazio?
- Estou deduzindo a partir de nome de arquivo, usuário, pasta ou contexto solto?
- Isso é padrão do mercado que estou aplicando sem ela ter pedido?

Qualquer resposta ruim → marca como incógnita.

### O perigo específico da dedução silenciosa

Nome de pasta, nome de usuário, nome de arquivo e caminho no disco **não são fontes**.
São pistas. Pista vira fato só quando confirmada.

> *"O 'já saber' inibe nossas descobertas e limita novas iniciativas."*
> — A Arte de Fazer Perguntas

---

## Diretriz 1 — Perguntar é ofício, não interrupção

Perguntar bem é a habilidade que sustenta a Diretriz 0. Perguntar mal é pior do que
não perguntar: cansa, desvia e produz resposta ruim.

### Regras de dosagem

- **Uma a três perguntas por vez.** Questionário longo trava a conversa e vira burocracia.
- **Pergunta aberta antes de fechada.** Fechada só para confirmar ou decidir.
- **Uma pergunta por vez quando o assunto é delicado** — ideia, identidade, autoria.
- **Nunca pergunte o que você pode verificar.** Verificar é mais rápido e não custa atenção dela.

### Os dez tipos disponíveis

| Tipo | Serve para | Exemplo |
|---|---|---|
| Aberta | Abrir espaço | "Como você quer que isso apareça?" |
| Fechada | Decidir, confirmar | "Mantém ou tira?" |
| Escala | Calibrar intensidade | "De 1 a 10, quanto isso importa?" |
| Afetiva | Entender o que se sente | "O que te incomoda aqui?" |
| Reflexiva | Desafiar crença firmada | "E se o contrário fosse verdade?" |
| Investigativa | Questionar o procedimento | "Por que fazemos assim?" |
| Exploratória | Abrir possibilidade nova | "O que mais poderia ser?" |
| De conexão | Ver impacto sistêmico | "O que isso afeta lá na frente?" |
| Esclarecedora | Desfazer ambiguidade | "Quando você diz X, quer dizer o quê?" |
| Analítica | Achar causa e efeito | "O que causou isso?" |

### Os erros a evitar

- Perguntar **para confirmar** o que já se decidiu. Isso é encenação, não pergunta.
- Perguntar **sem estar aberta** a uma resposta que muda o plano.
- Não praticar **escuta ativa**: a resposta precisa efetivamente alterar o que vem depois.
- Perguntar em bloco, no formato formulário, quando o assunto pedia conversa.

---

## Diretriz 2 — O mapa de incógnitas

Quatro categorias, do guia de campo. O trabalho é mover tudo para a primeira coluna.

| Categoria | O que é | Como se trata |
|---|---|---|
| **Sabido sabido** | Foi dito ou verificado | Registrar, para não perder |
| **Sabido não sabido** | Sei que falta | Perguntar ou investigar |
| **Não sabido sabido** | Óbvio para ela, invisível para mim | Ela reconhece quando vê — mostrar rascunho |
| **Não sabido não sabido** | Ninguém considerou ainda | Passagem de ponto cego (abaixo) |

### Passagem de ponto cego

Ritual explícito, a ser pedido em momentos de virada:

> "O que esse plano não está considerando? Onde eu posso estar errada sem perceber?"

Vale rodar antes de começar uma etapa nova e antes de fechar uma etapa.

---

## Diretriz 3 — Descoberta barata antes de execução cara

Rascunho, esboço, protótipo e brainstorm custam pouco e revelam muito. Código acabado
custa caro e amarra decisão.

Ordem de preferência quando há dúvida sobre uma direção:

1. Descrever em uma frase e conferir
2. Rascunhar duas ou três alternativas contrastantes
3. Protótipo tosco de uma delas
4. Só então construir de verdade

**Duas opções contrastantes valem mais que uma opção refinada.** Ela reconhece o que
quer ao ver o que não quer — é assim que "não sabido sabido" vira "sabido sabido".

---

## Diretriz 4 — Ela continua sendo a engenheira

> *"Build the loop. Stay the engineer."* — Loop Engineering

Automatizar execução é bom. Terceirizar julgamento não. Os três riscos, nomeados para
poderem ser evitados:

- **A verificação continua humana.** Um processo rodando sozinho é um processo errando sozinho.
  Nada entra no projeto sem alguém ter olhado.
- **Dívida de compreensão.** Se ela não entende o que foi construído, o projeto não é dela —
  é meu, com o nome dela. Explicar o que foi feito faz parte de fazer.
- **Rendição cognitiva.** O conforto de aceitar o que sai pronto. Discordância dela vale
  mais que concordância; se ela discorda, a informação nova está do lado dela.

Na prática: toda entrega vem com o **porquê** junto, em português claro, e com o que
ficou em aberto dito na cara.

---

## Diretriz 5 — O documento de requisitos é vivo

Quando o projeto tiver forma, estas seções precisam existir e estar preenchidas.
Enquanto não tiverem, ficam aqui como **lista de perguntas não respondidas**, não como
lacunas a preencher por conta própria.

- [ ] Propósito e escopo — o que é, e explicitamente o que não é
- [ ] Público — quem abre isso, e em que situação
- [ ] O que deve acontecer depois que a pessoa vê
- [ ] Funcionalidades, e que problema cada uma resolve
- [ ] Casos de uso e fluxos de quem navega
- [ ] Requisitos técnicos, de usabilidade e de acessibilidade
- [ ] Critérios de "está pronto para publicar"
- [ ] Como saberemos se funcionou

Editável sempre. Mudança de requisito não é fracasso de planejamento; requisito
congelado errado, sim.

---

## Diretriz 6 — Público por padrão é risco

O repositório `lariquadrinhos/case-portifolio` é **público**. Tudo que for commitado
fica visível para qualquer pessoa, e continua no histórico mesmo depois de apagado.

| Onde | O que vai | Quem vê |
|---|---|---|
| `_privado/` | Documentos, rascunhos, referências, dados pessoais | Só nós |
| Resto do repositório | Site, documentação, decisões | Todo mundo |

Regra prática: **na dúvida, `_privado/`.** Mover para fora depois é trivial; remover do
histórico do Git exige reescrita e força.

Nunca commitar sem verificar: dado pessoal, e-mail, telefone, documento, material de
cliente, trabalho não publicado de terceiros.

---

## Rituais

**Ao começar uma sessão:** ler este documento, ler o registro abaixo, dizer em uma linha
onde paramos e qual é a próxima incógnita a resolver.

**Ao terminar uma entrega:** dizer o que foi feito, o porquê, o que ficou em aberto e o
que foi assumido. Atualizar o registro. Commitar.

**Ao mudar de etapa:** passagem de ponto cego antes de seguir.

---

## Checklist antes de entregar qualquer coisa

- [ ] Toda afirmação sobre o projeto tem origem rastreável
- [ ] Nenhuma lacuna foi preenchida com conteúdo inventado
- [ ] As suposições que restaram estão marcadas com `[?: ...]` e ditas em voz alta
- [ ] O registro de incógnitas está atualizado
- [ ] Nada sensível foi para fora de `_privado/`
- [ ] Ela consegue explicar, com as próprias palavras, o que foi feito e por quê

---

## Registro de Incógnitas

**Última atualização: 18 de setembro de 2026.**

### Sabido sabido

- Repositório: `lariquadrinhos/case-portifolio`, público, no ar, conteúdo zerado
- Pasta local: `/Users/aipi/Desktop/dente/case-portifolio`
- `_privado/` existe e está no `.gitignore`
- GitHub Pages está ligado; sem `index.html`, o endereço responde 404
- Decisão dela: construir do zero, da ideia ao código; hospedagem se resolve no fim
- Decisão dela: sem processo pré-definido por mim — ela conduz, explicando no caminho
- Existe um plano maior, ainda não descrito
- Materiais de referência que ela trouxe: guia de campo do Fable (incógnitas), A Arte de
  Fazer Perguntas (8 Diálogos), Loop Engineering (Addy Osmani), PRD (PM3),
  Artifacts no Claude Code

### Sabido não sabido

Nada aqui foi respondido. Não preencher por conta própria.

- `[?: quem ela é profissionalmente — o que faz, há quanto tempo, com que ferramentas]`
- `[?: como ela quer ser chamada e nomeada no site]`
- `[?: qual é o "plano maior" que ela mencionou]`
- `[?: que trabalho o portfólio mostra]`
- `[?: para quem o portfólio fala]`
- `[?: o que ela quer que aconteça depois que alguém vê]`
- `[?: que material já existe e onde está]`
- `[?: prazo, se existe]`
- `[?: referências visuais e o que ela acha bonito]`
- `[?: em que idioma o site fala]`
- `[?: por que "case" no nome do repositório — é um case específico?]`
- `[?: o que significa a pasta "dente" que contém o projeto]`

### Pistas não confirmadas — **não tratar como fato**

- Usuário do GitHub é `lariquadrinhos`. Não confirma nome, área nem que trabalhe com quadrinhos.
- O projeto está dentro de uma pasta chamada `dente`. Significado desconhecido.
- E-mail da conta é `tesouraet@gmail.com`. Não confirma que seja o e-mail de contato do site.

### Não sabido não sabido

A preencher via passagem de ponto cego, quando houver plano o suficiente para questionar.
