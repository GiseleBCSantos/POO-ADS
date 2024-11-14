var Equipamento = /** @class */ (function () {
    function Equipamento() {
        this.ligado = false;
    }
    Equipamento.prototype.liga = function () {
        if (this.ligado) {
            console.log("Equipamento ja esta ligado");
            return;
        }
        this.ligado = true;
    };
    Equipamento.prototype.desliga = function () {
        if (!this.ligado) {
            console.log("Equipamento ja esta desligado");
            return;
        }
        this.ligado = false;
    };
    Equipamento.prototype.inverte = function () {
        this.ligado = !this.ligado;
    };
    Equipamento.prototype.isLigado = function () {
        return this.ligado;
    };
    return Equipamento;
}());
var equipamento = new Equipamento();
console.log(equipamento.isLigado());
equipamento.desliga();
console.log(equipamento.isLigado());
equipamento.liga();
console.log(equipamento.isLigado());
equipamento.liga();
console.log(equipamento.isLigado());
equipamento.inverte();
console.log(equipamento.isLigado());
equipamento.inverte();
console.log(equipamento.isLigado());
