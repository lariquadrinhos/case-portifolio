# Definições do produto — Portfólio

> Documento de entrada. Serve de base para gerar o PRD e as especificações do site.
> Escrito antes da primeira linha de código, e mantido como fonte das decisões de produto.
>
> **Toda lacuna aqui vira suposição adiante.** Se alguma definição estiver faltando ou ambígua, a resposta certa é perguntar, não preencher.

---

# Contexto do projeto

## De onde isso vem

Tenho os três textos do site escritos — os dois cases e o "Quem sou eu" — e nenhum lugar onde eles vivam. Preciso de um site no ar para começar a aplicar para vagas.

É um projeto que eu faria de qualquer forma — a diferença é que o processo vai ser registrado enquanto acontece, porque ele é a matéria-prima de um terceiro case. **A documentação é regra de trabalho, não objetivo.** Se uma decisão for tomada pensando em como ela vai ler no case, a decisão está errada.

## Regras de trabalho

Quatro regras valem o projeto inteiro. Tudo o mais neste documento é consequência delas.

**1. O visual está desenhado no Figma. O comportamento está escrito nos documentos.**

Cada coisa em um lugar só. Se é forma — cor, tamanho, espaço, layout, estado visual de um componente — existe desenhada e em variáveis no Figma. Se é comportamento — o que acontece ao clicar, o que aparece quando não há conteúdo, como a trilha decide qual etapa marcar, o que a página faz em tela estreita — existe escrito. Nada é descrito em palavras quando podia ser visto, e nada é deixado para o desenho sugerir quando precisa ser dito.

**2. Toda decisão é documentada.**

Em um de dois lugares, e a diferença importa. A decisão como ela ficou vira regra no contrato de comportamento — é o estado atual, e quem constrói lê isso. A decisão como ela aconteceu vira entrada no log, mas só quando havia alternativa real: qual era, e por que perdeu. Um documento diz como as coisas são hoje, o outro registra o raciocínio na ordem em que aconteceu, e nenhum tenta fazer o trabalho do outro.

**3. Nenhuma ambiguidade é preenchida sozinha. Nem toda ambiguidade precisa ser resolvida agora.**

Ambiguidade que muda o comportamento do site vira pergunta com opções e consequências — nunca é preenchida com o que for plausível. Isso vale para mim e vale para a ferramenta: o modo de falha de trabalhar com IA é a lacuna ser preenchida sozinha e o projeto seguir sobre uma decisão que ninguém tomou.

Mas responder na hora e registrar são coisas diferentes, e tratar as duas como uma só trava o trabalho sem necessidade. Então toda pergunta é registrada, e cada uma recebe uma classificação:

**Trava** quando seguir sem a resposta significa construir algo que talvez precise ser refeito. Aqui o trabalho para naquele ponto — e só naquele ponto; dá para seguir em outra frente.

**Espera** quando dá para avançar e decidir depois sem retrabalho. A pergunta fica no arquivo de perguntas em aberto, com o momento em que ela deixa de poder esperar.

**O que nunca acontece é a terceira opção: seguir sem decidir e sem registrar.** É disso que nasce a decisão que ninguém tomou.

**4. Registrar no momento.**

Decisão que não foi registrada quando aconteceu não entra no case depois. Reconstrução de memória não vale.

### O que entra no log

Só o que poderia ter ido para outro lado: decisões com alternativa real e o motivo de a alternativa ter perdido; momentos em que recusei ou corrigi o que a IA propôs; restrições que forçaram escolha; e a sequência, para o arco ficar visível depois. Log de tudo é log de nada — o resto das decisões já está no contrato, como regra.

---

# O produto

## Quem lê

**Quem faz triagem.** Recrutador ou recrutadora que abre dezenas de portfólios e decide rápido se vale seguir. Chega quase sempre pela home, dá pouco tempo, e o que decide é se entende em segundos o que eu faço.

**Quem avalia profundidade.** Pessoa que lidera design ou produto e vai ler um case inteiro procurando julgamento: como decidi, do que abri mão, o que deu errado.

**Quem recebe o link de outra pessoa.** Chega direto numa página interna, não pela home. Consequência de projeto: **toda página precisa funcionar sozinha** — dizer quem eu sou, o que é aquilo e para onde ir em seguida.

## O que essas pessoas precisam conseguir fazer

- Entender em segundos o que eu faço e para quem.
- Chegar aos trabalhos sem procurar, e escolher entre eles sem abrir os dois.
- Ler um case longo sem perder a noção de onde está nem de quanto falta.
- Pular para uma parte específica do case e voltar.
- Terminar um case e ir para o outro sem voltar ao índice.
- Avaliar profundidade sem precisar ler tudo.
- Saber quem eu sou além do trabalho.
- Baixar o currículo.
- Falar comigo a partir de qualquer página, sem procurar.
- Compartilhar um link que faz sentido sozinho.

## Princípio transversal: conforto de quem lê

Toda decisão passa por aqui. Na prática: tipografia grande e linha de leitura curta; contraste alto nos dois temas; nada que se mova sem o leitor pedir, e respeito a quem desligou animações no sistema; carregamento rápido em rede ruim; navegação sempre visível; botão de voltar do navegador funcionando; site inteiro navegável por teclado com foco visível; nenhuma interação obrigatória para acessar conteúdo; nenhum aviso de consentimento na frente do conteúdo.

## As páginas

