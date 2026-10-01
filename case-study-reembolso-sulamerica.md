# Case Study: Redesign do fluxo de reembolso

<!-- bloco: card -->
# Toda semana, do zero
Redesenhei o fluxo de usuário para pedido de reembolso recorrente pelo app de seguros.


<!-- bloco: case -->

## 1. A ideia
<!-- trilha: Introdução -->

<!-- bloco: hero -->
# Toda semana, do zero

**Observei de perto alguém que precisa fazer pedido de reembolso. Apesar de ser uma tarefa recorrente, o aplicativo trata como se fosse sempre a primeira vez. Decidi redesenhar o fluxo para que a segunda vez fosse diferente da primeira.**

**Papel** · UX/UI Designer. Do diagnóstico ao protótipo.

**Método** · Diagnóstico medido sobre o produto real, antes de qualquer proposta

**Entregas** · Avaliação heurística de 32 telas, fluxo redesenhado, wireframes, design system, mockups, microcopy completa, estados de erro, vazio e carregamento, protótipo navegável

**Repositório** · Documentação do processo, do diagnóstico às regras de implementação, [link]

Acompanhei a frustração de alguém que eu conheço repetindo todo mês um processo que o aplicativo tornava mais difícil do que precisava ser. Antes de propor qualquer coisa eu medi o fluxo real, tela por tela. E reconstruí o sistema visual do próprio aplicativo. O resultado é: um fluxo que se resolve em 5 telas com input ativo e captura inicial que dispensa digitação e um onboarding que coleta informações para que o usuário não precise repetir. Este case vai até o protótipo, onde o fluxo proposto pode ser testado.

---

## 2. Olhar antes de opinar
<!-- trilha: Diagnóstico -->

**Antes de qualquer análise houve observação.**

Fiz uma pesquisa qualitativa com um participante: observação repetida, conversa e devolutiva sobre a proposta. O que me deu uma suspeita antes de abrir qualquer ferramenta: o problema não era uma tela específica, era a desordem.

**Transformei "acho que tá ruim" em diagnóstico.**

Percorri o fluxo real tela por tela e avaliei cada uma contra as dez heurísticas de usabilidade de Nielsen, com nota e gravidade, amarrando cada problema ao lugar exato onde acontece.

Depois mapeei o caminho como a pessoa o vive, anotando em cada etapa o que ela faz e o que trava. Foi esse mapa que mostrou onde alguém provavelmente desiste.

![Quatro anotações sobre capturas do aplicativo, cada uma numerada pela etapa do fluxo: pop-up de cross-sell de telemedicina na etapa 5, escolha da categoria na 9, dados do procedimento na 11, datas do tratamento na 12.](publico/midias/reembolso-2-diagnostico.png)
Legenda: Quatro das dezoito etapas do fluxo atual. O número em cada anotação é a posição dela no fluxo: é assim que cada problema fica preso ao lugar onde acontece.

**A restrição não era o inimigo.**

Percebi que muitas das etapas mais pesadas existem por obrigação regulatória e nenhum redesenho pode removê-las. O peso não vinha delas, vinham de onde estavam e quantas vezes se repetiam. A validação biométrica acontecia no fim, quando desistir já custa caro. O termo reaparecia a cada pedido. Os dados bancários eram redigitados todo mês, mesmo já estando no cadastro do plano. Marquei cada uma e mudei a pergunta: em vez de "isso precisa existir?", passei a perguntar "isso precisa existir *assim*, e *agora*?".

---

## 3. Do diagnóstico ao fluxo
<!-- trilha: Novo fluxo -->

**Cinco princípios, e um filtro para cada decisão.**

Antes de desenhar escrevi cinco princípios, cada um amarrado às heurísticas que ele corrige.

1. OCR e reuso substituem digitação sempre que o dado já existe em algum lugar.
2. Stepper persistente, porque ninguém deveria se perguntar quanto falta.
3. Validação no momento da digitação, com mensagem que diz o que fazer.
4. Linguagem cidadã, com ajuda ao lado do termo difícil.
5. Modo recorrente, porque pedir pela quarta vez não pode pesar como a primeira.

A causa era estrutural. Dados que nunca mudam viviam dentro do pedido e por isso voltavam a ser exigidos a cada solicitação. Aquele fluxo era uma coisa só, mas que deveria ser duas.

Separei o que acontece uma vez na vida do que acontece a cada pedido de reembolso. O que era pré-requisito virou um preparo único, guardado depois do primeiro acesso. O que é do pedido em si ficou curto o bastante para caber num intervalo de almoço. Nenhuma exigência foi removida: elas só deixaram de ser cobradas de quem já as tinha cumprido.

