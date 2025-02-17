const prompt = require("prompt-sync")();
import {Conta} from "./Conta"
import {Cliente} from "./Cliente"
import {Banco} from "./Banco"

import * as fs from "fs"

class App {
    private input = prompt;
    private banco: Banco;

    constructor() {
        this.banco = new Banco();
    }

    public menu(): void {
        let opcao: string = '';

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
                    this.renderJurosPoupanca()
                    break;
                case "13":
                    this.carregarContasDoArquivo()
                    break;
                case "14":
                    this.salvarContasNoArquivo()
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
    }

    private inserirConta(): void {
        console.log("\nCadastrar conta:");
        let numero: string = this.input('Digite o número da conta: ');
        let saldo: number = parseFloat(this.input('Digite o saldo inicial da conta: '));
        let conta: Conta = new Conta(numero, saldo);
        this.banco.inserirConta(conta);
        console.log("Conta cadastrada com sucesso!");
    }

    private sacar(): void {
        console.log("\nSaque:");
        let numero: string = this.input('Digite o número da conta: ');
        let valor: number = parseFloat(this.input('Digite o valor do saque: '));
        this.banco.sacar(numero, valor);
        console.log("Saque realizado.");
        this.exibirExtrato(numero);
    }

    private depositar(): void {
        console.log("\nDepósito:");
        let numero: string = this.input('Digite o número da conta: ');
        let valor: number = parseFloat(this.input('Digite o valor do depósito: '));
        this.banco.depositar(numero, valor);
        console.log("Depósito realizado.");
        this.exibirExtrato(numero);
    }

    private transferir(): void {
        console.log("\nTransferência:");
        let numeroOrigem: string = this.input('Digite o número da conta de origem: ');
        let numeroDestino: string = this.input('Digite o número da conta de destino: ');
        let valor: number = parseFloat(this.input('Digite o valor da transferência: '));
        this.banco.transferir(numeroOrigem, numeroDestino, valor);
        console.log("Transferência realizada.");
        console.log("\nExtrato da conta de origem:");
        this.exibirExtrato(numeroOrigem);
        console.log("\nExtrato da conta de destino:");
        this.exibirExtrato(numeroDestino);
    }

    private consultarConta(): void {
        console.log("\nConsultar conta:");
        let numero: string = this.input('Digite o número da conta: ');
        this.exibirExtrato(numero);
    }

    private exibirExtrato(numero: string): void {
        const conta = this.banco.consultarConta(numero);
        if (conta) {
            const cliente = conta.cliente;
            console.log("\n=== Extrato da Conta ===");
            console.log(`ID: ${conta.id}`);
            console.log(`Número da conta: ${conta.numero}`);
            console.log(`Saldo: ${conta.saldo}`);
            if (cliente) {
                console.log("\n=== Dados do Cliente ===");
                console.log(`ID: ${cliente.id}`);
                console.log(`Nome: ${cliente.nome}`);
                console.log(`CPF: ${cliente.cpf}`);
            } else {
                console.log("Cliente: Não associado.");
            }
            console.log("=========================\n");
        } else {
            console.log("Conta não encontrada para exibir extrato.");
        }
    }

    private excluirConta(): void {
        console.log("\nExcluir conta:");
        let numero: string = this.input('Digite o número da conta: ');
        this.banco.excluir(numero);
        console.log("Conta excluída com sucesso!");
    }

    private totalizacoes(): void {
        console.log("\nTotalizações:");
        console.log(`Quantidade de contas: ${this.banco.obterQuantidadeDeContas()}`);
        console.log(`Total depositado no banco: ${this.banco.obterTotalDinheiroDepositado()}`);
        console.log(`Média de saldo das contas: ${this.banco.calcularMediaSaldoContas()}`);
    }

    private inserirCliente(): void {
        console.log("\nCadastrar cliente:");
        let nome: string = this.input('Digite o nome do cliente: ');
        let cpf: string = this.input('Digite o CPF do cliente: ');
        let dataNascimento: Date = new Date(this.input('Digite a data de nascimento (AAAA-MM-DD): '));
        let cliente: Cliente = new Cliente(nome, cpf, dataNascimento);
        this.banco.inserirCliente(cliente);
        console.log("Cliente cadastrado com sucesso!");
    }

    private consultarCliente(): void {
        console.log("\nConsultar cliente:");
        let cpf: string = this.input('Digite o CPF do cliente: ');
        let cliente = this.banco.consultarCliente(cpf);
        if (cliente) {
            console.log(`Cliente encontrado: ID ${cliente.id}, Nome: ${cliente.nome}, CPF: ${cliente.cpf}`);
        } else {
            console.log("Cliente não encontrado.");
        }
    }

    private associarContaCliente(): void {
        console.log("\nAssociar conta a cliente:");
        let numeroConta: string = this.input('Digite o número da conta: ');
        let cpfCliente: string = this.input('Digite o CPF do cliente: ');
        this.banco.associarContaCliente(numeroConta, cpfCliente);
        console.log("Conta associada ao cliente com sucesso!");
    }

    private totalizarSaldoCliente(): void {
        console.log("\nTotalizar saldo por cliente:");
        let cpfCliente: string = this.input('Digite o CPF do cliente: ');
        let total = this.banco.totalizarSaldoCliente(cpfCliente);
        console.log("Total: " + total);
    }

    private renderJurosPoupanca():void{
        console.log("Render juros de conta poupanca: ");
        let numeroConta:string = this.input("Insira o numero da poupanca: ")
        this.banco.renderJuros(numeroConta)
    }

    private carregarContasDoArquivo(): void {
        try {
            const data = fs.readFileSync('contas.txt', 'utf-8');
            const linhas = data.split('\n');
            for (const linha of linhas) {
                if (linha.trim() !== '') {
                    const [numero, saldo, tipo, taxa] = linha.split(';');
                    const conta = new Conta(numero.trim(), parseFloat(saldo.trim()));
                    this.banco.inserirConta(conta);
                }
            }
            console.log("Contas carregadas com sucesso do arquivo.");
        } catch (error) {
            console.error("Erro ao carregar contas do arquivo:", error.message);
        }
    }

    private salvarContasNoArquivo(): void {
        try {
            const contas = this.banco.obterTodasContas();
            const linhas = contas.map(conta => `${conta.numero}; ${conta.saldo}`);
            fs.writeFileSync('contas.txt', linhas.join('\n'), 'utf-8');
            console.log("Contas salvas com sucesso no arquivo.");
        } catch (error) {
            console.error("Erro ao salvar contas no arquivo:", error.message);
        }
    }
}

const app: App = new App();
app.menu();
