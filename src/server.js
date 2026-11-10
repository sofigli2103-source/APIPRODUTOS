require('dotenv').config();
const express = require('express');
const routes = require('./routes') // importa automaticamente o routes/index.js

const app = express();

 app.use(express.json());
// importa todas as rotas principais da api
 app.use(routes);

 const PORT = process.env.PORT;
 app.listen(PORT, () => {
    console.log (`servidor rodando na porta ${PORT}`) //console serve para aparecer uma mensagem quando rodar o seridor
 })
 