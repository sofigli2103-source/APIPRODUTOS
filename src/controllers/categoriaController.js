const CategoriaModel = require('../models/categoriaModel');

const categoriaController = {
    criarCategoria: async (req, res) => {
            try {
            const { codigo,descricao } = req.body;
            //validação simples dos campos obrigatórios
            if(!codigo || !descricao) { // dados a serem preenchidos mo postman (req.body)
                return res.status(400).json({
                    sucesso: false,
                    mensagem:" todos os campos (codigo,nome.qtde e preco) são obrigatórios!"
                });
            }

            //transformar e calcular dados
            const codigoConvertido = Number(codigo);
            const descricaoMaiuscula = String(descricao).toUpperCase();

        const novaCategoria = await CategoriaModel.create({
        data: { // json
          codigo: codigoConvertido,
          descricao: descricaoMaiuscula
        }
      });

      return res.status(201).json({sucesso: true, categoria: novaCategoria});
    }catch (error) {
      return res.status(500).json({sucesso: false,erro: error.message });
    }
    
  },

  listarCategoria: async (req, res) => {
    try {
      const categoria= await CategoriaModel.findMany();
      return res.status(200).json({sucesso: true, categoria});
    }catch (error) {
      return res.status(500).json({sucesso: false, erro: error.message});
    }
  }
};
      

module.exports = categoriaController;