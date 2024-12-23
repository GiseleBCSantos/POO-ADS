"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculadora = void 0;
var Calculadora = /** @class */ (function () {
    function Calculadora(operador1, operador2) {
        this.operador1 = operador1;
        this.operador2 = operador2;
    }
    Calculadora.prototype.getSoma = function () {
        return this.operador1 + this.operador2;
    };
    Calculadora.prototype.getSubtracao = function () {
        return this.operador1 - this.operador2;
    };
    return Calculadora;
}());
exports.Calculadora = Calculadora;
