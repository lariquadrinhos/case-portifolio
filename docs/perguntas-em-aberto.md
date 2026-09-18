# Perguntas em aberto — Portfólio

> Lista única do que ainda não foi decidido. **Uma pergunta, um lugar.**
> Cada uma traz: o que precisa ser decidido, as opções conhecidas com a consequência de
> cada uma, a classificação, e — para as que esperam — **o momento em que deixa de poder
> esperar**, sempre um ponto do trabalho, nunca uma data.
>
> Pergunta respondida **sai daqui**. A resposta vira regra no contrato ou nas definições,
> e entrada no log se tiver alternativa real. Lista com metade dos itens riscados deixa de
> ser consultável.

**Atualizado:** 18 de setembro de 2026 · **17 perguntas**, três travando

---

## Travam

### P05 · Stack e hospedagem
Com alternativa considerada e motivo registrados.
**Já restringido pela decisão 005:** nada que renderize no navegador. Restam gerador de
site estático e HTML escrito à mão. O gerador precisa produzir HTML completo na construção,
aceitar um script bloqueante curto no `<head>` e ler os três arquivos de conteúdo.
**Momento:** Fase 1.

### P06 · Como o conteúdo em texto vira página
Onde o site busca cada texto, como os rótulos da trilha são lidos, como os textos da home
são marcados dentro do `quem-sou-eu.md`.
**Momento:** Fase 1.

### P07 · Como os tokens do Figma entram no código
Lidos das variáveis, com o nome preservado, num único lugar de onde tudo deriva.
**Momento:** Fase 1.

---

## Esperam

### P21 · A ordem do "próximo case" com três cases
A decisão 003 resolve dois cases sem exceção, mas não define a ordem com três.
**Opções:** ordem fixa do índice, com o último voltando ao primeiro · o case ainda não lido
nesta sessão · o mais recente primeiro.
**Momento:** antes de o terceiro case existir. · *Contrato, `case/card-proximo-case.md`*

### P08 · Peça esperada ausente no arquivo de conteúdo
Rótulo de trilha faltando, imagem inexistente, legenda ausente, PDF ainda não produzido.
**Opções:** a construção falha · a página gera sem a peça e registra aviso · a falta vira
lacuna visível na tela.
**Momento:** antes de desenhar o domínio Conteúdo. · *Event storming, hotspot 1*

### P09 · Como a estrutura recebe um segundo idioma
Sem ser refeita depois.
**Momento:** Fase 1.

### P10 · O que sai da barra em tela estreita
Mínimo definido: nome e Trabalhos. Falta decidir "Quem sou eu", controle de tema e botão
de contato.
**Momento:** Fase 1. · *Event storming, hotspot 10*

### P11 · Trilha que se move × movimento reduzido
Tensão entre duas regras: o marcador se move sozinho, e nada se move sem o leitor pedir.
**Opções:** salta sem transição quando movimento reduzido está ligado · transição curta
demais para contar como animação · a regra não se aplica a indicador de posição.
**Momento:** antes de desenhar a trilha. · *Event storming, hotspot 6*

### P12 · Endereço para uma seção do case
Quem recebe link de outra pessoa pode querer apontar para uma etapa específica.
**Momento:** antes de desenhar o domínio Case. · *Event storming, hotspot 8*

### P13 · A home não tem segunda oferta
Uma ação principal só, por decisão. É intencional ou é lacuna?
**Momento:** antes de desenhar a Home. · *Event storming, hotspot 4*

### P14 · Volta do protótipo
A pessoa abre o protótipo em nova aba e volta. Trilha e rolagem preservadas?
**Momento:** antes do código. · *Event storming, hotspot 7*

### P15 · Qual domínio
"Domínio próprio" é critério de liberação; nenhum foi escolhido.
**Momento:** antes da Fase 6.

### P16 · Os textos do site ficam públicos desde já
Seis arquivos entraram no repositório público por um `git add -A`. Os três textos do site
serão públicos no site de qualquer forma; a questão é se antes dele existir.
**Momento:** a qualquer tempo — mas cada dia conta.

---

## Adaptações dos briefings a este projeto

### P17 · Não há Storybook
A checagem de CI 1 e o campo `storybook.usa` se aplicam?
**Momento:** primeira execução da skill do contrato.

### P18 · Não há backend
Confirmado sem backend. O `.api.md` e o papel de backend ficam inativos — a skill os
mantém para os próximos produtos.
**Momento:** resolvido em 18/09/2026.

### P19 · A checagem de CI 3 exige suíte de testes
Depende da stack.
**Momento:** Fase 1.

### P20 · O Spec Kit continua instalado
Instalado a pedido dela antes de eu ter lido as definições. O fluxo dele duplica o método
próprio do projeto e não modela as Fases 2 e 3, que são trabalho de Figma.
**Opções:** desinstalar · manter parado e reavaliar na Fase 4.
**Momento:** antes da Fase 4.
