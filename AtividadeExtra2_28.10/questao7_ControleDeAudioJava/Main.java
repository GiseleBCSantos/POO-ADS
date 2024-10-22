public class Main{
    public static void main(String[] args){
        ControleDeAudio controleDeAudio = new ControleDeAudio();

        for (int i = 0; i < 3; i++){
            controleDeAudio.diminuirVolume();
        }

        for (int i = 0; i < 11; i++){
            controleDeAudio.aumentarVolume();
        }

        controleDeAudio.lerVolume();
    }
}