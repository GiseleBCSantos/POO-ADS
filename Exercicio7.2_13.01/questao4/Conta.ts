import { Cliente } from "./Cliente";

export class Conta {
    id: number;
    numero: string;
    saldo: number;
    cliente!: Cliente;

    constructor(numero: string, saldo: number) {
        this.id = 0;
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
        return this.saldo
    }

    transferir(contaDestino: Conta, valor: number): void {
        // this.saldo = this.saldo - valor;
        // contaDestino.saldo = contaDestino.saldo + valor;

        this.sacar(valor);
        contaDestino.depositar(valor);
    }
}