**Home.** É capa, não resumo. Nome, cargo, uma frase e um parágrafo. A função dela é fazer a pessoa querer ver os trabalhos — e o caminho para eles é o elemento mais evidente da tela. Esses textos vêm marcados dentro do arquivo de "Quem sou eu".

**Uma ação principal só.** A home não repete o contato como botão: a barra é fixa, então o contato já está visível ali no topo. Duplicar divide a atenção no único momento em que o site quer uma direção só.

**Trabalhos.** Índice dos cases, em cards. É para onde a home leva e para onde a barra aponta. Existe porque a home é capa e não lista — e porque é aqui que um terceiro case cabe sem redesenhar nada.

Cada card precisa pagar o clique que custa: imagem de capa, o título do case e uma linha que entrega a tensão ou o resultado, nunca a categoria do produto. O card inteiro é clicável.

**Cases (dois, um por página).** Leitura longa, com trilha lateral. É o coração do site: o portfólio existe para mostrar os cases. **São eles que mostram como eu trabalho** — a forma de conduzir o processo aparece dentro de cada etapa, como evidência, não como declaração à parte.

A tira de destaques de cada case — papel, método, entregas, status, repositório — aparece no topo da página, logo abaixo do título e da frase de abertura. É o elemento mais escaneável do case e, para quem faz triagem rápida, pode ser o mais útil da tela inteira. Em tela estreita, empilha.

**No fim de cada case, um card leva ao próximo.** Quem terminou de ler está no pico de interesse e não deveria ter que voltar ao índice — o objetivo é que ninguém leia só um. É o mesmo componente de card do índice, também clicável inteiro, com um rótulo acima dizendo que é o próximo.

**Quem sou eu.** Foto minha. Foco em como eu penso, como trabalho, como tomo decisões e no que eu valorizo — não em cronologia de emprego. É aqui que mora a reflexão que não cabe dentro de um case: o que eu não delego, o que o meu método cobra de mim, e o que este site está registrando enquanto é construído. O histórico profissional fica no currículo em PDF, acessível a partir daqui, junto com o contato.

**Página de erro.** Endereço inexistente devolve uma página dentro da moldura do site, não a tela do servidor: explica o que aconteceu e oferece saída para os trabalhos, a home e o contato.

## Navegação

**Barra fixa no topo, visível o tempo todo**, com altura e tipografia confortáveis — não uma faixa fina. Da esquerda para a direita: meu nome (clicar volta para a home), **Trabalhos em primeiro lugar**, Quem sou eu, e à direita o controle de tema — mais o de idioma quando a versão em inglês existir.

**Contato é botão, não link de navegação.** Fica na direita da barra, visualmente distinto dos itens de menu, e dispara a ação direto em vez de levar a uma página. Navegação diz para onde ir; contato diz o que fazer, e misturar os dois faz o contato competir por atenção com os cases. Contato é e-mail e LinkedIn — sem formulário, que em site estático exige serviço de terceiro e vira ponto de falha sem ganho.

**O fim de cada case também convida ao contato.** É o momento de maior interesse de quem leu.

**Trilha lateral nos cases**, fixa à esquerda, com marcador que acompanha a leitura e se move sozinho conforme a pessoa rola. Visual de percurso com etapas — cada item é clicável e leva à seção correspondente. Dá duas informações ao mesmo tempo: onde estou e quanto falta.

Os rótulos das etapas estão marcados dentro dos arquivos dos cases, como comentário logo abaixo de cada título de capítulo. Usam termos conhecidos do processo de design, para o leitor se localizar de imediato, e não repetem o título do capítulo.

**Botão de voltar ao topo**, discreto, flutuante no canto inferior direito, aparecendo só depois que a rolagem começa.

## Conteúdo e idioma

O conteúdo vive em arquivos de texto, não dentro do código. **Atualizar uma página é editar um arquivo de texto** — e isso atende ao requisito de o conteúdo poder mudar adiante sem refazer o site.

São três arquivos:

- `case-study-financas-pf-pj.md` — o case de Finanças, escrito e aprovado.
- `case-study-reembolso-sulamerica.md` — o case de Reembolso, escrito e aprovado.
- `quem-sou-eu.md` — a página "Quem sou eu" **e os textos da home**, marcados dentro do próprio arquivo. Escrito e aprovado.

**Os três textos estão prontos.** Nenhuma fase depende de escrita de conteúdo, o que tira do caminho o risco mais comum de projeto de portfólio: o site ficar pronto esperando texto.

**A home não tem arquivo próprio** porque é capa, não página de conteúdo: são quatro linhas que mudam junto com a forma como eu me apresento, e separá-las criaria um arquivo de três frases para manter. Ficam marcadas no topo do "Quem sou eu", que é onde essa apresentação já mora.

**Os rótulos da trilha estão dentro dos arquivos dos cases**, como comentário logo abaixo de cada título de capítulo. Ficam junto do capítulo a que pertencem, e não numa lista no topo, para que um erro de ordem seja impossível de não ver.

O site não inventa conteúdo: tudo que aparece na tela veio de um desses arquivos ou está escrito no contrato de comportamento. Se uma peça esperada não estiver no arquivo, o comportamento dessa falta é decidido no domínio **Conteúdo** — não improvisado na hora.

**O site publica em português.** O inglês entra depois, como primeira evolução após o lançamento — a estrutura já nasce preparada para receber um segundo idioma, com o conteúdo separado do código e o controle previsto na barra, mas nada disso segura a publicação. Quando o inglês entrar, trocar de idioma mantém a pessoa na mesma página e na mesma altura da leitura.

## Mídia e links nos cases

