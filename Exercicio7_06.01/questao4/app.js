"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prompt = require("prompt-sync")();
var Conta_1 = require("./Conta");
var Cliente_1 = require("./Cliente");
var Banco_1 = require("./Banco");
var fs = require("fs");
var App = /** @class */ (function () {
    function App() {
        this.input = prompt;
        this.banco = new Banco_1.Banco();
    }
    App.prototype.menu = function () {
        var opcao = '';
        do {
            console.log('\nBem-vindo! Escolha uma opção:');
            console.log('Contas:');
            console.log('1 - Inserir    2 - Consultar  3 - Sacar');
            console.log('4 - Depositar  5 - Excluir  6 - Transferir');
            console.log('7 - Totalizações');
            console.log('Clientes:');
            console.log('8 - Inserir    9 - Consultar   10 - Associar');
            console.log('11 - Total aplicado por cliente   12 - Render Juros');
            console.log('13 - Carregar contas do arquivo   14 - Salvar contas em arquivo');
            console.log('0 - Sair');
            opcao = this.input("Opção: ");
            switch (opcao) {
                case "1":
                    this.inserirConta();
                    break;
                case "2":
                    this.consultarConta();
                    break;
                case "3":
                    this.sacar();
                    break;
                case "4":
                    this.depositar();
                    break;
                case "5":
                    this.excluirConta();
                    break;
                case "6":
                    this.transferir();
                    break;
                case "7":
                    this.totalizacoes();
                    break;
                case "8":
                    this.inserirCliente();
                    break;
                case "9":
                    this.consultarCliente();
                    break;
                case "10":
                    this.associarContaCliente();
                    break;
                case "11":
                    this.totalizarSaldoCliente();
                    break;
                case "12":
                    this.renderJurosPoupanca();
                    break;
                case "13":
                    this.carregarContasDoArquivo();
                    break;
                case "14":
                    this.salvarContasNoArquivo();
                    break;
                case "0":
                    console.log("Saindo...");
                    break;
                default:
                    console.log("Opção inválida!");
            }
            this.input("Operação finalizada. Pressione <Enter> para continuar.");
        } while (opcao != "0");
        console.log("Aplicação encerrada.");
    };
    App.prototype.inserirConta = function () {
        console.log("\nCadastrar conta:");
        var numero = this.input('Digite o número da conta: ');
        var saldo = parseFloat(this.input('Digite o saldo inicial da conta: '));
        var conta = new Conta_1.Conta(numero, saldo);
        this.banco.inserirConta(conta);
        console.log("Conta cadastrada com sucesso!");
    };
    App.prototype.sacar = function () {
        console.log("\nSaque:");
        var numero = this.input('Digite o número da conta: ');
        var valor = parseFloat(this.input('Digite o valor do saque: '));
        this.banco.sacar(numero, valor);
        console.log("Saque realizado.");
        this.exibirExtrato(numero);
    };
    App.prototype.depositar = function () {
        console.log("\nDepósito:");
        var numero = this.input('Digite o número da conta: ');
        var valor = parseFloat(this.input('Digite o valor do depósito: '));
        this.banco.depositar(numero, valor);
        console.log("Depósito realizado.");
        this.exibirExtrato(numero);
    };
    App.prototype.transferir = function () {
        console.log("\nTransferência:");
        var numeroOrigem = this.input('Digite o número da conta de origem: ');
        var numeroDestino = this.input('Digite o número da conta de destino: ');
        var valor = parseFloat(this.input('Digite o valor da transferência: '));
        this.banco.transferir(numeroOrigem, numeroDestino, valor);
        console.log("Transferência realizada.");
        console.log("\nExtrato da conta de origem:");
        this.exibirExtrato(numeroOrigem);
        console.log("\nExtrato da conta de destino:");
        this.exibirExtrato(numeroDestino);
    };
    App.prototype.consultarConta = function () {
        console.log("\nConsultar conta:");
        var numero = this.input('Digite o número da conta: ');
        this.exibirExtrato(numero);
    };
    App.prototype.exibirExtrato = function (numero) {
        var conta = this.banco.consultarConta(numero);
        if (conta) {
            var cliente = conta.cliente;
            console.log("\n=== Extrato da Conta ===");
            console.log("ID: ".concat(conta.id));
            console.log("N\u00FAmero da conta: ".concat(conta.numero));
            console.log("Saldo: ".concat(conta.saldo));
            if (cliente) {
                console.log("\n=== Dados do Cliente ===");
                console.log("ID: ".concat(cliente.id));
                console.log("Nome: ".concat(cliente.nome));
                console.log("CPF: ".concat(cliente.cpf));
            }
            else {
                console.log("Cliente: Não associado.");
            }
            console.log("=========================\n");
        }
        else {
            console.log("Conta não encontrada para exibir extrato.");
        }
    };
    App.prototype.excluirConta = function () {
        console.log("\nExcluir conta:");
        var numero = this.input('Digite o número da conta: ');
        this.banco.excluir(numero);
        console.log("Conta excluída com sucesso!");
    };
    App.prototype.totalizacoes = function () {
        console.log("\nTotalizações:");
        console.log("Quantidade de contas: ".concat(this.banco.obterQuantidadeDeContas()));
        console.log("Total depositado no banco: ".concat(this.banco.obterTotalDinheiroDepositado()));
        console.log("M\u00E9dia de saldo das contas: ".concat(this.banco.calcularMediaSaldoContas()));
    };
    App.prototype.inserirCliente = function () {
        console.log("\nCadastrar cliente:");
        var nome = this.input('Digite o nome do cliente: ');
        var cpf = this.input('Digite o CPF do cliente: ');
        var dataNascimento = new Date(this.input('Digite a data de nascimento (AAAA-MM-DD): '));
        var cliente = new Cliente_1.Cliente(nome, cpf, dataNascimento);
        this.banco.inserirCliente(cliente);
        console.log("Cliente cadastrado com sucesso!");
    };
    App.prototype.consultarCliente = function () {
        console.log("\nConsultar cliente:");
        var cpf = this.input('Digite o CPF do cliente: ');
        var cliente = this.banco.consultarCliente(cpf);
        if (cliente) {
            console.log("Cliente encontrado: ID ".concat(cliente.id, ", Nome: ").concat(cliente.nome, ", CPF: ").concat(cliente.cpf));
        }
        else {
            console.log("Cliente não encontrado.");
        }
    };
    App.prototype.associarContaCliente = function () {
        console.log("\nAssociar conta a cliente:");
        var numeroConta = this.input('Digite o número da conta: ');
        var cpfCliente = this.input('Digite o CPF do cliente: ');
        this.banco.associarContaCliente(numeroConta, cpfCliente);
        console.log("Conta associada ao cliente com sucesso!");
    };
    App.prototype.totalizarSaldoCliente = function () {
        console.log("\nTotalizar saldo por cliente:");
        var cpfCliente = this.input('Digite o CPF do cliente: ');
        var total = this.banco.totalizarSaldoCliente(cpfCliente);
        console.log("Total: " + total);
    };
    App.prototype.renderJurosPoupanca = function () {
        console.log("Render juros de conta poupanca: ");
        var numeroConta = this.input("Insira o numero da poupanca: ");
        this.banco.renderJuros(numeroConta);
    };
    App.prototype.carregarContasDoArquivo = function () {
        try {
            var data = fs.readFileSync('contas.txt', 'utf-8');
            var linhas = data.split('\n');
            for (var _i = 0, linhas_1 = linhas; _i < linhas_1.length; _i++) {
                var linha = linhas_1[_i];
                if (linha.trim() !== '') {
                    var _a = linha.split(';'), numero = _a[0], saldo = _a[1], tipo = _a[2], taxa = _a[3];
                    var conta = new Conta_1.Conta(numero.trim(), parseFloat(saldo.trim()));
                    this.banco.inserirConta(conta);
                }
            }
            console.log("Contas carregadas com sucesso do arquivo.");
        }
        catch (error) {
            console.error("Erro ao carregar contas do arquivo:", error.message);
        }
    };
    App.prototype.salvarContasNoArquivo = function () {
        try {
            var contas = this.banco.obterTodasContas();
            var linhas = contas.map(function (conta) { return "".concat(conta.numero, "; ").concat(conta.saldo); });
            fs.writeFileSync('contas.txt', linhas.join('\n'), 'utf-8');
            console.log("Contas salvas com sucesso no arquivo.");
        }
        catch (error) {
            console.error("Erro ao salvar contas no arquivo:", error.message);
        }
    };
    return App;
}());
var app = new App();
app.menu();
