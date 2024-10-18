var Retangulo = /** @class */ (function () {
    function Retangulo(lado1, lado2) {
        this.lado1 = 0;
        this.lado2 = 0;
        this.lado1 = lado1;
        this.lado2 = lado2;
    }
    Retangulo.prototype.calcularArea = function () {
        return this.lado1 * this.lado2;
    };
    Retangulo.prototype.calcularPerimetro = function () {
        return this.lado1 * 2 + this.lado2 * 2;
    };
    return Retangulo;
}());
var retangulo = new Retangulo(4, 5);
console.log("A area do retangulo é de: " + retangulo.calcularArea());
