public class ControleDeAudio{
    private int volume = 2;

    public void aumentarVolume(){
        if (this.volume < 10){
            this.volume++;
            System.out.println("Volume aumentado com sucesso! Volume atual: " + this.volume);
        } else{
            System.out.println("Volume já está no máximo.");
        }
    }

    public void diminuirVolume(){
        if (this.volume > 0){
            this.volume--;
            System.out.println("Volume diminuido com sucesso! Volume atual: " + this.volume);
        } else{
            System.out.println("Volume já está no mínimo.");
        }
    }

    public void lerVolume(){
        System.out.println("Volume atual: " + this.volume + ".");
    }
}