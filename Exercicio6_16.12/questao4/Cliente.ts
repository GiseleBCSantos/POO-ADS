import { Conta } from "./Conta";

export class Cliente {
    private static idNumber = 0;
    private id: number;
    private nome: string;
    private cpf: string;
    private dataNascimento: Date;
    private contas: Conta[];

    constructor(nome: string, cpf: string, dataNascimento: Date) {
        this.id = Cliente.idNumber;
        this.nome = nome;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
        this.contas = [];

        Cliente.idNumber++;
    }

    
    public get getId() : number {
        return this.id
    }
    
    public set setId(v : number) {
        this.id = v;
    }

    
    public get getNome() : string {
        return this.nome;
    }

    
    public set setNome(v : string) {
        this.nome = v;
    }
    

    
    public get getCpf() : string {
        return this.cpf;
    }

    
    public get getDataNascimento() : Date {
        return this.dataNascimento
    }

    
    public get getContas() : Conta[] {
        return this.contas
    }
    
    public set setContas(v : Conta[]) {
        this.contas = v;
    }
    
    
}