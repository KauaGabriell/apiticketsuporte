# 🎟️ API Ticket Suporte

### Desafio Prático - Trilha Node.js (Rocketseat)

---

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Rocketseat](https://img.shields.io/badge/Formação-Node.js-8257E5?style=for-the-badge)

## 📝 Sobre o Projeto

Este projeto foi desenvolvido como parte de um desafio prático da **Rocketseat**. O objetivo principal é aplicar os conceitos fundamentais do Node.js, como a criação de uma API HTTP sem o uso de frameworks complexos, manipulação de streams e persistência de dados em arquivos locais.

A aplicação simula um sistema de **Help Desk**, onde é possível criar, listar, atualizar e remover chamados de suporte técnico.

---

## 🛠 Tech Stack

| Componente | Tecnologia | Papel no Projeto |
| :--- | :--- | :--- |
| **Runtime** | Node.js | Execução do código JavaScript no servidor. |
| **Framework** | Native Modules / Fastify | Gerenciamento de rotas e requisições HTTP. |
| **Persistência** | JSON File / Streams | Armazenamento de dados em arquivo local (`db.json`). |

---

## ✨ Funcionalidades

De acordo com a proposta do desafio, a API permite:

- [x] **Criação de Tickets**: Registro de chamados com título, descrição e prioridade.
- [x] **Listagem**: Recuperação de todos os tickets armazenados no banco local.
- [x] **Busca por Filtro**: Filtro simples através de *Query Parameters* (Título ou Descrição).
- [x] **Atualização (PUT)**: Alteração de dados de um ticket específico via ID.
- [x] **Remoção (DELETE)**: Exclusão de registros do banco.
- [x] **Status Update (PATCH)**: Marcar um ticket como concluído de forma atômica.

---

## 🚀 Instalação e Execução

### Pré-requisitos
* Node.js instalado (versão 18.x ou superior recomendada).
* NPM ou Yarn.

### Passo a Passo

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/KauaGabriell/apiticketsuporte.git](https://github.com/KauaGabriell/apiticketsuporte.git)
    cd apiticketsuporte
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```
    *O servidor iniciará por padrão na porta `3333`.*

---

## 💡 Endpoints Principais

| Método | Endpoint | Descrição |
| :--- | :--- | :--- |
| `GET` | `/tickets` | Lista todos os tickets (aceita `?search=`). |
| `POST` | `/tickets` | Cria um novo ticket. |
| `PUT` | `/tickets/:id` | Atualiza um ticket existente. |
| `DELETE` | `/tickets/:id` | Remove um ticket por ID. |
| `PATCH` | `/tickets/:id/complete` | Alterna o status de conclusão do ticket. |

---

## 📂 Estrutura do Repositório

```text
.
├── 📂 src/
│   ├── 📂 database/    # Gerenciamento da persistência (db.json)
│   ├── 📂 routes/      # Definição das rotas da aplicação
│   ├── 📂 utils/       # Helpers (extração de parâmetros, etc.)
│   └── server.js      # Inicialização do servidor HTTP
├── .gitignore
├── package.json
└── db.json            # Arquivo gerado para salvar os dados
