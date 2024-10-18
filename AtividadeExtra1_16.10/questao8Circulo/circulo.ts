class Circulo{
    private raio: number;
    private PI: number = 3.14

    constructor(raio: number){
        this.raio = raio;
    }

    public calcularArea(): number{
        return this.PI * this.raio**2;
    }

    public calcularPerimetro(): number{
        return 2 * this.PI * this.raio
    }
}

const circulo = new Circulo(4);
console.log(circulo.calcularArea())