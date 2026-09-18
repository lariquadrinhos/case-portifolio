# Instruções para construir a skill "Log de decisões"

> Este documento não é a skill. É o briefing a partir do qual o Claude deve **construir** a skill.
> Leia inteiro antes de escrever qualquer coisa. Onde algo aqui estiver ambíguo, pergunte — não preencha.

---

## 1. O que a skill precisa fazer

Manter um registro cronológico das decisões de um projeto, escrito **no momento em que cada decisão acontece**, com a alternativa descartada e o motivo de ela ter perdido.

**O modo de falha que a skill existe para impedir não é esquecer de registrar. É registrar depois.** Um log escrito no fim do projeto é reconstrução de memória: as alternativas somem, os motivos ficam mais elegantes do que eram, e a ordem em que as coisas aconteceram se perde. O que sobra parece um documento de decisões e não é.

Por isso a skill não é passiva. Ela não espera ser chamada — ela reconhece que uma decisão acabou de ser tomada na conversa e oferece o registro ali, pronto para confirmar.

---

## 2. A regra que define o comportamento da skill: o custo é meu, o trabalho é dela

O log falha por atrito. Se registrar exigir que eu pare o que estou fazendo, abra um arquivo e escreva cinco campos, eu não vou registrar — e não por preguiça, mas porque no momento em que a decisão acontece eu estou no meio de outra coisa.

Então a skill inverte isso: **ela escreve a entrada, eu só confirmo.**

Quando reconhecer uma decisão, a skill monta a entrada completa a partir da conversa — o que foi decidido, qual era a alternativa, por que perdeu — e apresenta pronta, pedindo confirmação ou correção. O custo para mim precisa ser uma palavra. Se ela não tiver informação suficiente para preencher um campo, pergunta **só aquele campo**, não todos.

Isso também vale como regra de qualidade: se a skill não consegue escrever a alternativa descartada a partir da conversa, é sinal de que ela não entendeu a decisão — e aí ela pergunta em vez de inventar.

---

## 3. O que é decisão e o que não é

**Só entra o que poderia ter ido para outro lado.** Log de tudo é log de nada: um arquivo com duzentas entradas triviais é tão inútil quanto um arquivo vazio, com o agravante de parecer completo.

**Entra:**

- Escolha entre caminhos com custo real dos dois lados.
- Momento em que recusei ou corrigi o que a IA propôs. **Este é o tipo de entrada que ninguém se lembra de registrar e é o mais valioso** — é o que distingue dirigir uma ferramenta de aprovar o que ela devolve.
- Restrição que forçou uma escolha: técnica, de prazo, de acesso, de ferramenta.
- Mudança de ideia sobre algo que já estava decidido.
- Nome ou termo fixado: quando um conceito ganha um nome oficial e os outros são descartados.
- Corte de escopo: o que decidi não fazer, e por quê.

**Não entra:**

- Preferência de redação, ajuste de espaçamento, troca de palavra.
- Execução do que já estava decidido.
- Qualquer coisa sem alternativa real — se não havia outro caminho, não foi decisão, foi consequência.

**O teste:** consigo nomear o que teria acontecido se eu tivesse escolhido o outro caminho? Se não consigo, não é entrada de log.

---

## 4. Como a skill reconhece uma decisão na conversa

Sinais que devem disparar a oferta de registro:

- Escolhi entre opções que a própria skill ou outra ferramenta apresentou.
- Disse não a uma proposta, ou pedi para refazer de outro jeito.
- Mudei uma decisão anterior ("esquece o que eu falei", "vamos mudar a abordagem").
- Apareceu uma limitação e o caminho mudou por causa dela.
- Um termo foi fixado, ou dois nomes para a mesma coisa foram unificados.
- Alguma coisa saiu do escopo.

Quando o sinal aparecer, a skill oferece o registro **na hora, em uma linha curta**, sem interromper o trabalho com um formulário. Se eu não responder, ela não insiste mais de uma vez — mas mantém a entrada como pendente e oferece de novo no fim da sessão, junto com as outras que ficaram para trás.

---

## 5. Formato do arquivo

Um arquivo único por projeto, cronológico, com a convenção no topo. Entradas novas são **acrescentadas ao fim**, para que a leitura do começo ao fim seja a história na ordem em que aconteceu.

```markdown
# Log de decisões — <projeto>

> Registro cronológico. Cada entrada foi escrita no momento em que a decisão aconteceu.
> Entrada nunca é editada depois: decisão que mudou ganha entrada nova, que cita a anterior.
> Este documento não manda em nada — é memória, não fonte. O que vale hoje está nas definições e no contrato.

---

## 001 · <a decisão em uma frase curta>

**Quando** AAAA-MM-DD · **Fase** <fase> · **Domínio** <domínio ou —> · `#tag`

**Gatilho.** O que provocou a decisão: uma pergunta, um problema que apareceu, uma limitação.

**Decisão.** Uma ou duas frases dizendo o que ficou valendo.

**Alternativa descartada.** Qual era o outro caminho e por que ele perdeu. Mais de uma, se houver.

