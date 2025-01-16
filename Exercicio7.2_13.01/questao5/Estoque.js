"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estoque = void 0;
var ProdutoPerecivel_1 = require("./ProdutoPerecivel");
// - Estoque
// -- listaProdutos
// -------------------
// -- add
// -- getById
// -- delete
// -- repor
// -- dar baixa
// -- exists
// -- listVencidos
var Estoque = /** @class */ (function () {
    function Estoque() {
        this._listaProdutos = [];
    }
    Estoque.prototype.addProduto = function (produto) {
        this.getProdutos();
        if (this.jaCadastrado(produto.identificador, produto.descricao)) {
            throw new Error("Produto ja cadastrado!");
        }
        this._listaProdutos.push(produto);
    };
    Estoque.prototype.getProdutos = function () {
        this._listaProdutos.forEach(function (produto) { return console.log(produto.toString()); });
    };
    Estoque.prototype.getById = function (id) {
        var produto = this._listaProdutos.filter(function (produto) { return produto.identificador === id; })[0];
        if (!produto) {
            throw new Error("Produto nao cadastrado!");
        }
        return produto;
    };
    Estoque.prototype.delete = function (id) {
        this._listaProdutos = this._listaProdutos.filter(function (produto) { return produto.identificador !== id; });
    };
    Estoque.prototype.repor = function (id, quantidade) {
        var produto = this.getById(id);
        if (!produto) {
            throw new Error("Produto nao cadastrado!");
        }
        produto.repor(quantidade);
    };
    Estoque.prototype.darBaixa = function (id, quantidade) {
        var produto = this.getById(id);
        if (!produto) {
            throw new Error("Produto nao cadastrado!");
        }
        try {
            produto.darBaixa(quantidade);
        }
        catch (e) {
            throw new Error(e.message);
        }
    };
    Estoque.prototype.getListaVencidos = function () {
        var produtosVencidos = [];
        this._listaProdutos.forEach(function (produto) {
            if (produto instanceof ProdutoPerecivel_1.ProdutoPerecivel && !produto.ehValido(new Date())) {
                produtosVencidos.push(produto);
            }
        });
        return produtosVencidos;
    };
    Estoque.prototype.jaCadastrado = function (id, descricao) {
        var produtoExistente = this._listaProdutos.find(function (produto) { return produto.identificador === id && produto.descricao == descricao; });
        return produtoExistente === null;
    };
    return Estoque;
}());
exports.Estoque = Estoque;
