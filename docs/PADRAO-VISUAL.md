# Padrão visual — Move Pilates & Bem-estar

As telas do site usam o mesmo padrão escolhido para a Home:

- **Azul principal** `#006ae6` (`--blue`) para ações importantes, ícones e detalhes.
- **Branco** e **cinza muito claro** para fundo, cartões e áreas secundárias.
- **Texto escuro** `#202731` para títulos; texto secundário `#5f6878` para orientações.
- **Logotipo vetorial original** em `assets/logo-move.svg` no cabeçalho, Login, Cadastro e Contato.
- **Fonte:** Inter quando disponível, Segoe UI / Arial como alternativas locais, sem exigir conexão com serviço de fontes.
- **Componentes:** `.btn-main`, `.btn-outline`, `.btn-danger`, `.form-field`, `.booking-card`, `.move-dialog`.
- **Responsividade:** telas se ajustam para desktop e celular e preservam rótulos legíveis.

`styles.css` contém a identidade visual da Home e os tokens. `app.css` estende o padrão às telas internas sem substituir o desenho da Home. Evite inserir cores novas diretamente em cada página; reutilize as variáveis e classes.
