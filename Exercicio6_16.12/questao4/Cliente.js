"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
var Cliente = /** @class */ (function () {
    function Cliente(nome, cpf, dataNascimento) {
        this.id = Cliente.idNumber;
        this.nome = nome;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
        this.contas = [];
        Cliente.idNumber++;
    }
    Object.defineProperty(Cliente.prototype, "getId", {
        get: function () {
            return this.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "setId", {
        set: function (v) {
            this.id = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getNome", {
        get: function () {
            return this.nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "setNome", {
        set: function (v) {
            this.nome = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getCpf", {
        get: function () {
            return this.cpf;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getDataNascimento", {
        get: function () {
            return this.dataNascimento;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getContas", {
        get: function () {
            return this.contas;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "setContas", {
        set: function (v) {
            this.contas = v;
        },
        enumerable: false,
        configurable: true
    });
    Cliente.idNumber = 0;
    return Cliente;
}());
exports.Cliente = Cliente;
