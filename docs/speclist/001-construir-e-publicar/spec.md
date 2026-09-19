# Feature Specification: Do arquivo de texto à página no ar

**Feature Branch**: `001-construir-e-publicar`

**Created**: 2026-09-19

**Status**: Draft

**Input**: User description: "A construção mais o caminho de publicação. O domínio `conteudo` é comportamento puro, sem tela, já contratado — e a construção é o que o consome. Abertura da Fase 4: o caminho até o deploy precisa funcionar antes de existir qualquer conteúdo."

> **Idioma.** Os títulos de seção vêm do template do Spec Kit e foram preservados; o
> conteúdo está em português, que é o idioma do domínio.
>
> **Esta spec consome o contrato, não o substitui.** O comportamento de cada tela vive em
> `docs/comportamento/`. Aqui está o que precisa ser construído para que aquele
> comportamento exista — e nada do que já está escrito lá foi repetido.

## Clarifications

### Session 2026-09-19

- Q: Quando a construção encontra uma peça que deveria existir e não existe, o que deve acontecer? (FR-011) → A: Os dois, por contexto — na construção local a lacuna aparece visível na tela; no caminho de publicação a construção recusa e nada sobe.

**Sessão encerrada com uma pergunta.** Duas outras foram tiradas da fila antes de serem
feitas: o mecanismo de exportação dos tokens (FR-013), que já estava decidido como adiado
até a Fase 2, e a escolha do serviço de hospedagem (FR-012), que é comparação de stack —
excluída do escopo desta etapa pela própria skill, e pertencente ao `/speckit-plan`.
O domínio segue adiado por decisão dela, com limite antes da Fase 6.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Uma página vazia no ar (Priority: P1)

Como autora, quero que o caminho até a publicação funcione **antes de existir qualquer
conteúdo**, para descobrir problema de publicação agora e não no fim do projeto.

**Why this priority**: é a regra explícita da Fase 4 — *"o primeiro passo é publicar uma
página vazia; o caminho até o deploy precisa funcionar antes de existir qualquer conteúdo,
porque é o tipo de problema que não se quer descobrir no fim"*. Sem ela, todo o resto é
construído sobre uma suposição não verificada.

**Independent Test**: publicar uma página com uma linha de texto e abrir o endereço de outro
dispositivo. Entrega valor mesmo sozinha: prova que o caminho existe.

**Acceptance Scenarios**:

1. **Dado** que nenhum conteúdo do site foi construído, **Quando** a publicação acontece,
   **Então** o endereço responde com uma página, em HTTPS.
2. **Dado** que a página está no ar, **Quando** o conteúdo dela muda e a publicação acontece
   de novo, **Então** o endereço serve a versão nova.

---

### User Story 2 - Editar um arquivo de texto muda a página (Priority: P2)

Como autora, quero que atualizar uma página seja editar um arquivo de texto, sem tocar em
código.

**Why this priority**: é a regra que define o produto — *"atualizar uma página é editar um
arquivo de texto"* — e o que garante que o site sobreviva a mim daqui a três meses.

**Independent Test**: trocar uma palavra em `quem-sou-eu.md`, construir, e ver a palavra na
página. Nenhum arquivo de código tocado.

**Acceptance Scenarios**:

1. **Dado** um arquivo de conteúdo com marcadores válidos, **Quando** a construção acontece,
   **Então** cada bloco marcado vira a parte correspondente da página.
2. **Dado** um capítulo com marcador de trilha, **Quando** a construção acontece, **Então**
   ele aparece na trilha do case, na ordem em que está no arquivo.
3. **Dado** uma seção precedida de marcador privado, **Quando** a construção acontece,
   **Então** nada dela aparece no site.
4. **Dado** que o JavaScript está indisponível, **Quando** a página abre, **Então** todo o
   conteúdo permanece legível.

---

### User Story 3 - Publicar sem passo manual (Priority: P3)

Como autora, quero que salvar a mudança no repositório seja suficiente para o site mudar,
sem eu rodar nada.

**Why this priority**: é conveniência, não requisito — a US1 já entrega um site no ar. Mas é
o que separa "consigo publicar" de "vou continuar publicando daqui a seis meses".

**Independent Test**: fazer uma alteração, enviar ao repositório, e ver o site mudar sem
nenhum comando local.

**Acceptance Scenarios**:

1. **Dado** uma alteração enviada ao repositório, **Quando** a automação roda, **Então** o
   site publicado reflete a alteração.
2. **Dado** que a construção falha, **Quando** a automação roda, **Então** a versão anterior
   continua no ar e a falha é visível.

---

### Edge Cases

- **Uma peça esperada não está no arquivo** — rótulo de trilha faltando, imagem referenciada
  que não existe, legenda ausente, PDF do currículo ainda não produzido. Localmente a página
  gera com a falta visível; na publicação, nada sobe. Ver FR-011.
- **Um marcador desconhecido aparece** num arquivo de conteúdo: a construção precisa dizer
  qual arquivo, qual linha e qual marcador, em vez de ignorar em silêncio.
