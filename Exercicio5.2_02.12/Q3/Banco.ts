import { Conta } from "./Conta";

export class Banco {
    private contas: Conta[] = [];

    inserir(conta: Conta): void {
        if (this.consultar(conta.numero)) {
            console.log("Conta já existente.");
            return
        }
        this.contas.push(conta);
    }

    consultar(numero: string): Conta | null {
        for (let conta of this.contas) {
            if (conta.numero === numero) {
                return conta;
            }
        }
        return null;
    }

    sacar(numero: string, valor: number): void {
        let conta = this.consultar(numero);
        if (!conta) {
            console.log("Conta não encontrada.");
            return;
        }
        conta.sacar(valor); 
    }

    depositar(numero: string, valor: number): void {
        let conta = this.consultar(numero);
        if (!conta) {
            console.log("Conta não encontrada.");
            return
        }
        conta.depositar(valor);
    }

    transferir(origem: string, destino: string, valor: number): void {
        let contaOrigem = this.consultar(origem);
        let contaDestino = this.consultar(destino);
        if (!contaOrigem || !contaDestino) {
            console.log("Conta de origem ou destino não encontrada.");
            return
        }
        contaOrigem.sacar(valor); 
        contaDestino.depositar(valor);
    }

    excluir(numero: string): void {
        let indice = this.contas.findIndex(conta => conta.numero === numero);
        if (indice === -1) {
            console.log("Conta não encontrada.");
        }
        this.contas.splice(indice, 1);
    }

    quantidadeDeContas(): number {
        return this.contas.length;
    }

    totalDinheiroDepositado(): number {
        return this.contas.reduce((total, conta) => total + conta.consultarSaldo(), 0);
    }

    mediaSaldo(): number {
        if (this.contas.length === 0) return 0;
        return this.totalDinheiroDepositado() / this.quantidadeDeContas();
    }
}
