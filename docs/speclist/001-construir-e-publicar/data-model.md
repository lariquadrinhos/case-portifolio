# Modelo — Fase 1

**Feature**: Do arquivo de texto à página no ar · **Data**: 21 de setembro de 2026

O que a construção lê, o que ela produz, e as regras de validação de cada coisa. Nenhuma
regra aqui é nova: todas vêm do contrato `conteudo/arquivo-de-texto-vira-pagina.md` ou de
uma decisão registrada.

---

## Arquivo de conteúdo

Um dos três `.md` da raiz. É a fonte do que aparece na tela.

| Campo | O que é |
|---|---|
| `caminho` | `case-study-financas-pf-pj.md`, `case-study-reembolso-sulamerica.md` ou `quem-sou-eu.md` |
| `blocos` | Lista de blocos marcados, na ordem do arquivo |
| `capitulos` | Só em arquivos de case: títulos seguidos de marcador de trilha |

**Validação.** Todo marcador de bloco pertence ao vocabulário fechado — `card`, `case`,
`home`, `hero`, `quem-sou-eu`, `foto`. Marcador desconhecido recusa a construção, nomeando
arquivo, linha e marcador (FR-014).

---

## Bloco

Um trecho do arquivo, aberto por `<!-- bloco: nome -->` e encerrado pelo próximo marcador de
bloco ou pelo fim do arquivo.

| Campo | O que é |
|---|---|
| `nome` | Do vocabulário fechado |
| `conteudo` | Markdown do subconjunto suportado |
| `privado` | Verdadeiro se precedido de `<!-- privado -->` |

**Validação.** Bloco privado não entra em nenhuma página e não conta para a trilha (FR-005).

---

## Capítulo

Título de segundo nível **seguido de** `<!-- trilha: Rótulo -->`. Título sem esse marcador é
subseção do capítulo corrente e não aparece na trilha.

| Campo | O que é |
|---|---|
| `titulo` | O texto do título, como está no arquivo |
| `rotulo` | O que aparece na trilha |
| `ordem` | Posição no arquivo — **não existe lista de etapas em outro lugar** (FR-004) |

---

## Imagem

| Campo | O que é |
|---|---|
| `caminho` | Do markdown `![alt](caminho)` |
| `alternativo` | O texto entre colchetes. **Obrigatório** — WCAG AA |
| `legenda` | A linha seguinte, iniciada por `Legenda:` |

**Validação.** Imagem sem `Legenda:` na linha seguinte não é publicada (FR-015). Imagem cujo
arquivo não existe dispara o comportamento de peça ausente (FR-011).

---

## Página gerada

HTML completo. Não existe no repositório antes da construção.

| Campo | O que é |
|---|---|
| `endereco` | O caminho público |
| `titulo` | Para a aba e para a prévia do link |
| `descricao` | Para a prévia do link |
| `corpo` | HTML do conteúdo |
| `tema` | **Nenhum.** O tema é resolvido no navegador, não na construção |

**Validação.** Nenhuma página contém texto que não veio de um arquivo de conteúdo ou de um
contrato de comportamento (SC-005).

---

## Token

Valor visual nomeado por papel. O código consome; nunca redefine.

| Campo | O que é |
|---|---|
| `nome` | `bg/page`, `space/96`, `size/display`, `margem`… |
| `colecao` | Cor · Tipografia · Espaço e forma · Grade |
| `modo` | Claro/Escuro, Desktop/Tela pequena, ou único |

**Validação.** Nenhum valor visual é escrito à mão (FR-010). `/` vira `-` e nada mais muda.

**Entrada pendente.** Como o arquivo de tokens é produzido espera a Fase 2 (P07). A
construção o assume como entrada.

---

## Peça ausente

Não é entidade de dados: é um **estado** que qualquer uma das acima pode assumir.

| Modo | Comportamento |
|---|---|
| Local | A página gera com a falta **visível na tela**, nomeando a peça |
| Publicação | A construção **recusa** e nada sobe |

Decisão 023. É a Diretriz 0 aplicada à construção: lacuna marcada, nunca preenchida, e nunca
publicada em silêncio.
