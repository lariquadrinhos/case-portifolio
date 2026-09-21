# Perguntas em aberto — Portfólio

> Lista única do que ainda não foi decidido. **Uma pergunta, um lugar.**
> Cada uma traz: o que precisa ser decidido, as opções conhecidas com a consequência de
> cada uma, a classificação, e — para as que esperam — **o momento em que deixa de poder
> esperar**, sempre um ponto do trabalho, nunca uma data.
>
> Pergunta respondida **sai daqui**. A resposta vira regra no contrato ou nas definições,
> e entrada no log se tiver alternativa real. Lista com metade dos itens riscados deixa de
> ser consultável.

**Atualizado:** 18 de setembro de 2026 · **15 perguntas**, nenhuma travando

---

## Travam

Nenhuma.

### P07 · O mecanismo de exportação dos tokens do Figma
**Princípio já decidido** (decisão 007): valores descem das variáveis, nome preservado
(`bg/page` → `--bg-page`), um único lugar de onde tudo deriva. Falta só o mecanismo.
**Opções:** transcrição manual · exportar as variáveis para um arquivo e gerar o CSS dele ·
ler da API na construção.
**Momento:** depois da Fase 2, quando o design system existir no Figma. Não bloqueia a P05.

### P31 · O texto da página de erro, em rascunho
Onde ele vive está decidido (011): no contrato da tela. O texto em si é rascunho meu e
precisa da voz dela.
**Momento:** antes de desenhar a página de erro. · *Contrato, `erro/`*

### P38 · A página de case sublinha "Trabalhos" como seção?
A decisão 031 dá sublinhado ao item da página atual. Mas o destaque aparece em **duas das
seis páginas**: na home ninguém está em Trabalhos nem em Quem sou eu, nas duas de case
nenhum item é a página atual, e a de erro também não.
Os cases são onde a pessoa passa mais tempo, e são justamente onde o indicador fica mudo.
**Opções:** só a página exata recebe o sublinhado, e as quatro ficam sem — como está hoje ·
a página de case sublinha "Trabalhos" como seção, o que exige declarar o que é seção, já
que o documento não define · a home sublinha o próprio nome, tratando-o como item.
**Momento:** antes de desenhar a página de Trabalhos, que é a primeira em que o destaque
aparece.

### P32 · O nome aparece duas vezes na home
As definições dizem que a home tem "nome, cargo, uma frase e um parágrafo", e que a barra
tem "meu nome (clicar volta para a home)". No wireframe isso virou "Larissa" na barra e
"LARISSA QUADROS · UX DESIGNER" na hero. A demonstração do Figma não repete — lá o nome só
aparece na barra.
**Opções:** a barra conta como o nome da home e a hero começa pela frase · o nome fica nos
dois, com pesos diferentes · a hera traz só o cargo.
**Momento:** antes de fechar o wireframe da home. · *Contrato, `home/`*

### P30 · Os sete componentes previstos
Barra, botão, card, item da trilha, bloco de destaque, bloco de mídia com legenda e campo
de foco. Nenhum desenhado, e a lista pode estar incompleta.
**Momento:** Fase 2. · *Contrato, `componentes/`*

### P22 · O bloco "O Produto", no case de Finanças
Título sem marcador de trilha, depois do último capítulo. É subseção do último capítulo,
capítulo próprio sem rótulo, ou material que não vai para o site?
**Momento:** antes de construir a página do case. · *Contrato, `conteudo/`*

### P21 · A ordem do "próximo case" com três cases
A decisão 003 resolve dois cases sem exceção, mas não define a ordem com três.
**Opções:** ordem fixa do índice, com o último voltando ao primeiro · o case ainda não lido
nesta sessão · o mais recente primeiro.
**Momento:** antes de o terceiro case existir. · *Contrato, `case/card-proximo-case.md`*

### P09 · Como a estrutura recebe um segundo idioma
**O comportamento já está definido:** trocar de idioma mantém a pessoa na mesma página e na
mesma altura da leitura; o conteúdo já vive separado do código e o controle está previsto
na barra. Falta só o mecanismo estrutural.
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

### P14 · Volta do protótipo
A pessoa abre o protótipo em nova aba e volta. Trilha e rolagem preservadas?
**Momento:** antes do código. · *Event storming, hotspot 7*

### P15 · Qual domínio
"Domínio próprio" é critério de liberação; nenhum foi escolhido. Publicar em
`lariquadrinhos.github.io` funciona desde já, e apontar um domínio depois não gera
retrabalho — por isso espera.
**Momento:** antes da Fase 6. Comprar leva minutos, mas a propagação de DNS e a emissão do
certificado levam horas.

### P16 · Os textos do site ficam públicos desde já
Seis arquivos entraram no repositório público por um `git add -A`. Os três textos do site
serão públicos no site de qualquer forma; a questão é se antes dele existir.
**Momento:** a qualquer tempo — mas cada dia conta.

---

## Adaptações dos briefings a este projeto

### P17 · Não há Storybook
A checagem de CI 1 e o campo `storybook.usa` se aplicam?
**Momento:** primeira execução da skill do contrato.

