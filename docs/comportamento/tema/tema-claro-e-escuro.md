---
fluxo: tema/tema-claro-e-escuro
dominio: tema
dono: design
status: rascunho
atualizado: 2026-09-21

figma:
  file: hwClE9Xpm51OW4vPsCCn8J
  pagina: "34-2"
  tela: "@lacuna · o controle de tema ainda não foi desenhado"
---

# Tema claro e escuro

Atravessa o site inteiro, e por isso não pertence à moldura. Na primeira visita o tema
segue a preferência do sistema; o controle na barra sobrescreve, e a escolha é lembrada.
O tema certo aparece já na primeira pintura — nunca há troca visível depois que a página
apareceu.

## Regras

- Na primeira visita, o tema segue a preferência declarada pelo sistema.
- O controle na barra sobrescreve a preferência do sistema.
- A escolha manual é lembrada entre visitas e **vale até ser trocada de novo**. Mudança na
  preferência do sistema **não a desfaz**.
- **O controle tem duas posições**, claro e escuro. Não há posição "seguir o sistema": o
  automático vale enquanto ninguém tiver escolhido, e não volta depois.
- **O tema certo é aplicado antes da primeira pintura.** Nunca há piscada.
- **Sem JavaScript, o tema segue a preferência do sistema e o conteúdo permanece legível.**
  O script é reforço que falha em segurança, não dependência.
- O tema claro usa fundo cinza claro, não branco puro.
- Os dois modos foram escolhidos e verificados em separado. **Nenhum valor de um deriva
  automaticamente do outro**, nem no Figma nem no código.
- Contraste mínimo de 4,5:1 em texto e 3:1 em elemento interativo, **nos dois temas**.

**Como as duas últimas regras convivem com "não piscar":** a piscada só existe por causa da
troca manual. Se o tema apenas seguisse o sistema, o CSS resolveria antes de qualquer
pintura. Como há controle, a escolha salva precisa ser lida antes do primeiro desenho — o
que exige um script curto e bloqueante no topo do documento, cuja única tarefa é marcar o
tema no elemento raiz. Se ele não executar, o CSS cai na preferência do sistema.

## Peças

| Nome no cenário | Figma | Storybook |
|---|---|---|
| controle de tema · duas posições | `@lacuna` | não se aplica |

## Comportamento

```gherkin
# language: pt
Funcionalidade: Tema claro e escuro

  Cenário: Primeira visita, sistema no escuro
    Dado que o leitor nunca escolheu um tema neste site
    E que o sistema dele está no modo escuro
    Quando qualquer página abre
    Então a página aparece no tema escuro
    E o tema escuro já está aplicado na primeira pintura

  Cenário: Primeira visita, sistema no claro
    Dado que o leitor nunca escolheu um tema neste site
    E que o sistema dele está no modo claro
    Quando qualquer página abre
    Então a página aparece no tema claro
    E o fundo é cinza claro, não branco puro

  Cenário: Leitor troca o tema
    Dado que o leitor está em qualquer página
    Quando ele aciona o controle de tema
    Então a página passa para o outro tema
    E a escolha é guardada

  Cenário: Leitor volta depois de ter escolhido
    Dado que o leitor já escolheu um tema nesta site antes
    Quando ele abre qualquer página
    Então a página aparece no tema que ele escolheu
    E a preferência do sistema é ignorada
    E o tema já está aplicado na primeira pintura

  Cenário: O script de tema não executa
    Dado que o JavaScript está indisponível
    Quando qualquer página abre
    Então a página aparece no tema do sistema
    E todo o conteúdo permanece legível
    E o controle de tema não promete o que não pode cumprir

  Cenário: O leitor muda a preferência do sistema depois de ter escolhido manualmente
    Dado que o leitor escolheu um tema manualmente
    Quando ele muda a preferência do sistema operacional
    Então o site continua no tema que ele escolheu
    E a preferência do sistema segue ignorada até ele trocar de novo

  Cenário: O leitor nunca escolheu e muda a preferência do sistema
    Dado que o leitor nunca acionou o controle neste site
    Quando ele muda a preferência do sistema operacional
    Então o site acompanha a nova preferência

  @lacuna
  Cenário: O controle de tema em tela estreita
    Dado que a tela é estreita
    Então A DEFINIR — ver pergunta P10
```

## Transições

| De | Gatilho | Para |
|---|---|---|
| Qualquer página | Acionar o controle | A mesma página, no outro tema |
| Primeira visita | — | Tema do sistema |
| Visita seguinte | — | Tema escolhido, se houve escolha |
