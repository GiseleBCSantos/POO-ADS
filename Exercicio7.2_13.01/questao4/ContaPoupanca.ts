import { Conta } from "./Conta";

export class Poupanca extends Conta {  
    private _taxaDeJuros: number = 0.7;



    public renderJuros() {
        let juros: number = this.saldo * this._taxaDeJuros/100;
        this.depositar(juros);        
    }
}