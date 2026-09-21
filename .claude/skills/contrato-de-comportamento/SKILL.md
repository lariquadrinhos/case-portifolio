---
name: contrato-de-comportamento
description: Constrói e mantém o contrato de comportamento do produto — um arquivo markdown por tela ou fluxo, em Gherkin português, descrevendo o que a aplicação faz. Use ao mencionar uma tela ou fluxo pela primeira vez, ao avançar qualquer etapa do processo (descoberta, wireframe, design system, handoff, implementação), ao fechar uma lacuna, ou quando alguém perguntar como uma tela se comporta. Não trata de aparência — medida, cor e espaço descem do Figma.
---

# Contrato de comportamento

**É o manual de telas do projeto.** Manual e contrato são a mesma coisa, e por isso têm um
nome só. O nome escolhido é *contrato* porque diz o que ele faz: não descreve o que foi
construído, **define o que precisa ser verdade**.

Para cada tela criada no Figma existe uma entrada aqui, que a **descreve** e a **liga** —
ao frame, a cada peça dentro dele, e ao que ela faz. Um arquivo markdown por tela ou fluxo,
uma pasta por domínio.

## O problema que ele resolve

Hoje o comportamento de uma tela existe em post-it no canvas, em reunião, em copy de
interface e na memória de quem construiu. Ele é redigitado quatro vezes, por quatro
pessoas, com quatro interpretações — refinamento, implementação, contrato de API e runbook
de plantão.

O contrato move a escrita para quem tem a informação, **uma vez só**, num formato que os
quatro leitores consomem sem tradução.

## Por que ele importa ainda mais quando o time é uma pessoa

Neste projeto, designer e desenvolvedor são a mesma pessoa. Isso não dispensa o contrato —
**aumenta o valor dele.**

O handoff continua existindo; ele só deixou de atravessar duas pessoas e passou a atravessar
o tempo. O que foi decidido desenhando precisa chegar inteiro em quem vai implementar,
mesmo quando essa pessoa é a mesma, semanas depois, sem lembrar por que aquela tela era
assim. Sem o contrato, a etapa de código vira o lugar onde o design acontece por acidente —
que é exatamente o que este projeto existe para evitar.

É por isso que o contrato **unifica o trabalho de design e o de desenvolvimento**: ele é o
único artefato que os dois lados escrevem e leem, e o único formato em que uma decisão de
experiência chega ao código sem ser redigitada.

## A regra que separa os dois mundos

| O que é | Onde vive | Como chega lá |
|---|---|---|
| **Visual** — medida, cor, espaço, raio | `docs/spec/` | Desce do Figma |
| **Comportamento** — o que acontece ao clicar, o que aparece vazio, como a trilha decide | `docs/comportamento/` | **Não desce de lugar nenhum. Precisa ser escrito.** |

Esta skill cuida só da segunda metade. **Descrever em palavras o que o Figma já mostra é
anti-padrão**, não zelo.

## O que o contrato não é

Distinção que já foi confundida uma vez neste projeto, e não deve ser de novo:

| | Responde | Organiza-se por |
|---|---|---|
| **Contrato de comportamento** | O que esta tela faz, e onde ela está no Figma | **Tela ou fluxo** — permanente |
| **Spec** (`docs/speclist/`) | O que vamos construir agora, em que passos | **Funcionalidade** — temporária |

Não são dois lugares dizendo a mesma coisa. A spec é plano de trabalho e se encerra quando
o trabalho termina; o contrato é verdade sobre o produto e permanece. Uma spec **consome**
o contrato; nunca o substitui.

---

## 1. O contrato é alimentado ao longo do processo — nunca escrito de uma vez

**Esta é a característica central. Tudo o mais é consequência dela.**

O contrato nasce cedo, incompleto e honesto, e vai sendo preenchido conforme as decisões
acontecem. Não é relatório do que foi feito: é onde a decisão é registrada no momento em
que é tomada. **Contrato escrito no fim é reconstrução de memória, e reconstrução de
memória não vale.**

### Criar o arquivo na primeira menção

Na primeira vez que uma tela ou fluxo for mencionado, crie o arquivo — mesmo que quase
tudo esteja em aberto. **Um contrato com oito `@lacuna` é mais útil que um arquivo
inexistente**, porque torna visível o que ainda não foi decidido.

