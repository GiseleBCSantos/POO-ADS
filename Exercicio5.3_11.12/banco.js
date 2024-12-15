"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Banco = exports.Cliente = exports.Conta = void 0;
var Conta = /** @class */ (function () {
    function Conta(numero, saldo) {
        this.id = 0;
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
exports.Conta = Conta;
var Cliente = /** @class */ (function () {
    function Cliente(nome, cpf, dataNascimento) {
        this.id = 0;
        this.nome = nome;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
        this.contas = [];
    }
    return Cliente;
}());
exports.Cliente = Cliente;
var Banco = /** @class */ (function () {
    function Banco() {
        this.contas = [];
        this.clientes = [];
        this.idClienteAtual = 0;
        this.idContaAtual = 0;
    }
    Banco.prototype.inserirConta = function (conta) {
        conta.id = this.idContaAtual++;
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
    Banco.prototype.consultarContaPorIndice = function (numero) {
        var indiceProcurado = -1;
        for (var i = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero == numero) {
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
        var contaProcurada = this.consultarConta(conta.numero);
        if (contaProcurada) {
            contaProcurada = conta;
        }
    };
    Banco.prototype.inserirCliente = function (cliente) {
        cliente.id = this.idClienteAtual++;
        this.clientes.push(cliente);
    };
    Banco.prototype.consultarCliente = function (cpf) {
        var clienteProcurado;
        for (var _i = 0, _a = this.clientes; _i < _a.length; _i++) {
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
            clienteProcurado.contas.push(contaProcurada);
        }
    };
    Banco.prototype.jaExisteContaParaCliente = function (cliente, conta) {
        var jaExiste = false;
        if (conta.cliente != null) {
            if (conta.cliente.cpf == cliente.cpf) {
                jaExiste = true;
            }
            else {
                for (var _i = 0, _a = cliente.contas; _i < _a.length; _i++) {
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
            contas = clienteProcurado.contas;
        }
        return contas;
    };
    Banco.prototype.totalizarSaldoCliente = function (cpf) {
        var clienteProcurado = this.consultarCliente(cpf);
        var total = 0;
        if (clienteProcurado) {
            for (var _i = 0, _a = clienteProcurado.contas; _i < _a.length; _i++) {
                var conta = _a[_i];
                total += conta.saldo;
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
            total = total + conta.saldo;
        }
        return total;
    };
    Banco.prototype.calcularMediaSaldoContas = function () {
        return this.obterTotalDinheiroDepositado() / this.obterQuantidadeDeContas();
    };
    Banco.prototype.retirarContaCliente = function (cpfCliente, numeroconta) {
        var cliente = this.consultarCliente(cpfCliente);
        cliente.contas = cliente.contas.filter(function (contaAtual) { return contaAtual.numero !== numeroconta && contaAtual; });
    };
    Banco.prototype.mudarTitularidadeDeConta = function (cpfClienteAlvo, cpfClienteDestino, numeroConta) {
        var clienteAlvo = this.consultarCliente(cpfClienteAlvo);
        var clienteDestino = this.consultarCliente(cpfClienteDestino);
        var conta = this.consultarConta(numeroConta);
        if (clienteAlvo && clienteDestino && conta) {
            this.retirarContaCliente(clienteAlvo.cpf, conta.numero);
            this.associarContaCliente(clienteDestino.cpf, conta.numero);
        }
    };
    Banco.prototype.excluirCliente = function (cpfCliente) {
        var cliente = this.consultarCliente(cpfCliente);
        var contasDoCliente = this.listarContasCliente(cpfCliente);
        cliente.contas.map(function (conta) { return null; });
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
        cliente.contas = cliente.contas.filter(function (conta) { return conta.numero !== numeroConta && conta; });
    };
    Banco.prototype.retornarContasSemCliente = function () {
        var contasSemCliente = this.contas.filter(function (contaAtual) { return contaAtual.cliente === undefined && contaAtual; });
        return contasSemCliente;
    };
    Banco.prototype.efetuarOrdemBancaria = function (numContaOrigem, numContasDestino, valorParaCada) {
        var _this = this;
        var isAllowed = this.consultarConta(numContaOrigem).saldo > valorParaCada * numContasDestino.length;
        if (isAllowed) {
            numContasDestino.forEach(function (numContaAtual) { return _this.transferir(numContaOrigem, numContaAtual, valorParaCada); });
            return isAllowed;
        }
        return isAllowed;
    };
    return Banco;
}());
exports.Banco = Banco;
