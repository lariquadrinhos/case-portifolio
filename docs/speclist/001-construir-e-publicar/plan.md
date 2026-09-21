# Implementation Plan: Do arquivo de texto à página no ar

**Branch**: `001-construir-e-publicar` | **Date**: 21 de setembro de 2026 | **Spec**: [spec.md](spec.md)

**Input**: Feature specification from `docs/speclist/001-construir-e-publicar/spec.md`

## Summary

Construir um gerador próprio, sem dependência nenhuma, que lê os três arquivos de conteúdo,
entende um subconjunto pequeno de markdown mais o vocabulário de marcadores do projeto, e
produz HTML completo. Publicar por GitHub Pages, com a automação versionada no repositório.

A abordagem técnica saiu da pesquisa da Fase 0: o markdown usado é pequeno o bastante para
um analisador de 150 a 200 linhas, e `node:test` permite testar sem acrescentar dependência —
o que desbloqueia a checagem 3 do contrato, parada na P19 desde o começo.

## Technical Context

**Language/Version**: JavaScript, Node ≥ 18.20.8 (decisão 022)

**Primary Dependencies**: nenhuma. Nem de construção, nem de teste

**Storage**: arquivos. Três `.md` de conteúdo, um CSS de tokens, saída em `site/`

**Testing**: `node:test` e `node:assert`, embutidos. Cada teste nomeado pelo cenário do contrato

**Target Platform**: navegadores modernos; hospedagem estática sem servidor

**Project Type**: gerador de site estático próprio, mais o site

**Performance Goals**: primeira leitura possível em menos de 2,5 s no celular, em rede móvel

**Constraints**: HTML completo na construção · script bloqueante curto no `<head>` só para
o tema, falhando em segurança · nenhum valor visual escrito à mão · nenhuma dependência

**Scale/Scope**: 5 páginas mais a de erro · 2 larguras · 2 temas · 3 arquivos de conteúdo ·
9 domínios de comportamento

## Constitution Check

*GATE: passou antes da Fase 0 e foi reavaliado depois da Fase 1.*

| Princípio | Portão | Antes | Depois |
|---|---|---|---|
| **I · O HTML entrega o produto** | Nenhum conteúdo depende de script para aparecer | ✅ | ✅ |
| **II · Uma informação, uma fonte** | O gerador não redefine nenhuma regra que já viva no contrato, nem nenhum valor que já viva nas coleções | ✅ | ✅ |
| **III · Lacuna é marcada, nunca preenchida** | FR-011 implementado nos dois modos, com o modo visível na saída | ✅ | ✅ |
| **IV · O contrato é fonte, não registro** | O gerador implementa o contrato; divergência volta como decisão, não como ajuste silencioso | ✅ | ✅ |
| **V · Acessibilidade dentro de cada componente** | Foco visível, navegação por teclado e movimento reduzido em cada peça gerada, não numa passada final | ✅ | ✅ |

**Restrições técnicas da constituição**, todas atendidas: sem framework · sem backend ·
construção obrigatória · marcadores são comentários HTML e títulos são conteúdo · nenhum
valor visual à mão · um nome só nos três lugares.

**Reavaliação depois da Fase 1.** Um ponto foi verificado de novo: `contracts/` **não foi
gerado**, e a ausência é deliberada. O template prevê essa pasta para as interfaces que o
projeto expõe — e a interface entre os arquivos de texto e a construção **já é o contrato
`conteudo/arquivo-de-texto-vira-pagina.md`**. Criá-la aqui violaria o princípio II na própria
execução do plano que promete respeitá-lo.

## Project Structure

### Documentation (this feature)

```text
docs/speclist/001-construir-e-publicar/
├── spec.md              # /speckit-specify
├── plan.md              # este arquivo
├── research.md          # Fase 0
├── data-model.md        # Fase 1
├── quickstart.md        # Fase 1
├── checklists/
│   └── requirements.md
└── tasks.md             # /speckit-tasks — ainda não criado
```

`contracts/` ausente de propósito — ver Constitution Check.

### Source Code (repository root)

```text
case-study-financas-pf-pj.md      ┐
case-study-reembolso-sulamerica.md├─ conteúdo, na raiz, como já estão
quem-sou-eu.md                    ┘

construcao/
├── construir.mjs         # entrada; decide o modo e orquestra
├── marcadores.mjs        # o vocabulário fechado: bloco, trilha, privado, Legenda
├── markdown.mjs          # o subconjunto medido: título, negrito, itálico, tabela, lista, régua
├── paginas.mjs           # de blocos a páginas: home, trabalhos, case, quem sou eu, erro
└── ausencia.mjs          # peça que falta: visível no local, bloqueante na publicação

modelo/
├── base.html             # moldura: barra, trilha, voltar ao topo, rodapé
└── tema.js               # o script curto do `<head>`, que falha em segurança

publico/                  # imagens, PDF, fontes — preparados uma vez, fora da construção
site/                     # saída gerada; fora do Git

testes/                   # um arquivo por domínio; cada teste nomeado pelo cenário
scripts/checagens.mjs     # já existe
.github/workflows/        # a automação de publicação
```

**Structure Decision**: projeto único, sem separação entre frente e fundo, porque não há
fundo. Os arquivos de conteúdo **ficam na raiz**, onde já estão e onde o contrato e o script
de checagens os procuram — movê-los para uma pasta exigiria alterar os dois sem ganho
correspondente. `construcao/` separa o gerador do conteúdo e do gerado; `site/` fica fora do
Git, porque misturar fonte com saída foi alternativa descartada na pesquisa.

## Complexity Tracking

> Sem violações da constituição. Tabela vazia de propósito.

Um ponto merece registro por ser tensão, não violação: **o script de tema é JavaScript
bloqueante no `<head>`**, o que roça o princípio I. Não é exceção nova — a decisão 005 já o
resolveu: ele falha em segurança, caindo na preferência do sistema, e nenhum conteúdo
depende dele. Está aqui para que quem ler o plano não precise reabrir a questão.
