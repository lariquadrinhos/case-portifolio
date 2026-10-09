---
fluxo: case/pagina-de-case
dominio: case
dono: design
status: rascunho
atualizado: 2026-09-21

figma:
  file: hwClE9Xpm51OW4vPsCCn8J
  pagina: "56:2"
  tela: "106:22 (Finanças) · 108:22 (Finanças, estreita)"
  tela2: "144:32 (Reembolso) · 148:37 (Reembolso, estreita)"
---

# Página de case

Leitura longa. É o coração do site: o portfólio existe para mostrar os cases, e **são eles
que mostram como ela trabalha**, a forma de conduzir o processo aparece dentro de cada
etapa, como evidência, não como declaração à parte.

## Regras

- **Tabela é conteúdo de desktop.** Em tela estreita ela não aparece: a seção inteira sai, pelo
  marcador `<!-- só no desktop -->` no arquivo de conteúdo. Uma tabela de três colunas não cabe
  em 327px sem rolar para o lado, e rolar para o lado escondia metade da comparação de quem não
  usa o dedo. **O que o estreito perde foi conferido número por número e aceito por ela**, não
ficou como decisão silenciosa. Ver decisão 226.
- A página abre com **título do case, frase de abertura e tira de destaques**, nessa ordem,
  antes de qualquer capítulo.
- **O título do case quebra onde o Figma quebra.** Na tela estreita, o do Finanças é *"A planilha
  que / virou produto"*, quebra escolhida, como a da frase da home; o do Reembolso, *"Toda semana,
  do / zero"*, é a quebra natural da largura. No desktop os dois cabem numa linha. Ver decisão 186.
- **A tira de destaques é o elemento mais escaneável da página** e, para quem faz triagem
  rápida, pode ser o mais útil da tela inteira. Traz papel, método ou escopo, entregas,
  status e repositório. Em tela estreita, empilha.
- O marca-texto cobre um trecho da hero, **uma vez por página**: título **ou** frase de
  abertura. Neste case ele cobre *"Decidi transformar essa cena em um aplicativo desktop."*,
  que é a virada da frase: observação, **decisão**, resultado.
- Quando o trecho destacado atravessa mais de uma linha, **a faixa acompanha a quebra**,
  uma por linha, e não se escolhe a quebra em função dela: parágrafo reflui, título não.
- **O título fica junto do texto, acima dele.** O que fica ao lado é **a mídia que prova a
  afirmação daquele capítulo**. Na leitura: trilha nas colunas 1 e 2, título e texto nas
  3 a 8, mídia nas 9 a 12.
- **A mídia alinha com o texto, não com o título.** O topo dela acompanha a primeira linha
  do texto do capítulo, se o título quebrar em duas linhas, a mídia desce junto. O título
  pertence ao texto; a mídia é prova do que o texto afirma, e começa onde a afirmação começa.
- **Cada capítulo tem a sua prova ao lado**, com legenda abaixo dela.
- **Quando as mídias são mais altas que o texto, as duas colunas correm separadas.** É o caso
  do Finanças. Esperar a mídia de cada capítulo abria um vão embaixo de cada texto e quebrava a
  fluidez da leitura. Então o texto segue com o respiro de capítulo (96 no desktop) entre um
  capítulo e o próximo, e a coluna de mídia segue com o mesmo respiro entre uma mídia e a
  próxima, na ordem dos capítulos. **Uma mídia nunca começa antes do próprio capítulo**: o topo
  dela é o mais baixo entre a primeira linha do texto do capítulo e o fim da mídia anterior
  mais 96. No Finanças, o capítulo 5 não tem mídia, e a do capítulo 6 é um **par de telas**
  (`<!-- bloco: par -->`) na largura inteira do conteúdo, 96 depois da coluna que terminar por
  último. O bloco de provas vem 96 depois dele. No Reembolso, onde texto e mídia têm alturas parecidas,
  vale a regra de alinhar cada mídia com o seu capítulo.
  **No HTML, o texto vem antes da mídia em cada capítulo**, para o leitor de tela ouvir a afirmação
  antes da prova e para a ordem da leitura bater com a da tela estreita (WCAG 1.3.2). No desktop,
  um script posiciona cada mídia na coluna pela regra acima. **Sem script, o Finanças cai no layout do
  Reembolso**: cada mídia ao lado do seu capítulo, e o capítulo esperando a mídia; nada se perde.
  **Com script, o texto já nasce no layout de colunas separadas e nunca salta**: a página se marca
  como "com script" antes da primeira pintura, e as mídias ficam invisíveis até um script curto,
  logo depois dos capítulos, calcular as posições e mostrá-las já no lugar. Ver decisões 207 e 208. Ver decisões 204 e 205.
