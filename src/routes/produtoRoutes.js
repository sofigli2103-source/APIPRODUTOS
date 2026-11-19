const express = require('express');
const router = express.Router();
const produtoController = require ('../controllers/produtoController') // o ../ é usado para sair de uma pasta

// rota HOST
// produtos/novo
router.post('/novo',produtoController.criarProduto);
router.get('/listar',produtoController.listarProdutos);

module.exports= router;

