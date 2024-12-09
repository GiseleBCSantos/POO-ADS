"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Banco = void 0;
var Banco = /** @class */ (function () {
    function Banco() {
        this.contas = [];
    }
    Banco.prototype.inserir = function (conta) {
        if (this.consultar(conta.numero)) {
            console.log("Conta já existente.");
            return;
        }
        this.contas.push(conta);
    };
    Banco.prototype.consultar = function (numero) {
        for (var _i = 0, _a = this.contas; _i < _a.length; _i++) {
            var conta = _a[_i];
            if (conta.numero === numero) {
                return conta;
            }
        }
        return null;
    };
    Banco.prototype.sacar = function (numero, valor) {
        var conta = this.consultar(numero);
        if (!conta) {
            console.log("Conta não encontrada.");
            return;
        }
        conta.sacar(valor);
    };
    Banco.prototype.depositar = function (numero, valor) {
        var conta = this.consultar(numero);
        if (!conta) {
            console.log("Conta não encontrada.");
            return;
        }
        conta.depositar(valor);
    };
    Banco.prototype.transferir = function (origem, destino, valor) {
        var contaOrigem = this.consultar(origem);
        var contaDestino = this.consultar(destino);
        if (!contaOrigem || !contaDestino) {
            console.log("Conta de origem ou destino não encontrada.");
            return;
        }
        contaOrigem.sacar(valor);
        contaDestino.depositar(valor);
    };
    Banco.prototype.excluir = function (numero) {
        var indice = this.contas.findIndex(function (conta) { return conta.numero === numero; });
        if (indice === -1) {
            console.log("Conta não encontrada.");
        }
        this.contas.splice(indice, 1);
    };
    Banco.prototype.quantidadeDeContas = function () {
        return this.contas.length;
    };
    Banco.prototype.totalDinheiroDepositado = function () {
        return this.contas.reduce(function (total, conta) { return total + conta.consultarSaldo(); }, 0);
    };
    Banco.prototype.mediaSaldo = function () {
        if (this.contas.length === 0)
            return 0;
        return this.totalDinheiroDepositado() / this.quantidadeDeContas();
    };
    return Banco;
}());
exports.Banco = Banco;
