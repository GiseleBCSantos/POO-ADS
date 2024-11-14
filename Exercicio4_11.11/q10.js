var Jogador = /** @class */ (function () {
    function Jogador(forca, nivel, pontosAtuais) {
        this.forca = forca;
        this.nivel = nivel;
        this.pontosAtuais = pontosAtuais;
    }
    Jogador.prototype.calcularAtaque = function () {
        return this.forca * this.nivel;
    };
    Jogador.prototype.atacar = function (jogador) {
        if (!jogador.isAlive()) {
            console.log("Jogador ja esta morto");
            return;
        }
        jogador.pontosAtuais -= this.calcularAtaque();
    };
    Jogador.prototype.isAlive = function () {
        return this.pontosAtuais > 0;
    };
    Jogador.prototype.toString = function () {
        console.log("Pontos de vida: ".concat(this.pontosAtuais, "\nFor\u00E7a: ").concat(this.forca, "\nNivel: ").concat(this.nivel));
    };
    return Jogador;
}());
var jogador1 = new Jogador(10, 5, 100); // Força: 10, Nível: 5, Pontos de vida: 100
var jogador2 = new Jogador(8, 6, 90); // Força: 8, Nível: 6, Pontos de vida: 90
console.log("Situação inicial dos jogadores:");
console.log("Jogador 1:");
jogador1.toString();
console.log("Jogador 2:");
jogador2.toString();
console.log("\n--- Início da batalha ---\n");
// Turno 1: Jogador 1 ataca Jogador 2
console.log("Jogador 1 ataca Jogador 2");
jogador1.atacar(jogador2);
jogador2.toString();
// Turno 2: Jogador 2 ataca Jogador 1
console.log("Jogador 2 ataca Jogador 1");
jogador2.atacar(jogador1);
jogador1.toString();
// Repetindo ataques até um jogador morrer
while (jogador1.isAlive() && jogador2.isAlive()) {
    console.log("\n--- Novo turno ---\n");
    console.log("Jogador 1 ataca Jogador 2");
    jogador1.atacar(jogador2);
    jogador2.toString();
    if (!jogador2.isAlive())
        break;
    console.log("Jogador 2 ataca Jogador 1");
    jogador2.atacar(jogador1);
    jogador1.toString();
}
console.log("\n--- Fim da batalha ---\n");
// Verificando qual jogador tem mais pontos ou está vivo
if (jogador1.isAlive() && !jogador2.isAlive()) {
    console.log("Jogador 1 venceu a batalha!");
}
else if (jogador2.isAlive() && !jogador1.isAlive()) {
    console.log("Jogador 2 venceu a batalha!");
}
else {
    console.log("A batalha terminou em empate.");
}
// Exibindo situação final dos jogadores
console.log("Situação final dos jogadores:");
console.log("Jogador 1:");
jogador1.toString();
console.log("Jogador 2:");
jogador2.toString();