- **Vídeo não é pré-carregado e não toca sozinho.** Até a pessoa pedir, baixa zero byte; o
  que carrega é a imagem de pôster, que segue as mesmas regras de qualquer imagem.
- **A imagem de pôster é um quadro do próprio vídeo.** Se for outra imagem, há salto visual
  no momento em que ele toca, e o vídeo parece quebrado.
- **O texto alternativo do vídeo descreve o que acontece nele**, passo a passo. Vídeo sem áudio
  exige alternativa em texto, e é o texto alternativo que a cumpre: para quem não consegue
  vê-lo, ele é o conteúdo. **A legenda pode contextualizar em vez de descrever**: dizer como o
  vídeo foi feito ou o que ele é, desde que o texto alternativo descreva. Ver decisão 190.
- **Vídeo é servido pelo próprio site, nunca incorporado de terceiro.** Incorporar do
  YouTube ou Vimeo traz script e cookie de rastreamento, e reintroduz o aviso de
  consentimento que a decisão de não medir existiu para evitar. Imagem que não prova
  nada vira galeria, e galeria ninguém olha.
- **O texto corrido ocupa seis colunas, não cinco.** Cinco dariam 61 caracteres por linha,
  abaixo do mínimo de 65, e a regra da medida governa a largura da coluna, não o contrário.
  Ver decisão 042.
- **Em tela estreita a mídia desce para baixo do texto**, em vez de ficar ao lado: a largura
  não comporta duas faixas. A regra da mídia ao lado vale onde há grade para ela.
- **O link usa a cor do texto, não a de estado.** O sublinhado dele e o sublinhado da página
  atual na barra têm a mesma forma; a cor é o que os separa. Ver decisão 088.
- **Saída para fora do site é link, não botão.** Botão promete ação dentro do site; palavra
  sublinhada promete ir embora. O botão do fim do case é **preenchido**, como o da home: o
  site não tem botão secundário, então não há contorno marcando hierarquia. O rótulo avisa que abre em nova aba.
- Cada link externo vem **precedido de uma linha que diz o que a pessoa vai encontrar lá**.
- **O bloco de provas fecha o case**, sob o convite *"Está tudo aberto."* Ele reúne tudo que
  pode ser conferido, e cada case tem o seu conjunto:

| Case | Provas |
|---|---|
| Finanças | repositório · arquivo do Figma · fluxo no FigJam |
| Reembolso | repositório · arquivo do Figma · board no FigJam · protótipo |

- **A linha que diz o que a pessoa vai encontrar e o endereço moram no arquivo de conteúdo**,
  sob `<!-- bloco: provas -->`: uma linha de descrição e, logo abaixo, o link, por prova. O
  convite *"Está tudo aberto."* é interface e fica aqui. **Link com endereço vazio é prova que
  ainda falta**, e o site mostra o marcador de falta no lugar dele. Ver decisão 179.

- **O Figma entra porque o case afirma coisas sobre ele.** Um capítulo do case de Finanças se
  chama *"O Figma era metade da entrega"*; linkar só o repositório faria o case afirmar uma
  coisa e mostrar a prova de outra. **Afirmação com link é evidência; sem link é alegação.**
- **Protótipo só onde existe.** Reembolso tem: 43 telas alcançáveis, 145 ligações. Finanças
  não tem e não terá.
- **Os dois cases não têm o mesmo número de provas, e isso é honesto:** cada um mostra o que
  de fato produziu.
