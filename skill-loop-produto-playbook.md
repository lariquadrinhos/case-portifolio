# Instruções para construir a skill "Playbook do loop de produto"

> Este documento não é a skill. É o briefing a partir do qual o Claude deve **construir** a skill.
> Leia inteiro antes de escrever qualquer coisa. Onde algo aqui estiver ambíguo, pergunte — não preencha.

---

## 1. O que a skill precisa fazer

Manter o arquivo `loop-produto-playbook.md`: o registro de como o trabalho foi conduzido com o Claude, trecho a trecho do processo de produto, **com os prompts reais**.

O nome diz a estrutura: o loop é **pedir → receber → conferir → corrigir → seguir**. Cada trecho do processo é uma ou mais voltas desse loop, e o playbook guarda as voltas.

Ele tem dois usos, e os dois exigem a mesma coisa — honestidade:

- **Repetir.** Daqui a alguns meses eu vou precisar acrescentar um case, republicar, corrigir um texto, e vou ter esquecido como isso foi feito.
- **Mostrar como eu trabalho.** É o único documento do projeto que captura o método, porque método com IA não é decisão, é procedimento — o que eu peço, contra que critério eu confiro, onde eu recuso.

---

## 2. A regra que define tudo: prompt literal, sem maquiagem

**A skill copia os prompts exatamente como foram escritos.** Não a versão limpa, não a reconstrução do que eu deveria ter pedido, não uma paráfrase mais clara. O texto que saiu, com a pressa, a imprecisão e os erros de digitação que tinha.

Este é o ponto onde a skill vai errar se não for instruída com firmeza, porque a tendência natural é melhorar o que copia. **Melhorar o prompt destrói o documento inteiro.** O que ele serve para mostrar é como uma pessoa conduz uma ferramenta sem saber de antemão o caminho certo — e um prompt polido mostra o contrário: alguém que já sabia.

A mesma regra vale para a resposta: o resumo do que voltou é honesto, não generoso. "Acertou a estrutura e inventou três regras que eu não tinha pedido" é uma entrada útil. "Funcionou bem" não é.

**E vale sobretudo para o que deu errado.** A parte mais valiosa de cada entrada não é o pedido que funcionou: é o que voltou torto, o que exatamente estava errado, contra que critério eu percebi, e o pedido seguinte. Um playbook em que tudo funciona de primeira não serve para repetir nem para provar nada.

---

## 3. É escrito no momento, porque prompt não sobrevive à memória

Três semanas depois eu lembro do resultado e esqueço do caminho. Some a tentativa que falhou, some o critério que usei para reprovar, e sobra uma versão higienizada em que tudo deu certo de primeira.

Então a skill registra durante o trabalho, não depois. Ela não espera ser chamada no fim da sessão: acompanha o trecho e vai anotando.

**Quando registrar:**

- No começo de um trecho novo do processo — abre a entrada e anota o estado inicial.
- A cada volta do loop que ensinou alguma coisa: o pedido, o que voltou, o que foi corrigido.
- Quando o trecho fecha — anota o sinal que indicou que terminou.

**O que não registrar:** cada mensagem trocada. O playbook não é transcrição. Entra a volta que ensinou algo — um pedido que deu certo de primeira e não tem nada a contar não vira entrada, vira uma linha.

---

## 4. Formato

Um arquivo por projeto, organizado por trecho do processo, na ordem em que os trechos acontecem.

```markdown
# Playbook do loop de produto — <projeto>

> Registro de como o trabalho foi conduzido com o Claude, escrito enquanto acontecia.
> Os prompts estão copiados literalmente. Nenhum foi reescrito depois para parecer melhor.

---

## <Trecho do processo>

**Para que serve.** Uma linha.
**Antes de começar, precisa existir:** o que precisa estar pronto.

### Volta 1

**Pedido**

> texto literal do prompt

**Voltou.** Resumo honesto: o que acertou, o que errou, o que inventou.

**Conferi contra.** O critério já escrito — qual documento, qual regra. Nunca "achei que não tinha ficado bom".

**Corrigi com**

> texto literal do prompt seguinte

### Volta 2
…

**Terminou quando.** O sinal concreto que encerrou o trecho.

**O que costuma dar errado.** As armadilhas que apareceram, para não cair de novo.
```

