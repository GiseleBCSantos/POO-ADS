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
    Retangulo.prototype.verificarQuadrado = function () {
        return this.lado1 === this.lado2;
    };
    return Retangulo;
}());
console.log("Retangulo de lados 4 e 5:");
var retangulo = new Retangulo(4, 5);
console.log("A area do retangulo é de: " + retangulo.calcularArea());
console.log("O perimetro do retangulo é de: " + retangulo.calcularPerimetro());
console.log(retangulo.verificarQuadrado() ? "É um quadrado." : "Não é um quadrado.");
console.log("------------------------");
console.log("Retangulo de lados 4 e 4:");
var retanguloQuadrado = new Retangulo(4, 4);
console.log("A area do retangulo é de: " + retanguloQuadrado.calcularArea());
console.log("O perimetro do retangulo é de: " + retanguloQuadrado.calcularPerimetro());
console.log(retanguloQuadrado.verificarQuadrado() ? "É um quadrado." : "Não é um quadrado.");
