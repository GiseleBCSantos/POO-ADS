"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
var Conta = /** @class */ (function () {
    function Conta(numero) {
        this.numero = numero;
        this.saldo = 0;
    }
    Conta.prototype.sacar = function (valor) {
        if (valor > this.saldo) {
            console.log("Saldo insuficiente.");
            return;
        }
        this.saldo -= valor;
    };
    Conta.prototype.depositar = function (valor) {
        if (valor <= 0) {
            console.log("Valor de depósito inválido.");
            return;
        }
        this.saldo += valor;
    };
    Conta.prototype.consultarSaldo = function () {
        return this.saldo;
    };
    Conta.prototype.transferir = function (contaDestino, valor) {
        this.sacar(valor);
        contaDestino.depositar(valor);
    };
    return Conta;
}());
exports.Conta = Conta;
