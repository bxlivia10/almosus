Projeto AlmoSus - Gerenciamento de Kits

Este repositório contém o código-fonte do projeto de gerenciamento de kits, focado nas interfaces de Estabelecimento e Cliente.

🚀 Estrutura do Projeto

O projeto segue uma estrutura de arquivos simples e organizada:

Plain Text


/
├── .gitignore          # Arquivos a serem ignorados pelo Git
├── README.md           # Documentação principal do projeto
├── LICENSE             # Licença de uso do código
├── /css                # Arquivos de estilização (CSS)
│   ├── global.css      # Estilos globais (botões, fontes, resets)
│   ├── estabelecimento.css # Estilos específicos da tela de Estabelecimento
│   ├── cliente.css     # Estilos específicos da tela de Cliente
│   └── modal-kits.css  # Estilos para o modal e cards de kits
├── /js                 # Arquivos de lógica (JavaScript)
│   ├── estabelecimento.js # Lógica da tela de Estabelecimento (Adicionar Kits)
│   └── cliente.js      # Lógica da tela de Cliente
└── /pages              # Arquivos HTML
    ├── estabelecimento.html
    └── cliente.html


🛠️ Tecnologias Utilizadas

•
HTML5: Estrutura das páginas.

•
CSS3: Estilização e layout (incluindo Flexbox/Grid para os cards).

•
JavaScript (Vanilla JS): Lógica de front-end (manipulação de DOM, localStorage para persistência de dados).

📋 Fluxo de Trabalho (Trello)

O desenvolvimento do projeto é gerenciado através de um quadro Kanban no Trello, seguindo o fluxo de trabalho abaixo:

Coluna
Descrição
Backlog
Ideias, requisitos e funcionalidades futuras.
A Fazer
Tarefas prontas para serem iniciadas.
Em Desenvolvimento
Tarefas que estão sendo codificadas ou implementadas.
Em Teste (QA)
Tarefas que passaram pela codificação e estão prontas para serem testadas.
Pronto para Deploy
Tarefas que passaram nos testes e estão prontas para serem lançadas.
Concluído
Tarefas que foram lançadas e estão em produção.


Instruções de Uso:

1.
Crie um cartão para cada funcionalidade ou correção.

2.
Mova o cartão entre as colunas conforme o progresso do desenvolvimento.

⚙️ Como Executar o Projeto

1.
Clone o repositório:

2.
Navegue até a pasta do projeto:

3.
Abra os arquivos HTML: Abra pages/estabelecimento.html ou pages/cliente.html diretamente no seu navegador ou use uma extensão de servidor local (como o Live Server no VS Code).

🤝 Contribuição

Sinta-se à vontade para sugerir melhorias e reportar bugs.

