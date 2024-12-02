"use strict";
exports.__esModule = true;
exports.Banco = void 0;
var Banco = /** @class */ (function () {
    function Banco() {
        this.contas = [];
        this.clientes = [];
    }
    Banco.prototype.inserir = function (conta) {
        this.contas.push(conta);
    };
    Banco.prototype.consultarConta = function (numero) {
        var contaProcurada;
        for (var _i = 0, _a = this.contas; _i < _a.length; _i++) {
            var conta = _a[_i];
            if (conta.numero == numero) {
                contaProcurada = conta;
                break;
            }
        }
        return contaProcurada;
    };
    Banco.prototype.inserirCliente = function (cliente) {
        var canAdd = true;
        for (var _i = 0, _a = this.clientes; _i < _a.length; _i++) {
            var clienteAtual = _a[_i];
            if (clienteAtual.getCpf() === cliente.getCpf()) {
                canAdd = false;
                break;
            }
        }
        if (canAdd) {
            this.clientes.push(cliente);
        }
        else {
            console.log("Cliente já está cadastrado");
        }
    };
    Banco.prototype.consultarCliente = function (cpf) {
        var clienteProcurado;
        for (var _i = 0, _a = this.clientes; _i < _a.length; _i++) {
            var cliente = _a[_i];
            if (cliente.getCpf() === cpf) {
                clienteProcurado = cliente;
                break;
            }
        }
        return clienteProcurado;
    };
    Banco.prototype.associarContaCliente = function (numeroConta, cpfCliente) {
        var cliente = this.consultarCliente(cpfCliente);
        var contasDoCliente = cliente.getContas();
        var possuiConta = false;
        for (var _i = 0, contasDoCliente_1 = contasDoCliente; _i < contasDoCliente_1.length; _i++) {
            var conta = contasDoCliente_1[_i];
            if (conta.getNumero() === numeroConta) {
                possuiConta = true;
                break;
            }
        }
        if (possuiConta) {
            console.log("Cliente já possui essa conta");
        }
        else {
            var conta = this.consultarConta(numeroConta);
            cliente.adicionarConta(conta);
        }
    };
    Banco.prototype.listarContasCliente = function (cpf) {
        var cliente = this.consultarCliente(cpf);
        return cliente.getContas();
    };
    Banco.prototype.totalizarSaldoCliente = function (cpf) {
        var contasCliente = this.listarContasCliente(cpf);
        var saldo = 0;
        for (var _i = 0, contasCliente_1 = contasCliente; _i < contasCliente_1.length; _i++) {
            var conta = contasCliente_1[_i];
            saldo += conta.getSaldo();
        }
        return saldo;
    };
    Banco.prototype.inserirConta = function (conta) {
        var canAdd = true;
        for (var _i = 0, _a = this.contas; _i < _a.length; _i++) {
            var contaAtual = _a[_i];
            if (contaAtual.getNumero() === conta.getNumero()) {
                canAdd = false;
                break;
            }
        }
        if (canAdd) {
            this.contas.push(conta);
        }
        else {
            console.log("Conta já está cadastrado");
        }
    };
    return Banco;
}());
exports.Banco = Banco;
