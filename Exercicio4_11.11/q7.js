var Triangulo = /** @class */ (function () {
    function Triangulo(lado1, lado2, lado3) {
        this.lado1 = lado1;
        this.lado2 = lado2;
        this.lado3 = lado3;
    }
    Triangulo.prototype.segueRegra = function () {
        var regra1 = Math.abs(this.lado2 - this.lado3);
        var regra2 = this.lado1;
        var regra3 = this.lado2 + this.lado3;
        return regra1 < regra2 && regra2 < regra3;
    };
    Triangulo.prototype.ehIsoceles = function () {
        if (!this.segueRegra()) {
            return false;
        }
        return ((this.lado1 === this.lado2 && this.lado1 !== this.lado3) ||
            (this.lado1 === this.lado3 && this.lado1 !== this.lado2) ||
            (this.lado2 === this.lado3 && this.lado2 !== this.lado1));
    };
    Triangulo.prototype.ehEquilatero = function () {
        if (!this.segueRegra()) {
            return false;
        }
        return this.lado1 === this.lado2 && this.lado1 === this.lado3;
    };
    Triangulo.prototype.ehEscaleno = function () {
        if (!this.segueRegra()) {
            return false;
        }
        return (this.lado1 !== this.lado2 &&
            this.lado1 !== this.lado3 &&
            this.lado2 !== this.lado3);
    };
    return Triangulo;
}());
var triangulo1 = new Triangulo(1, 1, 1); // cai na regra
var triangulo2 = new Triangulo(1, 1, 2); // nao cai na regra
var triangulo3 = new Triangulo(1, 2, 3); // nao cai na regra
var triangulo4 = new Triangulo(5, 5, 3); // cai na regra
var triangulo5 = new Triangulo(5, 8, 10); // cai na regra
console.log("Isoceles: ");
console.log(triangulo1.ehIsoceles());
console.log(triangulo2.ehIsoceles());
console.log(triangulo3.ehIsoceles());
console.log(triangulo4.ehIsoceles());
console.log(triangulo5.ehIsoceles());
console.log("Equilateros: ");
console.log(triangulo1.ehEquilatero());
console.log(triangulo2.ehEquilatero());
console.log(triangulo3.ehEquilatero());
console.log(triangulo4.ehEquilatero());
console.log(triangulo5.ehEquilatero());
console.log("Escaleno: ");
console.log(triangulo1.ehEscaleno());
console.log(triangulo2.ehEscaleno());
console.log(triangulo3.ehEscaleno());
console.log(triangulo4.ehEscaleno());
console.log(triangulo5.ehEscaleno());
console.log("Regra: ");
console.log(triangulo1.segueRegra());
console.log(triangulo2.segueRegra());
console.log(triangulo3.segueRegra());
console.log(triangulo4.segueRegra());
console.log(triangulo5.segueRegra());
