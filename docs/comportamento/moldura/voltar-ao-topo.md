---
fluxo: moldura/voltar-ao-topo
dominio: moldura
dono: design
status: rascunho
atualizado: 2026-09-28

figma:
  file: hwClE9Xpm51OW4vPsCCn8J
  pagina: "56:2"
  tela: "357:590"
---

# Voltar ao topo

Uma pastilha que flutua no canto inferior direito depois que a leitura já andou. Aciona e a
pessoa volta ao começo da página: com o foco junto, não só a rolagem. No topo ela não existe,
porque ali não há para onde voltar.

## Regras

- **Só existe depois que a rolagem passa de uma tela.** Antes disso o topo ainda está à vista,
  e um atalho para onde a pessoa já está é ruído.
- **Não aparece em página que não rola.** É consequência da regra acima, não exceção: a home e a
  página de erro cabem numa tela e nunca chegam a mostrá-la.
- **Só existe no desktop.** Em tela estreita ela não aparece. Ali a coluna de leitura ocupa a
  largura toda, e a pastilha flutuaria **em cima do texto**: no desktop ela cai na margem vazia
  à direita, sem cobrir nada. Ver decisão 147.
- **Fica no canto inferior direito, flutuando sobre a margem.** Não empurra conteúdo e não muda a
  largura da leitura.
- **Guarda a margem da página:** 32.
- **É sólida, sem contorno e sem sombra**, preenchida em `text/primary` com rótulo em
  `bg/surface`. O limite vem do próprio preenchimento (14,25:1 no claro, 15:1 no escuro) e não
  de um traço. **Sombra só serve a quem não se separa pelo preenchimento**, e não é o caso aqui.
- **Usa `radius/pilula`, como toda forma sólida do site.** O canto não precisa separá-la do
  botão: quem separa é o tamanho (corpo de 48 contra 62, rótulo de 15 contra 18) e o fato de as
  duas nunca dividirem a tela.
- **Some quando o convite ao contato entra na tela.** Aí as duas formas sólidas nunca dividem a
  tela, e a distinção entre elas nunca é posta à prova. Quando o fim da página chega, quem manda
  é o contato.
- **Só palavra, sem ícone.** O site não tem vocabulário de ícone: estrear um aqui obrigaria a
  desenhar um conjunto inteiro para uma peça só.
- **Acionar leva o foco ao topo, não só a rolagem.** Sem isso a tecla seguinte continuaria do
  meio da página, e o retorno teria sido visual e não de navegação.
- **Some ao chegar ao topo**, pela mesma regra que a fez aparecer.
- **Aparece e some sem transição; a rolagem que ela dispara é que responde a movimento
  reduzido.** Ver decisão 138.

**Por que a mesma casca do atalho de salto.** Os dois flutuam sobre o conteúdo e os dois movem a
pessoa dentro da página: um para o começo do texto, outro para o começo da página. Casca igual
para trabalho igual poupa uma forma nova e já vem com o limite conferido nos dois temas.

## Peças

| Nome no cenário | Figma | Storybook |
|---|---|---|
| voltar ao topo | `356:120` | não se aplica |
| voltar ao topo em uso, desktop | `357:590` | não se aplica |

## Comportamento

```gherkin
# language: pt
Funcionalidade: Voltar ao topo

  Contexto:
    Dado que a tela é desktop
    E que a página é mais alta que a janela

  Cenário: No topo ele não está lá
    Dado que a página acabou de abrir
    Então a pastilha não aparece

  Cenário: Aparece quando a leitura já andou
    Quando a pessoa rola mais de uma tela
    Então a pastilha aparece no canto inferior direito
    E nada na página se desloca

  Cenário: Some ao voltar
    Dado que a pastilha está visível
    Quando a pessoa rola de volta para menos de uma tela
    Então a pastilha some

  Cenário: Acionar devolve a pessoa e o foco
    Dado que a pastilha está visível
    Quando a pessoa aciona a pastilha
    Então a página volta ao topo
    E o começo da página recebe o foco
    E a tecla seguinte continua do topo

  Cenário: Em tela estreita ela não existe
    Dado que a tela é estreita
    Quando a pessoa rola a página inteira
    Então a pastilha não aparece em momento nenhum
    E nada flutua sobre a coluna de leitura

  Cenário: Página que cabe numa tela
    Dado que a página inteira cabe na janela
    Quando a pessoa tenta rolar
    Então a pastilha não aparece em momento nenhum

  Cenário: A pastilha sai de cena quando o contato chega
    Dado que a pastilha está visível
    Quando o convite ao contato entra na tela
    Então a pastilha some
    E as duas formas sólidas nunca aparecem juntas

  Cenário: A volta ao topo com movimento reduzido
    Dado que a pessoa desligou animações no sistema
    Quando ela aciona a pastilha
    Então a página salta para o topo, sem rolagem suave
    E o foco vai para o começo da página do mesmo jeito

  Cenário: A pastilha aparece sem transição
    Quando a rolagem passa de uma tela
    Então a pastilha aparece sem esmaecer nem deslizar
    E some do mesmo jeito
```

## Transições

| De | Gatilho | Para |
|---|---|---|
| Qualquer página longa, rolada além de uma tela | a rolagem | pastilha visível |
| Pastilha visível | acionar | topo da página, com foco |
| Pastilha visível | rolar de volta para menos de uma tela | pastilha some |
