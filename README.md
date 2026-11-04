# MOVE – Pilates & Bem-estar | AS (front-end funcional)

Projeto acadêmico do Grupo 06. Implementação em **HTML, CSS, JavaScript, Bootstrap e JSON**, a partir da Home de alta fidelidade do Move. O código é um **protótipo funcional no navegador**, sem servidor de autenticação e sem banco de dados compartilhado.

## 1. Como abrir no Visual Studio Code

1. Baixe e extraia o ZIP `Move_AS_Site_Funcional_GitHub.zip`.
2. Abra a pasta **Move_AS_Completo** no **Visual Studio Code**: **Arquivo > Abrir Pasta**.
3. Instale a extensão **Live Server** (Ritwick Dey) no VS Code.
4. Abra `index.html` e clique com o botão direito em **Open with Live Server** (ou no botão **Go Live**).
5. A Home abrirá no navegador, geralmente em `http://127.0.0.1:5500/index.html`.

**Alternativa sem extensão:** abra o terminal integrado na pasta e execute `python -m http.server 5500`. Depois acesse `http://localhost:5500`.

**Não é necessário instalar Node.js, banco de dados nem executar `npm install` para usar o site.** Node.js é opcional somente para executar os testes automatizados.

## 2. Páginas prontas

| Arquivo | O que faz |
|---|---|
| `index.html` | Home original: fotos, benefícios do Pilates, mapa e localização; leva a Login e Contato. |
| `cadastro.html` | Criação de conta de aluno, validação, confirmação de cadastro. |
| `login.html` | Login de aluno e administrador, com mensagens de erro. |
| `aluno.html` | Consulta, agendamento, alteração e cancelamento de aulas. |
| `admin.html` | Consulta de agenda, horários disponíveis, agendamento para aluno, alteração, cancelamento e mensagens recebidas. |
| `contato.html` | Formulário com assunto e modo de retorno, como no Figma. |
| `saida.html` | Confirmação visual de encerramento da sessão. |

O cabeçalho e a identidade visual seguem a Home: **branco/cinza, azul de destaque, logotipo vetorial e tipografia consistente**. O site se adapta a desktop e celular.

## 3. Contas fictícias para testar

As duas contas de exemplo são criadas automaticamente na primeira execução. No Login, clique em **Contas para testar o protótipo** para ver as credenciais.

- **Aluno:** `aluno@move.com.br` — senha: `Move@2026`
- **Administradora:** `admin@move.com.br` — senha: `Move@2026`

Qualquer novo cadastro cria um **aluno**. Depois de se cadastrar, volte ao Login, entre com o e-mail e a senha e acesse a área do aluno. Os dados iniciais públicos ficam em `data/dados-iniciais.json`. As senhas fictícias das contas de teste são definidas no código, **não** no JSON.

## 4. O que funciona

- Cadastro com nome obrigatório (até 100 caracteres), e-mail válido, senha de ao menos 8 caracteres, confirmação de senha e erro para e-mail repetido.
- Login com mensagem genérica para credenciais incorretas e redirecionamento conforme perfil.
- Aluno: consultar aulas, agendar, alterar e cancelar, com avisos de sucesso e erro; ações visíveis nos cartões.
- Administradora: consultar por data, definir horários, agendar para um aluno, alterar e cancelar sem a limitação de 24 horas aplicada ao aluno (mas sem agendar no passado).
- Conflito de horário ocupado: o sistema impede reservar duas aulas para o mesmo dia e horário.
- Regra de antecedência: aluno não pode criar, alterar nem cancelar uma aula dentro das 24 horas anteriores a ela.
- Contato: selecionar **WhatsApp, E-mail ou Ligação** e **Elogios, Reclamações, Dúvidas ou Aula de pilates**; salvar mensagem simulada e visualizá-la na área administrativa.
- Cancelar, voltar e sair: botões com comportamento implementado.

## 5. Onde o sistema guarda os dados?

Este projeto **não possui back-end real**. Os dados são simulados:

- `data/dados-iniciais.json`: contas fictícias (sem senhas) e horários-padrão para criar a demonstração.
- `localStorage`: armazena os cadastros, horários, aulas e mensagens **em JSON**, no navegador onde você abriu o site.
- `sessionStorage`: identifica a sessão simulada na aba atual do navegador.

**Limitações importantes:** os dados **não** são compartilhados entre computadores ou navegadores. O formulário de contato **não envia e-mail, WhatsApp nem ligação real**. O login e a proteção de acesso são apenas simulações de front-end, não oferecem segurança para usuários reais. Nunca coloque senhas reais ou dados pessoais no protótipo.

Para recomeçar a demonstração do zero, abra o DevTools do navegador na página, vá em **Application > Storage** e limpe os dados do site; ou execute `MoveStore.resetDemo()` no Console e atualize a página. Isso apaga os dados fictícios criados nesse navegador.

## 6. Como testar os fluxos

Veja o roteiro completo em [`docs/TESTES-AS.md`](docs/TESTES-AS.md). O comando de teste de regras de negócio, se tiver Node.js instalado, é:

```bash
node tests/test_store.cjs
```

## 7. Como publicar no GitHub e registrar contribuições

1. Crie um repositório para o Grupo 06 no [GitHub](https://github.com) e convide todos os integrantes em **Settings > Collaborators**.
2. Abra o projeto no **GitHub Desktop** ou use o terminal do VS Code.
3. Cada integrante modifica arquivos com sua própria conta e faz commits com mensagens específicas, por exemplo `feat: validar erro de e-mail duplicado no cadastro`.
4. Prefira usar uma branch por tarefa e abrir um **Pull Request**, com print e explicação do que mudou.
5. Registre link do commit/PR e evidência no arquivo [`docs/EVIDENCIAS.md`](docs/EVIDENCIAS.md).

**Commits são evidências de trabalho feito naquele momento.** Não atribuam retroativamente a alguém alterações feitas por outra pessoa ou com auxílio de IA.

A Home é a referência visual do grupo. Mudanças de cores ou estrutura devem ser discutidas e reaproveitadas em todas as telas. Use `styles.css` e `app.css` para manter um design consistente.

## 8. Estrutura do projeto

```text
Move_AS_Completo/
├── index.html                 Home
├── cadastro.html              Cadastro de aluno
├── login.html                 Autenticação demonstrativa
├── aluno.html                 Agenda do aluno
├── admin.html                 Agenda da administradora
├── contato.html               Formulário de contato
├── saida.html                 Confirmação de saída
├── styles.css                 Estilo visual original da Home
├── app.css                    Componentes e telas internas
├── script.js                  Menu mobile e rodapé
├── store.js                   Dados JSON + regras de negócio simuladas
├── app.js                     Interações das páginas
├── assets/                    Fotos, logotipo, mapa e Bootstrap local
├── data/dados-iniciais.json    Dados fictícios para iniciar a agenda
├── tests/test_store.cjs        Testes das validações e agendamentos
├── docs/TESTES-AS.md           Roteiro de testes para a entrega
├── docs/EVIDENCIAS.md          Ficha de contribuições verificáveis
└── README.md
```

## Próxima etapa para um sistema real

A AS exige um **front-end**, então este pacote demonstra os fluxos. Para permitir contas reais e que alunos e administradora compartilhem a mesma agenda pela internet, seria necessário adicionar um servidor, autenticação segura, banco de dados e uma API. Isso **não está implementado aqui**.