**Imagem de processo, não só tela final.** Quando os textos dos cases perderam os exemplos concretos, o específico saiu junto — e é nas imagens que ele volta. Fluxos com legenda, mapeamento anotado, avaliação heurística, biblioteca de componentes, tokens com proveniência, wireframe em cinza ao lado do mockup colorido. **Cada imagem precisa provar uma afirmação do texto**, e a legenda carrega o detalhe que o texto abriu mão de contar. Imagem que não prova nada vira galeria, e galeria ninguém olha.

**Botão de protótipo** em cada case, abrindo em nova aba, com rótulo que avisa que a pessoa vai sair do site.

**O produto de Finanças não se linka, se mostra.** É aplicativo local, sem login — não há URL para visitar. No lugar disso: capturas do produto rodando de verdade e um vídeo curto dele em uso, ao lado dos mockups correspondentes. Mockup e produto funcionando lado a lado é a prova mais forte disponível neste portfólio. O link verificável é o repositório.

## Comportamento em tela pequena

O site é construído para funcionar bem em tela estreita desde o começo, não adaptado depois.

**A trilha lateral não cabe.** Vira uma faixa fina de progresso logo abaixo da barra do topo, tocável para abrir a lista completa de etapas.

**A barra do topo** precisa decidir o que fica visível e o que vai para menu, sem espremer a ponto de matar a legibilidade que é o ponto dela. O mínimo visível é nome e Trabalhos.

**Imagem de desktop em tela de celular.** Os dois cases pedem tratamentos diferentes. O de Reembolso mostra telas de celular, que aparecem bem num celular. O de Finanças mostra telas de desktop largas — reduzidas à largura de um telefone viram mancha ilegível, e são justamente a prova visual do trabalho. A imagem abre sob toque, em visualizador com zoom, e o texto em volta carrega o que a miniatura não entrega. Onde o ponto for um componente e não o conjunto, vale mostrar recorte de detalhe em vez da tela inteira.

## Camada visual

**Direção: contenção.** Tipografia e cor fazem o trabalho, e fazem sozinhas. Sem sombra, sem gradiente, sem ornamento. Um site visualmente ambicioso contradiria o que os cases dizem sobre método e critério — o que ele pode ser é confiante na tipografia, que é coisa diferente.

Os princípios vêm do sistema que já construí e defendi no case de Finanças: papel definido para cada elemento visual antes de qualquer escolha de cor; cor só onde ela significa alguma coisa; densidade resolvida por ritmo e alinhamento, não por acréscimo de borda, peso e cor; um canal por mensagem; sem sombra.

**A trilha é o único elemento gráfico distintivo do site**, e existe por função, não por decoração.

**A riqueza visual vem das imagens dos cases.** O site é moldura; o trabalho é o quadro.

**Tipografia para leitura longa**, porque é onde o conforto do leitor mais importa: entrelinha generosa, contraste real entre os níveis da escala, e ritmo de espaçamento saindo de uma escala definida, não de valores escolhidos caso a caso.

## Especificação visual

**Os valores visuais não vivem neste documento. Vivem no Figma, em variáveis, e é de lá que devem ser lidos.**

**Arquivo:** https://www.figma.com/design/hwClE9Xpm51OW4vPsCCn8J/?node-id=34-2 — página **Sistema visual**.

> **Os textos que aparecem no Figma são demonstrativos.** O arquivo mostra *como* as coisas se parecem, não *o que* elas dizem: toda frase ali — hero, títulos, parágrafos, legendas — é amostra, escolhida para testar tamanho, medida de linha e contraste. **O conteúdo real do site vem dos arquivos de texto** listados em *Conteúdo e idioma*. Nenhuma palavra deve ser copiada do Figma para o código.

### Como ler os valores

O arquivo tem três coleções de variáveis, legíveis por ferramenta, sem interpretar imagem:

- **Cor** — dois modos, `Claro` e `Escuro`. Nomes por papel: `bg/page`, `bg/surface`, `bg/subtle`, `text/primary`, `text/secondary`, `text/tertiary`, `border`, e `accent/{roxo|laranja|verde|rosa|azul}/{surface|strong}`.
- **Tipografia** — dois modos, `Desktop` e `Tela pequena`. `family`, e `size/*` e `line/*` para cada nível: `display`, `titulo-case`, `titulo-cap`, `subtitulo`, `abertura`, `corpo`, `apoio`, `etiqueta`.
- **Espaço e forma** — `space/*` (múltiplos de 4, de 4 a 128), `radius/*`, `stroke/padrao`, `foco/largura`, `foco/afastamento`.

Os frames da página estão ligados a essas variáveis, não a valores soltos. Mudar a variável muda o arquivo inteiro.

**Nenhum valor visual deve ser digitado à mão no código sem vir de uma dessas coleções.** Se um valor for necessário e não existir ali, isso é uma lacuna — e lacuna vira pergunta, não suposição.

### Onde perguntar cada coisa

**Não há hierarquia entre o Figma e este documento, porque eles não falam da mesma coisa.** Cada assunto tem um dono só, e a pergunta que resolve qualquer dúvida é: *o que estou perguntando?*

- **"Quanto?"** — qual hex, qual tamanho de fonte, qual entrelinha, quanto de espaço, quanto de raio. **Pergunte ao Figma.** Esses números só existem lá, em variáveis. Este documento não tem nenhum, de propósito.
- **"Se, quando, onde e por quê?"** — se essa parte leva cor, quando um bloco colorido se justifica, onde a trilha aparece, por que cada case tem uma cor. **Pergunte a este documento.** O Figma não responde nada disso.