- Ao fim da página vêm o card do próximo case e o convite ao contato.
- A barra marca **Trabalhos** como seção, porque um case pertence a Trabalhos.

## Peças

| Nome no cenário | Figma | Storybook |
|---|---|---|
| hero do case | `106:32` | não se aplica |
| tira de destaques | `106:36` | não se aplica |
| capítulo | `112:27` | não se aplica |
| marca-texto | `110:23`, `110:24` | não se aplica |
| página em tela estreita | `108:22` | não se aplica |
| as provas do case | `245:243` | não se aplica |
| as provas do case · estreita | `245:261` | não se aplica |
| página do segundo case | `144:32` | não se aplica |
| página do segundo case · estreita | `148:37` | não se aplica |
| tabela de comparação | dentro de `144:32` | não se aplica |

## O convite ao contato

**Texto** · *"Vamos conversar?"*, e o botão, sem linha de apoio.

- **Uma frase só, sem preparação.** O case já fez o trabalho inteiro; um convite que
  argumenta disputa com ele no último centímetro da página.
- **Não menciona o case nem o que a pessoa leu.** A frase anterior era *"Quer conversar sobre
  isso?"*, e o *isso* não tinha referência clara: podia ser o case, o problema, o jeito de
  trabalhar.
- É a **última coisa da página**, depois do card do próximo case. Quem quer continuar lendo já
  foi servido; quem chegou aqui tem uma porta.

## Conteúdo extra

- **Um case pode ter uma seção extra depois do último capítulo.** Ela **não entra na trilha**:
  é conteúdo à parte, com objetivo diferente do arco do case, e por isso tem liberdade de tom
  que os capítulos não têm.
- **Vem declarada por `<!-- bloco: extra -->`** no arquivo de conteúdo. Sem o marcador, a
  convenção a trataria como subseção do último capítulo, que é outra coisa.
- **É uma aba retrátil, e chega fechada.** O título convida: *"Leia mais sobre o produto"*,
  e uma seta indica que há mais. **O conteúdo é oferecido, não imposto:** quem quiser só o
  case fecha o case e vai embora; quem quiser mais, abre.
- **A linha inteira do cabeçalho é o alvo**, não só a seta. A seta indica o estado, não é um
  botão à parte.
- **Abre e fecha sem JavaScript.** Na web é `details`/`summary` nativo, que já faz isso e já é
  anunciado por leitor de tela. O script não é dependência aqui, não há script.
- **É uma banda de cor que sangra a tela**, no tom pálido daquele case, fechada ou aberta. O
  case acabou, e a aba precisa dizer isso antes da primeira palavra.
- **Aberta, a linha começa onde começa o texto dos capítulos e vai até a margem direita**: no
  desktop 1063px, exatamente a largura de um capítulo. São 122 caracteres por linha contra 73
  na coluna de leitura: **a única exceção à regra de medida em todo o site**, e ela é
  deliberada. Ver decisões 106 e 107.
- Fica **depois do convite ao repositório**. O repositório é o que fecha o case: a última
  coisa do arco, a prova verificável do processo. O extra vem depois porque não é do arco.

### O extra do case de Finanças

*"O Produto"*: nove parágrafos sobre o que a aplicação faz. Existe porque **os seis capítulos
falam de processo e não do produto**: sem ela, o case descreve como uma coisa foi construída
sem nunca dizer o que a coisa é.

## O bloco de destaque

- **É um parágrafo inteiro sobre fundo pálido da cor do case**, e serve para **dar respiro
  numa leitura longa**. Não marca importância: marca ritmo. Uma por capítulo, no máximo, e
  zero é permitido.
- **Mesmo corpo e mesmo peso da prosa em volta.** Se o texto mudasse de tamanho ou de peso, o
  bloco passaria a dizer "isto é mais importante", que é outra coisa.
- **Não usar nas frases curtas em peso forte.** Elas já estão marcadas, e pôr fundo atrás de
  uma linha só faz uma etiqueta, não um respiro.
