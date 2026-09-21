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
  **Esse parágrafo ainda não existe no arquivo de conteúdo.** É falta de material, não de
  decisão: o comportamento está definido, o texto é que precisa ser escrito. A P44 cobra.
- **Os valores se organizam em linhas, não em colunas.** Cada linha comporta dois valores, e
  os títulos alinham horizontalmente. Colunas independentes cresceriam em ritmos diferentes
  e os títulos deixariam de bater.
- **A ordem visual acompanha a do arquivo**, lida da esquerda para a direita: Amor,
  Curiosidade, Movimento, Melhor possível, Impacto positivo, Questionamento. Em colunas, a
  ordem visual seria 1-2-3 à esquerda e 4-5-6 à direita, divergindo da ordem em que o texto
  é lido por quem não vê o arranjo.
- **O texto de cada valor tem largura presa em 4 colunas (411px), não na célula.** A célula
  continua ocupando a metade da grade (6 colunas, 628px); só o parágrafo é mais estreito. A
  sobra fica dentro de cada metade, e as duas colunas seguem ancoradas nas metades da grade
  em vez de deixarem um vazio na direita da seção. Ver @lacuna P46 quanto à medida de linha.
- **O currículo é botão; o contato é texto.** Baixar um arquivo é ação dentro do site, e
  botão promete isso; o e-mail e o LinkedIn levam para fora e aparecem como palavra.

## Peças

| Nome no cenário | Figma | Storybook |
|---|---|---|
| foto | `116:48` | não se aplica |
| currículo em PDF | `116:73` | não se aplica |
| valores em linhas | `117:32` | não se aplica |

## Comportamento

```gherkin
# language: pt
Funcionalidade: Quem sou eu

  Cenário: A pessoa lê os valores
    Quando a seção de valores aparece
    Então os valores se organizam em linhas de dois
    E os títulos de cada linha alinham horizontalmente
    E a ordem em que aparecem é a ordem em que estão no arquivo

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
