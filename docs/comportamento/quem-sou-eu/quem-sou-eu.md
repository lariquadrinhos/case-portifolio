---
fluxo: quem-sou-eu/quem-sou-eu
dominio: quem-sou-eu
dono: design
status: rascunho
atualizado: 2026-09-21

figma:
  file: hwClE9Xpm51OW4vPsCCn8J
  pagina: "34:2"
  tela: "@lacuna · não desenhado"
---

# Quem sou eu

Foco em como ela pensa, como trabalha, como toma decisões e no que valoriza — **não em
cronologia de emprego**. É aqui que mora a reflexão que não cabe dentro de um case.

## Regras

- A página traz foto dela, declarada em `quem-sou-eu.md` com `<!-- bloco: foto -->` seguido
  da imagem em markdown, cujo texto alternativo é obrigatório.
- O conteúdo vem de `quem-sou-eu.md`, sob `<!-- bloco: quem-sou-eu -->`: a apresentação e
  os seis valores.
- **O histórico profissional não aparece na página** — fica no currículo em PDF, acessível
  a partir daqui.
- O contato também existe aqui, junto do currículo.
- A página menciona que o próprio site está sendo documentado enquanto é construído. É o
  que transforma a ausência de um terceiro case em demonstração, em vez de lacuna.
  **Esse parágrafo ainda não existe no arquivo de conteúdo** — ver pergunta P44.
- **O currículo é botão; o contato é texto.** Baixar um arquivo é ação dentro do site, e
  botão promete isso; o e-mail e o LinkedIn levam para fora e aparecem como palavra.

## Peças

| Nome no cenário | Figma | Storybook |
|---|---|---|
| foto | `116:48` | não se aplica |
| currículo em PDF | `116:73` | não se aplica |

## Comportamento

```gherkin
# language: pt
Funcionalidade: Quem sou eu

  Cenário: A pessoa quer saber quem está por trás do trabalho
    Quando a página abre
    Então a foto aparece
    E a apresentação e os valores aparecem
    E nenhuma cronologia de emprego aparece na página

  Cenário: A pessoa baixa o currículo
    Dado que a página está aberta
    Quando a pessoa aciona o currículo
    Então o arquivo em PDF é entregue

  Cenário: A pessoa entra em contato a partir daqui
    Dado que a página está aberta
    Quando a pessoa aciona o contato
    Então o e-mail e o LinkedIn ficam disponíveis, como na moldura

  Cenário: A foto é trocada
    Dado que o arquivo de imagem apontado pelo marcador de foto mudou
    Quando a construção acontece
    Então a página mostra a nova foto
    E nenhum código precisou ser alterado

  Cenário: O currículo ainda não foi produzido
    Dado que o PDF não existe
    Quando a construção acontece localmente
    Então a página gera com a falta visível no lugar do currículo
    Quando a construção acontece no caminho de publicação
    Então ela recusa e nada é publicado
```

## Transições

| De | Gatilho | Para |
|---|---|---|
| Quem sou eu | Currículo | Download do PDF |
| Quem sou eu | Contato | Contato revelado, sem sair da página |
