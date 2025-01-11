"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Banco = void 0;
var Poupanca_1 = require("./Poupanca");
var Banco = /** @class */ (function () {
    function Banco() {
        this._contas = [];
        this._clientes = [];
        this._idClienteAtual = 0;
        this._idContaAtual = 0;
    }
    Banco.prototype.inserirConta = function (conta) {
        conta.id = this._idContaAtual++;
        this._contas.push(conta);
    };
    Banco.prototype.consultarConta = function (numero) {
        var contaProcurada;
        for (var _i = 0, _a = this._contas; _i < _a.length; _i++) {
            var conta = _a[_i];
            if (conta.numero == numero) {
                contaProcurada = conta;
                break;
            }
        }
        return contaProcurada;
    };
    Banco.prototype.consultarContaPorIndice = function (numero) {
        var indiceProcurado = -1;
        for (var i = 0; i < this._contas.length; i++) {
            if (this._contas[i].numero == numero) {
                indiceProcurado = i;
                break;
            }
        }
        return indiceProcurado;
    };
    Banco.prototype.excluir = function (numero) {
        var indiceProcurado = this.consultarContaPorIndice(numero);
        if (indiceProcurado != -1) {
            for (var i = indiceProcurado; i < this._contas.length - 1; i++) {
                this._contas[i] = this._contas[i + 1];
            }
            this._contas.pop();
        }
    };
    Banco.prototype.alterar = function (conta) {
        var contaProcurada = this.consultarConta(conta.numero);
        if (contaProcurada) {
            contaProcurada = conta;
        }
    };
    Banco.prototype.inserirCliente = function (cliente) {
        cliente.id = this._idClienteAtual++;
        this._clientes.push(cliente);
    };
    Banco.prototype.consultarCliente = function (cpf) {
        var clienteProcurado;
        for (var _i = 0, _a = this._clientes; _i < _a.length; _i++) {
            var cliente = _a[_i];
            if (cliente.cpf == cpf) {
                clienteProcurado = cliente;
            }
        }
        return clienteProcurado;
    };
    Banco.prototype.sacar = function (numero, valor) {
        var contaProcurada = this.consultarConta(numero);
        if (contaProcurada) {
            contaProcurada.sacar(valor);
        }
    };
    Banco.prototype.depositar = function (numero, valor) {
        var contaProcurada = this.consultarConta(numero);
        if (contaProcurada) {
            contaProcurada.depositar(valor);
        }
    };
    Banco.prototype.transferir = function (numeroOrigem, numeroDestino, valor) {
        var contaOrigem = this.consultarConta(numeroOrigem);
        var contaDestino = this.consultarConta(numeroDestino);
        if (contaOrigem && contaDestino) {
            contaOrigem.transferir(contaDestino, valor);
        }
    };
    Banco.prototype.associarContaCliente = function (numeroConta, cpfCliente) {
        var contaProcurada = this.consultarConta(numeroConta);
        var clienteProcurado = this.consultarCliente(cpfCliente);
        if (contaProcurada && clienteProcurado) {
            contaProcurada.cliente = clienteProcurado;
            clienteProcurado.adicionarConta(contaProcurada);
        }
    };
    Banco.prototype.jaExisteContaParaCliente = function (cliente, conta) {
        var jaExiste = false;
        if (conta.cliente != null) {
            if (conta.cliente.cpf == cliente.cpf) {
                jaExiste = true;
            }
            else {
                for (var _i = 0, _a = cliente.listarCopiaContas(); _i < _a.length; _i++) {
                    var contaAssociada = _a[_i];
                    if (contaAssociada.numero == conta.numero) {
                        jaExiste = true;
                    }
                }
            }
        }
        return jaExiste;
    };
    Banco.prototype.listarContasCliente = function (cpf) {
        var clienteProcurado = this.consultarCliente(cpf);
        var contas = [];
        if (clienteProcurado) {
            contas = clienteProcurado.listarCopiaContas();
        }
        return contas;
    };
    // public renderJuros(numero: string) {
    //     let contaProcurada:Conta = this.consultarConta(numero);
    //     if (contaProcurada instanceof Poupanca) {
    //         //(contaProcurada as Poupanca).renderJuros(); em java é obrigatório o "cast"
    //         contaProcurada.renderJuros(); //em typescript já é feito o cast
    //     }
    // }
    Banco.prototype.totalizarSaldoCliente = function (cpf) {
        var clienteProcurado = this.consultarCliente(cpf);
        var total = 0;
        if (clienteProcurado) {
            for (var _i = 0, _a = clienteProcurado.listarCopiaContas(); _i < _a.length; _i++) {
                var conta = _a[_i];
                total += conta.saldo;
            }
        }
        return total;
    };
    Banco.prototype.obterQuantidadeDeContas = function () {
        return this._contas.length;
    };
    Banco.prototype.obterTotalDinheiroDepositado = function () {
        var total = 0;
        for (var _i = 0, _a = this._contas; _i < _a.length; _i++) {
            var conta = _a[_i];
            total = total + conta.saldo;
        }
        return total;
    };
    Banco.prototype.calcularMediaSaldoContas = function () {
        return this.obterTotalDinheiroDepositado() / this.obterQuantidadeDeContas();
    };
    Banco.prototype.renderJuros = function (numero) {
        var contaAtual = this.consultarConta(numero);
        if (contaAtual instanceof Poupanca_1.Poupanca) {
            contaAtual.renderJuros();
        }
    };
    Banco.prototype.obterTodasContas = function () {
        return this._contas;
    };
    return Banco;
}());
exports.Banco = Banco;