Como nenhum dos dois tem o que o outro tem, conflito de valor não acontece. Duas listas do mesmo hex é que criariam a briga, e foi por isso que as tabelas saíram daqui.

**Uma ressalva, e só uma.** A página do Figma não tem apenas as variáveis: tem também telas de demonstração, desenhadas à mão. Se uma demonstração contrariar uma regra escrita aqui, quem está errado é o desenho. **Demonstração não vira regra por estar desenhada.** As variáveis continuam mandando nos valores, sempre.

### O que perguntar a este documento

Tudo abaixo responde "se, quando, onde e por quê". Não é valor, não está desenhado, e não deve ser inferido de screenshot.

**Tipografia é quem cria hierarquia.** DM Sans em toda a interface, uma família só. O nível se marca pelo tamanho, nunca pela cor — se o tamanho já marca, a cor não entra. Em tela pequena a escala reduz pelo topo: títulos encolhem, corpo e apoio não, porque são o piso de legibilidade.

**Medida de linha entre 65 e 75 caracteres** no texto corrido. É o número que governa a largura da coluna de texto, não o contrário.

**O padrão é neutro. Cor é exceção, e exceção precisa de motivo.** A maior parte de qualquer tela deste site é creme, texto e borda. Cor entra em cinco lugares, e em nenhum outro:

1. **Estado e interação** — link, foco, botão de contato. Aqui a cor não é decoração: é a única forma de dizer "isto responde ao toque".
2. **Identidade do case** — card no índice, trilha inteira (traço, marcadores e item ativo) e blocos de destaque dentro do texto daquele case. A trilha é do case, não do sistema: ela só existe dentro de um case e é o elemento que mais carrega a identidade dele durante a leitura.
3. **O bloco de destaque** — o fundo pálido atrás da frase que sustenta um capítulo.
4. **O marca-texto da hero** — uma faixa pálida atrás de parte do título, uma vez por página.
5. **A imagem** — que traz a cor do trabalho em si, e é a razão de o resto ser contido.

Onde a cor **não** entra: texto corrido, título de capítulo, ícone que não é estado, borda, fundo de página, separador, e qualquer lugar onde o único argumento seja "ficaria mais bonito". Se a cor sair e a tela continuar dizendo a mesma coisa, ela não deveria estar lá.

**Cada case tem a sua cor, e a escolha vem decidida.** A razão é que os cases são o produto do site e precisam ser distinguíveis de relance — no índice, na aba, no meio da leitura. Uma cor por case resolve isso sem exigir um visual diferente para cada um, que seria a saída cara e incoerente. A cor é atribuída aqui, uma vez, e nunca escolhida no momento de montar a página.

| Papel | Acento | Onde aparece |
|---|---|---|
| Sistema | **Roxo** | Foco, link, botão de contato, marca-texto da hero. Em todas as páginas. |
| Case de Finanças PF+PJ | **Azul** | Card no índice, trilha, blocos de destaque — só dentro desse case. |
| Case de Reembolso | **Laranja** | Idem, dentro desse case. |
| Livres | Verde e rosa | Reservados para um terceiro case. Não usar antes disso. |

Azul e laranja foram escolhidos por serem os dois mais distinguíveis entre si à distância — no índice, onde os cards ficam lado a lado, é aí que a diferença precisa funcionar. A alternativa considerada era casar a cor com o domínio de cada produto (verde para finanças, azul para seguro), descartada porque verde perto de número financeiro sugere "positivo", e o sistema do case 1 recusa explicitamente cor que julga.

**Uma cor dominante por tela.** Dentro de um case, a cor do case domina e a cor de sistema aparece só nos elementos interativos. Os acentos livres não aparecem.

**Tom pálido é superfície, tom forte é detalhe gráfico.** O pálido recebe texto escuro e é fundo de bloco, card ou marca-texto. O forte é marcador da trilha, ícone, linha, botão — e nunca é fundo de parágrafo. Todo par novo passa por AA nos dois temas antes de entrar: texto sobre superfície acima de 4,5:1, detalhe gráfico sobre a página acima de 3:1.

**Bloco colorido é pontuação, não estilo de parágrafo.** Serve para a frase que sustenta o capítulo — uma por capítulo, no máximo. Texto corrido inteiro sobre cor cansa e anula o efeito.

**O marca-texto é da hero.** Uma faixa de tom pálido atrás de parte do título, uma vez por página e só onde há título grande. Fora da hero, não existe.

**Cor não julga.** Nada é vermelho por ser ruim nem verde por ser bom, aqui como no sistema do case de Finanças. Verde e vermelho de sistema ficam reservados para estado real de interface.

**O escuro não é o claro invertido.** Os dois modos foram escolhidos e verificados em separado. Nenhum valor de um pode ser derivado automaticamente do outro, nem no Figma nem no código.

**Nenhuma medida fora da escala.** Espaço só sai de `space/*`. Entre capítulos de um case, 96; entre parágrafos, 28; dentro de um bloco, 8 ou 12. Valor escolhido caso a caso é o começo do fim do ritmo.

**Sem sombra.** Separação é feita por espaço, borda ou mudança de superfície.

**Grade de 12 colunas** em desktop, margem de 80. Na leitura do case a trilha ocupa as duas primeiras colunas, o título as três seguintes e o texto as cinco últimas — título ao lado do texto, não acima dele.