### Reabrir a cada etapa, acrescentando sem refazer

| Etapa | O que entra |
|---|---|
| Descoberta / definição | `Funcionalidade`, `Contexto`, regras de negócio conhecidas, e uma `@lacuna` por decisão não tomada |
| Fluxo e wireframe | `Cenário` do caminho principal, `Transições`, estados vazio, carregando e erro |
| Design system e mockup | Tabela de `Peças` com ids do Figma e stories, token citado pelo nome |
| Handoff / refinamento | Produto fecha as `@lacuna`; cenários viram unidade de estimativa |
| Contrato de serviço | O `.api.md` derivado: limites de tempo, estados de erro |
| Implementação | Nada muda — exceto caso não previsto, que volta como PR **no contrato**, antes do merge |
| Sustentação | Runbook de cada alerta aponta para o cenário correspondente |

**Acrescentar é diferente de refazer.** Nunca reescreva o que já está aprovado ao
adicionar uma etapa nova.

### Manter `status` e `atualizado` a cada passagem

`rascunho` → `em refinamento` → `aprovado`. Só chega em `aprovado` quando **não há
`@lacuna` no caminho que vai ser implementado**.

### Nunca fechar uma lacuna sozinha

Decisão em aberto vira pergunta com opções e consequências. Sem resposta, a lacuna fica
marcada e visível — **jamais preenchida com o que for plausível**.

É isso que faz o processo pagar por si: caminho não decidido vira item aberto na escrita,
quando custa uma frase, em vez de virar bug na sprint ou chamado de madrugada.

---

## 2. Estrutura

```
docs/
├── spec/                        # visual, gerado do Figma
└── comportamento/               # o que esta skill mantém
    ├── README.md                # como escrever
    ├── _template.md             # o esqueleto
    └── <dominio>/
        ├── <fluxo>.md
        └── <fluxo>.api.md
```

O nome do arquivo é o slug do campo `fluxo:`.

### Frontmatter — para a máquina

```yaml
---
fluxo: cadastro/analise-de-cadastro
dominio: cadastro
dono: design
status: rascunho | em refinamento | aprovado
atualizado: AAAA-MM-DD

figma:
  file: <file key>
  pagina: "<node-id da página>"
  tela: "<node-id do frame>"

storybook:
  base: <url do storybook publicado>
  usa:
    - <id-da-story>        # para que serve

servicos:                  # o que a tela depende para se comportar
  - POST /caminho/{id}/acao
---
```

### Corpo

1. **Prosa** — um parágrafo curto dizendo o que acontece ali. Sem jargão, sem passo a passo.
2. **`## Regras`** — frases afirmativas e verificáveis. Cada uma precisa poder ser checada
   por quem nunca viu o produto.
3. **`## Peças`** — a tabela que dá profundidade ao link. O frontmatter aponta a *tela*;
   as peças apontam *cada elemento*.

   ```
   | Nome no cenário    | Figma      | Storybook                    |
   |--------------------|------------|------------------------------|
   | modal · confirmada | 71402:140  | componentes-bottomsheet--... |
   ```

4. **`## Comportamento`** — bloco Gherkin em português.
5. **`## Transições`** — tabela De / Gatilho / Para.

**Peça é citada pelo nome, em português, no corpo do cenário. O id aparece uma vez só, na
tabela.** Assim a leitura continua humana e a máquina ainda resolve o endereço.

---

## 3. Gherkin — sete palavras, e é o vocabulário inteiro

| Palavra | Para que serve |
|---|---|
| `Funcionalidade` | O fluxo ou a tela que o arquivo descreve |
| `Regra` | Regra de negócio que agrupa cenários |
| `Contexto` | O que já é verdade antes de todo cenário |
| `Cenário` | Um caminho concreto, do início ao fim |
| `Esquema do Cenário` | O mesmo caminho repetido para cada variante |
| `Exemplos` | A tabela das variantes |
| `Dado · Quando · Então · E` | Situação · ação · resultado · continuação |

Primeira linha do bloco: `# language: pt`. Qualquer runner de Cucumber lê o arquivo como
está — a orientação da própria documentação do Gherkin é escrever no idioma que os
especialistas do domínio usam.

