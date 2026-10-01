# Portfólio da Larissa: instruções para o Claude

Site estático de portfólio (cinco páginas mais a de erro, dois cases), publicado no GitHub
Pages a partir deste repositório. **O repositório é público.**

## Antes de qualquer coisa

Carregue a skill **`diretrizes`**. Ela é a constituição de método deste projeto e vence
qualquer instrução genérica. As regras que mais custam caro quando esquecidas:

1. **Não assumir premissas.** Lacuna é marcada (`@lacuna`, `[?: …]`, marcador de falta),
   nunca preenchida com o plausível.
2. **Ela conduz.** Decisão de produto, de texto e de aparência é dela.
3. **Público por padrão é risco.** Nada pessoal fora de `_privado/`, que nunca é commitado.
4. **Nunca usar travessão**, em texto, arquivo ou mensagem de commit. Use dois-pontos ou
   vírgula.
5. **Não alterar a mídia que ela produziu nem o texto autoral dela.** Marcador (comentário
   HTML) não é texto autoral.

## Onde cada coisa vive

Não repita aqui o que já tem lugar. O mapa completo está em [`docs/README.md`](docs/README.md).

| O quê | Onde | Manda sobre |
|---|---|---|
| Por que o site é assim | `_privado/definicoes-produto-portfolio.md` | o contrato |
| O que cada tela faz | `docs/comportamento/` (Gherkin em português) | o código |
| Valores visuais | Figma → `docs/spec/tokens.json` (gerado, nunca editado à mão) | o CSS |
| Conteúdo autoral | `quem-sou-eu.md`, `case-study-*.md`, na raiz | as páginas |
| Copy de interface | o contrato da tela que a exibe | as páginas |
| Princípios técnicos | `.specify/memory/constitution.md` | como o código é escrito |
| Plano e tarefas | `docs/speclist/001-construir-e-publicar/` | nada |
| Decisões | `docs/log-de-decisoes.md`, memória e **não fonte** | nada |
| Perguntas abertas | `docs/perguntas-em-aberto.md`, lista única | nada |

Figma: arquivo `hwClE9Xpm51OW4vPsCCn8J`. Telas na página **Wireframe** (`56:2`), sistema
visual na página **Sistema visual** (`34:2`).

## Como o site é construído

Sem framework e **sem dependência nenhuma** (decisões 009 e 022). Node ≥ 18.

```
construcao/   o gerador: lê os três .md e tokens.json, escreve site/
modelo/       o que vai junto para o navegador: CSS, script de tema, script da moldura
publico/      mídias, servidas como estão
testes/       node:test, um teste por cenário do contrato, nomeado pelo cenário
site/         saída gerada, fora do Git
```

```bash
npm run construir   # modo local: peça que falta aparece visível, nomeada
npm run publicar    # modo de publicação: peça que falta recusa a construção
npm run checar      # scripts/checagens.mjs: contratos, lacunas, tokens, convenção
npm run testar      # node --test testes/
npm run servir      # pré-visualização em http://localhost:8080
```

O GitHub Pages é publicado pela automação em `.github/workflows/publicar.yml`.

### Regras de código

- **O HTML entrega o produto; o script acrescenta.** Sem JavaScript o site perde
  conveniência, nunca conteúdo.
- **Nenhum valor visual escrito à mão.** O CSS consome `var(--…)`, gerado de
  `tokens.json` (`bg/page` → `--bg-page`). Valor que não existe nos tokens é lacuna.
- **Marcador é comentário HTML; título é conteúdo.** O vocabulário fechado está em
  `docs/comportamento/conteudo/arquivo-de-texto-vira-pagina.md`. Seção nunca é
  reconhecida pelo nome.
- **Atualizar uma página é editar um arquivo de texto**, não código.
- Divergência entre código e contrato se resolve decidindo qual está errado, nunca
  ajustando o contrato ao código em silêncio.

## Skills do projeto

Em `.claude/skills/`: `diretrizes`, `contrato-de-comportamento`, `log-de-decisoes`,
`loop-produto-playbook` e as do Spec Kit (`speckit-*`). Cada uma das três skills de
processo guarda ao lado do `SKILL.md` o `briefing.md` a partir do qual foi construída.

## Git

Commits saem como **Larissa Quadros** (configuração local deste repositório). Antes de
commitar, confira que nada de `_privado/` nem dado pessoal novo entrou no índice.
