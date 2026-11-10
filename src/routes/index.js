const express = require('express');
const router = express.Router();


const produtoRoutes = require('./produtoRoutes');

// associa o prefixo /produtos ao arquivo routes
produtoRoutes.use ('./produtos',produtoRoutes);


module.exports = router;
