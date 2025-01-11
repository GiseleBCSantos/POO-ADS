"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculadora = void 0;
var Calculadora = /** @class */ (function () {
    function Calculadora(operador1, operador2) {
        this._operador1 = operador1;
        this._operador2 = operador2;
    }
    Calculadora.prototype.getSoma = function () {
        return this._operador1 + this._operador2;
    };
    return Calculadora;
}());
exports.Calculadora = Calculadora;
function main() {
    var calculadora = new Calculadora(1, 5);
    var somar = calculadora.getSoma();
    console.log(somar);
}
main();
