# Event Storming — Portfólio

| | |
|---|---|
| **Terreno** | Green field — nada construído |
| **Data** | 18 de setembro de 2026 |
| **Entrada** | PRD `docs/prd/01-portfolio.md` · definições de produto · três textos do site |
| **Alimenta** | Contrato de comportamento · ADR de stack · Fase 1 |

> Eventos no passado, como o método pede: *"trilha marcada"*, não *"marcar trilha"*.
> Nada aqui foi avançado sobre suposição não confirmada — ambiguidade virou hotspot.

---

## Varredura de unknowns

**Known knowns.** Cinco páginas mais erro · três textos prontos e aprovados · público em
três perfis · conteúdo em arquivos de texto fora do código · dois temas · português ·
sem backend · trilha nos cases · cor por case.

**Known unknowns.** Stack, hospedagem, como o texto vira página, como os tokens entram no
código, o que a barra mostra em tela estreita — todos agendados para a Fase 1.

**Unknown knowns — as suposições óbvias demais para terem sido ditas.** É onde os
hotspots abaixo moram. Nenhuma foi preenchida.

**Blind spot pass.** O que este mapa pode não estar considerando: o visitante que volta
uma segunda vez · o visitante com JavaScript desligado · o compartilhamento em aplicativo
de mensagem, que renderiza a imagem de compartilhamento antes de qualquer página ·
impressão da página · o leitor de tela percorrendo a trilha.

---

## Atores

| Ator | O que faz aparecer no sistema |
|---|---|
| **Quem faz triagem** | Chega pela home, decide em segundos |
| **Quem avalia profundidade** | Lê um case inteiro, procura julgamento |
| **Quem recebe o link** | Cai numa página interna, sem contexto |
| **Larissa** | Edita texto, produz imagem, publica |
| **O navegador** | Informa preferência de tema, de movimento, largura de tela e rede |

---

## Linha 1 · Autoria e publicação

*Acontece inteira antes de qualquer visita.*

```
Larissa editou um arquivo de texto
        ↓
Rótulos da trilha foram lidos dos comentários abaixo de cada capítulo
Textos da home foram lidos das marcações dentro de quem-sou-eu.md
        ↓
Site foi construído a partir dos arquivos
        ↓
Site foi publicado
```

| Comando | Ator | Evento |
|---|---|---|
| Editar texto | Larissa | Arquivo de conteúdo alterado |
| Construir | — | Páginas geradas |
| Publicar | Larissa | Site no ar |

> **Hotspot 1 · Peça esperada ausente.** As definições dizem que o comportamento dessa
> falta *"é decidido no domínio Conteúdo — não improvisado na hora"*. Ainda não foi.
> Casos: rótulo de trilha faltando num capítulo · imagem referenciada que não existe ·
> legenda ausente · PDF do currículo ainda não produzido.
> **Opções:** a construção falha e o site não publica · a página gera sem a peça e registra
> aviso · a peça vira lacuna visível na tela.

---

## Linha 2 · Chegada

```
Visitante pediu um endereço
        ↓
   ┌────┴─────────────────────────────┐
   ↓                                  ↓
Endereço existe                 Endereço não existe
   ↓                                  ↓
Preferência de tema do sistema   Página de erro exibida
foi lida                         dentro da moldura do site
   ↓                                  ↓
Tema aplicado                    Saídas oferecidas:
   ↓                             trabalhos, home, contato
Página pintada
```

| Comando | Ator | Evento |
|---|---|---|
| Abrir endereço | Visitante | Página solicitada |
| — | Navegador | Preferência de tema informada |
| Trocar tema | Visitante | Tema sobrescrito · escolha lembrada |

> **Hotspot 2 · Não piscar o tema errado.** As definições exigem que o tema certo apareça
> já na primeira pintura. Em site estático, a preferência salva vive no navegador e é lida
> por script — que roda depois do HTML chegar. O caminho conhecido é um script bloqueante
> no `<head>`, o que tensiona com *"conteúdo legível sem depender de script"*.
> **Depende da stack (Fase 1).**

> **Hotspot 3 · Visitante sem JavaScript.** A regra diz que o texto é o produto e a
> interação é camada. Nesse caso: qual tema aparece? A trilha vira o quê? A imagem ainda
> amplia? Não decidido.

---

## Linha 3 · Triagem — segundos

```
Home exibida (nome · cargo · frase · parágrafo)
        ↓
Caminho para Trabalhos percebido como elemento mais evidente
        ↓
Índice aberto
        ↓
Cards listados — capa, título, linha de tensão, cor do case
        ↓
Card escolhido (área clicável: o card inteiro)
```

> **Hotspot 4 · O que a home faz depois que a pessoa não clica.** A home é capa e tem
> uma ação principal só. Não há segunda oferta prevista. É intencional ou é lacuna?

---

## Linha 4 · Leitura de um case — minutos

