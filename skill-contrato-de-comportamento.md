# Instruções para construir a skill "Contrato de comportamento"

> Este documento não é a skill. É o briefing a partir do qual o Claude deve **construir** a skill.
> Leia inteiro antes de escrever qualquer coisa. Onde algo aqui estiver ambíguo, pergunte — não preencha.

---

## 1. O que a skill precisa fazer

Construir e manter, ao longo de um processo de produto, um **contrato de comportamento**: um arquivo markdown por tela ou por fluxo, escrito por quem conhece a experiência, que descreve **o que a aplicação faz** — não como ela se parece.

O problema que a skill resolve: hoje o comportamento de uma tela existe em post-it no canvas, em reunião, em copy de interface e na memória de quem construiu. Ele é redigitado quatro vezes, por quatro pessoas, com quatro interpretações — refinamento, implementação, contrato de API e runbook de plantão. A skill move a escrita para quem tem a informação, uma vez só, num formato que os quatro leitores consomem sem tradução.

**A regra que separa os dois mundos:** o que é **visual** desce do Figma automaticamente e vive em `docs/spec/`. O que é **comportamento** não desce de lugar nenhum — precisa ser escrito. A skill cuida só da segunda metade.

---

## 2. O documento é alimentado ao longo do processo — nunca escrito de uma vez

**Esta é a característica central da skill, e precisa estar no topo das instruções que ela gera.**

O contrato nasce cedo, incompleto e honesto, e vai sendo preenchido conforme as decisões acontecem. Ele não é relatório do que já foi feito: é o lugar onde a decisão é registrada no momento em que é tomada. Um contrato escrito no fim do processo é reconstrução de memória, e reconstrução de memória não vale.

A skill deve, portanto:

**Criar o arquivo na primeira vez que a tela ou o fluxo é mencionado**, mesmo que quase tudo ainda esteja em aberto. Um contrato com oito `@lacuna` é mais útil que um arquivo inexistente, porque torna visível o que ainda não foi decidido.

**Reabrir o arquivo a cada etapa seguinte** e acrescentar o que aquela etapa produziu, sem reescrever o que já estava fechado. O que o documento ganha em cada etapa:

| Etapa do processo | O que entra no contrato |
|---|---|
| Descoberta / definição | `Funcionalidade`, `Contexto`, as regras de negócio conhecidas, e uma `@lacuna` para cada decisão ainda não tomada |
| Fluxo e wireframe | Os `Cenário` do caminho principal, as `Transições`, os estados vazio, carregando e erro |
| Design system e mockup | A tabela de `Peças` com os ids do Figma e as stories do Storybook, e o token citado pelo nome |
| Handoff / refinamento | Produto fecha as `@lacuna`; os cenários viram unidades de estimativa |
| Contrato de serviço | O `.api.md` derivado: limites de tempo, estados de erro, o que a API responde |
| Implementação | Nada muda no contrato, exceto se o código descobrir um caso que ninguém tinha previsto — aí volta como PR **no contrato**, antes do merge |
| Sustentação | O runbook de cada alerta passa a apontar para o cenário correspondente |

**Manter `status` e `atualizado` corretos no frontmatter a cada passagem.** `status` percorre `rascunho` → `em refinamento` → `aprovado`, e só chega em `aprovado` quando não há `@lacuna` no caminho que vai ser implementado.

**Nunca fechar uma lacuna sozinha.** Quando a skill encontra uma decisão em aberto, ela pergunta com opções e consequências. Se não houver resposta, a lacuna fica marcada e visível — jamais preenchida com o que for plausível. É essa disciplina que faz o processo pagar por si: caminho não decidido vira item aberto na escrita, quando custa uma frase, em vez de virar bug na sprint ou chamado de madrugada.

---

## 3. Formato do arquivo que a skill produz

Um arquivo por tela ou fluxo, mais um `.api.md` quando há contrato de serviço. Uma pasta por domínio.

```
docs/
├── spec/                        # JÁ EXISTE — nível componente, gerado do Figma
└── comportamento/               # o que a skill mantém
    ├── README.md                # como escrever
    ├── _template.md             # o esqueleto
    └── <dominio>/
        ├── <fluxo>.md
        └── <fluxo>.api.md
```

O nome do arquivo é o slug que aparece no campo `fluxo:`.

### Estrutura de cada arquivo

**Frontmatter — para a máquina.** É o que substitui a seta do canvas.

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

**Prosa — para o humano.** Um parágrafo curto dizendo o que acontece naquela tela. Sem jargão, sem passo a passo.

**`## Regras`** — lista de regras de negócio em frases afirmativas e verificáveis. Cada uma precisa poder ser checada por alguém que nunca viu o produto.

**`## Peças`** — a tabela que dá profundidade ao link. O frontmatter aponta a *tela*; as peças apontam *cada elemento*: modal, variante, estado, posição do carrossel.

```
| Nome no cenário    | Figma      | Storybook                    |
|--------------------|------------|------------------------------|
| modal · confirmada | 71402:140  | componentes-bottomsheet--... |
```

