var Circulo = /** @class */ (function () {
    function Circulo() {
        this.raio = 0;
        this.PI = 3.14;
    }
    Circulo.prototype.calcularArea = function () {
        return this.PI * Math.pow(this.raio, 2);
    };
    Circulo.prototype.calcularPerimetro = function () {
        return 2 * this.PI * this.raio;
    };
    return Circulo;
}());
