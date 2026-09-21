---
fluxo: componentes/inventario
dominio: componentes
dono: design
status: lista fechada, sete por desenhar
atualizado: 2026-09-21
---

# Inventário de componentes

O design system. **Cada componente ganha o seu próprio arquivo neste domínio** quando for
desenhado; este inventário existe para que a lista seja visível antes de qualquer um
existir.

## Regras

- **Valores não entram aqui.** Cor, tamanho e espaço vivem nas variáveis do Figma; repetir
  criaria a segunda fonte de verdade que o projeto existe para evitar.
- O que entra é **o que a variável não diz**: para que serve, quando não usar, que estados
  existem.
- Todo componente lista os estados que tem — vazio, carregando, erro, foco, sobre, ativo,
  desabilitado, o que existir. **Estado que não está escrito é estado que alguém vai
  inventar na hora de construir.**
- **Acessibilidade não é componente à parte.** Foco visível, navegação por teclado e
  respeito a movimento reduzido aparecem dentro de cada um.
- Um nome só, nos três lugares: frame no Figma, título aqui, nome no código.

## A lista

Nove, conferidos contra as telas desenhadas — a lista abriu em sete e já mudou duas vezes. Cada um vira arquivo próprio quando for
desenhado.

| # | Componente | Onde aparece | Existe no Figma? |
|---|---|---|---|
| 1 | barra fixa | as cinco telas, nas duas larguras | não — **10 cópias soltas** |
| 2 | card de case | índice e fim de case | **sim**, `101:8` |
| 3 | trilha | case: trilha lateral no desktop, faixa de progresso no estreito | não |
| 4 | tira de destaques | case, chave e valor | não |
| 5 | bloco de mídia com legenda | case, 12 ocorrências | não |
| 6 | botão | **um lugar só**: o convite ao contato no fim do case | não |
| 7 | marca-texto | home e case, nas duas larguras | não |
| 8 | marcador de falta | case e "Quem sou eu", 19 ocorrências | não |
| 9 | tabela de comparação | case de Reembolso, nas duas larguras | não |

### O que mudou em relação aos sete previstos

- **Entraram dois** que a lista não tinha: **marca-texto** e **marcador de falta**. Os dois se
  repetem em mais de uma tela e em mais de uma largura, que é o teste.
- **Saiu um: campo de foco.** Não é componente — é token. A regra deste inventário já diz que
  acessibilidade vive dentro de cada componente, e `foco/largura` e `foco/afastamento` já
  existem nas variáveis. Mantê-lo na lista criaria uma peça que ninguém instancia.
- **O botão encolheu de escopo.** Depois das decisões 047, 052 e 055 ele sobrevive em um único
  lugar. Continua componente, mas com uma variante e um uso.

### A nona entrou pelo próprio teste

A **tabela de comparação** apareceu quando o segundo case foi desenhado, dias depois de a
lista ser fechada em oito. Ela entrou sozinha: aparece nas duas larguras, que é o teste. Isso
é a lista funcionando, não a lista furando — o inventário foi escrito para crescer assim.

### O que a lista revelou

**Só um dos oito é componente de verdade.** A barra está copiada dez vezes no arquivo: mudar
a barra hoje é mudar dez lugares à mão, e as telas novas desta sessão foram construídas
clonando a barra de uma tela existente. Nenhuma checagem pega divergência entre cópias.

### card de case

Usado no índice de Trabalhos e ao fim de cada case. Carrega a cor do case de destino.

- **Capa em 3:2**, no topo, ocupando a largura do card.
- Abaixo dela, título e a linha de tensão, com respiro entre os dois e margem em volta.
- **O componente não mantém a proporção da capa ao ser redimensionado** — a altura é fixa e
  precisa ser ajustada em cada instância. É limitação da construção de hoje, e a Fase 2
  precisa resolver, senão cada tela ajusta à mão e elas divergem.
- **Texto padrão do componente propaga para as instâncias; texto sobrescrito, não.** O card
  traz o conteúdo de um dos cases como padrão, e o outro é sobrescrito em cada uso — então
  corrigir o arquivo de conteúdo sincroniza um e deixa o outro para trás. Enquanto o Figma
  guardar cópia do texto, essa assimetria existe.
- Valores de tipo e proporção são **provisórios**: preenchidos para o componente existir,
  não escolhidos. A pergunta P40 os trata; o componente, porém, existe e funciona — isto
  não é lacuna.

## Peças

| Nome no cenário | Figma | Storybook |
|---|---|---|
| card de case | `101:8` | não se aplica |
| — os outros sete | por desenhar | não se aplica |

## Comportamento

```gherkin
# language: pt
Funcionalidade: Inventário de componentes

  Cenário: Um componente novo é desenhado
    Quando um componente é fechado no Figma
    Então ele ganha um arquivo próprio neste domínio
    E o arquivo lista suas variantes, seus estados e quando não usar
    E o arquivo não repete nenhum valor que já vive nas variáveis

  Cenário: A lista de componentes está fechada
    Dado que as cinco telas estão desenhadas nas duas larguras
    Então o inventário lista oito componentes
    E cada um deles aparece em mais de uma tela ou em mais de uma largura
    E nenhum item da lista é um valor que já vive nas variáveis

  Cenário: Um elemento repetido que não está na lista
    Quando um elemento passa a aparecer em mais de uma tela ou largura
    Então ele entra neste inventário
    E deixa de ser cópia solta
```

## Transições

| De | Gatilho | Para |
|---|---|---|
| — | — | Componentes não têm transição própria; ela vive na tela que os usa |
