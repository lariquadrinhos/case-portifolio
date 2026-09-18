# Constituição do Portfólio

Princípios técnicos deste projeto. **Não repete o que já está escrito em outro lugar:**
método e conduta vivem em `.claude/skills/diretrizes/SKILL.md`; o que cada tela faz vive
em `docs/comportamento/`; os valores visuais vivem nas variáveis do Figma. Esta
constituição diz **como se constrói aqui**.

Toda regra abaixo deriva de uma decisão registrada em `docs/log-de-decisoes.md`. A entrada
de origem está citada em cada uma.

## Core Principles

### I. O HTML entrega o produto; o script acrescenta

O HTML **DEVE** entregar textos, imagens, navegação, âncoras da trilha, contato e o tema do
sistema. O JavaScript **DEVE** se limitar a três acréscimos: troca manual de tema com
memória, marcação automática da trilha ao rolar, e ampliação de imagem.

Sem script, o site **DEVE** perder conveniências e **NÃO DEVE** perder conteúdo.

*Razão:* o argumento não é quem desliga JavaScript — é que todo visitante passa pelo
momento em que o script ainda não chegou. A exigência é primeira leitura em menos de 2,5
segundos em rede móvel, e esse relógio só para quando o texto aparece. *(Decisão 005)*

### II. Uma informação, uma fonte

Nenhum valor, texto ou regra **DEVE** existir em dois lugares. A fronteira é declarada:

- **Quanto vale** um token — Figma, em variáveis. Nunca copiado para o código à mão.
- **Quanto disso, e onde** — documento de definições. São decisões de ritmo, não valores.
- **O que cada tela faz** — contrato de comportamento.
- **Conteúdo autoral** — os três arquivos de texto.
- **Copy de interface** — o contrato da tela que a exibe.

*Razão:* duas listas do mesmo dado divergem, e a divergência aparece tarde. *(Decisões 006,
008, 011, 012)*

### III. Lacuna é marcada, nunca preenchida

Caminho não decidido **DEVE** receber `@lacuna` no ponto exato do contrato, citando a
pergunta correspondente em `docs/perguntas-em-aberto.md`. Preencher com o valor mais
plausível **É PROIBIDO**.

Nenhum contrato **DEVE** chegar a `status: aprovado` com `@lacuna` no caminho que será
implementado.

*Razão:* é o que faz o processo pagar por si — a decisão que falta aparece na escrita,
quando custa uma frase, em vez de aparecer na implementação, quando custa refazer.
*(Diretriz 0)*

### IV. O contrato é fonte, não registro

O contrato **DEVE** definir o que precisa ser verdade, não descrever o que foi construído.
Divergência entre código e contrato **DEVE** ser resolvida decidindo qual dos dois está
errado — nunca ajustando o contrato ao código em silêncio.

Comportamento descoberto durante a implementação **DEVE** voltar ao contrato antes de
virar código definitivo.

*Razão:* contrato escrito depois da implementação é reconstrução de memória, e reconstrução
de memória não vale.

### V. Acessibilidade mora dentro de cada componente

Foco visível, navegação por teclado e respeito a movimento reduzido **NÃO DEVEM** ter
seção, página ou domínio próprios. Cada componente **DEVE** declarar os seus.

Todo par de cores novo **DEVE** passar por AA nos dois temas antes de entrar: 4,5:1 em
texto, 3:1 em elemento gráfico.

*Razão:* domínio para acessibilidade vira a página que ninguém abre — e é assim que ela
deixa de ser feita.

## Restrições técnicas

- **Sem framework.** HTML e CSS escritos aqui, com uma construção própria que lê os três
  arquivos de conteúdo e gera as páginas. *(Decisão 009)*
- **Sem backend.** Nada que exija servidor: sem formulário, sem medição, sem CMS.
  Confirmado item a item.
- **Construção obrigatória.** Sem ela, atualizar uma página seria editar HTML — e a regra
  é que atualizar uma página é editar um arquivo de texto.
- **Marcadores são comentários HTML; títulos são conteúdo.** A construção **DEVE** ler
  `<!-- bloco: -->`, `<!-- trilha: -->`, `<!-- privado -->`, `<!-- bloco: foto -->` e
  `Legenda:`, e **NÃO DEVE** reconhecer seção por nome. *(Decisão 006)*
- **Nenhum valor visual digitado à mão.** Todo valor vem de uma das três coleções de
  variáveis. Valor necessário que não existe lá é lacuna, não improviso.
- **Desempenho:** primeira leitura possível em menos de 2,5 segundos no celular, em rede
  móvel comum.
- **Um nome só, nos três lugares:** frame no Figma, título no contrato, nome no código.

## Fluxo de trabalho

- **O produto é desenhado inteiro no Figma antes de virar código.** O código implementa o
  que já foi decidido; não decide enquanto constrói.
- **Não existe fase de tela pequena.** Cada tela nasce nas duas larguras, e só sai da mesa
  quando funciona nas duas.
- **Os dois temas nascem juntos.** Nenhum componente ganha o escuro depois.
- **Uma coisa inteira por vez.** Um domínio fechado vale mais que todos pela metade.
- **Nada é dado como pronto sem ter sido visto** nas duas larguras, nos dois temas, e
  percorrido pelo teclado.
- **Toda decisão com alternativa real vira entrada no log, no momento em que acontece.**

## Governance

Esta constituição trata de **como se constrói**. Ela não substitui nem contradiz:

| Documento | Manda sobre |
|---|---|
| Definições do produto | o contrato |
| Contrato de comportamento | o código |
| **Esta constituição** | **como o código é escrito** |
| Log de decisões | nada — é memória, não fonte |

**Emenda.** Toda alteração aqui **DEVE** ter uma entrada correspondente no log de decisões,
com a alternativa descartada. Alteração sem decisão registrada não vale.

**Versionamento.** MAIOR para remoção ou redefinição incompatível de princípio; MENOR para
princípio ou seção nova; CORREÇÃO para esclarecimento sem mudança de sentido.

**Conformidade.** Antes de considerar qualquer coisa pronta: nenhuma lacuna aberta no
caminho implementado, nenhum valor visual digitado à mão, nenhuma informação em dois
lugares, e acessibilidade declarada dentro de cada componente tocado.

**Version**: 1.0.0 | **Ratified**: 2026-09-18 | **Last Amended**: 2026-09-18
