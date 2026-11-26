const express = require('express');
const router = express.Router();
const categoriaController= require ('../controllers/categoriaController');

router.post('/novo', categoriaController.criarCategoria);
router.get('/listar', categoriaController.listarCategoria);
router.put('/:codigo', categoriaController.atualizarCategoria);
router.delete('/:codigo', categoriaController.deletarCategoria);
router.put('/atualizar/:id', categoriaController.atualizarCategoria);
router.delete('/excluir/:id', categoriaController.deletarCategoria);
 


module.exports = router;