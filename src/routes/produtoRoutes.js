const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');


// rota HOST
// produtos/novo
router.post('/novo',produtoController.criarProduto);
router.get('/listar',produtoController.listarProdutos);


module.exports= router;

