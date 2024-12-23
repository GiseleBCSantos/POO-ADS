"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Banco = void 0;
var Banco = /** @class */ (function () {
    function Banco() {
        this.contas = [];
        this.clientes = [];
        this.idClienteAtual = 0;
        this.idContaAtual = 0;
    }
    Banco.prototype.inserirConta = function (conta) {
        conta.setId = this.idContaAtual++;
        this.contas.push(conta);
    };
    Banco.prototype.consultarConta = function (numero) {
        var contaProcurada;
        for (var _i = 0, _a = this.contas; _i < _a.length; _i++) {
            var conta = _a[_i];
            if (conta.getNumero === numero) {
                contaProcurada = conta;
                break;
            }
        }
        return contaProcurada;
    };
    Banco.prototype.consultarContaPorIndice = function (numero) {
        var indiceProcurado = -1;
        for (var i = 0; i < this.contas.length; i++) {
            if (this.contas[i].getNumero == numero) {
                indiceProcurado = i;
                break;
            }
        }
        return indiceProcurado;
    };
    Banco.prototype.excluir = function (numero) {
        var indiceProcurado = this.consultarContaPorIndice(numero);
        if (indiceProcurado != -1) {
            for (var i = indiceProcurado; i < this.contas.length - 1; i++) {
                this.contas[i] = this.contas[i + 1];
            }
            this.contas.pop();
        }
    };
    Banco.prototype.alterar = function (conta) {
        var contaProcurada = this.consultarConta(conta.getNumero);
        if (contaProcurada) {
            contaProcurada = conta;
        }
    };
    Banco.prototype.inserirCliente = function (cliente) {
        cliente.setId = this.idClienteAtual++;
        this.clientes.push(cliente);
    };
    Banco.prototype.consultarCliente = function (cpf) {
        var clienteProcurado;
        for (var _i = 0, _a = this.clientes; _i < _a.length; _i++) {
            var cliente = _a[_i];
            if (cliente.getCpf == cpf) {
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
            contaProcurada.setCliente = clienteProcurado;
            clienteProcurado.getContas.push(contaProcurada);
        }
    };
    Banco.prototype.jaExisteContaParaCliente = function (cliente, conta) {
        var jaExiste = false;
        if (conta.getCliente != null) {
            if (conta.getCliente.getCpf == cliente.getCpf) {
                jaExiste = true;
            }
            else {
                for (var _i = 0, _a = cliente.getContas; _i < _a.length; _i++) {
                    var contaAssociada = _a[_i];
                    if (contaAssociada.getNumero == conta.getNumero) {
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
            contas = clienteProcurado.getContas;
        }
        return contas;
    };
    Banco.prototype.totalizarSaldoCliente = function (cpf) {
        var clienteProcurado = this.consultarCliente(cpf);
        var total = 0;
        if (clienteProcurado) {
            for (var _i = 0, _a = clienteProcurado.getContas; _i < _a.length; _i++) {
                var conta = _a[_i];
                total += conta.getSaldo;
            }
        }
        return total;
    };
    Banco.prototype.obterQuantidadeDeContas = function () {
        return this.contas.length;
    };
    Banco.prototype.obterTotalDinheiroDepositado = function () {
        var total = 0;
        for (var _i = 0, _a = this.contas; _i < _a.length; _i++) {
            var conta = _a[_i];
            total = total + conta.getSaldo;
        }
        return total;
    };
    Banco.prototype.calcularMediaSaldoContas = function () {
        return this.obterTotalDinheiroDepositado() / this.obterQuantidadeDeContas();
    };
    Banco.prototype.retirarContaCliente = function (cpfCliente, numeroconta) {
        var cliente = this.consultarCliente(cpfCliente);
        cliente.setContas = cliente.getContas.filter(function (contaAtual) { return contaAtual.getNumero !== numeroconta && contaAtual; });
    };
    Banco.prototype.mudarTitularidadeDeConta = function (cpfClienteAlvo, cpfClienteDestino, numeroConta) {
        var clienteAlvo = this.consultarCliente(cpfClienteAlvo);
        var clienteDestino = this.consultarCliente(cpfClienteDestino);
        var conta = this.consultarConta(numeroConta);
        if (clienteAlvo && clienteDestino && conta) {
            this.retirarContaCliente(clienteAlvo.getCpf, conta.getNumero);
            this.associarContaCliente(clienteDestino.getCpf, conta.getNumero);
        }
    };
    Banco.prototype.excluirCliente = function (cpfCliente) {
        var cliente = this.consultarCliente(cpfCliente);
        var contasDoCliente = this.listarContasCliente(cpfCliente);
        cliente.getContas.map(function (conta) { return null; });
        this.clientes = this.clientes.filter(function (clienteAtual) { return clienteAtual !== cliente && clienteAtual; });
        var _loop_1 = function (i) {
            this_1.contas = this_1.contas.filter(function (contaAtual) { return contaAtual !== contasDoCliente[i] && contaAtual; });
        };
        var this_1 = this;
        for (var i = 0; i < contasDoCliente.length; i++) {
            _loop_1(i);
        }
    };
    Banco.prototype.excluirConta = function (cpfCliente, numeroConta) {
        var cliente = this.consultarCliente(cpfCliente);
        cliente.setContas = cliente.getContas.filter(function (conta) { return conta.getNumero !== numeroConta && conta; });
    };
    Banco.prototype.retornarContasSemCliente = function () {
        var contasSemCliente = this.contas.filter(function (contaAtual) { return contaAtual.getCliente === undefined && contaAtual; });
        return contasSemCliente;
    };
    Banco.prototype.efetuarOrdemBancaria = function (numContaOrigem, numContasDestino, valorParaCada) {
        var _this = this;
        var isAllowed = this.consultarConta(numContaOrigem).getSaldo > valorParaCada * numContasDestino.length;
        if (isAllowed) {
            numContasDestino.forEach(function (numContaAtual) { return _this.transferir(numContaOrigem, numContaAtual, valorParaCada); });
            return isAllowed;
        }
        return isAllowed;
    };
    return Banco;
}());
exports.Banco = Banco;
