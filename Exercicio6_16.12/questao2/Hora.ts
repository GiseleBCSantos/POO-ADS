export class Hora{
    private hora: number;
    private minuto: number;
    private segundo: number;

    constructor(hora:number, minuto:number, segundo:number){
        this.hora = hora;
        this.minuto = minuto;
        this.segundo = segundo;
    }

    public getHora(): number{
        return this.hora;
    }

    public getMinuto(): number{
        return this.minuto;
    }

    public getSegundo(): number{
        return this.segundo
    }

    public getHorario():string{
        return `${this.hora}:${this.minuto}:${this.segundo}`
    }
}