**Todo elemento interativo tem foco visível**, usando `foco/largura` e `foco/afastamento` no tom forte do acento da página. Isso não é acabamento: é o que torna o site navegável por teclado, e foi exatamente o que uma auditoria pegou no case de Finanças.

## Requisitos não funcionais

- **Celular em primeiro lugar.** Nenhuma rolagem horizontal, nenhum texto cortado, nenhum alvo pequeno demais.
- **Performance:** primeira leitura possível em menos de dois segundos e meio no celular, em rede móvel comum. Imagens em formato moderno, dimensionadas para o tamanho em que aparecem, carregadas sob demanda fora da primeira tela.
- **Acessibilidade:** WCAG AA. Contraste mínimo de 4,5:1 em texto e 3:1 em elemento interativo, **nos dois temas**. Foco sempre visível. Toda imagem com texto alternativo. Alvo de toque mínimo de 44 pixels.
- **Temas:** claro e escuro, com tokens nomeados por papel e não por cor. O padrão segue a preferência do sistema; o controle na barra permite sobrescrever. O claro usa fundo cinza claro, não branco puro.
- **Conteúdo legível sem depender de script.** O texto é o produto; interação é camada.
- **Sem medição no lançamento.** Decisão consciente: a maioria das ferramentas exige aviso de consentimento, que brigaria com o conforto do leitor. Pode ser acrescentada depois, sem refazer nada, se a curiosidade aparecer.

---

# Escopo

**Dentro:** home · índice de trabalhos em cards · dois cases · quem sou eu (com foto e currículo) · página de erro · barra fixa com botão de contato · trilha de leitura nos cases · voltar ao topo · tema claro e escuro · português. Cinco páginas mais a de erro.

**Fora:**

- **Versão em inglês.** Primeira evolução depois do lançamento. A estrutura nasce preparada, mas traduzir e revisar dois cases e mais uma página é trabalho de conteúdo que não vale segurar a publicação. Tradução malfeita custa mais caro que ausência de tradução.
- **Terceiro case.** É este projeto, e só pode ser escrito depois que o site existir. O site nasce com dois cases e sem card de "em breve"; o "Quem sou eu" menciona que o próprio site está sendo documentado, o que transforma a ausência em demonstração.
- **Página de método separada.** Os cases mostram como eu trabalho dentro de cada etapa, o que é mais forte que declarar em página própria. A reflexão que não cabe num case vai para "Quem sou eu".
- Blog, CMS, animações elaboradas, medição, qualquer coisa que exija backend.

# Definição de pronto

O site está pronto quando, e não antes:

- Está no ar, em domínio próprio.
- Funciona bem no celular: sem rolagem horizontal, sem texto cortado, e as imagens dos cases legíveis ou abríveis com zoom.
- Carrega rápido no celular, em rede móvel.
- Dá para navegar o site inteiro só pelo teclado, com foco sempre visível.
- Funciona nos dois temas, com contraste verificado nos dois.
- Uma pessoa que nunca me viu consegue dizer o que eu faço em menos de um minuto.
- Os dois cases estão completos, com imagens de processo legendadas e links de protótipo funcionando.
- Qualquer página aberta direto, sem passar pela home, se explica sozinha.
- O log tem entradas reais, feitas no momento em que cada decisão aconteceu.

Nada além disso segura a publicação. O resto é iteração depois do ar.

# Dependências de conteúdo

Os três textos do site já estão escritos. O que falta abaixo precisa ser produzido e trava a publicação se ficar para o fim:

- Currículo em PDF.
- Foto para a página "Quem sou eu".
- Imagens dos dois cases: telas finais e artefatos de processo, cada uma com sua legenda.
- Imagens de capa dos cards.
- Capturas do produto de Finanças rodando, e um vídeo curto dele em uso.
- Protótipos com link público conferido.
- Domínio.
- Imagem de compartilhamento e descrições de página.

# Como saber se funcionou

**Antes de publicar:** três ou quatro pessoas que recrutam ou lideram design conseguem dizer o que eu faço em menos de um minuto, sem ajuda.

**Depois de publicar:** alguém mencionar um case específico sem eu ter apontado. É o sinal de que o site está fazendo o trabalho sozinho.

---

# Como este documento vira produto

## Instrução de abertura

> Vamos construir meu portfólio: site estático, código do zero. O produto é desenhado inteiro no Figma primeiro — design system, telas, estados — e o código vem só depois, implementando o que já está decidido.
>
> Este documento é a base: o PRD e as especificações saem dele. Os valores visuais não estão aqui, estão em variáveis no Figma, e o endereço está na seção de especificação visual — leia de lá antes de escrever qualquer estilo ou desenhar qualquer tela.
>
> Quatro regras valem o projeto inteiro, e estão detalhadas na seção "Regras de trabalho" — leia essa seção antes de qualquer outra coisa. Em resumo: o visual está desenhado no Figma e o comportamento está escrito nos documentos, cada coisa em um lugar só; toda decisão é documentada, como regra no contrato de comportamento e, quando havia alternativa real, também como entrada no log; nenhuma ambiguidade é preenchida sozinha, virando pergunta com opções e consequências — e cada pergunta é classificada entre as que travam o trabalho e as que podem esperar registradas no arquivo de perguntas em aberto; e tudo é registrado no momento em que acontece.
>
> Comece pelas decisões da Fase 1, antes de desenhar ou escrever qualquer coisa.

## Documentação do projeto

Cinco documentos, cada um respondendo a uma pergunta diferente, e nenhum tentando fazer o trabalho do outro:

