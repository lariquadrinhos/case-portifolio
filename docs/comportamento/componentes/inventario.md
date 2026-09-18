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

## Peças

| Nome no cenário | Figma | Storybook |
|---|---|---|
| — nenhum componente desenhado ainda | `@lacuna` | não se aplica |

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
    # bloco de mídia com legenda · campo de foco. Nenhum desenhado.
```

## Transições

| De | Gatilho | Para |
|---|---|---|
| — | — | Componentes não têm transição própria; ela vive na tela que os usa |
