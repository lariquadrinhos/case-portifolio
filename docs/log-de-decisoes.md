# Log de decisões — Portfólio

> Registro cronológico. Cada entrada foi escrita no momento em que a decisão aconteceu.
> Entrada nunca é editada depois: decisão que mudou ganha entrada nova, que cita a anterior.
> Este documento não manda em nada — é memória, não fonte. O que vale hoje está nas
> definições e no contrato.

---

## 001 · Manter um log de decisões, em arquivo único e cronológico

**Quando** 2026-09-18 · **Fase** 0 · **Domínio** — · `#escopo`

**Gatilho.** O projeto começou a produzir decisões antes de existir qualquer lugar para
registrá-las. Quatro já tinham acontecido sem registro.

**Decisão.** Manter um log cronológico, arquivo único, entradas numeradas e imutáveis,
escritas no momento em que a decisão acontece.

**Alternativa descartada.** Não manter log e confiar no histórico do Git. Perdeu porque
o Git registra o que mudou, não o que foi considerado e descartado — e a alternativa
descartada é justamente o campo que dá valor ao registro.

**Custo aceito.** Atrito em cada decisão, e um arquivo que cresce sem nunca encolher.
O atrito é reduzido pela skill escrever a entrada e Larissa só confirmar.

**Consequência.** Diretriz 9 das diretrizes passa a apontar para este arquivo.

---

## 002 · Os briefings prevalecem sobre a skill loop-produto na estrutura de documentos

**Quando** 2026-09-18 · **Fase** 0 · **Domínio** — · `#escopo`

**Gatilho.** Duas estruturas de documentação incompatíveis, ambas escritas por Larissa:
a skill `loop-produto` do projeto bigorna prescreve `/docs/prd/`, `/docs/adr/` e
`/docs/specs/`; os briefings deste projeto prescrevem `docs/comportamento/` e `docs/spec/`.
A colisão perigosa era `docs/specs/` contra `docs/spec/` — nomes quase idênticos, conteúdos
sem relação.

**Decisão.** A estrutura dos briefings vale. `docs/adr/` e `docs/specs/` foram apagados.

**Alternativa descartada.** Manter as duas, como sugerido inicialmente por Larissa. Perdeu
por dois motivos: `docs/spec/` e `docs/specs/` conviverem seria a colisão que ninguém
percebe até errar; e o log já é um conjunto de ADRs — entradas numeradas, imutáveis, com
alternativa descartada — acrescido da ordem cronológica, que o ADR não tem. Um terceiro
lugar para a mesma decisão contraria a regra de trabalho 2, que prevê dois.

**Custo aceito.** Perde-se o índice por decisão: para saber por que X foi escolhido, lê-se
o log em vez de abrir um arquivo. Mitigado porque o contrato responde "qual é a regra hoje",
que é a pergunta mais frequente.

**Consequência.** `docs/adr/` e `docs/specs/` removidos. Diretriz 9 reescrita. A skill
`loop-produto` não é copiada para este projeto enquanto prescrever a estrutura antiga.

---

## 003 · O card do próximo case é circular, sem exceção no último

**Quando** 2026-09-18 · **Fase** 0 · **Domínio** case · `#escopo`

**Gatilho.** O event storming perguntou o que o card ao fim do segundo case oferece, já que
o site nasce com dois. Parecia oferecer algo já lido.

**Decisão.** O card de cada case aponta para o outro. Não há caso especial para o último.

**Alternativa descartada.** Levar ao índice de Trabalhos, ou fazer o card sumir no último
case. Perderam quando ficou claro que um dos três públicos chega direto numa página interna
por link compartilhado — para quem cai no segundo case sem passar pela home, o card
circular aponta para conteúdo novo, não repetido. As duas alternativas também criariam uma
exceção no componente, contra a promessa de que um terceiro case cabe sem redesenhar nada.

**Custo aceito.** Quem leu os dois na ordem recebe, ao fim, a oferta do que acabou de ler.

**Consequência.** `docs/comportamento/case/card-proximo-case.md` criado. Abre uma lacuna
nova: com três cases, a ordem do "próximo" não está definida — marcada no contrato, sem
travar.

---

## 004 · O botão de contato revela o e-mail escrito, em vez de disparar mailto

**Quando** 2026-09-18 · **Fase** 0 · **Domínio** moldura · `#recusa-de-ia`

**Gatilho.** As definições dizem que contato é e-mail e LinkedIn e que o botão dispara a
ação direto — mas são dois destinos e uma ação só.

**Decisão.** O botão fica à direita da barra, como definido, e ao ser acionado revela o
endereço `llquadros95@gmail.com` escrito por extenso, copiável, com o LinkedIn ao lado.

**Alternativa descartada.** Duas. Disparar `mailto:` direto e deixar o LinkedIn em "Quem
sou eu" — perdeu porque `mailto:` sem cliente configurado falha calado, e o público de
triagem costuma estar no computador, em webmail. E a proposta de Larissa de deixar o e-mail
visível ao lado do nome na barra — perdeu por três motivos: não cabe em tela estreita sem
truncar, o que torna o endereço inútil; tornaria o contato a informação mais destacada de
toda página, contra a regra de que contato não deve competir com os cases; e ocuparia mais
espaço horizontal que "Trabalhos" e "Quem sou eu" somados.

**Custo aceito.** Um toque a mais que a versão com o e-mail sempre visível, e um componente
novo a desenhar.

**Consequência.** `docs/comportamento/moldura/botao-contato.md` criado. A lacuna do
comportamento em tela estreita aponta para a pergunta P10.
