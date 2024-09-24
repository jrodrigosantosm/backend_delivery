const Produto = require('../models/Produto');

exports.getProdutos = async (req, res) => {
    try {
        const produtos = await Produto.find();
        res.status(200).json(produtos);
    } catch (err) {
        res.status(500).json({ message: "Erro ao buscar produtos", error: err.message });
    }
};

exports.createProduto = async (req, res) => {
    const { ds_nome, ds_descricao, nu_valor, in_disponivel, nu_estoque } = req.body;

    try {
        const produto = new Produto({
            ds_nome,
            ds_descricao,
            nu_valor,
            in_disponivel,
            nu_estoque
        });

        await produto.save();
        res.status(201).json(produto);
    } catch (err) {
        res.status(500).json({ message: "Erro ao criar produto", error: err.message });
    }
};
