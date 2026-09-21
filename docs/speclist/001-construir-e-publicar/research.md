# Pesquisa — Fase 0

**Feature**: Do arquivo de texto à página no ar · **Data**: 21 de setembro de 2026

Cada incógnita do contexto técnico virou uma investigação. Nenhuma foi resolvida por
suposição: as três primeiras foram medidas nos arquivos reais do projeto.

---

## 1. Quanto de markdown a construção precisa entender

**Decisão.** Um analisador próprio, cobrindo o subconjunto realmente usado: títulos de
nível 1 a 3, negrito, itálico, tabelas, listas, réguas horizontais e parágrafos. Mais o
padrão `**Chave** · valor` da tira de destaques, que não é markdown e sim convenção do
projeto.

**Razão.** Medição dos três arquivos de conteúdo:

| Recurso | Finanças | Reembolso | Quem sou eu |
|---|---|---|---|
| Títulos | 10 | 14 | 10 |
| Negrito | 19 | 32 | 4 |
| Itálico | 0 | 4 | 1 |
| Linhas de tabela | 0 | 19 | 0 |
| Itens de lista | 0 | 19 | 0 |
| Citações, código, links | 0 | 0 | 0 |

**Três recursos não são usados em lugar nenhum** — citação, código embutido e link. O único
`[link]` existente é um marcador não resolvido, não um link. Um analisador do subconjunto
fica na casa de 150 a 200 linhas.

**Alternativas consideradas.** *Uma biblioteca de markdown* — resolveria em uma linha e
traria centenas de recursos que este projeto não usa, mais atualizações de segurança para
acompanhar; contraria a decisão 022, de nenhuma dependência. *Escrever o conteúdo direto em
HTML* — mataria a regra de que atualizar uma página é editar um arquivo de texto.

**Risco declarado.** Um erro no analisador corrompe os textos dela em silêncio. É por isso
que a suíte de testes deixa de ser opcional: cada recurso do subconjunto precisa de um teste
que o cite pelo nome.

---

## 2. Como testar sem acrescentar dependência

**Decisão.** `node:test`, o executor embutido do Node, com `node:assert`. Verificado: existe
no Node instalado (v18.20.8).

**Razão.** Zero dependência, e resolve a checagem 3 do contrato — *"todo `Cenário:` é citado
por um teste"* — que estava bloqueada na pergunta **P19** por falta de suíte. O nome do teste
passa a ser o nome do cenário, em português, como o contrato exige.

**Alternativas consideradas.** *Vitest ou Jest* — melhores para projetos grandes, e
dependências que envelhecem. *Não testar* — inviável: o analisador manipula os textos que são
o produto.

---

## 3. Onde publicar, e como a construção chega lá

**Decisão.** GitHub Pages, com um arquivo de automação no repositório que constrói a cada
envio e publica a saída.

**Razão.** Três motivos, em ordem de peso. Primeiro: **a configuração de publicação vira um
arquivo versionado**, coerente com um projeto cuja regra é decisão registrada em arquivo —
nas alternativas, parte de como o site é construído vive num painel web que o Git não vê.
Segundo: o repositório e o Pages já existem, sem conta nova. Terceiro: se a construção
falhar, a automação não publica, e o que está no ar permanece — que é o SC-006.

**Alternativas consideradas.** *Cloudflare Pages* — constrói sozinho sem arquivo de
automação e entrega mais rápido; custa uma conta a mais e tira a configuração do
repositório. *Commitar a saída construída* — dispensa automação, mas mistura fonte com
gerado e enche o histórico de HTML.

**Pendente.** O domínio próprio segue adiado por decisão dela, com limite antes da Fase 6
(**P15**). Até lá o endereço é o do Pages, e apontar um domínio depois não gera retrabalho.

---

## 4. Como a construção distingue os dois modos

**Decisão.** Um argumento explícito: `node construcao/construir.mjs` para o modo local e
`--publicar` para o modo de publicação. O modo aparece na primeira linha da saída, sempre.

**Razão.** A decisão 023 estabeleceu comportamentos opostos diante de peça ausente — visível
na tela localmente, bloqueante na publicação. **O custo registrado naquela decisão foi
exatamente este: alguém publicar achando que está em modo local.** Um argumento explícito,
ecoado na saída, é o que impede a confusão; inferir o modo do ambiente a esconderia.

**Alternativas consideradas.** *Inferir pela variável de ambiente de CI* — funciona e é
invisível, que é o defeito. *Dois scripts separados* — duplica o código da construção.

---

## 5. Como os valores visuais chegam ao CSS

**Não resolvido, e por decisão dela.** O mecanismo de exportação dos tokens espera a Fase 2,
quando o design system existir no Figma (**P07**, decisão 007). O princípio já está fixado:
os valores descem das variáveis, o nome é preservado — `bg/page` vira `--bg-page` — e existe
um único lugar de onde tudo deriva.

**Consequência para o plano.** A construção assume um arquivo de tokens em CSS como entrada,
sem decidir como ele é produzido. As tarefas que dependem dele ficam bloqueadas até a Fase 2;
as demais não.
