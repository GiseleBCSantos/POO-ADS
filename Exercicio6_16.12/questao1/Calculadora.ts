export class Calculadora{
    private operador1:number;
    private operador2:number;

    constructor(operador1:number, operador2:number){
        this.operador1 = operador1
        this.operador2 = operador2
    }

    public getSoma():number{
        return this.operador1 + this.operador2
    }

    public getSubtracao():number{
        return this.operador1 - this.operador2
    }
}