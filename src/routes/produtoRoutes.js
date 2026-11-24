const express = require('express');
const router = express.Router();
const produtoController = require ('../controllers/produtoController') // o ../ é usado para sair de uma pasta


// rota HOST
// produtos/novo
router.post('/novo',produtoController.criarProduto);
router.get('/listar',produtoController.listarProdutos);
router.put('/atualizar/:codigo', produtoController.atualizarProduto);
router.delete('/excluir/:codigo', produtoController.deletarProduto);

module.exports= router;

