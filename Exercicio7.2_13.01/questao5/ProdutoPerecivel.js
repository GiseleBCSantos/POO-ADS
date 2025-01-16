"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoPerecivel = void 0;
var Produto_1 = require("./Produto");
// - Produto perecivel
// -- msm q produto
// -- dataValidade
// --------------------
// -- isValid
var ProdutoPerecivel = /** @class */ (function (_super) {
    __extends(ProdutoPerecivel, _super);
    function ProdutoPerecivel(identificador, descricao, quantidadeEstoque, dataValidade) {
        var _this = _super.call(this, identificador, descricao, quantidadeEstoque) || this;
        _this._dataValidade = dataValidade;
        return _this;
    }
    ProdutoPerecivel.prototype.ehValido = function (dataAtual) {
        return this._dataValidade >= dataAtual;
    };
    return ProdutoPerecivel;
}(Produto_1.Produto));
exports.ProdutoPerecivel = ProdutoPerecivel;
