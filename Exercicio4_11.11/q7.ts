class Triangulo {
  lado1: number;
  lado2: number;
  lado3: number;

  constructor(lado1: number, lado2: number, lado3: number) {
    this.lado1 = lado1;
    this.lado2 = lado2;
    this.lado3 = lado3;
  }

  segueRegra(): boolean {
    let regra1: number = Math.abs(this.lado2 - this.lado3);
    let regra2: number = this.lado1;
    let regra3: number = this.lado2 + this.lado3;
    return regra1 < regra2 && regra2 < regra3;
  }

  ehIsoceles(): boolean {
    if (!this.segueRegra()) {
      return false;
    }

    

    return (
      (this.lado1 === this.lado2 && this.lado1 !== this.lado3) ||
      (this.lado1 === this.lado3 && this.lado1 !== this.lado2) ||
      (this.lado2 === this.lado3 && this.lado2 !== this.lado1)
    );
  }

  ehEquilatero(): boolean {
    if (!this.segueRegra()) {
      return false;
    }

    return this.lado1 === this.lado2 && this.lado1 === this.lado3;
  }

  ehEscaleno(): boolean {
    if (!this.segueRegra()) {        
      return false;
    }

    return (
      this.lado1 !== this.lado2 &&
      this.lado1 !== this.lado3 &&
      this.lado2 !== this.lado3
    );
  }
}

let triangulo1: Triangulo = new Triangulo(1, 1, 1) // cai na regra
let triangulo2: Triangulo = new Triangulo(1, 1, 2) // nao cai na regra
let triangulo3: Triangulo = new Triangulo(1, 2, 3) // nao cai na regra
let triangulo4: Triangulo = new Triangulo(5, 5, 3) // cai na regra
let triangulo5: Triangulo = new Triangulo(5, 8, 10) // cai na regra


    
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