**Custo aceito.** O que essa escolha piora. Nem toda entrada tem — mas quando tiver, é o campo mais honesto do log.

**Consequência.** O que mudou em outro lugar: definições, contrato, Figma, estrutura de pastas.
```

### Tags

Poucas, e cada uma com função:

- `#reversao` — decisão que substitui uma anterior. **Obrigatoriamente cita o número da entrada que ela derruba.**
- `#recusa-de-ia` — recusei ou corrigi o que a ferramenta propôs.
- `#restricao` — a escolha foi forçada por uma limitação, não por preferência.
- `#escopo` — algo entrou ou saiu do escopo.

---

## 6. Entrada não se edita

Esta é a regra que separa este documento de todos os outros do projeto.

As definições e o contrato descrevem **o estado atual** e são reescritos sempre que algo muda. O log descreve **o que aconteceu** e nunca é reescrito. Decisão que mudou não vira correção na entrada antiga: vira entrada nova, com `#reversao`, citando a que ela derruba.

Isso parece burocracia até a primeira vez que importa. Uma decisão revertida três semanas depois é informação valiosa — mostra o que pareceu certo, o que a realidade mostrou, e o que mudou de ideia. Apagar a primeira entrada apaga exatamente a parte interessante.

A skill deve **recusar-se a editar entradas passadas**, inclusive quando eu pedir. Se eu pedir, ela explica por quê e oferece a entrada de reversão. A única exceção é erro de digitação que não muda o sentido.

---

## 7. O log não tem autoridade

A skill precisa carregar isso, porque é uma confusão fácil de cometer.

**Hierarquia dos documentos do projeto:** as definições mandam sobre o contrato, o contrato manda sobre o código, e o log não manda sobre nada.

O log registra inclusive decisões que foram revertidas depois. Construir a partir dele é construir a partir de algo que talvez já tenha sido substituído. Quando alguém — eu ou a ferramenta — precisar saber **o que vale hoje**, a resposta está nas definições ou no contrato. O log responde outra pergunta: *por que não fizemos do outro jeito?*

Então a skill nunca cita o log como fonte para construir, e nunca resolve uma dúvida de implementação lendo o log.

---

## 8. Sobre o log virar case depois

Este log é a matéria-prima de um case sobre processo. **E é exatamente por isso que ele corre um risco.**

A skill precisa vigiar isso e apontar quando perceber: **se uma decisão for tomada pensando em como ela vai ler no case, a decisão está errada.** Documentação é regra de trabalho, não objetivo. Um log escrito para impressionar produz um projeto pior e um case que não se sustenta em entrevista, porque a pergunta seguinte sempre expõe.

Na prática, isso significa que a skill:

- Não sugere registrar algo por ser "uma boa história".
- Não melhora a redação de uma decisão para ela soar mais impressionante.
- Registra as decisões que deram errado com a mesma naturalidade das que deram certo.

A skill pode, sob pedido explícito, **ler o log inteiro e apontar o arco** — onde estão as reversões, o que mudou de ideia, quais decisões se sustentaram. Mas isso é leitura, nunca edição, e acontece depois, não durante.

---

## 9. Como a skill deve se comportar em conversa

- **Oferecer, não interromper.** Uma linha curta no fim da resposta, não um bloco no meio do trabalho.
- **Escrever a entrada pronta**, para eu confirmar ou corrigir. Perguntar só o campo que falta.
- **Recusar entrada sem alternativa real**, explicando o que falta — e oferecer que aquilo seja regra no contrato, se for o caso.
- **Nunca inventar o motivo** pelo qual uma alternativa perdeu. Se não ficou claro na conversa, pergunta.
- **Não insistir mais de uma vez** na mesma decisão. Guarda como pendente e retoma no fim da sessão.
- **Ao encontrar uma decisão que contradiz outra já registrada**, apontar a contradição e perguntar qual vale — sem escolher sozinha. Contradição não é ruído: é decisão que ninguém tomou ainda.
- **Registrar no momento.** Se a sessão terminar sem registrar o que aconteceu nela, a informação já perdeu qualidade.

---

## 10. O que a skill deve entregar na primeira execução de um projeto

1. O arquivo do log criado, com a convenção no topo e nenhuma entrada.
2. A primeira entrada real: a decisão de manter o log e o formato escolhido — porque a alternativa era não manter, e ela tem custo.
3. Uma linha no README do projeto dizendo onde o log vive e para que serve.

---

## Anti-padrões que a skill deve recusar

- Registrar em lote no fim do dia ou no fim do projeto.
- Entrada sem alternativa descartada.
- Editar ou apagar entrada passada em vez de criar uma reversão.
- Melhorar a redação de uma decisão antiga para ela soar melhor.
- Usar o log como fonte para decidir o que construir.
- Registrar preferência de redação, ajuste visual ou execução do que já estava decidido.
- Sugerir uma decisão porque ela daria uma boa história.
- Perguntar cinco campos de uma vez em vez de escrever a entrada e pedir confirmação.

---

*Base: as regras de trabalho do documento de definições do projeto — nunca assumir uma premissa, registrar no momento, toda decisão documentada, toda ambiguidade resolvida antes de avançar.*