- **Este documento** — por que o site é assim. Decisões de produto, princípios e regras de uso.
- **Contrato de comportamento** — o que existe e como se comporta. É o documento de consulta durante a construção.
- **Perguntas em aberto** — o que ainda não foi decidido, e quando cada coisa precisa ser.
- **Log de decisões** — em que ordem as coisas aconteceram e o que foi descartado no caminho.
- **Playbook do loop de produto** — como o trabalho foi conduzido com o Claude, com os prompts reais, e como se faz de novo.

Os dois primeiros dizem o que **é**. O terceiro diz o que **falta**. O quarto diz o que **aconteceu** — e só ele olha para trás. O quinto diz **como foi feito, e como fazer de novo** — é o único que guarda o caminho, e não só o resultado.

### Contrato de comportamento

Este documento é o manual de telas do projeto. **Manual e contrato são a mesma coisa, e por isso têm um nome só** — o próprio glossário fechado que uso nos outros projetos existe para impedir que um conceito ganhe dois nomes. O nome escolhido é *contrato*, porque diz o que ele faz: não descreve o que foi construído, define o que precisa ser verdade.

**A regra que ele existe para cumprir:** o que é visual está desenhado no Figma; o que é comportamento está escrito aqui. Cor, tamanho, espaço e layout descem das variáveis. O que acontece ao clicar, o que aparece quando não há conteúdo, como a trilha decide qual etapa marcar — isso não desce de lugar nenhum, precisa ser escrito.

**É escrito para ser buscado, não lido do começo ao fim.** Quem consulta — eu ou o Claude — chega com uma pergunta específica: como é a tela X, que regra vale aqui, qual frame é esse. Funciona como uma wiki: o leitor cai em um trecho, lê só aquele trecho, e aquele trecho precisa bastar.

**É alimentado ao longo do processo, nunca escrito de uma vez.** Nasce na primeira vez que a tela é mencionada, incompleto e honesto, e vai sendo preenchido conforme as decisões acontecem. Um arquivo com lacunas marcadas é mais útil que um arquivo inexistente, porque torna visível o que ainda não foi decidido. Contrato escrito no fim é reconstrução de memória, e reconstrução de memória não vale.

**Estrutura.** Uma pasta por domínio, um arquivo por tela ou fluxo. Cada arquivo traz, nesta ordem: um cabeçalho legível por máquina com o endereço do frame no Figma; um parágrafo curto dizendo o que acontece ali; as regras; a tabela de peças, ligando cada elemento citado ao seu id; o comportamento, em cenários; e as transições.

**Os domínios deste produto.** Um domínio é um lugar onde alguém vai procurar alguma coisa. Se ninguém navegaria até ele, não é domínio: é checklist, e checklist mora dentro das regras de quem usa.

- **Moldura** — as peças que aparecem em todas as páginas: barra fixa, botão de contato, botão de voltar ao topo. O que elas mostram, o que some em tela estreita, o que acontece ao rolar.
- **Tema** — o comportamento de claro e escuro: qual tema abre na primeira visita, como a escolha é lembrada, e a regra de não piscar o tema errado antes de aplicar o certo. Fica separado da moldura porque atravessa o site inteiro, não é uma peça dela. É aqui que o controle de idioma entra quando existir.
- **Home** — a capa.
- **Trabalhos** — o índice em cards.
- **Case** — o template de leitura, e o domínio mais denso do produto: a página, a tira de destaques, a trilha, os blocos de destaque, os blocos de mídia com legenda, o botão de protótipo e o card do próximo case. Cada um desses é um arquivo, não um parágrafo — a trilha sozinha tem comportamento suficiente para um.
- **Quem sou eu** — foto, texto, currículo, contato.
- **Erro** — endereço inexistente, e qualquer outra saída que devolva a pessoa para dentro do site.
- **Conteúdo** — como um arquivo de texto vira página. Onde o site busca cada texto, como os rótulos da trilha são lidos, como os textos da home são marcados dentro do arquivo do "Quem sou eu", e o que acontece quando uma peça esperada não está lá. É comportamento puro e não tem tela própria, mas é o que quebra primeiro quando eu editar um arquivo daqui a três meses.
- **Componentes** — o design system: cada componente com suas variantes, seus estados e quando usar. **Valores não entram aqui** — cor, tamanho e espaço vivem nas variáveis do Figma, e repeti-los criaria a segunda fonte de verdade que este projeto existe para evitar. O que entra é o que a variável não diz: para que serve, quando não usar, que estados existem.

**Acessibilidade não é domínio.** Foco visível, navegação por teclado e respeito a movimento reduzido não são um lugar onde alguém procura: são regras que valem em todo componente e aparecem dentro de cada um. Domínio para isso vira a página que ninguém abre — e é assim que acessibilidade deixa de ser feita.

**Tudo que for construído no Figma é documentado aqui, inclusive o design system.** Tela que existe no arquivo e não está no contrato é tela que ninguém encontra na hora de construir.

**Lacuna é marcada, nunca preenchida.** Todo caminho ainda não decidido ganha uma marca visível no ponto exato do arquivo onde ele aparece, citando o número da pergunta correspondente em *Perguntas em aberto*. É o que faz o processo pagar por si: a decisão que falta aparece na escrita, quando custa uma frase, em vez de aparecer na implementação, quando custa refazer.

### Perguntas em aberto

Nem toda pergunta precisa de resposta agora, mas toda pergunta precisa de registro. Este arquivo é a lista única do que ainda não foi decidido.

