# Passo a passo: começar a usar a Move no GitHub

## 1. Instalar o que precisa

- **Visual Studio Code**: editor usado para alterar HTML, CSS e JavaScript — https://code.visualstudio.com/
- **GitHub Desktop**: aplicativo que registra e envia alterações sem comandos de terminal — https://desktop.github.com/
- **Conta GitHub de cada integrante**: https://github.com/
- Opcional no VS Code: extensão **Live Server**, para abrir o site e recarregar as alterações.

## 2. Criar o repositório a partir desta pasta

1. Descompacte o ZIP `Move_AS_Site_Funcional_GitHub.zip` no computador.
2. Abra **GitHub Desktop** e faça login na sua conta.
3. Use **File → Add Local Repository...** e escolha a pasta extraída (`Move_AS_Completo`, que contém `index.html`).
4. Como esta pasta não tem um repositório Git ainda, o programa pode oferecer **Create a Repository Here**. Aceite e crie o repositório (nome sugerido: `move-pilates-as`).
5. Confirme que o projeto aparece no GitHub Desktop. Faça o primeiro commit **apenas do que foi realmente importado**, por exemplo `chore: adicionar protótipo funcional Move para AS`.
6. Clique em **Publish repository** para enviar ao GitHub. Escolha público ou privado conforme a orientação da professora e do grupo.

**Outra forma:** crie primeiro o repositório vazio no site do GitHub, clone pelo Desktop e copie os arquivos para dentro dessa pasta clonada. Evite criar dois repositórios sobrepostos.

## 3. Adicionar o grupo

No site do GitHub, abra o repositório e vá em **Settings → Collaborators / Collaborators and teams**. Convide os integrantes usando seus próprios perfis. Eles devem aceitar o convite.

Depois, cada integrante usa **File → Clone Repository** no GitHub Desktop para copiar o projeto no próprio computador.

## 4. Como cada pessoa registra o que fez

1. **Pull origin** para atualizar a cópia local.
2. Crie uma branch da sua tarefa no GitHub Desktop.
3. Abra a pasta no VS Code e altere seus arquivos.
4. Teste no navegador (com Live Server, por exemplo).
5. Volte ao Desktop, veja os arquivos em **Changes**, e faça **Commit to sua-branch** com descrição do trabalho.
6. Clique **Push origin** e abra um **Pull Request** no GitHub para revisão.
7. Registre o link do PR/commit em `docs/EVIDENCIAS.md` e salve a captura relevante no projeto, se solicitada.

Cada commit tem data, conta e mudanças registradas. **A evidência deve corresponder ao trabalho real**, não apenas ao nome num commit. PRs, comentários, histórico de alterações, prints e links dos frames ajudam a comprovar as contribuições.

## 5. Para mostrar o site para a professora (opcional)

O código poderá ser publicado pelo **GitHub Pages** se o plano, a visibilidade do repositório e as configurações permitirem:

1. Abra **Settings → Pages**.
2. Em **Build and deployment**, selecione **Deploy from a branch**.
3. Escolha `main` e a pasta `/(root)`, depois salve.
4. Aguarde a geração do endereço público e teste a Home.

O site usa caminhos relativos, e o arquivo inicial é `index.html`. **Login, Cadastro, Contato, Aluno e Administrador já estão incluídos.** O GitHub Pages permite visualizar o protótipo de cada navegador, mas não sincroniza cadastros nem agendamentos entre usuários: os dados ficam em `localStorage`.

## 6. Comandos úteis (opcionais)

Se preferir usar o terminal, após criar/clonar o repositório:

```bash
git status
git switch -c feature/minha-tarefa
git add .
git commit -m "feat: descrever a melhoria realizada"
git push -u origin feature/minha-tarefa
```

Use o GitHub Desktop se ainda não estiver à vontade com terminal.
