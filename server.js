require('dotenv').config();
const express = require('express');
// file system = arquivo
const fs = require ('fs');
// path = caminho
const path = require ('path');

// 1. define o caminho do arquivbo
const arquivoProdutos = path.join(__dirname, 'database', 'produtos.json');
const app = express();

 app.use(express.json());
 app.post('/produtos', (req,res) =>{
    const { codigo,nome,qtde, preco} =req.body;

    // 2. transformar e calcular dados
    const novoProduto = {
        codigo,
        nome: String(nome).toUpperCase(),
        quantidade: Number(qtde),
        qtde: Number (qtde),
        preco: Number(preco),
        total: Number (qtde) * Number(preco)
    }

    //3. ler o arquivo produtos.json
    const conteudoTexto = fs.readFileSync(arquivoProdutos, 'utf-8');// utf-8 permite o uso de acento na web
    console.log(conteudoTexto);
    const listaProdutos = JSON.parse(conteudoTexto); // converte texto em array JS

    //4. adicionar o novo profuto na lista 
    listaProdutos.push(novoProduto);
    //5. salvar o rquivo
    fs.writeFileSync(arquivoProdutos, JSON.stringify, null, 2)


    return  res.json ({
        mensagem:'produto recebido com sucesso!',
        dadosOriginais:{codigo,nome,qtde,preco}
    })
 })



 const PORT = process.env.PORT;
 app.listen(PORT, () => {
    console.log (`servidor rodando na porta ${PORT}`) //console serve para aparecer uma mensagem quando rodar o seridor
 })
 