**Variante não é caso especial.** Havendo mais de uma variante da mesma peça, use
`Esquema do Cenário` + `Exemplos` por padrão — é a mesma estrutura da tabela de variantes
que já se monta no board.

### A tag `@lacuna`

Marca todo caminho não decidido. **Use sem economia.**

```gherkin
  @lacuna
  Cenário: A análise conclui antes das perguntas terminarem
    Dado que o usuário está na pergunta 2
    Quando a análise conclui com aprovação
    Então A DEFINIR com produto
```

Quando a lacuna for escolha entre caminhos, escreva as opções como comentário — para a
decisão ser **tomada**, não opinada.

**A frase `ver pergunta PNN` é reservada a lacunas.** Um cenário decidido pode mencionar uma
pergunta relacionada, mas com outra redação — senão a checagem conta citação onde não há
lacuna, e um comportamento decidido passa a parecer indeciso.

---

## 4. O `.api.md`

Escrito por backend, **derivado do mesmo fluxo**, nunca inventado em paralelo. Cita de
qual cenário deriva.

É onde a regra de experiência vira requisito técnico. `E o app não exibe erro` é decisão
de experiência, tomada por design, que vira critério de aceite do backend. Quando ela não
atravessa, o resultado clássico é uma API devolvendo 504 e uma tela dizendo "algo deu
errado" para um caso perfeitamente saudável.

**O mesmo número serve três vezes:** "no máximo 30 segundos" é copy na tela, SLO no
serviço e limiar do alerta. Escrito uma vez, os três param de divergir.

---

## 5. O contrato não é copiado para o código. É citado por ele.

Duplicar o texto no repositório garante que as duas cópias divirjam. A regra é outra: **o
teste cita o cenário pelo nome**, e o CI verifica que todo cenário tem um teste que o
nomeia.

Efeito colateral que vale sozinho: um teste chamado `'Avançar sem responder'` falhando diz
o que quebrou **em português**, para quem nunca viu aquele código. `'should render
correctly'` não diz nada — nem para o dev, nem para quem está de plantão, nem para a IA
que vai tentar consertar.

### As quatro checagens que mantêm o contrato vivo

1. Todo `storybook.usa` existe no `index.json` publicado
2. Todo `figma.tela` resolve — arquivo existe, nó existe
3. Todo `Cenário:` é citado por um teste no repositório
4. Todo token citado existe na coleção de cores semânticas ou em `docs/spec/`

Story renomeada, layer apagada, cenário órfão ou token inventado **quebram o build**.
É essa checagem — e só ela — que impede o acervo de virar wiki morta em três meses.

---

## 6. Por que ler o pixel não resolve

Carregue este argumento, porque é o que justifica a existência do contrato.

**A mesma cor carrega intenções diferentes, e o design system já sabe disso.** Quando a
variável da marca e a da ação têm o mesmo valor, quatro papéis compartilham um hex. Quem
lê o pixel não tem como separar. Um humano resolve em meio segundo porque conhece o
contexto; uma LLM resolve pelo que foi treinada — e o treino diz que vermelho é erro,
verde é sucesso, azul é link. Numa empresa onde azul é a marca, isso erra.

**Falta intenção, não medida.** A medida já desceu toda do Figma.

**O custo que some:** sem contrato, a IA varre o arquivo do Figma e recebe dezenas de
frames e centenas de nós de texto, nenhum dizendo o que a tela faz. Com contrato, o Figma
entra como **confirmação visual**, não como fonte de descoberta: um node-id, um render, fim.

---

## 7. Papéis — recuse contribuição fora do papel

| Quem | Escreve | Não escreve |
|---|---|---|
| Design | Comportamento, transições, estados, qual token pinta o quê | A medida — desce do Figma |
| Produto | Regras de negócio nos cenários; fecha as `@lacuna` | O layout |
| Backend | O `.api.md`: contrato, limites, estados de erro | A regra de experiência — vem de cima |
| Front | O código e o teste que cita cada cenário pelo nome | O comportamento — recebe pronto, não deduz |
| Sustentação | O link do runbook para o cenário | Nada. Só consome — e é esse o ponto |

**Quem escreve o BDD hoje escreve errado:** o desenvolvedor escreve depois, deduzindo. Mas
comportamento é experiência do usuário, e quem conhece a experiência é design, com produto
ao lado. O desenvolvedor está sendo obrigado a inventar a informação que deveria ter recebido.

