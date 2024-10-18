class SituacaoFinanceira{
    private valorCreditos:number;
    private valorDebitos:number;

    constructor(valorCreditos:number, valorDebitos:number){
        this.valorCreditos = valorCreditos;
        this.valorDebitos = valorDebitos;
    }

    public calcularSaldo(): number{
        return this.valorCreditos - this.valorDebitos;
    }
}

const situacaoFinanceira: SituacaoFinanceira = new SituacaoFinanceira(1000, 200);
console.log(situacaoFinanceira.calcularSaldo())