O cenário cita a peça **pelo nome, em português**, e a máquina resolve o id. O designer não escreve id no meio da frase: escreve uma vez, numa tabela, e o CI garante que o id ainda existe.

**`## Comportamento`** — bloco Gherkin, em português.

**`## Transições`** — tabela De / Gatilho / Para.

### Vocabulário Gherkin — sete palavras, e é o vocabulário inteiro

| Palavra | Para que serve |
|---|---|
| `Funcionalidade` | O fluxo ou a tela que o arquivo descreve |
| `Regra` | Uma regra de negócio que agrupa cenários |
| `Contexto` | O que já é verdade antes de todo cenário |
| `Cenário` | Um caminho concreto, do início ao fim |
| `Esquema do Cenário` | O mesmo caminho repetido para cada variante |
| `Exemplos` | A tabela das variantes |
| `Dado · Quando · Então · E` | Situação · ação · resultado · continuação |

**Nada disso é formato inventado.** É Gherkin de especificação, padrão há mais de vinte anos, traduzido para mais de setenta línguas. O idioma é declarado na primeira linha com `# language: pt`, e qualquer runner de Cucumber lê o arquivo como está. A orientação da própria documentação do Gherkin é escrever no idioma que os especialistas do domínio usam para falar do domínio.

**Variante não é caso especial.** `Esquema do Cenário` + `Exemplos` é exatamente a estrutura de uma tabela de variantes que o designer já monta no board. A skill deve usar isso por padrão sempre que houver mais de uma variante da mesma peça.

### A tag `@lacuna`

É a tag que faz o processo pagar por si. Marca todo caminho não decidido, e a skill deve usá-la sem economia.

```gherkin
  @lacuna
  Cenário: A análise conclui antes das perguntas terminarem
    Dado que o usuário está na pergunta 2
    Quando a análise conclui com aprovação
    Então A DEFINIR com produto
```

Quando a lacuna é uma escolha entre caminhos, a skill escreve as opções como comentário, para que a decisão seja tomada e não opinada.

---

## 4. O arquivo `.api.md`

Escrito por backend, **derivado do mesmo fluxo**, nunca inventado em paralelo. Cita de qual cenário da tela ele deriva. É onde a regra de experiência vira requisito técnico:

> `E o app não exibe erro` — essa é uma decisão de experiência, tomada por design, que vira critério de aceite do backend. Quando ela não atravessa, o resultado clássico é uma API devolvendo 504 e uma tela dizendo "algo deu errado" para um caso perfeitamente saudável.

O mesmo número serve três vezes: `"no máximo 30 segundos"` é copy na tela, SLO no serviço e limiar do alerta. Escrito uma vez, os três param de divergir.

---

## 5. O documento não é copiado para o código. É citado por ele.

Duplicar o texto no repositório da aplicação garante que as duas cópias divirjam. A regra é outra: **o teste cita o cenário pelo nome**, e o CI verifica que todo cenário do documento tem um teste que o nomeia.

Efeito colateral que vale sozinho: um teste chamado `'Avançar sem responder'` falhando diz o que quebrou **em português**, para quem nunca viu aquele código. Um teste chamado `'should render correctly'` não diz nada — nem para o dev, nem para quem está de plantão, nem para a IA que vai tentar consertar.

### As quatro checagens que mantêm o contrato vivo

A skill deve gerar, junto com o primeiro contrato, o script que faz estas quatro verificações:

1. Todo `storybook.usa` existe no `index.json` publicado.
2. Todo `figma.tela` resolve: arquivo existe, nó existe.
3. Todo `Cenário:` é citado por um teste no repositório da aplicação.
4. Todo token citado existe na coleção de cores semânticas ou em `docs/spec/`.

Story renomeada, layer apagada, cenário órfão ou token inventado quebram o build. **É essa checagem — e só ela — que impede o acervo de virar wiki morta em três meses.** Documentação que não é verificada apodrece; esta é verificável por construção, porque todas as âncoras já são endereçáveis por máquina.

---

## 6. Por que ler o pixel não resolve

A skill precisa carregar este argumento, porque é o que justifica a existência dela:

**A mesma cor carrega intenções diferentes, e o design system já sabe disso.** Quando a variável da marca e a variável da ação têm o mesmo valor, quatro papéis compartilham um hex. Quem lê o pixel não tem como separar. Um humano resolve em meio segundo porque conhece o contexto; uma LLM resolve pelo que foi treinada — e o treino diz que vermelho é erro, verde é sucesso, azul é link. Numa empresa onde azul é a marca, isso erra.

**Falta intenção, não medida.** A medida já desceu toda do Figma. Intenção é comportamento, e comportamento ninguém escreveu.

