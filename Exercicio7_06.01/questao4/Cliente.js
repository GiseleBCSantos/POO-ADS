"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
var Conta_1 = require("./Conta");
var Cliente = /** @class */ (function () {
    function Cliente(nome, cpf, dataNascimento) {
        this._id = 0;
        this._nome = nome;
        this._cpf = cpf;
        this._dataNascimento = dataNascimento;
        this._contas = [];
    }
    Object.defineProperty(Cliente.prototype, "id", {
        set: function (id) {
            this._id = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "cpf", {
        get: function () {
            return this._cpf;
        },
        enumerable: false,
        configurable: true
    });
    Cliente.prototype.adicionarConta = function (contaProcurada) {
        this._contas.push(contaProcurada);
    };
    Cliente.prototype.listarCopiaContas = function () {
        var copiaContas = [];
        for (var _i = 0, _a = this._contas; _i < _a.length; _i++) {
            var conta = _a[_i];
            var contaCopiada = new Conta_1.Conta(conta.numero, conta.saldo);
            contaCopiada.id = conta.id;
            contaCopiada.cliente = conta.cliente;
            copiaContas.push(contaCopiada);
        }
        return copiaContas;
    };
    return Cliente;
}());
exports.Cliente = Cliente;
