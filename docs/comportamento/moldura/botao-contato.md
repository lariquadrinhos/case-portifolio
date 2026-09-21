---
fluxo: moldura/botao-contato
dominio: moldura
dono: design
status: rascunho
atualizado: 2026-09-18

figma:
  file: hwClE9Xpm51OW4vPsCCn8J
  pagina: "@lacuna · nada desenhado ainda"
  tela: "@lacuna · nada desenhado ainda"
---

# Botão de contato

> **Regra que vale para a barra inteira, e não só para o contato:** os itens de navegação
> são do mesmo nível e **não se diferenciam por peso nem por cor**. O nível se marca pelo
> tamanho, nunca pela cor — e dois itens do mesmo nível não têm o que marcar. *"Trabalhos em
> primeiro lugar"* é ordem, não ênfase.
>
> **A barra não indica visualmente a página atual.** Mas o item correspondente é **declarado
> como página atual na marcação**, para quem navega por leitor de tela. A informação existe
> para quem precisa dela e não acrescenta canal visual para quem não precisa.

Fica à direita da barra fixa, visualmente distinto dos itens de menu. Navegação diz para
onde ir; contato diz o que fazer — e misturar os dois faz o contato competir por atenção
com os cases. Ao ser acionado, revela o endereço de e-mail escrito por extenso e o
LinkedIn.

## Regras

- O botão não é item de navegação e não leva a uma página.
- Acionar o botão revela duas saídas: o e-mail e o LinkedIn.
- **O e-mail aparece escrito por extenso — `llquadros95@gmail.com` — visível e copiável.**
- Não há formulário de contato.
- O contato também existe dentro de "Quem sou eu", junto do currículo em PDF.

**Por que o endereço aparece escrito:** um `mailto:` acionado em computador sem cliente de
e-mail configurado não faz nada visível. Quem faz triagem costuma estar no computador e
muitas vezes usa webmail. Falha silenciosa é o pior tipo de falha — com o endereço à
vista, mesmo que nada abra, a pessoa copia.

## Peças

| Nome no cenário | Figma | Storybook |
|---|---|---|
| botão de contato | `@lacuna` | não se aplica |
| endereço de e-mail | `@lacuna` | — |
| atalho do LinkedIn | `@lacuna` | — |

## Comportamento

```gherkin
# language: pt
Funcionalidade: Botão de contato

  Contexto:
    Dado que a barra fixa está visível em qualquer página

  Cenário: Leitor de tela percorre a navegação estando em Trabalhos
    Dado que o leitor está na página de trabalhos
    Quando ele percorre a barra por leitor de tela
    Então o item "Trabalhos" é anunciado como página atual
    E nenhum item da barra muda de cor ou de peso

  Cenário: Leitor está numa página de case
    Dado que o leitor está numa página de case
    Quando ele percorre a barra
    Então nenhum item é anunciado como página atual
    # Um case está sob Trabalhos, mas não é Trabalhos.

  Cenário: Leitor procura como falar com ela
    Quando o leitor aciona o botão de contato
    Então o endereço de e-mail aparece escrito por extenso
    E o atalho do LinkedIn aparece ao lado
    E a página por trás continua onde estava

  Cenário: Leitor escolhe o e-mail
    Dado que o endereço de e-mail está visível
    Quando o leitor toca no endereço
    Então o cliente de e-mail abre com o destinatário preenchido

  Cenário: O cliente de e-mail não abre
    Dado que o leitor tocou no endereço
    E que não há cliente de e-mail configurado
    Então o endereço continua visível na tela
    E o leitor consegue copiá-lo

  Cenário: Leitor escolhe o LinkedIn
    Dado que o atalho do LinkedIn está visível
    Quando o leitor o aciona
    Então o perfil abre em nova aba

  Cenário: Leitor desiste
    Dado que o contato está revelado
    Quando o leitor aciona a tecla Esc ou toca fora
    Então o contato se recolhe
    E o foco volta para o botão de contato

  @lacuna
  Cenário: O botão em tela estreita
    Dado que a tela é estreita
    Quando a barra decide o que mostrar
    Então A DEFINIR — ver pergunta P10
    # O mínimo visível definido é nome e Trabalhos. Falta decidir onde ficam o botão de
    # contato, o item "Quem sou eu" e o controle de tema.
```

## Transições

| De | Gatilho | Para |
|---|---|---|
| Qualquer página | Acionar o botão | Contato revelado, sobre a mesma página |
| Contato revelado | Tocar no endereço | Cliente de e-mail, ou nada — o endereço permanece |
| Contato revelado | Acionar o LinkedIn | Nova aba com o perfil |
| Contato revelado | Esc ou toque fora | Contato recolhido, foco de volta no botão |
