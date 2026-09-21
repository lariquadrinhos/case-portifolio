# Contrato de comportamento

O que a aplicação **faz** — nunca como ela se parece.

| O que é | Onde vive |
|---|---|
| Visual — medida, cor, espaço, raio | `docs/spec/`, descendo do Figma |
| Comportamento — o que acontece ao clicar, o que aparece vazio | aqui |

Um arquivo por tela ou fluxo, uma pasta por domínio. Como escrever:
`/contrato-de-comportamento`.

## Domínios

Um domínio é um lugar onde alguém vai procurar alguma coisa. Se ninguém navegaria até ele,
não é domínio: é checklist, e checklist mora dentro das regras de quem usa.

| Domínio | O que guarda | Estado |
|---|---|---|
| `moldura/` | Barra fixa, botão de contato, voltar ao topo | vazio |
| `tema/` | Claro e escuro, qual abre, como é lembrado, não piscar o errado | vazio |
| `home/` | A capa | vazio |
| `trabalhos/` | O índice em cards | vazio |
| `case/` | Página, tira de destaques, trilha, blocos de destaque, mídia com legenda, botão de protótipo, card do próximo | vazio |
| `quem-sou-eu/` | Foto, texto, currículo, contato | vazio |
| `erro/` | Endereço inexistente e outras saídas de volta | vazio |
| `conteudo/` | Como um arquivo de texto vira página | vazio |
| `componentes/` | O design system: variantes, estados, quando usar | vazio |

O domínio `case/` é o mais denso do produto — cada peça é um arquivo, não um parágrafo.
A trilha sozinha tem comportamento suficiente para um.

**Acessibilidade não é domínio.** Foco visível, navegação por teclado e respeito a
movimento reduzido valem em todo componente e aparecem dentro de cada um. Domínio para
isso vira a página que ninguém abre — e é assim que acessibilidade deixa de ser feita.

**Contrato não aponta para regra por posição.** Nada de *"as duas últimas regras"* ou *"a
regra acima"* — nomeie a regra. Referência por posição quebra em silêncio quando alguém
insere uma linha no meio: o texto continua lendo bem e passa a descrever outra coisa. A
checagem 5 cobra isso. Descrever a tela — *"logo abaixo da barra"* — não é apontar para o
documento e continua valendo.
