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
var q2_js_1 = require("./q2.js");
var CalculadoraCientifica = /** @class */ (function (_super) {
    __extends(CalculadoraCientifica, _super);
    function CalculadoraCientifica(operador1, operador2) {
        return _super.call(this, operador1, operador2) || this;
    }
    CalculadoraCientifica.prototype.exponenciar = function () {
        return Math.pow(this._operador1, this._operador2);
    };
    return CalculadoraCientifica;
}(q2_js_1.Calculadora));
function main() {
    var calculadora = new CalculadoraCientifica(2, 5);
    var resultado = calculadora.exponenciar();
    console.log(resultado);
}
main();
