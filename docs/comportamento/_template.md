---
# Copie este arquivo para docs/comportamento/<dominio>/<fluxo>.md e apague os comentários.
# O nome do arquivo é o slug que aparece em `fluxo:`.

fluxo: dominio/nome-do-fluxo      # caminho completo, igual ao nome do arquivo
dominio: dominio                  # moldura · tema · home · trabalhos · case · quem-sou-eu · erro · conteudo · componentes
dono: design                      # quem escreve esta entrada
status: rascunho                  # rascunho → em refinamento → aprovado
atualizado: AAAA-MM-DD            # a cada passagem pelo arquivo

# Bloco figma: obrigatório para fluxo que tem tela. OMITA em fluxo sem tela —
# o domínio `conteudo` é comportamento puro e não tem frame para apontar.
figma:
  file: hwClE9Xpm51OW4vPsCCn8J    # a chave do arquivo, igual em todo o projeto
  pagina: "00:00"                 # node-id da página; @lacuna enquanto não existir
  tela: "00:00"                   # node-id do frame; @lacuna enquanto não existir

# Seções opcionais — inclua só quando existirem. Apague quando não.
# storybook:                      # não se aplica neste projeto — ver P17
#   base: <url>
#   usa:
#     - <id-da-story>             # para que serve
# servicos:                       # não se aplica neste projeto — não há backend (009)
#   - POST /caminho/{id}/acao
---

# Nome da tela ou do fluxo

<!--
  Prosa: um parágrafo curto dizendo o que acontece aqui.
  Sem jargão, sem passo a passo, sem descrever aparência.
  Quem chega por busca lê só este trecho, e ele precisa bastar.
-->

## Regras

<!--
  Frases afirmativas e verificáveis. Cada uma precisa poder ser checada por alguém que
  nunca viu o produto.
    serve:      "A trilha marca a etapa cuja seção ocupa a maior parte da tela."
    não serve:  "A trilha deve se comportar bem."

  Não descreva medida, cor ou espaçamento — isso desce do Figma e vive em docs/spec/.
  Quando uma regra precisar de justificativa, ela vem depois das regras, em parágrafo
  próprio começando por "Por que".
-->

- 

## Peças

<!--
  OMITA esta seção inteira em fluxo sem tela — não há peça para endereçar.

  A tabela que dá profundidade ao link. O frontmatter aponta a TELA; as peças apontam
  CADA elemento: modal, variante, estado, posição.
  No corpo dos cenários a peça é citada pelo nome, em português. O id aparece só aqui.
-->

| Nome no cenário | Figma | Storybook |
|---|---|---|
|  | `@lacuna` | não se aplica |

## Comportamento

<!--
  Gherkin em português. Sete palavras, e é o vocabulário inteiro:
  Funcionalidade · Regra · Contexto · Cenário · Esquema do Cenário · Exemplos ·
  Dado / Quando / Então / E

  Havendo mais de uma variante da mesma peça, use Esquema do Cenário + Exemplos.
  Marque com @lacuna todo caminho não decidido, e escreva as opções como comentário —
  para a decisão ser tomada, não opinada. Use @lacuna sem economia.
  Toda @lacuna aponta para uma pergunta em docs/perguntas-em-aberto.md.
-->

```gherkin
# language: pt
Funcionalidade: Nome da tela ou do fluxo

  Contexto:
    Dado que 

  Cenário: 
    Dado que 
    Quando 
    Então 

  @lacuna
  Cenário: 
    Dado que 
    Então A DEFINIR — ver pergunta PNN
    # Opções: … · … · …
```

## Transições

<!-- Para onde a pessoa vai, e o que a leva. -->

| De | Gatilho | Para |
|---|---|---|
|  |  |  |
