const express = require('express');
const router = express.Router();
const categoriaController= require ('../controllers/categoriaController');

router.post('/novo', categoriaController.criarCategoria);
router.get('/listar', categoriaController.listarCategoria);
router.put('/atualizar/:codigo', categoriaController.atualizarCategoria);
router.delete('/excluir/:codigo', categoriaController.deletarcategoria);


module.exports = router;