**No onboarding, feito só no primeiro acesso: confirmação dos dados bancários, o termo de ciência, e a validação de identidade.**

**No fluxo mensal: cinco etapas, e nenhuma delas repete o que já foi resolvido.**

![Recorte do fluxograma do fluxo novo no ponto em que ele se divide: a caixa Tela Conclusão encerra a sequência de validação de identidade, e uma linha que entra pela esquerda contorna esse trecho e chega direto em Solicitar Reembolso, ao lado de Solicitar a partir do último reembolso. Dali seguem Escolher Tratamento, Editar Dados do Prestador e Editar Dados da Consulta. As bordas do recorte cortam o desenho, que continua para os dois lados.](publico/midias/reembolso-3-novo-fluxo.png)
Legenda: O ponto em que o fluxo novo se separa em dois. Tela Conclusão encerra o preparo que acontece uma vez; quem já o fez entra pela esquerda e cai direto em Solicitar Reembolso.


<!-- só no desktop -->
## O que o novo fluxo mudou

| | Fluxo atual | Novo fluxo |
|---|---|---|
| Etapas com digitação ativa | ~12 | **5** (+1 onboarding único) |
| Telas até o envio | 30+ | ~10 |
| Digitar CRP, CPF e valor | sim | **não**, OCR |
| Saber quanto falta | não | stepper em toda tela |
| Quando o erro aparece | no fim | na digitação |
| Atalho para quem já usou | não | *Refazer última* e *Adicionar mais uma sessão* |
| Modais em cima do fluxo | 3 | **0** |
| Sair do app no meio | sim | não |
| Biometria | no fim | no onboarding, via Face ID |
| Etapas de compliance | 5 | **5**, reorganizadas |

---

## 4. Do cinza ao real
<!-- trilha: Wireframes e interface -->

**Um fluxo no papel é uma hipótese. Desenhar cada tela é como se testa.**

Levei o fluxo novo para o Figma e criei os wireframes. Nesta etapa foi importante observar a necessidade de telas menos óbvias do fluxo: as telas de erro, para cumprir a promessa de validação inline com mensagem prescritiva. Também desenhei as telas de carregamento, primeiro acesso e histórico.

![Duas telas do aplicativo redesenhado, sobrepostas. Atrás, o formulário de datas do tratamento com uma mensagem de erro logo abaixo do campo preenchido: data fora do prazo de 12 meses, última data válida 04/05/2025. À frente, o acompanhamento de uma solicitação com o aviso Aguardando documento, o texto Falta o pedido médico (assim que você enviar, a análise continua de onde parou) e o botão Corrigir agora.](publico/midias/reembolso-4-telas-de-erro.png)
Legenda: Duas das telas de erro. À esquerda, a validação acontece na digitação e a mensagem diz qual seria a data válida; à direita, a pendência diz o que falta e promete que a análise continua de onde parou.

Com a estrutura montada, veio a necessidade de ver como as telas reais ficariam. E eu não precisava inventar uma identidade visual. Mantendo a mesma linguagem visual, a única variável que muda é o fluxo, e a comparação passa a significar alguma coisa.

Então reconstruí, o mais fielmente possível, o sistema visual que já existia. Primeiro, eu li o CSS público do site da SulAmérica, que expõe o design system da empresa: 149 variáveis de cor, rampas completas e a família tipográfica declarada. Segundo, medi as capturas de tela do app. Escrevi scripts que contam pixels: frequência de cada cor, altura de caixa alta para deduzir o corpo do texto, perfil da curva dos cantos para achar o raio, contraste de cada par de texto e fundo.
### O achado que mudou meu diagnóstico

**O app não segue o sistema da própria empresa.**

Eu esperava encontrar um app sem sistema. Encontrei **um sistema que o app não segue**. E esses são problemas diferentes: o primeiro pede construção, o segundo pede governança e migração.


Com o sistema remontado, os mockups puderam ter a cara do aplicativo de verdade. Então pude comparar de verdade os dois fluxos. Até aqui eu tinha 44 telas bonitas e um sistema bem documentado. Liguei tudo em um protótipo navegável.

