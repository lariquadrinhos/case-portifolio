# Perguntas em aberto — Portfólio

> Lista única do que ainda não foi decidido. **Uma pergunta, um lugar.**
> Cada uma traz: o que precisa ser decidido, as opções conhecidas com a consequência de
> cada uma, a classificação, e — para as que esperam — **o momento em que deixa de poder
> esperar**, sempre um ponto do trabalho, nunca uma data.
>
> Pergunta respondida **sai daqui**. A resposta vira regra no contrato ou nas definições,
> e entrada no log se tiver alternativa real. Lista com metade dos itens riscados deixa de
> ser consultável.

**Atualizado:** 18 de setembro de 2026 · **18 perguntas**, nenhuma travando

---

## Travam

Nenhuma.

### P07 · O mecanismo de exportação dos tokens do Figma
**Princípio já decidido** (decisão 007): valores descem das variáveis, nome preservado
(`bg/page` → `--bg-page`), um único lugar de onde tudo deriva. Falta só o mecanismo.
**Opções:** transcrição manual · exportar as variáveis para um arquivo e gerar o CSS dele ·
ler da API na construção.
**Momento:** depois da Fase 2, quando o design system existir no Figma. Não bloqueia a P05.

### P27 · A ordem dos cards no índice de trabalhos
Com dois cases, qual aparece primeiro? O documento não diz, e a ordem comunica prioridade.
**Opções:** o mais recente primeiro · o mais forte primeiro · ordem fixa declarada no
código · alfabética, que é a única que não comunica nada.
**Momento:** antes de desenhar o índice. · *Contrato, `trabalhos/`*

### P28 · Como a foto entra na página "Quem sou eu"
A convenção de conteúdo cobre imagem dentro do texto — `![](caminho)` mais `Legenda:`.
A foto não é imagem de texto corrido: é peça da página. Não há marcador para ela.
**Opções:** um marcador novo em `quem-sou-eu.md` · caminho fixo, declarado no contrato ·
tratá-la como imagem comum no topo do bloco.
**Momento:** antes de desenhar a página. · *Contrato, `quem-sou-eu/`*

### P29 · De onde vem o texto da página de erro
A regra é que o site não inventa conteúdo: tudo vem de um dos três arquivos ou está escrito
no contrato. **O texto da página de erro não está em nenhum dos dois.**
**Opções:** um quarto arquivo de conteúdo · um bloco novo dentro de `quem-sou-eu.md` ·
escrito no próprio contrato, por ser interface e não conteúdo editorial.
**Momento:** antes de desenhar a página de erro. · *Contrato, `erro/`*

### P30 · Os sete componentes previstos
Barra, botão, card, item da trilha, bloco de destaque, bloco de mídia com legenda e campo
de foco. Nenhum desenhado, e a lista pode estar incompleta.
**Momento:** Fase 2. · *Contrato, `componentes/`*

### P26 · Escolha manual de tema × mudança da preferência do sistema
O leitor escolhe um tema no site e, depois, muda a preferência do sistema operacional.
Qual ganha?
**Opções:** a escolha manual continua valendo até ser trocada de novo, que é o padrão mais
comum · a preferência do sistema volta a mandar · o controle ganha uma terceira posição,
"seguir o sistema", que devolve o automático.
**Momento:** antes de desenhar o controle de tema. · *Contrato, `tema/`*

### P22 · O bloco "O Produto", no case de Finanças
Título sem marcador de trilha, depois do último capítulo. É subseção do último capítulo,
capítulo próprio sem rótulo, ou material que não vai para o site?
**Momento:** antes de construir a página do case. · *Contrato, `conteudo/`*

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

### P15 · Hospedagem e domínio
A stack ficou decidida (009); a hospedagem, não. GitHub Pages já está ligado e aceita
domínio próprio de graça, mas precisaria de um arquivo de automação que constrói a cada
push. Alternativa: Cloudflare Pages, que constrói sozinho, ao custo de mais uma conta.
"Domínio próprio" é critério de liberação; nenhum domínio foi escolhido.
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

### P19 · A checagem de CI 3 exige suíte de testes
Depende da stack.
**Momento:** Fase 1.
