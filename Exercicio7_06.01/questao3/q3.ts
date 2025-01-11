import { Calculadora } from '../questao2/q2.js'

class CalculadoraCientifica extends Calculadora {

    constructor(operador1: number, operador2: number){
        super(operador1, operador2)
    }

    exponenciar():number{
        return this._operador1**this._operador2
    }
}

function main(){
    const calculadora: CalculadoraCientifica = new CalculadoraCientifica(2, 5);
    const resultado = calculadora.exponenciar()
    
    console.log(resultado);
}

main()