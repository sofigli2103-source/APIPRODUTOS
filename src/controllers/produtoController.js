const produtoModel = require ('../models/produtoModel');

const produtoController = {
    criarProduto: async (req, res) => {
            const { codigo,nome,quantidade, preco} = req.body;
            //validação simples dos campos obrigatórios
            if(!codigo || !nome ||!quantidade ||!preco){ // dados a serem preenchidos mo postman (req.body)
                return res.status(400).json({
                    sucesso: false,
                    mensagem:" todos os campos (codigo,nome.qtde e preco) são obrigatórios!"
                })
            }

            //transformar e calcular dados
            const nomeMaiusculo = String(nome).toUpperCase();
            const qtde = Number(quantidade);
            const valorPreco = Number(preco);
            const valorTotal = quantidade * valorPreco;

        const novoProduto = await produtoModel.create({
        data: { //json
        codigo,
        nome: nomeMaiusculo,
        quantidade: qtde,
        preco: valorPreco,
        total: valorTotal
        }
        });
    

    


    // retorna a resposta  HTTP 201 (created)

    return res.status(201).json({
        sucesso: true,
        mensagem: "produto cadastrado com sucesso  no MySQL!",
        produto : novoProduto
    })
},
        
            listarProdutos: async (req, res) =>{
                try {
                const produtos = await produtoModel.findMany();
                return res.json({
                    sucesso : true,
                    total: produtos.length,
                    produtos
            })

        } catch (error) { 
            return res.status(500).json({sucesso: false,erro: error.message})
        }
        }
};
                     
        
module.exports=produtoController;

                      
    




    

        
        
