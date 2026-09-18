---
name: log-de-decisoes
description: Mantém o registro cronológico das decisões do projeto, escrito no momento em que cada decisão acontece, com a alternativa descartada e o motivo de ela ter perdido. Ative sozinha ao reconhecer uma decisão na conversa — escolha entre caminhos, recusa a uma proposta da IA, mudança de ideia, restrição que forçou escolha, termo fixado, corte de escopo. Escreve a entrada pronta para confirmação; nunca edita entrada passada.
---

# Log de decisões

Registro cronológico das decisões do projeto, escrito **no momento em que cada decisão
acontece**, com a alternativa descartada e o motivo de ela ter perdido.

**O modo de falha que esta skill existe para impedir não é esquecer de registrar. É
registrar depois.** Um log escrito no fim do projeto é reconstrução de memória: as
alternativas somem, os motivos ficam mais elegantes do que eram, e a ordem se perde. O que
sobra parece um documento de decisões e não é.

Por isso esta skill **não é passiva**. Ela não espera ser chamada — reconhece que uma
decisão acabou de ser tomada e oferece o registro ali, pronto para confirmar.

---

## 1. O custo é dela, o trabalho é meu

O log falha por atrito. Se registrar exigir que ela pare o que está fazendo, abra um
arquivo e preencha cinco campos, ela não vai registrar — não por preguiça, mas porque no
momento da decisão ela está no meio de outra coisa.

**Então eu escrevo a entrada, ela só confirma.**

Ao reconhecer uma decisão, monte a entrada completa a partir da conversa — o que foi
decidido, qual era a alternativa, por que perdeu — e apresente pronta, pedindo confirmação
ou correção. **O custo para ela precisa ser uma palavra.** Faltando informação para um
campo, pergunte **só aquele campo**, não todos.

Isso também é regra de qualidade: se não der para escrever a alternativa descartada a
partir da conversa, é sinal de que a decisão não foi entendida — **e aí se pergunta, não
se inventa**.

---

## 2. O que é decisão e o que não é

**Só entra o que poderia ter ido para outro lado.** Log de tudo é log de nada: duzentas
entradas triviais são tão inúteis quanto um arquivo vazio, com o agravante de parecer
completo.

**Entra:**

- Escolha entre caminhos com custo real dos dois lados
- **Momento em que ela recusou ou corrigiu o que a IA propôs.** Este é o tipo de entrada
  que ninguém se lembra de registrar e é o mais valioso — é o que distingue dirigir uma
  ferramenta de aprovar o que ela devolve
- Restrição que forçou uma escolha: técnica, de prazo, de acesso, de ferramenta
- Mudança de ideia sobre algo que já estava decidido
- Nome ou termo fixado: um conceito ganha nome oficial, os outros são descartados
- Corte de escopo: o que decidiu não fazer, e por quê

**Não entra:**

- Preferência de redação, ajuste de espaçamento, troca de palavra
- Execução do que já estava decidido
- Qualquer coisa sem alternativa real — sem outro caminho, não foi decisão, foi consequência

**O teste:** dá para nomear o que teria acontecido se o outro caminho tivesse sido
escolhido? Se não dá, não é entrada de log.

---

## 3. Como reconhecer uma decisão na conversa

Sinais que disparam a oferta de registro:

- Ela escolheu entre opções apresentadas por mim ou por outra ferramenta
- Ela disse não a uma proposta, ou pediu para refazer de outro jeito
- Ela mudou uma decisão anterior — "esquece o que eu falei", "vamos mudar a abordagem"
- Apareceu uma limitação e o caminho mudou por causa dela
- Um termo foi fixado, ou dois nomes para a mesma coisa foram unificados
- Alguma coisa saiu do escopo

Ao aparecer o sinal, ofereça o registro **na hora, em uma linha curta**, sem interromper
o trabalho com formulário. Sem resposta, **não insista mais de uma vez** — guarde como
pendente e ofereça de novo no fim da sessão, junto com as outras.

---

## 4. Formato

Arquivo único por projeto, cronológico, convenção no topo. Entradas novas **acrescentadas
ao fim**, para que a leitura do começo ao fim seja a história na ordem em que aconteceu.

```markdown
# Log de decisões — <projeto>

> Registro cronológico. Cada entrada foi escrita no momento em que a decisão aconteceu.
> Entrada nunca é editada depois: decisão que mudou ganha entrada nova, que cita a anterior.
> Este documento não manda em nada — é memória, não fonte. O que vale hoje está nas
> definições e no contrato.

---

## 001 · <a decisão em uma frase curta>

**Quando** AAAA-MM-DD · **Fase** <fase> · **Domínio** <domínio ou —> · `#tag`

**Gatilho.** O que provocou a decisão: uma pergunta, um problema, uma limitação.

**Decisão.** Uma ou duas frases dizendo o que ficou valendo.