- **Não usar em lista.** Lista já tem ritmo próprio; o fundo compete com ele.
- **O capítulo precisa de pelo menos três parágrafos de prosa.** Com dois, colorir um não é
  pontuação: é **alternância**, o olho lê "colorido, não colorido" como padrão, não como
  pausa. E com um só, o bloco vira o capítulo.
- **O texto dentro do bloco tem a mesma medida da prosa em volta.** Um respiro que aperta a
  linha é contraditório: ele existe para o olho descansar, não para a linha quebrar mais
  vezes.
- **Em tela estreita, o bloco sangra até as bordas.** A cor vai de ponta a ponta e o respiro
  do bloco ocupa o lugar da margem da página, então o texto fica em 327, igual ao resto.
- **No desktop o bloco fica dentro da coluna de leitura, e não sangra.** Não é escolha
  estética: **a coluna de mídia fica ao lado**, a 24 de distância, e um bloco sangrando
  invadiria ela. O respiro de 32 deixa a linha em 66 caracteres: mais curta que os 74 da
  prosa, mas dentro da faixa de 65 a 75. **A diferença entre as larguras tem causa estrutural,
  não é descuido.**
- **Todo capítulo em tela estreita tem 375 de largura**, com o respiro dentro de colunas de
  leitura: tenha bloco ou não. Antes só os capítulos com bloco eram assim, e os outros tinham
  327: o texto alinhava, mas "capítulo" deixava de ser uma coisa só, e ganhar um bloco depois
  obrigava a remontar a moldura.

### Os dois do case de Finanças

| Capítulo | Parágrafo | Quanto do capítulo |
|---|---|---|
| 1 · Introdução | nenhum: dois parágrafos só | nada |
| 2 · Descoberta | *"Conduzi o projeto inteiro com IA…"* | 33% |
| 3 · Desenho e documentação | *"E a documentação virou artefato de handoff…"* | 24% |
| 4 · Design system | nenhum: dois parágrafos só | nada |
| 5 · Desenvolvimento | nenhum: dois parágrafos só | nada |
| 6 · Resultados | nenhum: um parágrafo só, que seria 55% | nada |

**Os dois cases não têm a mesma densidade de bloco, e isso é consequência do texto, não
escolha de layout.** O Reembolso tem capítulos longos com quatro a sete parágrafos; o de
Finanças tem capítulos curtos e uniformes, com dois a quatro. Onde não há sequência longa, não
há parede para quebrar.

### Os três do case de Reembolso

| Capítulo | Parágrafo | Quanto do capítulo |
|---|---|---|
| 1 · Introdução | nenhum: tem um parágrafo só, e colorir seria colorir o capítulo | nada |
| 2 · Diagnóstico | *"Percebi que muitas das etapas mais pesadas…"* | 33% |
| 3 · Novo fluxo | *"Separei o que acontece uma vez na vida…"* | 14% |
| 4 · Wireframes e interface | *"Então reconstruí, o mais fielmente possível…"* | 25% |
| 5 · Resultados | nenhum, só tem listas | nada |

Três em cinco capítulos, e espaçados: 2, 3, 4. O respiro se distribui pela leitura em vez de
se concentrar num ponto.

## Entre 1024 e 1280 de largura

- **Abaixo de 1280 de largura, o case usa o modo de tela estreita**, com a barra e a faixa de
  progresso da tela estreita. É a mesma fronteira da Home e de Trabalhos (decisão 212).
- **A coluna de leitura tem no máximo 628 e fica centralizada**, a mesma largura da coluna de texto
  do desktop. Abaixo de 676 de largura (628 mais 24 de cada lado), ela volta a ocupar a largura com
  a margem da tela estreita.
- **Tudo o que é texto segue a coluna**: hero, tira, prosa, conteúdo extra (como "O Produto" do
  Finanças), provas, rótulo do próximo e convite.
- **A mídia de prova tem no máximo 411 de largura**, a mesma do desktop, e fica centralizada na
  coluna: as imagens são exportadas para 411 e esticá-las as borraria. O par de telas do Finanças
  empilha, cada uma com 411.
- **O bloco de destaque sangra até as bordas**, como na tela estreita, e o texto dentro dele fica
  na coluna.
