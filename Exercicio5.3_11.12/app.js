"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prompt = require("prompt-sync")();
var banco_1 = require("./banco");
var App = /** @class */ (function () {
    function App() {
        this.banco = new banco_1.Banco();
        this.input = prompt();
    }
    App.prototype.menu = function () {
        var opcao;
        do {
            console.log('\nBem-vindo! Escolha uma opção:');
            console.log('\n--- Operações de Conta ---');
            console.log('1 - Inserir conta');
            console.log('2 - Consultar conta');
            console.log('3 - Sacar');
            console.log('4 - Depositar');
            console.log('5 - Excluir conta');
            console.log('6 - Transferir');
            console.log('7 - Totalizações');
            console.log('12 - Listar contas sem cliente');
            console.log('\n--- Operações de Cliente ---');
            console.log('8 - Inserir cliente');
            console.log('9 - Consultar cliente');
            console.log('10 - Associar conta a cliente');
            console.log('11 - Total aplicado por cliente');
            console.log('13 - Efetuar ordem bancária');
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
                    this.listarContasSemCliente();
                    break;
                case "13":
                    this.realizarOrdemBancaria();
                    break;
                case "0":
                    console.log("Saindo...");
                    break;
                default:
                    console.log("Opção inválida!");
            }
            this.input("Operação finalizada. Pressione <Enter> para continuar.");
        } while (opcao != "0");
    };
    App.prototype.inserirConta = function () {
        console.log("\nCadastrar conta:");
        var numero = this.input("Digite o número da conta: ");
        var saldo = parseFloat(this.input("Digite o saldo inicial da conta: "));
        var conta = new banco_1.Conta(numero, saldo); // Cliente será associado posteriormente
        this.banco.inserirConta(conta);
        console.log("Conta cadastrada com sucesso!");
    };
    App.prototype.sacar = function () {
        console.log("\nSaque:");
        var numero = this.input("Digite o número da conta: ");
        var valor = parseFloat(this.input("Digite o valor do saque: "));
        this.banco.sacar(numero, valor);
        console.log("Saque realizado.");
        this.exibirExtrato(numero);
    };
    App.prototype.depositar = function () {
        console.log("\nDepósito:");
        var numero = this.input("Digite o número da conta: ");
        var valor = parseFloat(this.input("Digite o valor do depósito: "));
        this.banco.depositar(numero, valor);
        console.log("Depósito realizado.");
        this.exibirExtrato(numero);
    };
    App.prototype.transferir = function () {
        console.log("\nTransferência:");
        var numeroOrigem = this.input("Digite o número da conta de origem: ");
        var numeroDestino = this.input("Digite o número da conta de destino: ");
        var valor = parseFloat(this.input("Digite o valor da transferência: "));
        this.banco.transferir(numeroOrigem, numeroDestino, valor);
        console.log("Transferência realizada.");
        console.log("\nExtrato da conta de origem:");
        this.exibirExtrato(numeroOrigem);
        console.log("\nExtrato da conta de destino:");
        this.exibirExtrato(numeroDestino);
    };
    App.prototype.consultarConta = function () {
        console.log("\nConsultar conta:");
        var numero = this.input("Digite o número da conta: ");
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
                /*
                        console.log("Contas associadas:");
                        cliente.contas.forEach((c) =>
                            console.log(`- Conta: ${c.numero}, Saldo: ${c.saldo}`)
                        );
                        */
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
        var numero = this.input("Digite o número da conta: ");
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
        var nome = this.input("Digite o nome do cliente: ");
        var cpf = this.input("Digite o CPF do cliente: ");
        var dataNascimento = new Date(this.input("Digite a data de nascimento (AAAA-MM-DD): "));
        var cliente = new banco_1.Cliente(nome, cpf, dataNascimento);
        this.banco.inserirCliente(cliente);
        console.log("Cliente cadastrado com sucesso!");
    };
    App.prototype.consultarCliente = function () {
        console.log("\nConsultar cliente:");
        var cpf = this.input("Digite o CPF do cliente: ");
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
        var numeroConta = this.input("Digite o número da conta: ");
        var cpfCliente = this.input("Digite o CPF do cliente: ");
        this.banco.associarContaCliente(numeroConta, cpfCliente);
        console.log("Conta associada ao cliente com sucesso!");
    };
    App.prototype.totalizarSaldoCliente = function () {
        console.log("\nTotalizar saldo por cliente:");
        var cpfCliente = this.input("Digite o CPF do cliente: ");
        var total = this.banco.totalizarSaldoCliente(cpfCliente);
        console.log("Total: " + total);
    };
    App.prototype.mudarTitularidade = function () {
        console.log("\nMudar titularidade de conta: ");
        var cpfAlvo = this.input("Digite o cpf do cliente que possui a conta: ");
        var cpfDestino = this.input("Digite o cpf do cliente que ira receber a conta: ");
        var numeroConta = this.input("Digite o numero da conta que ira ser transferida: ");
        this.banco.mudarTitularidadeDeConta(cpfAlvo, cpfDestino, numeroConta);
        console.log("Conta alterada com sucesso!");
    };
    App.prototype.excluirCliente = function () {
        console.log("\nExcluir cliente: ");
        var cpfCliente = this.input("Digite o cpf do cliente que sera excluido: ");
        this.banco.excluirCliente(cpfCliente);
        console.log("Cliente excluido com sucesso!");
    };
    App.prototype.excluirContaDesassociarCliente = function () {
        console.log("\nExcluir conta: ");
        var cpfCliente = this.input("Digite o cpf do cliente que sera excluido: ");
        this.banco.excluirCliente(cpfCliente);
        console.log("Conta excluido com sucesso!");
    };
    App.prototype.listarContasSemCliente = function () {
        console.log("\nListar contas sem cliente: ");
        var contasSemCliente = this.banco.retornarContasSemCliente();
        for (var i = 0; i < contasSemCliente.length; i++) {
            this.banco.consultarConta(contasSemCliente[i].numero);
        }
        this.associarContaCliente();
    };
    App.prototype.realizarOrdemBancaria = function () {
        console.log("\nRealizar ordem bancaria: ");
        var numContaOrigem = this.input("Digite o numero da conta de origem: ");
        var arrContasDestino = [];
        var valorPorConta = this.input("Digite o valor a ser transferido para cada conta: ");
        var ler_contas = true;
        var qntdContas = 0;
        console.log("Digite os numeros das contas de destino (para encerrar digite 0): ");
        while (ler_contas) {
            var contaAtual = this.input("Insira o numero da conta ".concat(qntdContas + 1, ": "));
            if (contaAtual === "0") {
                break;
            }
            arrContasDestino.push(contaAtual);
            qntdContas++;
        }
        var foiEfetuada = this.banco.efetuarOrdemBancaria(numContaOrigem, arrContasDestino, valorPorConta);
        if (foiEfetuada) {
            console.log("Tansferencias realizadas com sucesso!");
        }
        else {
            console.log("Falha ao executar transferencias.");
        }
    };
    return App;
}());
var app = new App();
app.menu();
