class Postagem {
    id: number;
    texto: string;
    quantidadeCurtidas: number;

    constructor(id: number, texto: string) {
        this.id = id;
        this.texto = texto;
        this.quantidadeCurtidas = 0; 
    }

    curtir(): void {
        this.quantidadeCurtidas++;
    }

    toString(): string {
        return `Postagem de ID ${this.id} \n"${this.texto}" \nCurtidas: ${this.quantidadeCurtidas}\n`;
    }
}

class Microblog {
    postagens: Postagem[];

    constructor() {
        this.postagens = [];
    }

    adicionarPostagem(postagem: Postagem): void {
        this.postagens.push(postagem);
    }

    excluirPostagem(id: number): void {
        let indice = -1;
        for (let i = 0; i < this.postagens.length; i++) {
            if (this.postagens[i].id === id) {
                indice = i;
                break;
            }
        }
        if (indice !== -1) {
            this.postagens.splice(indice, 1);
        }
    }

    postagemMaisCurtida(): Postagem | null {
        if (this.postagens.length === 0) {
            return null;
        }
        let maisCurtida = this.postagens[0];
        for (let i = 1; i < this.postagens.length; i++) {
            if (this.postagens[i].quantidadeCurtidas > maisCurtida.quantidadeCurtidas) {
                maisCurtida = this.postagens[i];
            }
        }
        return maisCurtida;
    }

    curtirPostagem(id: number): void {
        for (let postagem of this.postagens) {
            if (postagem.id === id) {
                postagem.curtir();
                break;
            }
        }
    }

    toString(): string {
        if (this.postagens.length === 0) {
            return "Nenhuma postagem disponível.";
        }
        let result = "";
        for (let postagem of this.postagens) {
            result += postagem.toString() + "\n";
        }
        return result.trim();
    }
}

const microblog = new Microblog();

const postagem1 = new Postagem(1, "Aprendendo TypeScript!");
const postagem2 = new Postagem(2, "Hoje é um ótimo dia para programar.");
const postagem3 = new Postagem(3, "Dicas de produtividade para devs.");

microblog.adicionarPostagem(postagem1);
microblog.adicionarPostagem(postagem2);
microblog.adicionarPostagem(postagem3);

console.log("Postagens iniciais:");
console.log(microblog.toString());

microblog.curtirPostagem(1);
microblog.curtirPostagem(1);
microblog.curtirPostagem(2);

console.log("\nPostagens após curtidas:");
console.log(microblog.toString());

console.log("\nPostagem mais curtida:");
console.log(microblog.postagemMaisCurtida()?.toString());

microblog.excluirPostagem(2);

console.log("\nPostagens após exclusão:");
console.log(microblog.toString());