Ao receber contribuição fora do papel, **diga de quem é a decisão** e recuse.

---

## 8. Critério de aceite

**Pronto para começar**
- Existe `docs/comportamento/<dominio>/<fluxo>.md` mergeado
- As quatro checagens de CI passaram
- Nenhuma `@lacuna` no caminho que a tarefa vai implementar

**Pronto para fechar**
- Todo cenário tem teste que o cita pelo nome
- Todo estado citado aparece numa story
- Todo alerta do fluxo aponta para um cenário
- Comportamento que mudou na implementação voltou como PR **no contrato**, antes do merge

**O contrato é fonte, não registro.** Se o código divergiu, é o contrato que precisa de
decisão — não o contrário.

---

## 9. Saída secundária: o manual visual

O mesmo arquivo renderiza como manual legível por quem não abre Figma nem lê Gherkin: a
imagem da tela ao lado, as regras em português, como o fluxo termina, as variantes nomeadas.

1. **A imagem não é print colado.** Vem da exportação do node-id do frontmatter — o mesmo
   id que o CI resolve. Manual com tela desatualizada deixa de ser possível.
2. **O texto não é resumo.** É o mesmo arquivo que os testes executam.
3. **Não tem passo manual.** Publica no mesmo pipeline do Storybook.

---

## 10. Comportamento em conversa

- **Nunca assumir uma premissa.** Ambiguidade capaz de mudar o comportamento vira pergunta
  explícita, estruturada, com opções e consequências. Nada avança sem resposta.
- **Uma coisa por vez** ao conduzir uma etapa. Despejar quinze perguntas não é rigor, é
  terceirizar o trabalho de priorizar.
- **Escrever no idioma do domínio** — português, incluindo as palavras-chave do Gherkin.
- **Citar peças pelo nome, nunca por id, no corpo do cenário.**
- **Recusar-se a deduzir intenção a partir de cor, tom ou posição.** Informação não escrita
  é lacuna.
- **Não reescrever o que já está aprovado.**
- **Ao encontrar divergência entre contrato e implementação**, apontar e perguntar qual dos
  dois está errado — não escolher sozinha.

---

## 11. Primeira execução num projeto

1. A estrutura de pastas `docs/comportamento/`
2. O `README.md` explicando como escrever
3. O `_template.md` com o esqueleto completo e comentado
4. O script das checagens — `scripts/checagens.mjs`. **As que não puderem rodar ainda
   ficam declaradas na saída, com o motivo e a pergunta correspondente**, nunca omitidas:
   checagem ausente e checagem impossível parecem iguais quando as duas somem
5. **O primeiro contrato real, de uma tela que já existe** — porque o teste de escrita é
   esse: se for penoso para o designer, o formato está errado, não a pessoa

---

## Anti-padrões — recuse

- Contrato escrito depois da implementação, para "documentar o que foi feito"
- Lacuna preenchida com o caminho mais provável em vez de perguntar
- Id do Figma no meio da frase do cenário
- Cenário sem teste que o cite
- Texto do contrato duplicado dentro do código
- Nome de teste genérico no lugar do nome do cenário
- Descrever em palavras o que o Figma já mostra
- `status: aprovado` com `@lacuna` no caminho a implementar

---

## Perguntas abertas neste projeto

O briefing pressupõe um contexto corporativo que **este projeto não tem**. As quatro
diferenças abaixo são lacunas reais — não preencha sozinha:

- `[?: não há Storybook. A checagem 1 e o campo storybook.usa se aplicam?]`
- `[?: não há backend — está fora de escopo. O .api.md e o papel de backend se aplicam?]`
- `[?: a checagem 3 exige suíte de testes; a stack ainda não foi decidida]`
- `[?: docs/spec/ é descrito como "já existe"; neste projeto ainda não existe]`

Os cinco papéis são **a mesma pessoa** aqui. A tabela continua valendo integralmente — ela
separa **decisões**, não pessoas. Saber com que chapéu uma decisão está sendo tomada é o que
impede que a medida seja inventada no código, que o layout seja decidido no refinamento, e
que o comportamento seja deduzido por quem deveria recebê-lo pronto.

---

*Base: briefing "Contrato de comportamento", de Larissa Quadros.*
