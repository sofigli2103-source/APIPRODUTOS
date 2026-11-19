const prisma = require('../../database/prisma'); // o PRISMA é o nosso banco

// Expõe os métodos do Prisma (findMany, create, update, delete, etc.)
const ProdutoModel = prisma.produto;

module.exports = ProdutoModel;
