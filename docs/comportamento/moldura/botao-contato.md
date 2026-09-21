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

# Contato na barra

> **A barra é uniforme.** Todos os seus itens — Trabalhos, Quem sou eu, Contato e o
> controle de tema — usam o mesmo peso e a mesma cor. Nenhum recebe borda, fundo ou
> destaque. Os itens de navegação são do mesmo nível e **não se diferenciam por peso nem
> por cor**. O nível se marca pelo
> tamanho, nunca pela cor — e dois itens do mesmo nível não têm o que marcar. *"Trabalhos em
> primeiro lugar"* é ordem, não ênfase.
>
> **A barra indica a página atual.** O item correspondente recebe **sublinhado no acento de
> sistema** e continua sendo declarado como página atual na marcação. Cor e sublinhado
> juntos, porque cor sozinha não basta; peso fica de fora, para não confundir estado com
> hierarquia.

Fica à direita da barra fixa. Navegação diz para onde ir; contato diz o que fazer — e essa
diferença é de **comportamento, não de aparência**. Ao ser acionado, revela o endereço de
e-mail escrito por extenso e o LinkedIn.

## Regras

- O contato não é item de navegação e não leva a uma página.
- **Não tem destaque visual.** A ordem da barra é: nome · Trabalhos · Quem sou eu · Contato
  · controle de tema, com o tema por último.
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
| contato | `@lacuna` | não se aplica |
| endereço de e-mail | `@lacuna` | — |
| atalho do LinkedIn | `@lacuna` | — |

## Comportamento

```gherkin
# language: pt
Funcionalidade: Contato na barra

  Contexto:
    Dado que a barra fixa está visível em qualquer página

  Cenário: O leitor está numa página que a barra nomeia
    Dado que o leitor está em Trabalhos ou em Quem sou eu
    Quando a página abre
    Então o item correspondente recebe sublinhado no acento de sistema
    E é anunciado como página atual por leitor de tela
    E nenhum item muda de peso

  Cenário: O leitor está numa página que a barra não nomeia
    Dado que o leitor está na home, num case ou na página de erro
    Quando a página abre
    Então nenhum item da barra é sublinhado
    E nenhum item é anunciado como página atual
    # A home é alcançada pelo nome, que não é item de navegação.
    # Um case está sob Trabalhos, mas não é Trabalhos — ver pergunta P38.

  Cenário: Leitor procura como falar com ela
    Quando o leitor aciona o contato
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
    E o foco volta para o contato

  @lacuna
  Cenário: O contato em tela estreita
    Dado que a tela é estreita
    Quando a barra decide o que mostrar
    Então A DEFINIR — ver pergunta P10
    # O mínimo visível definido é nome e Trabalhos. Falta decidir onde ficam o botão de
    # contato, o item "Quem sou eu" e o controle de tema.
```

## Transições

| De | Gatilho | Para |
|---|---|---|
| Qualquer página | Acionar o contato | Contato revelado, sobre a mesma página |
| Contato revelado | Tocar no endereço | Cliente de e-mail, ou nada — o endereço permanece |
| Contato revelado | Acionar o LinkedIn | Nova aba com o perfil |
| Contato revelado | Esc ou toque fora | Contato recolhido, foco de volta no botão |
