class Equipamento{
    private ligado: boolean = false;

    liga(): void{
        if (this.ligado){
            console.log("Equipamento ja esta ligado");
            
            return
        }
        this.ligado = true;
    }

    desliga(): void{
        if (!this.ligado){
            console.log("Equipamento ja esta desligado");
            return 
        }
        this.ligado = false;
    }

    inverte(): void{
        this.ligado = !this.ligado;
    }

    isLigado(): boolean{
        return this.ligado;
    }
}

let equipamento: Equipamento = new Equipamento();

console.log(equipamento.isLigado());

equipamento.desliga()

console.log(equipamento.isLigado());

equipamento.liga()

console.log(equipamento.isLigado());

equipamento.liga()

console.log(equipamento.isLigado());

equipamento.inverte()

console.log(equipamento.isLigado());

equipamento.inverte()

console.log(equipamento.isLigado());