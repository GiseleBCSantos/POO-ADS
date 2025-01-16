import { Conta } from "./Conta";

export class ContaInvestidor extends Conta{
    private _selic: number = 12.25;

    public investir(valor:number, mesesDeInvestimento: number): number{
        const aliquotaImposto = this.obterImpostoPorTempo(mesesDeInvestimento);
        const lucroBruto = valor * (this._selic/12);
        const impostoSobreLucro = lucroBruto * (aliquotaImposto);
        return lucroBruto - impostoSobreLucro;
    }

    private obterImpostoPorTempo(tempo: number): number {
        if (tempo <= 6) {
            return 22.5/100;
        } else if (tempo <= 12) {
            return 20/100;
        } else if (tempo <= 24) {
            return 17.5/100;
        } else {
            return 15/100;
        }
    }
}