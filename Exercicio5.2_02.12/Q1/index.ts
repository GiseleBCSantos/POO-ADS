
class Conta {
    numero: string;
    saldo: number;

    constructor(numero: string, saldo: number) {
        this.numero = numero;
        this.saldo = saldo;
    }

    sacar(valor: number): void {
        this.saldo = this.saldo - valor;
    }

    depositar(valor: number): void {
        this.saldo = this.saldo + valor;
    }

    consultarSaldo(): number {
        return this.saldo
    }

    transferir(contaDestino: Conta, valor: number): void {
        // this.saldo = this.saldo - valor;
        // contaDestino.saldo = contaDestino.saldo + valor;

        this.sacar(valor);
        contaDestino.depositar(valor);
    }
}

class Banco {
    contas: Conta[];

    constructor() {
        this.contas = [];
    }

    inserir(conta: Conta): void {
        this.contas.push(conta);
    }

    consultar(numero: string): Conta | null{
        for (let conta of this.contas) {
            if (conta.numero === numero) {
                return conta;
            }
        }
        return null; 
    }
    
    consultarPorIndice(numero: string): number {
        for (let i = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero === numero) {
                return i;
            }
        }
        return -1; 
    }
    

    excluir(numero: string): void {
        let indice = this.consultarPorIndice(numero);
        if (indice !== -1) {
            this.contas.splice(indice, 1);
        }
    }

    sacar(numero: string, valor: number): void {
        let conta = this.consultar(numero);
        if (conta) {
            conta.sacar(valor);
        }
    }

    depositar(numero: string, valor: number): void {
        let conta = this.consultar(numero);
        if (conta) {
            conta.depositar(valor);
        }
    }

    transferir(numeroOrigem: string, numeroDestino: string, valor: number): void {
        let contaOrigem = this.consultar(numeroOrigem);
        let contaDestino = this.consultar(numeroDestino);

        if (contaOrigem && contaDestino) {
            contaOrigem.sacar(valor);
            contaDestino.depositar(valor);
        }
    }

    transferirParaMultiplasContas(numeroOrigem: string, contasDestino: string[], valor: number): void {
        let contaOrigem = this.consultar(numeroOrigem);

        if (contaOrigem) {
            for (let numeroDestino of contasDestino) {
                let contaDestino = this.consultar(numeroDestino);
                if (contaDestino && contaOrigem.consultarSaldo() >= valor) {
                    contaOrigem.sacar(valor);
                    contaDestino.depositar(valor);
                }
            }
        }
    }

    quantidadeDeContas(): number {
        return this.contas.length;
    }

    totalDinheiroDepositado(): number {
        return this.contas.reduce((total, conta) => total + conta.saldo, 0);
    }

    mediaSaldo(): number {
        let quantidade = this.quantidadeDeContas();
        let total = this.totalDinheiroDepositado();
        return quantidade > 0 ? total / quantidade : 0;
    }
}

let banco = new Banco();

banco.inserir(new Conta('111-1', 100));
banco.inserir(new Conta('222-2', 200));
banco.inserir(new Conta('333-3', 300));

console.log("Quantidade de contas:", banco.quantidadeDeContas()); 
console.log("Total depositado:", banco.totalDinheiroDepositado());
console.log("Média do saldo:", banco.mediaSaldo()); 

banco.transferir('111-1', '222-2', 50);
console.log("Saldo conta 111-1:", banco.consultar('111-1')?.consultarSaldo()); 
console.log("Saldo conta 222-2:", banco.consultar('222-2')?.consultarSaldo()); 

banco.transferirParaMultiplasContas('333-3', ['111-1', '222-2'], 50);
console.log("Saldo conta 333-3:", banco.consultar('333-3')?.consultarSaldo()); 
console.log("Saldo conta 111-1:", banco.consultar('111-1')?.consultarSaldo()); 
console.log("Saldo conta 222-2:", banco.consultar('222-2')?.consultarSaldo()); 
