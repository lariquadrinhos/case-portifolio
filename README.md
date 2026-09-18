# Portfólio

Site estático de um arquivo só (`index.html`). Sem build, sem dependências.

## Editar

Abra `index.html` e troque os placeholders:

- `Seu Nome`, `Designer de Produto & Desenvolvedor`, textos de bio/sobre
- `SEU-USUARIO` nos links de GitHub e Figma, `SEU-PERFIL` no LinkedIn
- Foto: coloque `foto.jpg` na pasta e troque o `src` da tag `<img class="avatar">`
- Projetos: duplique um bloco `<a class="project">` para cada trabalho
- Cores: as variáveis no topo do `<style>` (`--accent` é a cor principal)

Tema claro/escuro é automático conforme o sistema do visitante.

## Ver localmente

    open index.html

## Publicar no GitHub Pages (grátis)

    git init && git add . && git commit -m "portfolio"
    gh repo create SEU-USUARIO.github.io --public --source=. --push

Depois: Settings → Pages → Source: `Deploy from a branch` → `main` / `root`.

Fica no ar em `https://SEU-USUARIO.github.io` em ~1 minuto.
Para atualizar, basta `git commit` + `git push`.

> Se usar o nome `SEU-USUARIO.github.io`, a URL é a raiz do domínio.
> Com outro nome de repo, vira `https://SEU-USUARIO.github.io/nome-do-repo`.
