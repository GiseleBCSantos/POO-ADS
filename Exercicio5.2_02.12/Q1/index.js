var _a, _b, _c, _d, _e;
var Conta = /** @class */ (function () {
    function Conta(numero, saldo) {
        this.numero = numero;
        this.saldo = saldo;
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
    return Conta;
}());
var Banco = /** @class */ (function () {
    function Banco() {
        this.contas = [];
    }
    Banco.prototype.inserir = function (conta) {
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
    Banco.prototype.consultarPorIndice = function (numero) {
        for (var i = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero === numero) {
                return i;
            }
        }
        return -1;
    };
    Banco.prototype.excluir = function (numero) {
        var indice = this.consultarPorIndice(numero);
        if (indice !== -1) {
            this.contas.splice(indice, 1);
        }
    };
    Banco.prototype.sacar = function (numero, valor) {
        var conta = this.consultar(numero);
        if (conta) {
            conta.sacar(valor);
        }
    };
    Banco.prototype.depositar = function (numero, valor) {
        var conta = this.consultar(numero);
        if (conta) {
            conta.depositar(valor);
        }
    };
    Banco.prototype.transferir = function (numeroOrigem, numeroDestino, valor) {
        var contaOrigem = this.consultar(numeroOrigem);
        var contaDestino = this.consultar(numeroDestino);
        if (contaOrigem && contaDestino) {
            contaOrigem.sacar(valor);
            contaDestino.depositar(valor);
        }
    };
    Banco.prototype.transferirParaMultiplasContas = function (numeroOrigem, contasDestino, valor) {
        var contaOrigem = this.consultar(numeroOrigem);
        if (contaOrigem) {
            for (var _i = 0, contasDestino_1 = contasDestino; _i < contasDestino_1.length; _i++) {
                var numeroDestino = contasDestino_1[_i];
                var contaDestino = this.consultar(numeroDestino);
                if (contaDestino && contaOrigem.consultarSaldo() >= valor) {
                    contaOrigem.sacar(valor);
                    contaDestino.depositar(valor);
                }
            }
        }
    };
    Banco.prototype.quantidadeDeContas = function () {
        return this.contas.length;
    };
    Banco.prototype.totalDinheiroDepositado = function () {
        return this.contas.reduce(function (total, conta) { return total + conta.saldo; }, 0);
    };
    Banco.prototype.mediaSaldo = function () {
        var quantidade = this.quantidadeDeContas();
        var total = this.totalDinheiroDepositado();
        return quantidade > 0 ? total / quantidade : 0;
    };
    return Banco;
}());
// Testes com os novos métodos
var banco = new Banco();
banco.inserir(new Conta('111-1', 100));
banco.inserir(new Conta('222-2', 200));
banco.inserir(new Conta('333-3', 300));
console.log("Quantidade de contas:", banco.quantidadeDeContas()); // 3
console.log("Total depositado:", banco.totalDinheiroDepositado()); // 600
console.log("Média do saldo:", banco.mediaSaldo()); // 200
banco.transferir('111-1', '222-2', 50);
console.log("Saldo conta 111-1:", (_a = banco.consultar('111-1')) === null || _a === void 0 ? void 0 : _a.consultarSaldo()); // 50
console.log("Saldo conta 222-2:", (_b = banco.consultar('222-2')) === null || _b === void 0 ? void 0 : _b.consultarSaldo()); // 250
banco.transferirParaMultiplasContas('333-3', ['111-1', '222-2'], 50);
console.log("Saldo conta 333-3:", (_c = banco.consultar('333-3')) === null || _c === void 0 ? void 0 : _c.consultarSaldo()); // 200
console.log("Saldo conta 111-1:", (_d = banco.consultar('111-1')) === null || _d === void 0 ? void 0 : _d.consultarSaldo()); // 100
console.log("Saldo conta 222-2:", (_e = banco.consultar('222-2')) === null || _e === void 0 ? void 0 : _e.consultarSaldo()); // 300
