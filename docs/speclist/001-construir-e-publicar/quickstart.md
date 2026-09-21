# Como rodar

**Feature**: Do arquivo de texto à página no ar

## Uma vez

```bash
node --version    # precisa ser 18.20.8 ou maior
```

Nada para instalar. A construção não tem dependência nenhuma (decisões 009 e 022).

## No dia a dia

```bash
node construcao/construir.mjs          # modo local
```

Gera o site em `site/`. **Peça que falta aparece visível na página**, nomeada, para você ver
enquanto trabalha. A primeira linha da saída diz em que modo está.

Abra `site/index.html` no navegador. Não há servidor de desenvolvimento — foi custo aceito na
decisão 009; recarregue à mão.

## Antes de publicar

```bash
node construcao/construir.mjs --publicar    # modo de publicação
node scripts/checagens.mjs                  # contratos, lacunas, tokens, convenção
node --test testes/                         # cada cenário do contrato, pelo nome
```

No modo de publicação, **qualquer peça faltando interrompe a construção e nada sobe**. É o
oposto do modo local, de propósito.

## Publicar

Enviar ao repositório. A automação constrói e publica. Se a construção falhar, nada é
publicado e a versão anterior continua no ar.

## Quando alguma coisa quebra

| Sintoma | Onde olhar |
|---|---|
| Marcador recusado | O erro diz arquivo, linha e marcador. Vocabulário em `docs/comportamento/conteudo/` |
| Página sem um pedaço | Alguma seção ficou marcada `<!-- privado -->` |
| Etapa fora de ordem na trilha | A ordem vem dos marcadores no arquivo do case, e de mais lugar nenhum |
| Teste falhando com nome em português | O nome é o do cenário. Procure-o no contrato do domínio |
