"use strict";
class Pessoa {
    constructor(nome, payment, linguagem) {
        this.nome = nome;
        this.payment = payment;
        this.linguagem = linguagem;
    }
    show_pessoa() {
        console.log(`
${this.nome}
My payment time is ${this.payment}
and
my preffered language is ${this.linguagem}
`);
    }
}
let ely = new Pessoa("Ely", 120.56, "Typescript");
ely.show_pessoa();
