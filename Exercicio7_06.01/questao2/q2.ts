export class Calculadora{
    protected _operador1:number;
    protected _operador2:number;

    constructor(operador1:number, operador2:number){
        this._operador1 = operador1
        this._operador2 = operador2
    }

    public getSoma():number{
        return this._operador1 + this._operador2
    }
}

function main(){
    const calculadora: Calculadora = new Calculadora(1, 5);
    const somar = calculadora.getSoma()
    
    console.log(somar);
}

main()

