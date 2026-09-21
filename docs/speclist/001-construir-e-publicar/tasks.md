# Tasks: Do arquivo de texto à página no ar

**Feature**: `001-construir-e-publicar` · **Data**: 21 de setembro de 2026
**Entrada**: [spec.md](spec.md) · [plan.md](plan.md) · [research.md](research.md) · [data-model.md](data-model.md)

## Format: `[ID] [P?] [Story] Descrição`

`[P]` = pode rodar em paralelo com as outras marcadas `[P]` da mesma fase, por tocarem
arquivos diferentes. Tarefa sem `[P]` depende de alguma anterior.

## Path Conventions

Projeto único, sem separação entre frente e fundo, porque não há fundo. Conteúdo na raiz,
gerador em `construcao/`, saída em `site/` fora do Git.

---

> ## Disponibilidade das histórias — leia antes de começar
>
> As três histórias **não estão igualmente disponíveis hoje**, e a diferença não é de
> esforço, é de dependência de fase.
>
> | História | Estado | Por quê |
> |---|---|---|
> | **US1** · página vazia no ar | **Disponível agora** | Não depende de nenhum desenho |
> | **US2** · texto vira página | **Parcialmente bloqueada** | A estrutura sim; a aparência depende do design system (Fase 2) e dos mockups (Fase 3), que não existem |
> | **US3** · publicar sem passo manual | Disponível depois da US1 | Só depende da US1 |
>
> **A US1 é a única inteiramente executável neste momento** — e é exatamente o que a Fase 4
> manda fazer primeiro: *"o caminho até o deploy precisa funcionar antes de existir qualquer
> conteúdo"*. As tarefas da US2 marcadas `⏸` esperam a Fase 2 ou 3.

---

## Phase 1: Setup (Shared Infrastructure)

- [ ] T001 Criar a estrutura de pastas do plano: `construcao/`, `modelo/`, `publico/`, `testes/`, `.github/workflows/`
- [ ] T002 [P] Acrescentar `site/` ao `.gitignore` — saída gerada não entra no Git
- [ ] T003 [P] Criar `package.json` mínimo, **sem dependência nenhuma**, só com os atalhos `construir`, `publicar`, `checar` e `testar`

---

## Phase 2: Foundational (Blocking Prerequisites)

Tudo aqui bloqueia todas as histórias. Nada de aparência nesta fase.

- [ ] T004 [P] Implementar `construcao/marcadores.mjs`: reconhecer `<!-- bloco: -->`, `<!-- trilha: -->`, `<!-- privado -->` e `Legenda:`. Recusar marcador fora do vocabulário, nomeando arquivo, linha e marcador (FR-002, FR-014)
- [ ] T005 [P] Implementar `construcao/ausencia.mjs`: peça que falta é **visível na tela** em modo local e **bloqueante** em modo de publicação (FR-011, decisão 023)
- [ ] T006 Implementar `construcao/markdown.mjs` — só o subconjunto medido: títulos 1–3, negrito, itálico, tabelas, listas, réguas, parágrafos, e o padrão `**Chave** ·` da tira de destaques (decisão 024)
- [ ] T007 [P] Escrever `modelo/base.html`: a moldura com barra fixa, área de conteúdo, voltar ao topo e rodapé. **Sem estilo ainda** — só estrutura e marcos de acessibilidade
- [ ] T008 [P] Escrever `modelo/tema.js`: o script curto e bloqueante do `<head>`, que lê a escolha salva e marca o elemento raiz. **Falha em segurança**, caindo na preferência do sistema (FR-009, decisão 005)
- [ ] T009 Implementar `construcao/construir.mjs`: ler o argumento de modo, ecoar o modo na primeira linha da saída, orquestrar as etapas (decisão 023, pesquisa 4)

---

## Phase 3: User Story 1 — Uma página vazia no ar (Priority: P1) 🎯 MVP

**Objetivo.** O caminho até a publicação funciona antes de existir qualquer conteúdo.

**Teste independente.** Publicar uma página com uma linha de texto e abri-la de outro
dispositivo. Entrega valor sozinha: prova que o caminho existe.

### Tests for User Story 1

- [ ] T010 [P] [US1] `testes/construcao.test.mjs` — *"A construção gera uma página com a moldura do site"*
- [ ] T011 [P] [US1] `testes/construcao.test.mjs` — *"A construção em modo de publicação recusa quando falta peça"*

### Implementation for User Story 1

- [ ] T012 [US1] Gerar `site/index.html` a partir de `modelo/base.html`, com uma linha de texto e nada mais
- [ ] T013 [US1] Escrever `.github/workflows/publicar.yml`: construir com `--publicar` e enviar a saída ao Pages (decisão 025)
- [ ] T014 [US1] Apontar o GitHub Pages para o artefato da automação, em vez de servir a raiz do repositório
- [ ] T015 [US1] Verificar o endereço respondendo em HTTPS, de outro dispositivo
- [ ] T016 [US1] Verificar que uma construção que falha **não publica** e o que estava no ar permanece (SC-006)

**Checkpoint.** Há um site no ar, gerado, publicado por automação versionada. Nada de
conteúdo real ainda — e é assim que deve ser.

---

## Phase 4: User Story 2 — Editar um arquivo de texto muda a página (Priority: P2)

**Objetivo.** Atualizar uma página é editar um arquivo de texto, sem tocar em código.

