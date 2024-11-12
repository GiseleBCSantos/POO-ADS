class Pessoa{
    private nome: string;
    private payment: number;
    private linguagem: string;

    constructor(nome: string, payment: number, linguagem: string){
        this.nome = nome;
        this.payment = payment;
        this.linguagem = linguagem;
    }

    show_pessoa():void{
        console.log(`
${this.nome}
My payment time is ${this.payment}
and
my preffered language is ${this.linguagem}
`);
    }
}

let ely = new Pessoa("Ely", 120.56, "Typescript")

ely.show_pessoa()
