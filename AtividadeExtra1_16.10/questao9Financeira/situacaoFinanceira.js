var SituacaoFinanceira = /** @class */ (function () {
    function SituacaoFinanceira(valorCreditos, valorDebitos) {
        this.valorCreditos = valorCreditos;
        this.valorDebitos = valorDebitos;
    }
    SituacaoFinanceira.prototype.calcularSaldo = function () {
        return this.valorCreditos - this.valorDebitos;
    };
    return SituacaoFinanceira;
}());
var situacaoFinanceira = new SituacaoFinanceira(1000, 200);
console.log(situacaoFinanceira.calcularSaldo());
