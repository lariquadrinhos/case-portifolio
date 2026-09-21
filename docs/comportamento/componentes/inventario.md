---
fluxo: componentes/inventario
dominio: componentes
dono: design
status: rascunho
atualizado: 2026-09-18
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

### card de case

Usado no índice de Trabalhos e ao fim de cada case. Carrega a cor do case de destino.

- **Capa em 3:2**, no topo, ocupando a largura do card.
- Abaixo dela, título e a linha de tensão, com respiro entre os dois e margem em volta.
- **O componente não mantém a proporção da capa ao ser redimensionado** — a altura é fixa e
  precisa ser ajustada em cada instância. É limitação da construção de hoje, e a Fase 2
  precisa resolver, senão cada tela ajusta à mão e elas divergem.
- Valores de tipo e proporção são **provisórios**: preenchidos para o componente existir,
  não escolhidos. A pergunta P40 os trata; o componente, porém, existe e funciona — isto
  não é lacuna.

## Peças

| Nome no cenário | Figma | Storybook |
|---|---|---|
| card de case | `101:8` | não se aplica |
| — os outros seis | `@lacuna` | não se aplica |

## Comportamento

```gherkin
# language: pt
Funcionalidade: Inventário de componentes

  Cenário: Um componente novo é desenhado
    Quando um componente é fechado no Figma
    Então ele ganha um arquivo próprio neste domínio
    E o arquivo lista suas variantes, seus estados e quando não usar
    E o arquivo não repete nenhum valor que já vive nas variáveis

  @lacuna
  Cenário: Os sete componentes previstos
    Então A DEFINIR — ver pergunta P30
    # Previstos: barra · botão · card · item da trilha · bloco de destaque ·
    # bloco de mídia com legenda · campo de foco.
    # O card de case existe desde 21/09/2026, construído fora de ordem por ser
    # usado em dois lugares — índice e fim de case. Os outros seis não existem.
```

## Transições

| De | Gatilho | Para |
|---|---|---|
| — | — | Componentes não têm transição própria; ela vive na tela que os usa |