---

## 5. O campo que mais importa: "conferi contra"

É o campo que separa dirigir a ferramenta de aprovar o que ela devolve, e é o que a skill precisa cobrar com mais rigor.

O critério tem que ser **externo e anterior**: uma regra do documento de definições, uma decisão registrada no contrato, um valor que está nas variáveis. "Ficou bom" e "não gostei" não são critérios — se o único critério for o gosto do momento, qualquer resultado plausível passa.

Quando eu não souber dizer contra o que conferi, a skill deve perguntar. E se a resposta for que não havia critério escrito, isso é uma descoberta: falta uma decisão, e ela vira pergunta em aberto ou regra no contrato.

---

## 6. Relação com os outros documentos

A skill precisa saber o que **não** é dela, para não duplicar:

| Documento | Guarda | Não guarda |
|---|---|---|
| Definições | por que o produto é assim | como o trabalho foi feito |
| Contrato de comportamento | o que existe e como se comporta | o caminho até chegar lá |
| Perguntas em aberto | o que falta decidir | — |
| Log de decisões | decisões, com a alternativa descartada | procedimento |
| **Este playbook** | **o procedimento e os prompts** | **decisão de produto** |

**Log e playbook se confundem e não devem.** Se o que apareceu foi uma escolha entre caminhos com custo real, é entrada de log. Se foi uma forma de conduzir a ferramenta, é entrada de playbook. Quando for os dois, cada documento guarda a sua metade e um cita o outro — nunca os dois contando a história inteira.

**Playbook e skill também não se confundem.** Uma skill é o procedimento que a ferramenta executa; o playbook é o registro de como o procedimento foi conduzido. Quando um trecho do playbook amadurecer a ponto de virar skill, a skill nasce dele — e o playbook continua guardando o caminho até lá, que é a parte que a skill não carrega.

---

## 7. Antes de escrever: dado pessoal

Prompt real é texto real, e texto real às vezes carrega o que não deveria circular: nome de pessoa, dado de terceiro, credencial, caminho de arquivo particular.

A skill deve **avisar antes de gravar** quando identificar algo assim no prompt, e propor a substituição — nome próprio por papel ("o usuário"), dado por marcador. A substituição é declarada em uma nota na entrada, para ficar claro que houve troca e que ela não é maquiagem de conteúdo.

O que nunca acontece é a skill limpar por conta própria e não avisar.

---

## 8. Como a skill deve se comportar em conversa

- **Registrar durante, não no fim.** Uma linha curta confirmando o que anotou, sem interromper o trabalho.
- **Nunca reescrever um prompt.** Nem para corrigir digitação, nem para deixar mais claro.
- **Cobrar o "conferi contra"** e perguntar quando o critério não estiver claro.
- **Resumir a resposta com honestidade**, inclusive quando ela própria foi quem errou. Uma skill que suaviza os próprios erros torna o documento inútil.
- **Perguntar antes de gravar dado pessoal.**
- **Não transformar o playbook em transcrição.** Volta que não ensinou nada vira uma linha, não uma entrada.
- **Não escrever para impressionar.** Se perceber uma decisão sendo tomada, ou um trecho sendo redigido, pensando em como vai ler no case, apontar. Documentação é regra de trabalho, não objetivo.

---

## 9. O que a skill deve entregar na primeira execução de um projeto

1. O arquivo criado com o cabeçalho e a estrutura de uma entrada vazia, para não haver atrito na primeira vez.
2. A primeira entrada real, do primeiro trecho que for executado.

---

## Anti-padrões que a skill deve recusar

- Prompt reescrito, resumido ou "melhorado".
- Entrada escrita no fim do dia, de memória.
- Resumo generoso de uma resposta que errou.
- "Conferi contra: ficou bom."
- Transcrição de conversa inteira em vez de voltas que ensinaram algo.
- Registrar decisão de produto aqui em vez de no log.
- Gravar dado pessoal sem avisar, ou limpar dado pessoal sem declarar.
- Omitir a tentativa que falhou porque a segunda funcionou.

---

*Base: as regras de trabalho do documento de definições do projeto. O playbook é o único documento que guarda o caminho, e não só o resultado.*