![Duas telas do aplicativo redesenhado, sobrepostas, já com as cores e a tipografia do sistema visual da SulAmérica. À esquerda, o cadastro da conta bancária no onboarding, com banco, agência e conta preenchidos e o botão laranja Salvar e continuar. À direita, a tela de solicitação enviada, com um sinal de confirmação, o número do protocolo com o aviso de copiado, a lista do que acontece a seguir e o botão laranja Acompanhar status.](publico/midias/reembolso-4-sistema-remontado.png)
Legenda: Duas telas no sistema visual remontado: o laranja, a tipografia e os componentes vieram do CSS público e da medição das capturas. À esquerda o onboarding; à direita a confirmação do pedido.

## 5. O que ficou
<!-- trilha: Resultados -->

**O resultado é um fluxo redesenhado. De dezoito etapas para cinco, mais um preparo que acontece uma vez só. Do primeiro acesso ao acompanhamento do pedido, navegável em protótipo.**

![Gravação do protótipo em uso, num aparelho sobre a cor da página. O dedo toca Pedir reembolso na tela inicial, escolhe a categoria, anexa a nota fiscal, confere os campos que o OCR preencheu, informa as sessões e as datas, anexa os três documentos, revisa o pedido e envia. A última tela mostra a solicitação em análise, com o protocolo e a previsão de resposta.](publico/midias/reembolso-5-prototipo.mp4)
Legenda: Vídeo do protótipo de pedido de reembolso.
Convite: Descubra mais navegando pelo protótipo completo. [Abrir o protótipo](https://www.figma.com/proto/LUp4aT7fVYH4cD8ZwrHIfd?node-id=235-844&starting-point-node-id=235%3A844)

<!-- só no desktop -->
## O que eu entreguei

| | |
|---|---|
| Telas desenhadas | **44**, em baixa e alta fidelidade |
| Protótipo | **43 telas alcançáveis, 145 ligações, zero becos sem saída** |
| Design system | 7 documentos, 94 variáveis de cor, 18 componentes, 148 ícones |
| Medição | 14 scripts que reproduzem cada número do sistema |
| Documentação | avaliação heurística, fluxo atual, fluxo novo, microcopy e a decisão de cada tela |

## O que eu espero que aconteça, dito como hipótese



- **Tempo até o envio** deve cair de 8 a 14 minutos para 3 a 5 no caminho recorrente,
  principalmente porque o OCR tira a digitação e o atalho tira a repetição.
- **O abandono entre as etapas de datas e anexos** deve cair, porque é exatamente ali
  que estão as duas heurísticas com severidade crítica.
- **O retrabalho de back-office** deve diminuir, porque CPF, CRP e valor param de ser
  digitados.
- **Menos chamados** sobre "o que é CRP", "o app não aceita meu arquivo" e "como pego
  o recibo do imposto de renda".

## O que eu faria a seguir

1. **Levar o protótipo para 5 a 8 pessoas** em tratamento recorrente, com tarefa de
   ponta a ponta.
2. **Validar o OCR e o tutorial embutido** com engenharia.
3. **Sentar com compliance e jurídico** para a versão cidadã do termo.
4. **Definir baseline antes de qualquer rollout**: tempo até envio, abandono por
   etapa, retrabalho por solicitação.
5. **Resolver o laranja com o time de marca.**
6. **Definir a governança.** Sem alguém responsável pelo sistema, cinco cinzas viram
   seis.

<!-- bloco: provas -->
O diagnóstico e as regras de implementação
[Ver o repositório]()

A avaliação das 32 telas, o fluxo atual mapeado etapa a etapa, e o redesenho em wireframe e mockup
[Ver o arquivo no Figma](https://www.figma.com/design/LUp4aT7fVYH4cD8ZwrHIfd)

O fluxo atual anotado tela a tela, e o novo ao lado
[Ver o board no FigJam](https://www.figma.com/board/lCpgyPMBg7BXj0DxgiOUh1)

O fluxo novo, do primeiro acesso ao acompanhamento
[Abrir o protótipo](https://www.figma.com/proto/LUp4aT7fVYH4cD8ZwrHIfd?node-id=235-844&starting-point-node-id=235%3A844)


---

<!-- privado -->
## Notas de trabalho

- Linha editorial: foco em habilidade, método e critério de decisão. O produto aparece como evidência, nunca como assunto.
- Sem jargão técnico no corpo do texto: o específico fica para as legendas de imagem.
- **Persona:** construída a partir de um usuário real observado, com dados pessoais alterados. Dizer isso em uma linha, como legenda da imagem da persona.
- Mídia sugerida, com o específico nas legendas: tabela da avaliação heurística · sistema visual com a marcação de proveniência · protótipo navegável. Os capítulos 2 e 3 já têm mídia definida e montada.
