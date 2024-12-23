"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
var Conta = /** @class */ (function () {
    function Conta(numero, saldo) {
        this.id = Conta.idNumber;
        this.numero = numero;
        this.saldo = saldo;
        Conta.idNumber++;
    }
    Conta.prototype.sacar = function (valor) {
        this.saldo = this.saldo - valor;
    };
    Conta.prototype.depositar = function (valor) {
        this.saldo = this.saldo + valor;
    };
    Conta.prototype.consultarSaldo = function () {
        return this.saldo;
    };
    Conta.prototype.transferir = function (contaDestino, valor) {
        // this.saldo = this.saldo - valor;
        // contaDestino.saldo = contaDestino.saldo + valor;
        this.sacar(valor);
        contaDestino.depositar(valor);
    };
    Object.defineProperty(Conta.prototype, "getId", {
        get: function () {
            return this.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Conta.prototype, "setId", {
        set: function (id) {
            this.id = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Conta.prototype, "getNumero", {
        get: function () {
            return this.numero;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Conta.prototype, "getSaldo", {
        get: function () {
            return this.saldo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Conta.prototype, "getCliente", {
        get: function () {
            return this.cliente;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Conta.prototype, "setCliente", {
        set: function (v) {
            this.cliente = v;
        },
        enumerable: false,
        configurable: true
    });
    Conta.idNumber = 0;
    return Conta;
}());
exports.Conta = Conta;