**Uma pergunta, um lugar.** Quando a pergunta pertence a uma tela, o contrato marca a lacuna no ponto exato onde ela aparece — mas **a marca só cita o número da pergunta, não repete o conteúdo**. Perguntas que não pertencem a nenhuma tela — escopo, ferramenta, hospedagem, estrutura — vivem só aqui. Assim o contrato mostra *onde* falta decidir, e este arquivo é o único lugar onde se lê *o que* falta.

**Cada pergunta traz:** o que precisa ser decidido, as opções conhecidas com a consequência de cada uma, a classificação (trava ou espera) e — para as que esperam — **o momento em que ela deixa de poder esperar**. Esse último campo é o que impede a lista de virar um depósito: uma pergunta que espera para sempre foi respondida por omissão.

O momento é sempre um ponto do trabalho, nunca uma data: "antes de desenhar o domínio Case", "antes da primeira linha de código", "antes de publicar". Prazo eu não tenho; sequência eu tenho.

**Pergunta respondida sai daqui.** A resposta vira regra no contrato ou nas definições, e entrada no log se tiver alternativa real. A pergunta é removida da lista — não fica marcada como resolvida, porque lista com metade dos itens riscados deixa de ser consultável. O histórico de que ela existiu está no log, que é o documento que olha para trás.

**A lista encolhendo é o sinal de progresso mais honesto do projeto.** Ela cresce rápido no começo, quando tudo está em aberto, e precisa estar vazia no caminho que vai ser implementado antes de o código começar.

### Playbook do loop de produto

**Arquivo:** `loop-produto-playbook.md`

O registro do **loop** — pedir, receber, conferir, corrigir, seguir — aplicado a cada trecho do processo. É o trabalho real com o Claude, com os prompts como foram escritos, e é o único documento do projeto que guarda o caminho, não só o resultado.

**Por que ele existe.** Dois motivos, e os dois cobram a mesma coisa. Primeiro: um portfólio não termina quando é publicado, e daqui a alguns meses eu vou querer acrescentar um case ou corrigir um texto sem reabrir o projeto inteiro. Segundo: é ele que responde "como você trabalha com IA" — o log registra decisões, e trabalhar com IA não é decisão, é procedimento.

**Os trechos previstos**, na ordem em que devem nascer: do contrato ao Figma · do Figma ao código · publicar · acrescentar um case novo · atualizar um texto.

O de **acrescentar um case novo** é o mais importante, porque é o que o escopo promete: um terceiro case precisa caber sem redesenhar nada. Se esse trecho ficar longo ou cheio de exceções, o site foi mal construído — e o playbook é quem denuncia.

**Não é escrito para o case.** Vale aqui a mesma regra do resto do projeto: se um trecho for redigido pensando em como vai ler no terceiro case, está errado. A prova de método é consequência, não finalidade — e só aparece se o documento for honesto, porque um playbook em que tudo funciona de primeira não impressiona ninguém que já trabalhou assim.

*Como escrever cada entrada, o que é prompt literal e o que a skill deve recusar estão no briefing da skill deste documento.*

### O que "escrito para busca" exige na prática

Estas convenções não são estilo, são o que faz a busca funcionar:

**Um nome só, nos três lugares.** O nome do frame no Figma, o título da entrada no contrato e o nome do componente no código são idênticos. Nome diferente em cada lugar quebra a busca no primeiro pulo.

**Cada entrada se explica sozinha.** Sem "como descrito acima", sem "igual ao anterior", sem regra que só faz sentido tendo lido o capítulo inteiro. Quem chega por busca entra no meio do documento, não pelo começo.

**Título de entrada sempre no mesmo formato**, para que a busca por nome de tela sempre acerte.

**Peça citada pelo nome, id na tabela.** No corpo do texto, os elementos são chamados em português. O id do Figma aparece uma vez só, na tabela de peças — assim a leitura continua humana e a máquina ainda resolve o endereço.

**Estados listados, não subentendidos.** Vazio, carregando, erro, foco, sobre, ativo, desabilitado — o que existir naquela tela aparece nomeado. Estado que não está escrito é estado que alguém vai inventar na hora de construir.

**Regras em frases afirmativas e verificáveis.** "A trilha marca a etapa cuja seção ocupa a maior parte da tela" serve; "a trilha deve se comportar bem" não serve, porque não dá para checar se foi cumprido.

**Proveniência marcada.** O que veio deste documento e o que foi decidido ao desenhar ficam distinguíveis, como nos cases anteriores. Quem lê precisa saber o que foi herdado e o que foi escolhido.

### O que mantém o contrato vivo

Documentação que não é verificada apodrece. Esta é verificável por construção, porque todas as âncoras já são endereçáveis por máquina. Três checagens, rodando junto com o resto:

1. **Todo endereço de Figma resolve** — arquivo existe, nó existe.
2. **Todo token citado existe** nas coleções de variáveis.
3. **Toda lacuna aponta para uma pergunta que existe** na lista de perguntas em aberto, e toda pergunta que trava aparece marcada onde trava.

Na fase de código entra a quarta: **todo comportamento descrito tem um teste que o cita pelo nome**. Um teste que falha dizendo o nome da regra em português diz o que quebrou para qualquer pessoa; um teste com nome genérico não diz nada — nem para mim, nem para o Claude que vai tentar consertar.

**O contrato é fonte, não registro.** Se a implementação divergir do que está escrito, é o contrato que precisa de decisão — não o contrário. Comportamento que mudou ao construir volta para o contrato antes de virar código definitivo.

## Método de construção

