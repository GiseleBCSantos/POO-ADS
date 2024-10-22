class ControleDeAudio{
    private volume: number = 2;

    public aumentarVolume(): void{
        if(this.volume < 10){
            this.volume++;
            console.log(`Volume aumentado com sucesso. Volume atual: ${this.volume}`)
        } else{
            console.log("Volume está no maximo.")
        }
    }

    public diminuirVolume(): void{
        if(this.volume > 0){
            this.volume--;
            console.log(`Volume diminuido com sucesso. Volume atual: ${this.volume}`)
        } else{
            console.log("Volume está no minimo.")
        }
    }

    public lerVolume(): void{
        console.log(`Seu volume está em ${this.volume}`)
    }
}

let controleDeAudio: ControleDeAudio = new ControleDeAudio();

controleDeAudio.lerVolume()

for (let i = 0; i < 3; i++){
    controleDeAudio.diminuirVolume()
}

for (let i = 0; i < 11;i++){
    controleDeAudio.aumentarVolume()
}