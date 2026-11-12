const express = require('express');
const router = express.Router();
const produtoController = require ('../controllers/produtoController') // o ../ é usado para sair de uma pasta

// rota HOST
// produtos/novo
router.post('/',produtoController.criarProduto);

module.exports= router;