- **A construção falha** depois de o site já estar no ar: o que está publicado não pode ser
  substituído por nada.
- **Alguém pede um endereço que não existe**: a resposta é a página de erro do site, dentro
  da moldura, não a tela do servidor.
- **Uma seção privada é a última do arquivo** e sua remoção deixa o arquivo terminando em
  título vazio.
- **Um arquivo de conteúdo é salvo com quebra de linha diferente** ou sem linha final.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: A construção MUST gerar HTML completo. Nada do conteúdo pode depender de
  script para aparecer.
- **FR-002**: A construção MUST ler comentários HTML como estrutura — `<!-- bloco: -->`,
  `<!-- trilha: -->`, `<!-- privado -->`, `<!-- bloco: foto -->` — e `Legenda:` como legenda
  de imagem. MUST NOT reconhecer seção por nome.
- **FR-003**: A construção MUST tratar como capítulo o título seguido de marcador de trilha,
  e como subseção o título sem ele.
- **FR-004**: A ordem das etapas na trilha MUST vir da ordem dos marcadores no arquivo. MUST
  NOT existir lista de etapas em outro lugar.
- **FR-005**: Seção marcada privada MUST NOT ser publicada nem contar para a trilha.
- **FR-006**: Os textos da home MUST vir do bloco `home` de `quem-sou-eu.md`. A home MUST
  NOT ter arquivo próprio.
- **FR-007**: A construção MUST gerar a página de erro, servida para endereço inexistente.
- **FR-008**: O JavaScript MUST se limitar a três acréscimos — troca manual de tema com
  memória, marcação automática da trilha, ampliação de imagem — e MUST falhar em segurança.
- **FR-009**: O tema MUST estar aplicado antes da primeira pintura, sem troca visível depois.
- **FR-010**: Nenhum valor visual MUST ser escrito à mão no código. Todos vêm das quatro
  coleções de variáveis.
- **FR-011**: Quando uma peça esperada faltar, a construção MUST se comportar por contexto:
  na **construção local**, gerar a página com a falta **visível na tela**, nomeando a peça
  que falta; no **caminho de publicação**, recusar e não publicar nada. A lacuna é vista por
  quem trabalha e nunca por quem visita.
- **FR-012**: A publicação MUST acontecer em hospedagem estática, com domínio próprio
  quando ele existir, e a construção MUST NOT poder derrubar o que já está no ar.
  **Qual serviço e como a construção chega lá é decisão de plano**, não de especificação —
  a skill de clarificação exclui comparação de stack do seu escopo.
- **FR-013**: Os valores das variáveis do Figma MUST chegar ao código por
  [NEEDS CLARIFICATION: transcrição · exportação para arquivo com geração de CSS · leitura
  pela API na construção — ver pergunta P07].
- **FR-014**: A construção MUST recusar marcador desconhecido, nomeando arquivo, linha e
  marcador.
- **FR-015**: Imagem sem `Legenda:` na linha seguinte MUST NOT ser publicada.

### Key Entities

- **Arquivo de conteúdo**: um dos três `.md` da raiz. Contém blocos marcados, capítulos com
  rótulo de trilha, e seções que podem ser privadas. É a fonte do que aparece na tela.
- **Marcador**: comentário HTML que declara estrutura. Invisível na leitura do arquivo,
  significativo para a construção. Vocabulário fechado.
- **Página gerada**: HTML completo, produzido de um ou mais blocos. Não existe no
  repositório antes da construção.
- **Token**: valor visual nomeado por papel, vindo de uma das quatro coleções. O código o
  consome; nunca o redefine.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: A primeira leitura de qualquer página é possível em menos de 2,5 segundos no
  celular, em rede móvel comum.
- **SC-002**: Trocar uma palavra num arquivo de texto e vê-la publicada não exige tocar em
  nenhum arquivo de código.
- **SC-003**: Acrescentar um case novo é acrescentar um arquivo de conteúdo. Nenhuma
  alteração de layout é necessária.
- **SC-004**: Com o JavaScript desligado, todo o conteúdo permanece legível e navegável;
  perdem-se exatamente três conveniências e nenhuma informação.
- **SC-005**: Nenhuma página publicada contém texto que não veio de um arquivo de conteúdo
  ou de um contrato de comportamento.
- **SC-006**: Uma falha na construção nunca derruba o que já está no ar.

## Assumptions

- **Não há backend.** Confirmado item a item: nada no site exige servidor. Decisão 009.
- **A construção é escrita por nós, em Node, sem framework.** Decisões 009 e 022.
- **As imagens dos cases são preparadas uma vez**, fora da construção — o conjunto é fixo e
  não muda a cada publicação. Foi o que derrubou o argumento a favor de um framework.
- **Os três arquivos de conteúdo existem e estão aprovados.** Nenhuma fase depende de
  escrita de conteúdo.
- **O comportamento de cada tela já está contratado** em `docs/comportamento/`. Esta spec
  não o redefine; assume que ele é a fonte.
- **O site publica em português.** O segundo idioma é evolução posterior, e a estrutura
  nasce preparada sem que isso segure a publicação.
