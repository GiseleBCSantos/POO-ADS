"use strict";
exports.__esModule = true;
exports.Cliente = void 0;
var Cliente = /** @class */ (function () {
    function Cliente(id, nome, cpf, dataNascimento) {
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
        this.contas = [];
    }
    Cliente.prototype.getCpf = function () {
        return this.cpf;
    };
    Cliente.prototype.getContas = function () {
        return this.contas;
    };
    Cliente.prototype.getNome = function () {
        return this.nome;
    };
    Cliente.prototype.adicionarConta = function (conta) {
        this.contas.push(conta);
    };
    return Cliente;
}());
exports.Cliente = Cliente;