```
Case aberto
        ↓
Título e frase de abertura exibidos · marca-texto na hero
        ↓
Tira de destaques exibida (papel · método · entregas · status · repositório)
        ↓
Trilha montada a partir dos rótulos lidos do arquivo
        ↓
   ┌────────────────┬─────────────────┬──────────────────┐
   ↓                ↓                 ↓                  ↓
Rolagem       Etapa clicada     Imagem tocada      Protótipo aberto
   ↓                ↓                 ↓                  ↓
Etapa marcada  Seção alcançada  Visualizador       Nova aba, com
automaticamente                 com zoom aberto    aviso de saída
   └────────────────┴─────────────────┴──────────────────┘
        ↓
Fim do case alcançado
        ↓
Card do próximo case oferecido · contato convidado
```

| Comando | Ator | Evento |
|---|---|---|
| Rolar | Visitante | Etapa da trilha marcada |
| Clicar etapa | Visitante | Seção alcançada |
| Tocar imagem | Visitante | Visualizador aberto |
| Abrir protótipo | Visitante | Saída para nova aba |
| Voltar ao topo | Visitante | Topo alcançado |

**Regra já definida:** a trilha marca a etapa cuja seção ocupa a maior parte da tela.

> **Hotspot 5 · O próximo case do último case.** São dois cases. O card ao fim do case A
> leva ao B. E o card ao fim do B leva a quê? Ao A, que a pessoa acabou de vir? Ao índice?
> Some? O objetivo declarado é que ninguém leia só um — com dois, o segundo leitor já
> cumpriu o objetivo. **Não decidido, e aparece na primeira montagem da página.**

> **Hotspot 6 · Trilha que se move × movimento reduzido.** Duas regras suas se tensionam:
> o marcador *"se move sozinho conforme a pessoa rola"*, e *"nada que se mova sem o leitor
> pedir, e respeito a quem desligou animações no sistema"*.
> **Opções:** o marcador salta sem transição quando movimento reduzido está ligado · a
> transição é tão curta que não conta como animação · a regra de movimento não se aplica a
> indicador de posição.

> **Hotspot 7 · Volta do protótipo.** A pessoa sai para outra aba e volta. A trilha
> continua onde estava? A rolagem? Provavelmente sim por ser outra aba — mas não escrito.

> **Hotspot 8 · Link para uma seção do case.** O público inclui quem recebe link de outra
> pessoa. Alguém pode querer mandar "olha essa etapa aqui". Endereço por seção existe?
> Não previsto nas definições.

---

## Linha 5 · Saídas

```
Contato disparado ──→ e-mail ou LinkedIn (sem formulário, sem servidor)
Currículo baixado ──→ arquivo PDF
Repositório aberto ─→ link externo
```

> **Hotspot 9 · Contato como botão dispara o quê.** As definições dizem que contato *"é
> e-mail e LinkedIn"* e que o botão *"dispara a ação direto em vez de levar a uma página"*.
> Dois destinos, um botão. **Opções:** abre e-mail direto e o LinkedIn fica em outro lugar ·
> abre um painel com as duas opções — mas painel é "levar a uma página" disfarçado.

---

## Linha 6 · Tela estreita

```
Largura estreita detectada
        ↓
Trilha lateral convertida em faixa fina de progresso, abaixo da barra
        ↓
Faixa tocada → lista completa de etapas aberta
        ↓
Barra reduzida ao mínimo: nome e Trabalhos
        ↓
Imagem de desktop tocada → visualizador com zoom
```

> **Hotspot 10 · O que sai da barra.** Mínimo definido: nome e Trabalhos. O que acontece
> com "Quem sou eu", o controle de tema e o botão de contato — menu, ícone, some?
> **Agendado para a Fase 1.**

---

## O que este mapa produz

| Destino | O que vai |
|---|---|
| **Contrato de comportamento** | Os eventos das linhas 2 a 6 viram `Cenário`; os hotspots viram `@lacuna` |
| **Perguntas em aberto** | Os dez hotspots, cada um classificado entre trava e espera |
| **ADR de stack** | Hotspots 2 e 3 são requisito técnico: tema sem piscar e conteúdo sem script |
| **Domínios do contrato** | O mapa confirma os nove domínios das definições e não sugere nenhum novo |

---

## Classificação dos hotspots

| # | Hotspot | Trava | Momento em que deixa de poder esperar |
|---|---|---|---|
| 1 | Peça esperada ausente | espera | antes de desenhar o domínio Conteúdo |
| 2 | Tema sem piscar | **trava** | é requisito de stack — Fase 1 |
| 3 | Sem JavaScript | **trava** | idem |
| 4 | Home sem segunda oferta | espera | antes de desenhar a Home |
| 5 | Próximo case do último | **trava** | antes de desenhar o domínio Case |
| 6 | Trilha × movimento reduzido | espera | antes de desenhar a trilha |
| 7 | Volta do protótipo | espera | antes do código |
| 8 | Link para seção | espera | antes de desenhar o domínio Case |
| 9 | Contato: dois destinos, um botão | **trava** | antes de desenhar a Moldura |
| 10 | O que sai da barra | espera | Fase 1 |
