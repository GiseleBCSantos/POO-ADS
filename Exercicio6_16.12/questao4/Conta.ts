import { Cliente } from "./Cliente";

export class Conta {
    private static idNumber = 0;
    private id: number;
    private numero: string;
    private saldo: number;
    private cliente!: Cliente;

    constructor(numero: string, saldo: number) {
        this.id = Conta.idNumber;
        this.numero = numero;
        this.saldo = saldo;

        Conta.idNumber++
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

    public get getId(): number{
        return this.id;
    }

    public set setId(id : number) {
        this.id = id;
    }

    public get getNumero(): string{
        return this.numero;
    }

    public get getSaldo(): number{
        return this.saldo;
    }

    public get getCliente(): Cliente{
        return this.cliente;
    }

    
    public set setCliente(v : Cliente) {
        this.cliente = v;
    }
    
}