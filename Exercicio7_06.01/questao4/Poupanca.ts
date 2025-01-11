import { Conta } from "./Conta";

export class Poupanca extends Conta {  
    private _taxaDeJuros: number;

    constructor(numero: string, saldo: number, taxaDeJuros: number) {
        super(numero,saldo);
        this._taxaDeJuros = taxaDeJuros;
    }

    public renderJuros() {
        let juros: number = this.saldo * this._taxaDeJuros/100;
        this.depositar(juros);        
    }
}