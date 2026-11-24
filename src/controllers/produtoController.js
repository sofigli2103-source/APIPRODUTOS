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
            });

        } catch (error) { 
            return res.status(500).json({
                sucesso: false,
                erro: error.message
            });
        
        }
},

atualizarProduto: async (req, res) => {
    try {
        
        const { codigo } = req.params; 
        const { nome, quantidade, preco } = req.body;

       
        if (!nome || !quantidade || !preco) {
            return res.status(400).json({
                sucesso: false,
                mensagem: "Todos os campos (nome, quantidade e preco) são obrigatórios!"
            });
        }

        const nomeMaiusculo = String(nome).toUpperCase();
        const qtde = Number(quantidade);
        const valorPreco = Number(preco);
        const valorTotal = qtde * valorPreco;

        const produtoAtualizado = await produtoModel.update({
            where: {
               
                codigo: Number(codigo) 
            },
            data: {
                nome: nomeMaiusculo,
                quantidade: qtde,
                preco: valorPreco,
                total: valorTotal
            }
        });

        return res.status(200).json({
            sucesso: true,
            mensagem: "Produto atualizado com sucesso!",
            produto: produtoAtualizado
        });
    } catch (error) {
        return res.status(500).json({
            sucesso: false,
            erro: error.message
        });
    }
},  
                     
      


    deletarProduto: async (req, res) => {
    try {
        const { codigo } = req.params;

        const produtoDeletado = await produtoModel.delete({
            where: {
                codigo: Number(codigo) 
            }
        });

        return res.status(200).json({
            sucesso: true,
            mensagem: "Produto seu produto foi excluido com sucesso!",
            produto: produtoDeletado
        });
    } catch (error) {
        return res.status(500).json({
            sucesso: false,
            erro: error.message
        });
    }
}
};

                      
    




    

        
        
