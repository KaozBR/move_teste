# Roteiro para testar e apresentar o Move na AS

Execute a Home pelo Live Server do Visual Studio Code. Use dados fictícios.

## Fluxo 1 — Cadastro e Login de aluno

1. Na Home, clique em **Entrar** e depois em **Cadastre-se**.
2. Crie uma conta fictícia com nome, e-mail e senha.
3. Confira a mensagem **Conta criada com sucesso**.
4. Clique em **Ir para login**, digite as credenciais cadastradas e entre.
5. A página **Minha agenda** deverá mostrar o nome cadastrado.
6. Experimente usar uma senha diferente no cadastro, um e-mail já cadastrado e uma senha inválida no login: aparecem mensagens de erro.

## Fluxo 2 — Agendamento, alteração e cancelamento pelo aluno

1. Entre com uma conta de aluno.
2. Clique em **Agendar aula**.
3. Escolha uma data futura (preferencialmente dois ou mais dias à frente) e um horário disponível.
4. Clique em **Confirmar agendamento** e confira o cartão da nova aula.
5. No cartão, clique em **Alterar** e selecione outro horário.
6. No mesmo cartão, clique em **Cancelar**, depois **Confirmar cancelamento**.
7. Teste uma data nas próximas 24 horas: ela não poderá ser agendada, alterada ou cancelada pelo aluno.
8. Confira também os botões **Voltar para agenda**: eles devem fechar a janela sem efetivar a operação.

## Fluxo 3 — Administradora

1. Clique em **Sair** no aluno e confirme a saída.
2. Entre com `admin@move.com.br` / `Move@2026`.
3. Na área de administração, escolha uma data e veja horários livres e reservados.
4. Clique em **Definir horários**, selecione quais horários estarão disponíveis e salve.
5. Clique em **Agendar para aluno**, escolha um aluno, data e horário e salve.
6. Altere e cancele o agendamento usando os botões visíveis na linha.
7. Tente retirar um horário já reservado: o sistema impede e exibe a explicação.
8. A administradora pode editar aulas sem a regra de antecedência de 24 horas aplicada ao aluno, mas não pode agendar no passado.

## Fluxo 4 — Contato

1. Na Home, clique em **Contato** ou **Fale conosco**.
2. Preencha nome, e-mail e mensagem.
3. Escolha um modo de retorno: **WhatsApp**, **E-mail** ou **Ligação**.
4. Escolha um assunto: **Elogios**, **Reclamações**, **Dúvidas** ou **Aula de pilates**.
5. Clique em **Enviar mensagem** e confira a confirmação.
6. Entre na área administrativa para ver a mensagem registrada em **Mensagens recebidas**.
7. Isso é somente uma simulação local — nenhum e-mail ou WhatsApp real é enviado.

## Evidências para o trabalho

- Capturas de tela de cada fluxo e dos estados de erro.
- Vídeo com navegação ao vivo pelo site.
- Commits ou Pull Requests no GitHub de cada integrante que realmente editou o código.
- Link do repositório e, se publicado, da demonstração pelo GitHub Pages.
- Registros individuais preenchidos em `docs/EVIDENCIAS.md`.

**Nota:** mesmo com o front-end funcionando, os dados ficam no navegador usado para os testes. Se um integrante abrir o site em outro computador, ele verá sua própria cópia dos dados iniciais.
