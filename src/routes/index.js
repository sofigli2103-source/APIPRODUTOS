const express = require('express');
const router = express.Router();

// 1. Importa os ficheiros de rotas
const produtoRoutes = require('./produtoRoutes');
const usuarioRoutes = require('./usuarioRoutes');

// 2. Associa os prefixos usando o 'router.use'
router.use('/produtos', produtoRoutes);
router.use('/usuarios', usuarioRoutes);

module.exports = router;