export class Conta {
    numero: string;
    saldo: number;

    constructor(numero: string) {
        this.numero = numero;
        this.saldo = 0;
    }

    sacar(valor: number): void {
        if (valor > this.saldo) {
            console.log("Saldo insuficiente.");
            return
        }
        this.saldo -= valor;
    }

    depositar(valor: number): void {
        if (valor <= 0) {
            console.log("Valor de depósito inválido.");
            return
        }
        this.saldo += valor;
    }

    consultarSaldo(): number {
        return this.saldo;
    }

    transferir(contaDestino: Conta, valor: number): void {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }
}