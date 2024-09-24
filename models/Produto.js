const mongoose = require('mongoose');

const ProdutoSchema = new mongoose.Schema({
    ds_nome: { type: String, required: true },
    ds_descricao: { type: String, required: true },
    nu_valor: { type: Number, required: true },
    in_disponivel: { type: Boolean, default: true },
    nu_estoque: { type: Number, default: 0 }
}, {
    timestamps: true
});

module.exports = mongoose.model('Produto', ProdutoSchema);
