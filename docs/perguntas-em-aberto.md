# Perguntas em aberto — Portfólio

> Lista única do que ainda não foi decidido. **Uma pergunta, um lugar.**
> Cada uma traz: o que precisa ser decidido, as opções conhecidas com a consequência de
> cada uma, a classificação, e — para as que esperam — **o momento em que deixa de poder
> esperar**, sempre um ponto do trabalho, nunca uma data.
>
> Pergunta respondida **sai daqui**. A resposta vira regra no contrato ou nas definições,
> e entrada no log se tiver alternativa real. Lista com metade dos itens riscados deixa de
> ser consultável.

**Atualizado:** 18 de setembro de 2026 · **20 perguntas**, duas travando

---

## Travam

### P05 · Stack e hospedagem
Com alternativa considerada e motivo registrados.
**Já restringido pela decisão 005:** nada que renderize no navegador. Restam gerador de
site estático e HTML escrito à mão. O gerador precisa produzir HTML completo na construção,
aceitar um script bloqueante curto no `<head>` e ler os três arquivos de conteúdo.
**Momento:** Fase 1.

### P07 · Como os tokens do Figma entram no código
Lidos das variáveis, com o nome preservado, num único lugar de onde tudo deriva.
**Momento:** Fase 1.

---

## Esperam

### P24 · As demonstrações do Figma contradizem o documento em três pontos
Lido em 18/09/2026, frames `37:88` e `38:105`. A regra já diz que quem erra é o desenho —
falta corrigir o arquivo ou confirmar que a demonstração é que está certa.
1. A hero desenhada tem **dois botões** ("Ver meus trabalhos" e "Quem sou eu"); o documento
   diz "uma ação principal só".
2. A hero diz `UX/UI Designer`; o `quem-sou-eu.md` diz `UX Designer`.
3. A trilha desenhada diz "Wireframes e documentação"; o arquivo do case diz
   "Desenho e documentação".
**Momento:** antes da Fase 3, quando as telas forem desenhadas para valer.

### P25 · A coleção "Espaço e forma" não tem frame de documentação
Os nomes `space/*`, `radius/*`, `stroke/padrao` e `foco/*` vêm do documento de definições,
não de leitura do arquivo. Não foi possível confirmá-los contra a fonte — o MCP do Figma
exige seleção no app para ler variáveis.
**Momento:** antes de a spec visual ser gerada.

### P22 · O bloco "O Produto", no case de Finanças
Título sem marcador de trilha, depois do último capítulo. É subseção do último capítulo,
capítulo próprio sem rótulo, ou material que não vai para o site?
**Momento:** antes de construir a página do case. · *Contrato, `conteudo/`*

### P23 · Imagens, legendas e links dos cases não existem nos arquivos
Nenhuma imagem referenciada nos três arquivos. Um único link, e é o marcador `[link]`.
Reembolso cita Repositório sem link. Nenhum link de protótipo. A convenção para escrevê-los
já existe — falta o conteúdo.
**Momento:** dependência de conteúdo; trava a publicação se ficar para o fim.

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
