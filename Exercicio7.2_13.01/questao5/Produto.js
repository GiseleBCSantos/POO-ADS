"use strict";
// - Produto
// -- identificador
// -- descricao
// -- quantidadeEstoque
// ----------------------
// -- repor
// -- darBaixa
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
var Produto = /** @class */ (function () {
    function Produto(identificador, descricao, quantidadeEstoque) {
        this.identificador = identificador;
        this.descricao = descricao;
        this._quantidadeEstoque = quantidadeEstoque;
    }
    Produto.prototype.repor = function (value) {
        this._quantidadeEstoque += value;
    };
    Produto.prototype.darBaixa = function (value) {
        if (value > this._quantidadeEstoque) {
            throw new Error("Quantidade de produtos indisponivel!");
        }
        this._quantidadeEstoque -= value;
    };
    Produto.prototype.toString = function () {
        return "\nId: ".concat(this.identificador, "\nDescricao: ").concat(this.descricao, "\nQuantidade em estoque: ").concat(this._quantidadeEstoque);
    };
    return Produto;
}());
exports.Produto = Produto;