**O produto é desenhado inteiro no Figma antes de virar código.** Telas, estados, componentes e sistema visual existem lá primeiro, documentados no contrato de comportamento. O código vem depois, implementando o que já foi decidido — não decidindo enquanto constrói. É o mesmo método dos dois cases anteriores, e é o que permite que a etapa de código seja rápida e previsível em vez de virar o lugar onde o design acontece por acidente.

**Não existe fase de mobile.** Cada tela é desenhada nas duas larguras na mesma sessão, e só sai da mesa quando funciona nas duas — o mesmo vale na implementação. Adaptar depois é o caminho que produz um celular que parece um desktop espremido, e como quem faz triagem abre portfólio no celular, seria o pior lugar possível para deixar a dívida.

**No Figma, a largura de referência é o desktop; no código, o estilo base é o do celular.** Não é contradição: as decisões visuais se tomam melhor onde o layout tem espaço para existir — a hero grande, o título ao lado do texto, a trilha lateral —, e o código se escreve melhor de dentro para fora, acrescentando por consulta de mídia em vez de desfazer regra a regra. Cada tela desenhada carrega as duas versões, então a implementação não decide nada: só executa.

**Os dois temas nascem juntos.** Nenhum componente ganha o tema escuro depois. Toda cor vem das variáveis, que já têm os dois modos, então não fazer isso é escolher trabalhar duas vezes — e o escuro é onde os erros de contraste aparecem.

**Uma coisa inteira por vez.** Um domínio fechado — desenhado, documentado e, depois, implementado — vale mais que todos eles pela metade. O que estiver faltando fica visível em vez de ficar escondido em cinco telas incompletas.

**Desenhar e documentar acontecem juntos.** Tela que existe no Figma e não está no contrato é tela que ninguém vai achar na hora de construir. O contrato não é relatório do que foi feito: é o que define o que precisa ser verdade.

**O prompt é registrado quando é escrito.** Cada trecho do processo entra no playbook do loop com o pedido real, o que voltou e o que precisou ser corrigido — no momento, porque prompt não sobrevive à memória.

**Nada é dado como pronto sem ter sido visto.** Nas duas larguras, nos dois temas — e, na implementação, também percorrido pelo teclado. Vale para cada item, não só para o site no fim.

## Fases

**Fase 0 · Instrumentação.** Repositório, estrutura de pastas, arquivo de log com a convenção no topo, arquivo de perguntas em aberto, `loop-produto-playbook.md` criado vazio com a estrutura de uma entrada, e o contrato de comportamento criado vazio, com o índice de domínios já escrito. Nada de código.

**Fase 1 · Decidir antes de desenhar.** A frase da home. Stack e hospedagem, com alternativa e motivo registrados. Como o conteúdo em texto vira página, e como a estrutura recebe um segundo idioma depois sem ser refeita. O que fica visível na barra em tela estreita. Como os tokens do Figma entram no código — lidos das variáveis, com o nome preservado, em um único lugar de onde tudo o mais deriva.

**Fase 2 · Design system no Figma.** Componentes com variantes e estados, a partir das variáveis que já existem: barra, botão, card, item da trilha, bloco de destaque, bloco de mídia com legenda, campo de foco. Cada um documentado no contrato assim que fica pronto.

**Fase 3 · Telas no Figma.** Um domínio por vez, cada tela nas duas larguras e nos dois temas, com os estados que o domínio pedir. Documentadas no contrato junto com as regras de cada uma.

**Fase 4 · Código.** Implementar o que já está decidido — e nenhum domínio entra aqui com pergunta em aberto no caminho que vai ser implementado. O primeiro passo é publicar uma página vazia: o caminho até o deploy precisa funcionar antes de existir qualquer conteúdo, porque é o tipo de problema que não se quer descobrir no fim. Depois, um domínio por vez, na ordem em que foram desenhados.

**Fase 5 · Teste e correção.** Três ou quatro pessoas que recrutam ou lideram design, uma tarefa só, cronometrada: *"me diga em um minuto o que essa pessoa sabe fazer."* Mais a checagem técnica: carregamento no celular em rede móvel, teclado, contraste nos dois temas.

**Fase 6 · Publicar.** Domínio próprio, descrições de página, imagem de compartilhamento, link no LinkedIn e no currículo. E o playbook do loop fechado: a essa altura cada trecho do processo já foi percorrido ao menos uma vez.

**Depois.** A versão em inglês. O terceiro case, escrito a partir do log. E a rodada de pesquisa mais profunda no produto de Finanças.

## Riscos

**Escopo crescendo.** Portfólio é projeto que se expande para sempre, e cada item novo parece pequeno sozinho. A lista de escopo existe para essa conversa não ser reaberta a cada ideia.

**Polir em vez de publicar.** Site que não está no ar não é portfólio. A definição de pronto é o que decide quando parar — se um item não está nela, não segura a publicação.

**Documentação virando objetivo.** Se eu me pegar tomando decisão pensando em como ela vai ler no case, inverti a ordem.

**Conteúdo travando a construção.** Currículo, foto, imagens e capas não são acabamento: são dependência. Produzi-los cedo evita o site ficar pronto esperando conteúdo.

**Desenhar o site inteiro antes de publicar qualquer coisa.** É o custo de desenhar primeiro: nada fica no ar por um tempo longo, e um problema de implementação só aparece no fim. Duas coisas reduzem isso — o deploy é a primeira tarefa da fase de código, mesmo com a página vazia, e o design system vem antes das telas, para que a implementação encontre peças já resolvidas em vez de casos soltos.
