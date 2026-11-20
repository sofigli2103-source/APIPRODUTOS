const express = require('express');
const router = express.Router();
const categoriaController= require ('../controllers/categoriaController')

router.post('/novo', categoriaController.criarCategoria);
router.get('/listar', categoriaController.listarCategorias);

module.exports = router;