import { Conta } from "./Conta";

export class Cliente {
    id: number;
    nome: string;
    cpf: string;
    dataNascimento: Date;
    contas: Conta[];

    constructor(nome: string, cpf: string, dataNascimento: Date) {
        this.id = 0;
        this.nome = nome;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
        this.contas = [];
    }
}