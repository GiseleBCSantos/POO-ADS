import { Cliente } from "./Cliente";
import { Conta } from "./Conta";

export class Banco {
  private contas: Conta[];
  private clientes: Cliente[];

  constructor() {
    this.contas = [];
    this.clientes = [];
  }

  inserir(conta: Conta) {
    this.contas.push(conta);
  }

  consultarConta(numero: string): Conta {
    let contaProcurada!: Conta;

    for (let conta of this.contas) {
      if (conta.numero == numero) {
        contaProcurada = conta;
        break;
      }
    }

    return contaProcurada;
  }

  inserirCliente(cliente: Cliente): void {
    let canAdd = true;

    for (let clienteAtual of this.clientes) {
      if (clienteAtual.getCpf() === cliente.getCpf()) {
        canAdd = false;
        break;
      }
    }

    if (canAdd) {
      this.clientes.push(cliente);
    } else {
      console.log("Cliente já está cadastrado");
    }
  }

  consultarCliente(cpf: string): Cliente {
    let clienteProcurado!: Cliente;

    for (let cliente of this.clientes) {
      if (cliente.getCpf() === cpf) {
        clienteProcurado = cliente;
        break;
      }
    }
    return clienteProcurado;
  }

  associarContaCliente(numeroConta: string, cpfCliente: string): void {
    let cliente = this.consultarCliente(cpfCliente);
    let contasDoCliente = cliente.getContas();

    let possuiConta = false;
    for (let conta of contasDoCliente) {
      if (conta.getNumero() === numeroConta) {
        possuiConta = true;
        break;
      }
    }

    if (possuiConta) {
      console.log("Cliente já possui essa conta");
    } else {
      let conta = this.consultarConta(numeroConta);
      cliente.adicionarConta(conta);
    }
  }

  listarContasCliente(cpf: string): Conta[] {
    let cliente = this.consultarCliente(cpf);
    return cliente.getContas();
  }

  totalizarSaldoCliente(cpf: string): number {
    let contasCliente: Conta[] = this.listarContasCliente(cpf);
    let saldo = 0;

    for (let conta of contasCliente) {
      saldo += conta.getSaldo();
    }

    return saldo;
  }

  inserirConta(conta: Conta): void {
    let canAdd = true;

    for (let contaAtual of this.contas) {
      if (contaAtual.getNumero() === conta.getNumero()) {
        canAdd = false;
        break;
      }
    }

    if (canAdd) {
      this.contas.push(conta);
    } else {
      console.log("Conta já está cadastrado");
    }
  }
}
