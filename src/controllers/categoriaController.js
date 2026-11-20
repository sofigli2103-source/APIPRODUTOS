const CategoriaModelController = {
    criarCategoria: async (req, res) => {
            const { codigo,descricao } = req.body;
            //validação simples dos campos obrigatórios
            if(!codigo || !descricao){ // dados a serem preenchidos mo postman (req.body)
                return res.status(400).json({
                    sucesso: false,
                    mensagem:" todos os campos (codigo,nome.qtde e preco) são obrigatórios!"
                })
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
    }
};
      

module.exports = categoriaController;