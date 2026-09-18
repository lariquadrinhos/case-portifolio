# Spec visual

**Os valores não moram aqui.** Moram em variáveis no Figma, e é de lá que descem.
Duas listas do mesmo hexadecimal criariam a briga que este projeto existe para evitar.

> **Retrato de um sistema incompleto.** O design system ainda será construído no Figma,
> com todas as variáveis e componentes. O que está abaixo é o que existia em 18/09/2026 —
> vai crescer e pode mudar de nome. Não é especificação fechada.

O que este arquivo guarda é o **inventário de nomes** — o que o contrato pode citar, e o
que a checagem de CI 4 verifica.

**Arquivo:** <https://www.figma.com/design/hwClE9Xpm51OW4vPsCCn8J/?node-id=34-2>
· página **Sistema visual** · lido em 18/09/2026

---

## Coleção Cor · modos `Claro` e `Escuro`

Nomeados por papel, nunca por cor. **O escuro não é o claro invertido** — os dois modos
foram escolhidos e verificados em separado, e nenhum valor de um deriva do outro.

```
bg/page          bg/surface        bg/subtle
text/primary     text/secondary    text/tertiary
border
accent/roxo/{surface,strong}       accent/laranja/{surface,strong}
accent/verde/{surface,strong}      accent/rosa/{surface,strong}
accent/azul/{surface,strong}
```

Atribuição dos acentos, decidida uma vez e nunca no momento de montar a página:

| Papel | Acento |
|---|---|
| Sistema — foco, link, botão de contato, marca-texto da hero | roxo |
| Case de Finanças PF+PJ | azul |
| Case de Reembolso | laranja |
| Reservados para um terceiro case | verde, rosa |

## Coleção Tipografia · modos `Desktop` e `Tela pequena`

`family`, mais `size/*` e `line/*` para cada nível:

```
display    titulo-case    titulo-cap    subtitulo
abertura   corpo          apoio         etiqueta
```

Família: DM Sans, em toda a interface. **O nível se marca pelo tamanho, nunca pela cor.**
Em tela pequena a escala reduz pelo topo: títulos encolhem, corpo e apoio não, porque são
o piso de legibilidade.

## Coleção Espaço e forma

```
space/*           múltiplos de 4, de 4 a 128
radius/*
stroke/padrao
foco/largura      foco/afastamento
```

> **`@lacuna`** · Esta coleção **não tem frame de documentação na página Sistema visual**.
> Os frames vão de `00 · Princípios` a `06 · Demonstração`, cobrindo Neutros, Acentos nos
> dois temas e Tipografia. Os nomes acima vêm do documento de definições, não de leitura
> do arquivo — e portanto não estão confirmados contra a fonte.

---

## Como os nomes viram código

`/` vira `-`, e nada mais muda: `bg/page` → `--bg-page`, `accent/azul/strong` →
`--accent-azul-strong`. **O nome é preservado**, como as definições exigem.

Os dois modos de cada coleção viram os mesmos nomes com valores diferentes por contexto —
tema para Cor, largura de tela para Tipografia. É o que torna possível ter tokens nomeados
por papel funcionando nos dois temas sem duplicar nome.

## Frames da página, para referência

| Frame | id |
|---|---|
| Leia antes | `40:2` |
| 00 · Princípios | `34:3` |
| 01 · Neutros | `35:2` |
| 02 · Acentos, tema claro | `36:2` |
| 03 · Acentos, tema escuro | `37:2` |
| 04 · Tipografia | `37:45` |
| 05 · Demonstração, hero | `37:88` |
| 06 · Demonstração, leitura do case | `38:105` |

## Os frames 05 e 06 são demonstração

**Nada neles é fonte, nem texto nem estrutura.** Duas regras das definições cobrem isso:

- **Os textos são amostra.** Toda frase ali — hero, títulos, parágrafos, legendas — existe
  para testar tamanho, medida de linha e contraste. O conteúdo real vem dos arquivos de
  texto. Nenhuma palavra é copiada daqui para o código.
- **Demonstração não vira regra por estar desenhada.** Se uma demonstração contrariar uma
  regra escrita no documento, quem está errado é o desenho.

Divergência entre demonstração e documento, portanto, não é pergunta em aberto — é o
desenho a corrigir quando as telas forem feitas para valer.
