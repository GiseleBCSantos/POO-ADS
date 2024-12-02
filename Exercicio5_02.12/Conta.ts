import { Cliente } from "./Cliente";

export class Conta {
  private id: number;
  numero: string;
  private saldo: number;
  private cliente: Cliente;

  constructor(id: number, numero: string, saldo: number) {
    this.id = id;
    this.numero = numero;
    this.saldo = saldo;
  }

  sacar(valor: number): void {
    this.saldo = this.saldo - valor;
  }

  depositar(valor: number): void {
    this.saldo = this.saldo + valor;
  }

  consultarSaldo(): number {
    return this.saldo;
  }

  transferir(contaDestino: Conta, valor: number): void {
    this.sacar(valor);
    contaDestino.depositar(valor);
  }

  getNumero(): string {
    return this.numero;
  }

  getSaldo(): number {
    return this.saldo;
  }
}
