<h1 algin='center'>Projeto 1: teste back-end Cowala, Lista de mercado</h1>

  <p>Projeto de criação de CRUD, desenvolvido com NodeJS, usando express, e mongoose para modelar e conectar ao banco de dados mongoDB, também foi usado uma lib 'node-fetch' para uso do fetch, na chamada que tinha de ser feita a uma API externa e realizar a conversão do valor inserido.</p>

<h3>Para iniciar a aplicação</h3>

  <p>Primeiro é necessário fazer o clone do repositório e abrir o terminal no diretório do back-end(desafios-logic-frontend-backend/be-lista-conversao/) para instalação das dependências:</p>

  <code>yarn</code>

  ou

  <code>npm install</code>

  <p>Após a instalação das dependências, ainda no terminal do diretório do back-end(desafios-logic-frontend-backend/be-lista-conversao/) iniciar o script:</p>

  <code>yarn dev</code>

  ou

  <code>npm run dev</code>

<h3>Usando a API</h3>

  <p>A API irá rodar em http://localhost:8080/ , todas os endpoints podem ser encontrados no arquivo routes.js</p>
  <p>CREATE: method: 'POST', para 'http://localhost:8080/valores'</p>
  <p>UPDATE: method: 'PUT', para 'http://localhost:8080/valores/:id'</p>
  <p>READ-ALL: method: 'GET', para 'http://localhost:8080/valores'</p>
  <p>READ-ONE: method: 'GET', para 'http://localhost:8080/valores/:id'</p>
  <p>DELETE: method: 'DELETE', para 'http://localhost:8080/valores/:id'</p>
  <p>Para inserir informação como objeto json. Será enviado um valor que será convertido de acordo com a cotação da API, de real pra dólar.</p>
  <p>Entrada:</p>
  <code>{
    "valorEnviado": 200
  }</code>
  <p>Resposta:</p>
  <code>{
    "moedaOriginal": "BRL",
    "moedaDaConversao": "USD",
    "valorEnviado": 200,
    "valorConvertido": "36.64"
  }</code>

<h4>Sobre mongoBD</h4>

  <p>Foi criada uma conta genérica no mongoDB para uso do banco de dados juntamente com mongoose para gerenciamento de model e bd. As configurações de conexão já se encontram no arquivo .env, então não é preciso nenhuma configuração de BD. O id é gerado automaticamente pelo mongoDB, não precisando usar nenhuma lib pra gerar um hash.</p>

<h4>🛠 Tecnologias</h4>

As seguintes ferramentas foram usadas na construção do projeto:

<img src='https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E' />
<img src='https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white' />
<img src='https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white' />
<img src='https://img.shields.io/badge/MongoDB-white?style=for-the-badge&logo=mongodb&logoColor=4EA94B' />
