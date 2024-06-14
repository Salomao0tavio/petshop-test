# Instruções para Executar a Aplicação

## Pré-requisitos

Antes de iniciar, certifique-se de ter instalado em sua máquina:

- Docker: [Docker Desktop](https://www.docker.com/products/docker-desktop)
- Node.js: [Node.js](https://nodejs.org/)
- npm (Node Package Manager) ou yarn: [npm](https://www.npmjs.com/) / [yarn](https://yarnpkg.com/)

## Passos para Configurar e Executar a Aplicação

### 1. Configuração do Backend (API com Docker e Banco de Dados)

1. Clone o repositório da aplicação:

   ```bash
   git clone https://github.com/Salomao0tavio/petshop-test.git
   cd petshop-test
   ```

2. Navegue até o diretório do backend:

   ```bash
   cd petshop_API
   ```

3. Execute o Docker Compose para iniciar o ambiente de desenvolvimento:

   ```bash
   docker compose up
   ```

   Isso irá iniciar os containers do Docker para o backend (API e banco de dados).

### 2. Configuração do Frontend (Node.js)

1. Abra um novo terminal e navegue até o diretório do frontend:

   ```bash
   cd petshop
   ```

2. Instale as dependências do projeto utilizando npm ou yarn:

   Com npm:

   ```bash
   npm install
   ```

   Ou com yarn:

   ```bash
   yarn install
   ```

3. Após a instalação das dependências, inicie o servidor de desenvolvimento:

   Com npm:

   ```bash
   npm start
   ```

   Ou com yarn:

   ```bash
   yarn start
   ```

### 3. Acessando a Aplicação

- O frontend estará disponível em http://localhost:4173.
- A API estará disponível no host local (localhost) na porta especificada no Docker Compose (por exemplo, [http://localhost:8080](http://localhost:8080)).
- Para acessar a Documentação da API, acesse http://localhost:8080/swagger/index.html

### 4. Parando e Removendo os Containers Docker

Caso deseje parar e remover os containers Docker do backend:

```bash
docker compose down
```

Isso irá parar e remover os containers do backend, mas os dados do banco de dados serão mantidos no volume Docker configurado.

---