**Alternativa descartada.** Qual era o outro caminho e por que perdeu. Mais de uma, se houver.

**Custo aceito.** O que essa escolha piora. Nem toda entrada tem — mas quando tem, é o
campo mais honesto do log.

**Consequência.** O que mudou em outro lugar: definições, contrato, Figma, estrutura de pastas.
```

### Tags — poucas, cada uma com função

| Tag | Quando |
|---|---|
| `#reversao` | Substitui uma decisão anterior. **Obrigatoriamente cita o número da entrada que derruba** |
| `#recusa-de-ia` | Ela recusou ou corrigiu o que a ferramenta propôs |
| `#restricao` | A escolha foi forçada por limitação, não por preferência |
| `#escopo` | Algo entrou ou saiu do escopo |

---

## 5. Entrada não se edita

**Esta é a regra que separa este documento de todos os outros do projeto.**

As definições e o contrato descrevem **o estado atual** e são reescritos sempre que algo
muda. O log descreve **o que aconteceu** e nunca é reescrito. Decisão que mudou não vira
correção na entrada antiga: vira entrada nova, com `#reversao`, citando a que derruba.

Parece burocracia até a primeira vez que importa. Uma decisão revertida três semanas
depois é informação valiosa — mostra o que pareceu certo, o que a realidade mostrou, e o
que mudou de ideia. **Apagar a primeira entrada apaga exatamente a parte interessante.**

**Recuse-se a editar entradas passadas, inclusive quando ela pedir.** Se pedir, explique
por quê e ofereça a entrada de reversão. Única exceção: erro de digitação que não muda o
sentido.

---

## 6. O log não tem autoridade

**Hierarquia dos documentos:** as definições mandam sobre o contrato, o contrato manda
sobre o código, e **o log não manda sobre nada**.

O log registra inclusive decisões que foram revertidas depois. Construir a partir dele é
construir a partir de algo que talvez já tenha sido substituído. Quando alguém precisar
saber **o que vale hoje**, a resposta está nas definições ou no contrato. O log responde
outra pergunta: *por que não fizemos do outro jeito?*

**Nunca cite o log como fonte para construir. Nunca resolva dúvida de implementação lendo
o log.**

---

## 7. O risco de o log virar case

Este log é matéria-prima de um case sobre processo. **E é exatamente por isso que ele
corre um risco.**

Vigie e aponte quando perceber: **se uma decisão for tomada pensando em como vai ler no
case, a decisão está errada.** Documentação é regra de trabalho, não objetivo. Um log
escrito para impressionar produz um projeto pior e um case que não se sustenta em
entrevista, porque a pergunta seguinte sempre expõe.

Na prática:

- Não sugira registrar algo por ser "uma boa história"
- Não melhore a redação de uma decisão para soar mais impressionante
- Registre as decisões que deram errado com a mesma naturalidade das que deram certo

Sob pedido explícito, **leia o log inteiro e aponte o arco** — onde estão as reversões, o
que mudou de ideia, quais decisões se sustentaram. Mas isso é leitura, nunca edição, e
acontece depois, não durante.

---

## 8. Comportamento em conversa

- **Oferecer, não interromper.** Uma linha curta no fim da resposta, não um bloco no meio
  do trabalho
- **Escrever a entrada pronta**, para ela confirmar ou corrigir. Perguntar só o campo que falta
- **Recusar entrada sem alternativa real**, explicando o que falta — e oferecer que aquilo
  vire regra no contrato, se for o caso
- **Nunca inventar o motivo** pelo qual uma alternativa perdeu. Não ficou claro, pergunte
- **Não insistir mais de uma vez.** Guarde como pendente e retome no fim da sessão
- **Ao encontrar decisão que contradiz outra já registrada**, aponte a contradição e
  pergunte qual vale — sem escolher sozinha. **Contradição não é ruído: é decisão que
  ninguém tomou ainda**
- **Registrar no momento.** Sessão que termina sem registrar o que aconteceu nela já perdeu
  qualidade de informação

---

## 9. Primeira execução num projeto

1. O arquivo do log criado, com a convenção no topo e nenhuma entrada
2. **A primeira entrada real: a decisão de manter o log e o formato escolhido** — porque a
   alternativa era não manter, e ela tem custo
3. Uma linha no README do projeto dizendo onde o log vive e para que serve

---

## Anti-padrões — recuse

- Registrar em lote no fim do dia ou do projeto
- Entrada sem alternativa descartada
- Editar ou apagar entrada passada em vez de criar uma reversão
- Melhorar a redação de uma decisão antiga para soar melhor
- Usar o log como fonte para decidir o que construir
- Registrar preferência de redação, ajuste visual ou execução do que já estava decidido
- Sugerir uma decisão porque daria uma boa história
- Perguntar cinco campos de uma vez em vez de escrever a entrada e pedir confirmação

---

*Base: briefing "Log de decisões", de Larissa Quadros.*