**Teste independente.** Trocar uma palavra em `quem-sou-eu.md`, construir, ver a palavra na
página. Nenhum arquivo de código tocado.

### Tests for User Story 2

Um teste por cenário do contrato `conteudo/arquivo-de-texto-vira-pagina.md`, **nomeado pelo
cenário**, como o contrato exige:

- [ ] T017 [P] [US2] *"Construir a página de um case"*
- [ ] T018 [P] [US2] *"Título sem marcador de trilha"*
- [ ] T019 [P] [US2] *"Seção marcada como privada"*
- [ ] T020 [P] [US2] *"Imagem com legenda"*
- [ ] T021 [P] [US2] *"A foto da página"*
- [ ] T022 [P] [US2] *"Uma peça esperada não está no arquivo"*
- [ ] T023 [P] [US2] `testes/tema.test.mjs` — *"O script de tema não executa"*, do contrato `tema/`

### Implementation for User Story 2

- [ ] T024 [US2] Implementar `construcao/paginas.mjs`: dos blocos às cinco páginas mais a de erro
- [ ] T025 [US2] Montar a trilha a partir da ordem dos marcadores no arquivo do case — **sem lista em outro lugar** (FR-004)
- [ ] T026 [US2] Gerar a home a partir do bloco `home` de `quem-sou-eu.md`, na ordem da decisão 018: frase, parágrafo, identificação, ação
- [ ] T027 [US2] Gerar a página de erro com o texto do contrato `erro/`, não de arquivo de conteúdo (decisão 011)
- [ ] T028 ⏸ [US2] Gerar o CSS a partir do arquivo de tokens — **bloqueada pela P07**, que espera a Fase 2
- [ ] T029 ⏸ [US2] Aplicar o sistema visual às páginas — **bloqueada**: depende do design system e dos mockups, Fases 2 e 3
- [ ] T030 [US2] Verificar que, com JavaScript desligado, todo o conteúdo permanece legível (SC-004)

**Checkpoint.** O conteúdo real está no ar, estruturado e legível. A aparência definitiva
espera o design system.

---

## Phase 5: User Story 3 — Publicar sem passo manual (Priority: P3)

**Objetivo.** Salvar a mudança no repositório é suficiente para o site mudar.

**Teste independente.** Alterar, enviar, ver o site mudar sem nenhum comando local.

- [ ] T031 [P] [US3] Fazer a automação disparar a cada envio para a ramificação principal
- [ ] T032 [US3] Rodar `scripts/checagens.mjs` dentro da automação, antes de construir
- [ ] T033 [US3] Rodar `node --test testes/` dentro da automação, antes de construir
- [ ] T034 [US3] Verificar que falha de checagem ou de teste **impede a publicação**
- [ ] T035 [US3] Verificar o caminho completo de ponta a ponta: editar, enviar, ver publicado

**Checkpoint.** As três histórias entregues. O site se atualiza sozinho.

---

## Phase 6: Polish & Cross-Cutting

- [ ] T036 [P] Preparar as imagens uma vez, em formato moderno e nos tamanhos necessários, em `publico/` (decisão 009)
- [ ] T037 [P] Descrições de página e imagem de compartilhamento — a prévia do link é o primeiro contato de quem recebe o link de alguém
- [ ] T038 Ativar a checagem 3 em `scripts/checagens.mjs`: todo `Cenário:` do contrato citado por um teste (decisão 024)
- [ ] T039 [P] Medir a primeira leitura no celular em rede móvel e confirmar abaixo de 2,5 s (SC-001)
- [ ] T040 [P] Percorrer o site inteiro pelo teclado, com foco sempre visível
- [ ] T041 Conferir contraste nos dois temas, em cada par de cores usado

---

## Dependencies

```
Setup (T001–T003)
      ↓
Foundational (T004–T009)  ← bloqueia tudo
      ↓
      ├─→ US1 (T010–T016)  🎯 disponível agora
      │        ↓
      │        └─→ US3 (T031–T035)
      │
      └─→ US2 (T017–T030)  parcialmente bloqueada
               T028, T029 ⏸ esperam Fases 2 e 3
      ↓
Polish (T036–T041)
```

## Parallel Execution

**Fase 2:** T004, T005, T007 e T008 tocam arquivos diferentes e rodam juntas. T006 depende
de T004; T009 depende de todas.

**US2:** os sete testes (T017–T023) são independentes entre si e podem ser escritos em
paralelo — e **antes** da implementação, já que cada um é a tradução direta de um cenário
que já existe no contrato.

**Polish:** T036, T037, T039 e T040 são independentes.

## Implementation Strategy

**Primeiro corte: só a US1.** Sete tarefas depois da fundação, e o resultado é um site no ar
com automação. Isso resolve o risco que a definição de pronto nomeia — *"desenhar o site
inteiro antes de publicar qualquer coisa"* — sem depender de nenhum desenho.

**Depois, a US2 até onde ela vai.** Toda a estrutura funciona sem o sistema visual: o texto
aparece, a trilha monta, as páginas existem. As duas tarefas de aparência ficam marcadas e
esperam.

**A US3 por último**, porque é conveniência e a US1 já entrega um site publicável.

**O que este plano deliberadamente não faz:** nenhuma tarefa decide aparência. Isso é das
Fases 2 e 3, no Figma, e trazê-lo para cá seria o design acontecendo por acidente dentro da
implementação — que é o risco que as definições nomeiam.
