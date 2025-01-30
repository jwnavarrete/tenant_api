## Documentação da API

News-API é uma API RESTful desenvolvida utilizando Node.js, Express, Prisma e um banco de dados PostgreSQL. A API permite o cadastro de usuários, do tipo administrador ou padrão, a criação e listagem de notícias, com tags personalizadas, e a criação de comentários nas notícias.

Este repositório contém o código-fonte e os Endpoints das rotas.

## Tabela de Conteúdos

- [Visão Geral](#1-visão-geral)
- [Diagrama ER](#2-diagrama-er)
- [Início Rápido](#3-início-rápido)
    - [Instalando Dependências](#31-instalando-dependências)
    - [Variáveis de Ambiente](#32-variáveis-de-ambiente)
    - [Migrations](#33-migrations)
    - [Rodando a API](#34-rodando-a-api)
- [Estrutura da API](#4-estrutura-da-api)

---

## 1. Visão Geral
Visão geral do projeto, um pouco das tecnologias usadas.

- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [Prisma](https://www.prisma.io/)
- [Zod](https://zod.dev/)

URL base da aplicação: http://localhost:3000

---

## 2. Diagrama ER
Diagrama ER da API definindo bem as relações entre as tabelas do banco de dados.

![Diagrama do projeto com suas relações!](https://i.ibb.co/3TBQMVR/Diagram-news-Api-drawio.png "InSync-Diragrama")

---

## 3. Início rápido
[ Voltar para o topo ](#documentação-da-api)

### 3.1. Instalando dependências

Clone o projeto em sua máquina e instale as dependências com o comando:

```
yarn install ou yarn
```

Utilizando npm

```
npm install
```

### 3.2. Variáveis de Ambiente
Em seguida, crie um arquivo **.env**, copiando o formato do arquivo **.env.example**:

```
cp .env.example .env
```

Configure suas variáveis de ambiente com suas credenciais do Postgres e uma nova database da sua escolha.

### 3.3. Migrations

Execute as migrations com o comando:

```
npx prisma migrate dev --name init
```

### 3.4. Rodando a API

Para rodar a API localmente use o comando:

```
yarn run dev
```

Utilizando npm

```
npm run dev
```

## 4. Estrutura da API

[ Voltar para o topo ](#tabela-de-conteúdos)

É possivel acessar a documentação da API criada com Swagger pelo link abaixo:

[News-API-Documentação](https://app.swaggerhub.com/apis-docs/NETOIFPE/newsApi/1.0.0#/)

Outra forma de acessar a documentação da API é através do link local, quando a API está em execução:

[News-API-Documentação-local](http://localhost:3000/api-docs/)

Essa documentação descreve os recusos que a API possuí, como Endpoints, exemplos de requisição, exemplos de retorno e metodos de autenticação

## Autor

- [@Antonio](https://github.com/AntonioSantosBJPE)
