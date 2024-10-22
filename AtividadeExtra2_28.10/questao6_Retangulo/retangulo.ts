class Retangulo {
    lado1: number = 0;
    lado2: number = 0;

    constructor(lado1: number, lado2:number){
        this.lado1 = lado1;
        this.lado2 = lado2;
    }

    calcularArea(): number{
        return this.lado1 * this.lado2;
    }

    calcularPerimetro(): number{
        return this.lado1*2 + this.lado2*2;
    }

    verificarQuadrado(): boolean{
        return this.lado1 === this.lado2;
    }
}

console.log("Retangulo de lados 4 e 5:")
const retangulo = new Retangulo(4, 5);
console.log("A area do retangulo é de: " + retangulo.calcularArea())
console.log("O perimetro do retangulo é de: "+ retangulo.calcularPerimetro())
console.log(retangulo.verificarQuadrado() ? "É um quadrado." : "Não é um quadrado.")

console.log("------------------------")

console.log("Retangulo de lados 4 e 4:")
const retanguloQuadrado = new Retangulo(4, 4);
console.log("A area do retangulo é de: " + retanguloQuadrado.calcularArea())
console.log("O perimetro do retangulo é de: "+ retanguloQuadrado.calcularPerimetro())
console.log(retanguloQuadrado.verificarQuadrado() ? "É um quadrado." : "Não é um quadrado.")


