import { Cliente } from "./Cliente";
import { Conta } from "./Conta";

export class Banco {
    contas: Conta[];
    clientes: Cliente[];
    idClienteAtual: number;
    idContaAtual: number;

    constructor() {
        this.contas = [];
        this.clientes = [];
        this.idClienteAtual = 0;
        this.idContaAtual = 0;
    }

    inserirConta(conta: Conta) {
        conta.id = this.idContaAtual++;
        this.contas.push(conta);
    }

    consultarConta(numero: string): Conta {
        let contaProcurada!: Conta;

        for (let conta of this.contas) {
            if (conta.numero == numero ) {
                contaProcurada = conta;
                break;
            }
        }

        return contaProcurada;
    }

    consultarContaPorIndice(numero: string): number {
        let indiceProcurado: number = -1;

        for (let i = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero == numero) {
                indiceProcurado = i;
                break;
            }
        }

        return indiceProcurado;
    }

    excluir(numero: string): void {
        let indiceProcurado: number =
            this.consultarContaPorIndice(numero);

        if (indiceProcurado != -1) {
            for (let i = indiceProcurado; i < this.contas.length - 1; i++) {
                this.contas[i] = this.contas[i + 1];
            }
            this.contas.pop();
        }
    }

    alterar(conta: Conta): void {
        let contaProcurada: Conta = this.consultarConta(conta.numero);

        if (contaProcurada) {
            contaProcurada = conta;
        }
    }

    inserirCliente(cliente: Cliente): void {
        cliente.id = this.idClienteAtual++
        this.clientes.push(cliente);
    }

    consultarCliente(cpf: string): Cliente {
        let clienteProcurado!: Cliente;

        for (let cliente of this.clientes) {
            if (cliente.cpf == cpf) {
                clienteProcurado = cliente;
            }
        }
        return clienteProcurado;
    }

    sacar(numero: string, valor: number): void {
        let contaProcurada: Conta = this.consultarConta(numero);

        if (contaProcurada) {
            contaProcurada.sacar(valor);
        }
    }

    depositar(numero: string, valor: number): void {
        let contaProcurada: Conta = this.consultarConta(numero);

        if (contaProcurada) {
            contaProcurada.depositar(valor);
        }
    }

    transferir(numeroOrigem: string, numeroDestino: string, valor: number): void {
        let contaOrigem: Conta = this.consultarConta(numeroOrigem);
        let contaDestino: Conta = this.consultarConta(numeroDestino);

        if (contaOrigem && contaDestino) {
            contaOrigem.transferir(contaDestino, valor);
        }
    }


    associarContaCliente(numeroConta: string, cpfCliente: string): void {
        let contaProcurada: Conta = this.consultarConta(numeroConta);
        let clienteProcurado: Cliente = this.consultarCliente(cpfCliente);

        if (contaProcurada && clienteProcurado) {
            contaProcurada.cliente = clienteProcurado;
            clienteProcurado.contas.push(contaProcurada);
        }
    }

    jaExisteContaParaCliente(cliente: Cliente, conta: Conta): boolean {
        let jaExiste: boolean = false;

        if (conta.cliente != null) {
            if (conta.cliente.cpf == cliente.cpf) {
                jaExiste = true;
            } else {
                for (let contaAssociada of cliente.contas) {
                    if (contaAssociada.numero == conta.numero) {
                        jaExiste = true;
                    }
                }
            }
        }

        return jaExiste;
    }

    listarContasCliente(cpf: string): Conta[] {
        let clienteProcurado: Cliente = this.consultarCliente(cpf);
        let contas: Conta[] = [];

        if (clienteProcurado) {
            contas = clienteProcurado.contas;
        }
        return contas;
    }

    totalizarSaldoCliente(cpf: string): number {
        let clienteProcurado: Cliente = this.consultarCliente(cpf);
        let total: number = 0;
        if (clienteProcurado) {
            for (let conta of clienteProcurado.contas) {
                total += conta.saldo
            }
        }

        return total;
    }


    obterQuantidadeDeContas(): number {
        return this.contas.length;
    }


    obterTotalDinheiroDepositado(): number {
        let total: number = 0;

        for (let conta of this.contas) {
            total = total + conta.saldo;
        }
        return total ;
    }


    calcularMediaSaldoContas(): number {
        return this.obterTotalDinheiroDepositado()/this.obterQuantidadeDeContas();
    }

}