**O custo que some:** para implementar uma tela, a IA varre o arquivo do Figma procurando o que interessa e recebe dezenas de frames e centenas de nós de texto, nenhum deles dizendo o que a tela faz. Com o contrato, o Figma entra como **confirmação visual**, não como fonte de descoberta: um node-id, um render, fim. Vale o mesmo para o humano que abre o arquivo pela primeira vez.

---

## 7. Papéis — quem escreve o quê

A skill deve recusar contribuição fora do papel e dizer de quem é a decisão.

| Quem | Escreve | Não escreve |
|---|---|---|
| Design | O comportamento da tela, as transições, os estados e qual token pinta o quê | A medida — ela desce do Figma |
| Produto | As regras de negócio dentro dos cenários; fecha as `@lacuna`; refina contando cenários | O layout |
| Backend | O `.api.md`: contrato, limites e estados de erro derivados do fluxo | A regra de experiência — ela vem de cima |
| Front | O código e o teste que cita cada cenário pelo nome | O comportamento — recebe pronto, não deduz |
| Sustentação | O link do runbook para o cenário correspondente | Nada. Só consome — e é esse o ponto |

**Quem escreve o BDD hoje escreve errado.** O desenvolvedor escreve depois, deduzindo. Mas comportamento é experiência do usuário, e quem conhece a experiência é design, com produto ao lado. O desenvolvedor está sendo obrigado a inventar a informação que deveria ter recebido.

---

## 8. Critério de aceite

A skill só funciona se estiver amarrada ao processo, não à boa intenção.

**Definition of Ready**
- Existe `docs/comportamento/<dominio>/<fluxo>.md` mergeado.
- As quatro checagens de CI passaram.
- Nenhuma `@lacuna` no caminho que a tarefa vai implementar.

**Definition of Done**
- Todo cenário tem teste que o cita pelo nome.
- Todo estado citado aparece numa story.
- Todo alerta do fluxo aponta para um cenário.
- Comportamento que mudou na implementação volta como PR **no contrato**, antes do merge.

**O contrato é fonte, não registro.** Se o código divergiu, é o contrato que precisa de decisão — não o contrário.

---

## 9. Saída secundária: o manual visual

O mesmo arquivo renderiza como um manual legível por quem não abre Figma nem lê Gherkin: a imagem da tela ao lado, as regras em português, como o fluxo termina, e as variantes nomeadas.

Três propriedades que a skill precisa garantir:

1. **A imagem não é print colado.** Vem da exportação do node-id que está no frontmatter — o mesmo id que o CI resolve. Manual com tela desatualizada deixa de ser possível.
2. **O texto não é resumo.** É o mesmo arquivo que os testes executam. Se o comportamento mudou no código sem mudar no contrato, o build quebra antes de o manual mentir.
3. **Não tem passo manual.** Publica no mesmo pipeline do Storybook.

É a mesma fonte com dois níveis de leitura: prosa para quem precisa entender, Gherkin e ids atrás de um "detalhe técnico" para quem precisa construir.

---

## 10. Como a skill deve se comportar em conversa

- **Nunca assumir uma premissa.** Toda ambiguidade capaz de mudar o comportamento vira pergunta explícita, estruturada, com opções e consequências. Nada avança sem resposta.
- **Perguntar uma coisa por vez** quando estiver conduzindo uma etapa; despejar quinze perguntas de uma vez não é rigor, é terceirizar o trabalho de priorizar.
- **Escrever no idioma do domínio**, que aqui é português — incluindo as palavras-chave do Gherkin.
- **Citar peças pelo nome, nunca por id, no corpo do cenário.**
- **Recusar-se a deduzir intenção a partir de cor, tom ou posição.** Se a informação não está escrita, ela é uma lacuna.
- **Não reescrever o que já está aprovado** ao acrescentar uma etapa nova. Acrescentar é diferente de refazer.
- **Ao encontrar divergência entre o contrato e o que foi implementado**, apontar a divergência e perguntar qual dos dois está errado — não escolher sozinha.

---

## 11. O que a skill deve entregar na primeira execução de um projeto

1. A estrutura de pastas `docs/comportamento/`.
2. O `README.md` explicando como escrever, derivado deste documento.
3. O `_template.md` com o esqueleto completo e comentado.
4. O script das quatro checagens de CI.
5. O primeiro contrato real, de uma tela que já existe — porque o teste de escrita é esse: se for penoso para o designer, o formato está errado, não a pessoa.

---

## Anti-padrões que a skill deve recusar

- Contrato escrito depois da implementação, para "documentar o que foi feito".
- Lacuna preenchida com o caminho mais provável em vez de perguntar.
- Id do Figma no meio da frase do cenário.
- Cenário sem teste que o cite.
- Texto do contrato duplicado dentro do código.
- Nome de teste genérico (`should render correctly`) no lugar do nome do cenário.
- Descrever em palavras o que o Figma já mostra — medida, cor, espaçamento.
- Deixar o `status` como `aprovado` com `@lacuna` no caminho a implementar.

---

*Base: proposta "Contrato de comportamento", de Larissa Quadros, montada sobre os ativos reais de um design system em produção.*
