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
}

const retangulo = new Retangulo(4, 5);
console.log("A area do retangulo é de: " + retangulo.calcularArea())
