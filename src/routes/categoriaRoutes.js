const express = require('express');
const router = express.Router();
const categoriaController= require ('../controllers/categoriaController');

router.post('/novo', categoriaController.criarCategoria);
router.get('/listar', categoriaController.listarCategoria);
router.put('/:codigo', categoriaController.atualizarCategoria);
router.delete('/:codigo', categoriaController.deletarCategoria);
router.put('/atualizar/:codigo', categoriaController.atualizarCategoria);
router.delete('/excluir/:codigo', categoriaController.deletarCategoria);
 


module.exports = router;