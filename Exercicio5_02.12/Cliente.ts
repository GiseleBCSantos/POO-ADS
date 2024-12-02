import { Conta } from "./Conta";

export class Cliente {
  private id: number;
  private nome: string;
  private cpf: string;
  private dataNascimento: Date;
  private contas: Conta[];

  constructor(id: number, nome: string, cpf: string, dataNascimento: Date) {
    this.id = id;
    this.nome = nome;
    this.cpf = cpf;
    this.dataNascimento = dataNascimento;
    this.contas = [];
  }

  getCpf(): string {
    return this.cpf;
  }

  getContas(): Conta[] {
    return this.contas;
  }

  getNome(): string {
    return this.nome;
  }

  adicionarConta(conta: Conta): void {
    this.contas.push(conta);
  }
}