- **O botão do convite ao contato tem a largura do texto** sempre que a coluna tem limite, a partir
  de 676. Abaixo disso, ocupa a largura, como na tela estreita.
- O card do próximo case acompanha a coluna, com a capa em 3:2.
- Figma: `602:1487`. Ver decisões 225 e 229.

## Tabelas dentro do case

- **Tabela ocupa a largura inteira do conteúdo, não a coluna de leitura.** A regra da medida
  governa prosa; tabela é dado, e o que governa é a comparação ficar legível lado a lado.
- **Em tela estreita a tabela não aparece**, pela regra do topo deste contrato (decisão 132, que
  substituiu a rolagem horizontal com aviso em palavras). Ver decisão 226.

## Comportamento

```gherkin
# language: pt
Funcionalidade: Página de case

  Cenário: A pessoa abre um case
    Quando a página abre
    Então o título, a frase de abertura e a tira de destaques aparecem antes dos capítulos
    E a barra marca "Trabalhos" como seção
    E o marca-texto cobre um trecho da hero, uma vez só

  Cenário: O trecho destacado atravessa mais de uma linha
    Dado que o trecho destacado está no meio de um parágrafo
    Quando a página é montada
    Então a faixa acompanha a quebra de linha, uma por linha atravessada
    E a quebra do parágrafo não é alterada para acomodar a faixa

  Cenário: A pessoa lê um capítulo em desktop
    Dado que a página está aberta em tela larga
    Quando um capítulo aparece
    Então o título dele fica acima do texto a que pertence
    E o texto corrido ocupa seis colunas
    E a mídia que prova aquele capítulo fica ao lado, com legenda abaixo
    E o topo da mídia alinha com a primeira linha do texto, não com o título
    E, num case de mídias mais altas que o texto, a mídia começa no mais baixo entre essa linha e o fim da mídia anterior mais o respiro de capítulo

  Cenário: A pessoa vai para fora do site
    Dado que o case tem link externo
    Quando ela chega ao fim da leitura
    Então um convite diz o que ela vai encontrar
    E o endereço aparece como palavra sublinhada, não como botão
    E o rótulo avisa que abre em nova aba

  Cenário: Alguém não consegue ver o vídeo
    Dado que a mídia daquele capítulo é um vídeo sem áudio
    Quando alguém chega ao vídeo sem ver as imagens
    Então o texto alternativo descreve o que acontece na tela
    E a afirmação do capítulo continua provada

  Cenário: A pessoa abre um capítulo que tem vídeo
    Dado que a mídia daquele capítulo é um vídeo
    Quando a página abre
    Então só a imagem de pôster é baixada
    E o vídeo não toca sozinho
    Quando a pessoa aciona o vídeo
    Então ele é baixado e tocado, servido pelo próprio site

  Cenário: A pessoa lê um capítulo em tela estreita
    Dado que a página está aberta em tela estreita
    Quando um capítulo aparece
    Então o título fica acima do texto
    E a mídia desce para baixo do texto, em vez de ficar ao lado
    E a tira de destaques aparece empilhada
    E a legenda de cada mídia continua logo abaixo dela

  Cenário: A construção separa o hero dos capítulos
    Dado que o hero está dentro do primeiro capítulo do arquivo
    E que ele vem declarado por <!-- bloco: hero -->
    Quando a construção acontece
    Então o título, a frase de abertura e a tira de destaques formam o hero, antes dos capítulos
    E o capítulo 1 começa no primeiro parágrafo depois da tira

  Cenário: O case numa janela entre a tela estreita e o desktop
    Dado que a janela tem entre 676 e 1279 de largura
    Quando a pessoa abre um case
    Então a página usa a barra e a faixa de progresso da tela estreita
    E todo texto fica numa coluna centralizada de no máximo 628
    E nenhuma mídia passa de 411 de largura
    E o botão do convite tem a largura do texto
```

## Transições

| De | Gatilho | Para |
|---|---|---|
| Case | Fim da página | Card do próximo case e convite ao contato |
| Case | Item da trilha | A mesma página, na seção correspondente |
| Case | Link externo | Nova aba |
