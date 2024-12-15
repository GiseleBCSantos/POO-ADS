const prompt = require("prompt-sync")();
import { log } from "console";
import { Conta, Cliente, Banco } from "./banco";

class App {
  private banco: Banco;
  private input;

  constructor() {
    this.banco = new Banco();
    this.input = prompt();
  }

  public menu(): void {
    let opcao: string;

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
    
  }

  inserirConta(): void {
    console.log("\nCadastrar conta:");
    let numero: string = this.input("Digite o número da conta: ");
    let saldo: number = parseFloat(
      this.input("Digite o saldo inicial da conta: ")
    );
    let conta: Conta = new Conta(numero, saldo); // Cliente será associado posteriormente
    this.banco.inserirConta(conta);
    console.log("Conta cadastrada com sucesso!");
  }

  sacar(): void {
    console.log("\nSaque:");
    let numero: string = this.input("Digite o número da conta: ");
    let valor: number = parseFloat(this.input("Digite o valor do saque: "));
    this.banco.sacar(numero, valor);
    console.log("Saque realizado.");
    this.exibirExtrato(numero);
  }

  depositar(): void {
    console.log("\nDepósito:");
    let numero: string = this.input("Digite o número da conta: ");
    let valor: number = parseFloat(this.input("Digite o valor do depósito: "));
    this.banco.depositar(numero, valor);
    console.log("Depósito realizado.");
    this.exibirExtrato(numero);
  }

  transferir(): void {
    console.log("\nTransferência:");
    let numeroOrigem: string = this.input(
      "Digite o número da conta de origem: "
    );
    let numeroDestino: string = this.input(
      "Digite o número da conta de destino: "
    );
    let valor: number = parseFloat(
      this.input("Digite o valor da transferência: ")
    );
    this.banco.transferir(numeroOrigem, numeroDestino, valor);
    console.log("Transferência realizada.");
    console.log("\nExtrato da conta de origem:");
    this.exibirExtrato(numeroOrigem);
    console.log("\nExtrato da conta de destino:");
    this.exibirExtrato(numeroDestino);
  }

  consultarConta(): void {
    console.log("\nConsultar conta:");
    let numero: string = this.input("Digite o número da conta: ");
    this.exibirExtrato(numero);
  }

  exibirExtrato(numero: string): void {
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
        /*
                console.log("Contas associadas:");
                cliente.contas.forEach((c) =>
                    console.log(`- Conta: ${c.numero}, Saldo: ${c.saldo}`)
                );
                */
      } else {
        console.log("Cliente: Não associado.");
      }
      console.log("=========================\n");
    } else {
      console.log("Conta não encontrada para exibir extrato.");
    }
  }

  excluirConta(): void {
    console.log("\nExcluir conta:");
    let numero: string = this.input("Digite o número da conta: ");
    this.banco.excluir(numero);
    console.log("Conta excluída com sucesso!");
  }

  totalizacoes(): void {
    console.log("\nTotalizações:");
    console.log(`Quantidade de contas: ${this.banco.obterQuantidadeDeContas()}`);
    console.log(
      `Total depositado no banco: ${this.banco.obterTotalDinheiroDepositado()}`
    );
    console.log(`Média de saldo das contas: ${this.banco.calcularMediaSaldoContas()}`);
  }

  inserirCliente(): void {
    console.log("\nCadastrar cliente:");
    let nome: string = this.input("Digite o nome do cliente: ");
    let cpf: string = this.input("Digite o CPF do cliente: ");
    let dataNascimento: Date = new Date(
      this.input("Digite a data de nascimento (AAAA-MM-DD): ")
    );
    let cliente: Cliente = new Cliente(nome, cpf, dataNascimento);
    this.banco.inserirCliente(cliente);
    console.log("Cliente cadastrado com sucesso!");
  }

  consultarCliente(): void {
    console.log("\nConsultar cliente:");
    let cpf: string = this.input("Digite o CPF do cliente: ");
    let cliente = this.banco.consultarCliente(cpf);
    if (cliente) {
      console.log(
        `Cliente encontrado: ID ${cliente.id}, Nome: ${cliente.nome}, CPF: ${cliente.cpf}`
      );
    } else {
      console.log("Cliente não encontrado.");
    }
  }

  associarContaCliente(): void {
    console.log("\nAssociar conta a cliente:");
    let numeroConta: string = this.input("Digite o número da conta: ");
    let cpfCliente: string = this.input("Digite o CPF do cliente: ");
    this.banco.associarContaCliente(numeroConta, cpfCliente);
    console.log("Conta associada ao cliente com sucesso!");
  }

  totalizarSaldoCliente(): void {
    console.log("\nTotalizar saldo por cliente:");
    let cpfCliente: string = this.input("Digite o CPF do cliente: ");
    let total = this.banco.totalizarSaldoCliente(cpfCliente);
    console.log("Total: " + total);
  }

  mudarTitularidade(): void {
    console.log("\nMudar titularidade de conta: ");
    let cpfAlvo: string = this.input(
      "Digite o cpf do cliente que possui a conta: "
    );
    let cpfDestino: string = this.input(
      "Digite o cpf do cliente que ira receber a conta: "
    );
    let numeroConta: string = this.input(
      "Digite o numero da conta que ira ser transferida: "
    );
    this.banco.mudarTitularidadeDeConta(cpfAlvo, cpfDestino, numeroConta);
    console.log("Conta alterada com sucesso!");
  }

  excluirCliente(): void {
    console.log("\nExcluir cliente: ");
    let cpfCliente: string = this.input(
      "Digite o cpf do cliente que sera excluido: "
    );
    this.banco.excluirCliente(cpfCliente);
    console.log("Cliente excluido com sucesso!");
  }

  excluirContaDesassociarCliente(): void {
    console.log("\nExcluir conta: ");
    let cpfCliente: string = this.input(
      "Digite o cpf do cliente que sera excluido: "
    );
    this.banco.excluirCliente(cpfCliente);
    console.log("Conta excluido com sucesso!");
  }

  listarContasSemCliente(): void {
    console.log("\nListar contas sem cliente: ");
    const contasSemCliente = this.banco.retornarContasSemCliente();
    for (let i = 0; i < contasSemCliente.length; i++) {
      this.banco.consultarConta(contasSemCliente[i].numero);
    }
    this.associarContaCliente();
  }

  realizarOrdemBancaria(): void {
    console.log("\nRealizar ordem bancaria: ");
    const numContaOrigem: string = this.input(
      "Digite o numero da conta de origem: "
    );
    const arrContasDestino: string[] = [];
    const valorPorConta: number = this.input(
      "Digite o valor a ser transferido para cada conta: "
    );
    let ler_contas: boolean = true;
    let qntdContas: number = 0;

    console.log(
      "Digite os numeros das contas de destino (para encerrar digite 0): "
    );

    while (ler_contas) {
      const contaAtual: string = this.input(
        `Insira o numero da conta ${qntdContas + 1}: `
      );
      if (contaAtual === "0") {
        break;
      }
      arrContasDestino.push(contaAtual);
      qntdContas++;
    }

    let foiEfetuada = this.banco.efetuarOrdemBancaria(
      numContaOrigem,
      arrContasDestino,
      valorPorConta
    );

    if (foiEfetuada) {
      console.log("Tansferencias realizadas com sucesso!");
    } else {
      console.log("Falha ao executar transferencias.");
    }
  }
}

let app = new App();
app.menu()

