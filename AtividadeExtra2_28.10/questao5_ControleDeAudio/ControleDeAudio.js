var ControleDeAudio = /** @class */ (function () {
    function ControleDeAudio() {
        this.volume = 2;
    }
    ControleDeAudio.prototype.aumentarVolume = function () {
        if (this.volume < 10) {
            this.volume++;
            console.log("Volume aumentado com sucesso. Volume atual: ".concat(this.volume));
        }
        else {
            console.log("Volume está no maximo.");
        }
    };
    ControleDeAudio.prototype.diminuirVolume = function () {
        if (this.volume > 0) {
            this.volume--;
            console.log("Volume diminuido com sucesso. Volume atual: ".concat(this.volume));
        }
        else {
            console.log("Volume está no minimo.");
        }
    };
    ControleDeAudio.prototype.lerVolume = function () {
        console.log("Seu volume est\u00E1 em ".concat(this.volume));
    };
    return ControleDeAudio;
}());
var controleDeAudio = new ControleDeAudio();
controleDeAudio.lerVolume();
for (var i = 0; i < 3; i++) {
    controleDeAudio.diminuirVolume();
}
for (var i = 0; i < 11; i++) {
    controleDeAudio.aumentarVolume();
}
