const prisma = require('../../database/prisma'); // o PRISMA é o nosso banco[cite: 2]

// Expõe os métodos do Prisma (findMany, create, update, delete, etc.)[cite: 2]
const CategoriaModel = prisma.categoria;

module.exports = CategoriaModel;