---
fluxo: case/trilha
dominio: case
dono: design
status: rascunho
atualizado: 2026-09-21

figma:
  file: hwClE9Xpm51OW4vPsCCn8J
  pagina: "56:2"
  tela: "107:22"
---

# Trilha de leitura

Fixa à esquerda durante a leitura do case. **Dá duas informações ao mesmo tempo: onde a
pessoa está e quanto falta.** É o único elemento gráfico distintivo do site, e existe por
função, não por decoração.

## Regras

- A trilha é **do case, não do sistema**: existe só dentro de um case e carrega a cor dele.
- **A trilha marca a etapa cuja seção ocupa a maior parte da tela.** O marcador se move
  sozinho conforme a pessoa rola.
- Cada item é clicável e leva à seção correspondente.
- **Os rótulos vêm dos arquivos dos cases**, como comentário abaixo de cada título de
  capítulo. Não existe lista de etapas em outro lugar — assim um erro de ordem é impossível
  de não ver.
- Os rótulos usam termos conhecidos do processo de design e **não repetem o título do
  capítulo**.
- A etapa ativa se distingue por marcador maior, peso e cor; as demais ficam em apoio.

### Em tela estreita

- A trilha **não cabe** e vira uma **faixa fina de progresso**, logo abaixo da barra,
  tocável para abrir a lista completa de etapas.
- **A faixa nomeia a etapa atual e diz a posição** — "Descoberta · 2 de 6". Sem isso ela
  daria só *quanto falta* e perderia *onde estou*, que é metade da razão de a trilha
  existir. Ver decisão 043.

## Peças

| Nome no cenário | Figma | Storybook |
|---|---|---|
| traço | `107:23` | não se aplica |
| marcador | `107:22` | não se aplica |
| marcador da etapa ativa | `107:22` | não se aplica |
| faixa de progresso | `108:30` | não se aplica |

## Comportamento

```gherkin
# language: pt
Funcionalidade: Trilha de leitura

  Cenário: A pessoa rola o case
    Dado que a trilha está visível
    Quando a seção de uma etapa passa a ocupar a maior parte da tela
    Então o marcador se move para essa etapa
    E a etapa ativa se distingue das demais

  Cenário: A pessoa pula para uma etapa
    Quando a pessoa aciona um item da trilha
    Então a página vai até a seção correspondente
    E o marcador acompanha

  Cenário: A trilha sem script
    Dado que o JavaScript está indisponível
    Então os itens continuam levando às seções, por âncora
    E o marcador não acompanha a rolagem
    E nenhum conteúdo do case deixa de ser legível

  Cenário: A trilha em tela estreita
    Dado que a tela é estreita
    Quando o case abre
    Então a trilha aparece como faixa fina de progresso, abaixo da barra
    E a faixa nomeia a etapa atual e diz a posição dela no total
    Quando a pessoa toca a faixa
    Então a lista completa de etapas aparece

  @lacuna
  Cenário: A trilha e o respeito a movimento reduzido
    Dado que a pessoa desligou animações no sistema
    Quando o marcador muda de etapa
    Então A DEFINIR — ver pergunta P11
```

## Transições

| De | Gatilho | Para |
|---|---|---|
| Qualquer ponto do case | Item da trilha | A seção correspondente, na mesma página |
| Rolagem | Seção domina a tela | Marcador muda de etapa |
