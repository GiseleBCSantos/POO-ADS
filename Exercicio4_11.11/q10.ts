class Jogador {
  private forca: number;
  private nivel: number;
  private pontosAtuais: number;

  constructor(forca: number, nivel: number, pontosAtuais: number) {
    this.forca = forca;
    this.nivel = nivel;
    this.pontosAtuais = pontosAtuais;
  }

  calcularAtaque(): number {
    return this.forca * this.nivel;
  }

  atacar(jogador: Jogador): void {
    if (!jogador.isAlive()) {
      console.log("Jogador ja esta morto");
      return;
    }
    jogador.pontosAtuais -= this.calcularAtaque();
  }

  isAlive(): boolean {
    return this.pontosAtuais > 0;
  }

  toString(): void {
    console.log(
      `Pontos de vida: ${this.pontosAtuais}\nForça: ${this.forca}\nNivel: ${this.nivel}`
    );
  }
}

const jogador1 = new Jogador(10, 5, 100); 
const jogador2 = new Jogador(8, 6, 90); 

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

  if (!jogador2.isAlive()) break;

  console.log("Jogador 2 ataca Jogador 1");
  jogador2.atacar(jogador1);
  jogador1.toString();
}

console.log("\n--- Fim da batalha ---\n");

// Verificando qual jogador tem mais pontos ou está vivo
if (jogador1.isAlive() && !jogador2.isAlive()) {
  console.log("Jogador 1 venceu a batalha!");
} else if (jogador2.isAlive() && !jogador1.isAlive()) {
  console.log("Jogador 2 venceu a batalha!");
} else {
  console.log("A batalha terminou em empate.");
}

// Exibindo situação final dos jogadores
console.log("Situação final dos jogadores:");
console.log("Jogador 1:");
jogador1.toString();
console.log("Jogador 2:");
jogador2.toString();
