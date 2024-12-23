import { Cliente} from "./Cliente";
import {Conta} from "./Conta"

export class Banco {
    private contas: Conta[];
    clientes: Cliente[];
    idClienteAtual: number;
    idContaAtual: number;

    constructor() {
        this.contas = [];
        this.clientes = [];
        this.idClienteAtual = 0;
        this.idContaAtual = 0;
    }

    public inserirConta(conta: Conta) {
        conta.setId = this.idContaAtual++;
        this.contas.push(conta);
    }

    public consultarConta(numero: string): Conta {
        let contaProcurada!: Conta;

        for (let conta of this.contas) {
            if (conta.getNumero === numero ) {
                contaProcurada = conta;
                break;
            }
        }

        return contaProcurada;
    }

    private consultarContaPorIndice(numero: string): number {
        let indiceProcurado: number = -1;

        for (let i = 0; i < this.contas.length; i++) {
            if (this.contas[i].getNumero == numero) {
                indiceProcurado = i;
                break;
            }
        }

        return indiceProcurado;
    }

    public excluir(numero: string): void {
        let indiceProcurado: number =
            this.consultarContaPorIndice(numero);

        if (indiceProcurado != -1) {
            for (let i = indiceProcurado; i < this.contas.length - 1; i++) {
                this.contas[i] = this.contas[i + 1];
            }
            this.contas.pop();
        }
    }

    public alterar(conta: Conta): void {
        let contaProcurada: Conta = this.consultarConta(conta.getNumero);

        if (contaProcurada) {
            contaProcurada = conta;
        }
    }

    public inserirCliente(cliente: Cliente): void {
        cliente.setId = this.idClienteAtual++
        this.clientes.push(cliente);
    }

    consultarCliente(cpf: string): Cliente {
        let clienteProcurado!: Cliente;

        for (let cliente of this.clientes) {
            if (cliente.getCpf == cpf) {
                clienteProcurado = cliente;
            }
        }
        return clienteProcurado;
    }

    public sacar(numero: string, valor: number): void {
        let contaProcurada: Conta = this.consultarConta(numero);

        if (contaProcurada) {
            contaProcurada.sacar(valor);
        }
    }

    public depositar(numero: string, valor: number): void {
        let contaProcurada: Conta = this.consultarConta(numero);

        if (contaProcurada) {
            contaProcurada.depositar(valor);
        }
    }

    public transferir(numeroOrigem: string, numeroDestino: string, valor: number): void {
        let contaOrigem: Conta = this.consultarConta(numeroOrigem);
        let contaDestino: Conta = this.consultarConta(numeroDestino);

        if (contaOrigem && contaDestino) {
            contaOrigem.transferir(contaDestino, valor);
        }
    }


    public associarContaCliente(numeroConta: string, cpfCliente: string): void {
        let contaProcurada: Conta = this.consultarConta(numeroConta);
        let clienteProcurado: Cliente = this.consultarCliente(cpfCliente);

        if (contaProcurada && clienteProcurado) {
            contaProcurada.setCliente = clienteProcurado;
            clienteProcurado.getContas.push(contaProcurada);
        }
    }

    public jaExisteContaParaCliente(cliente: Cliente, conta: Conta): boolean {
        let jaExiste: boolean = false;

        if (conta.getCliente != null) {
            if (conta.getCliente.getCpf == cliente.getCpf) {
                jaExiste = true;
            } else {
                for (let contaAssociada of cliente.getContas) {
                    if (contaAssociada.getNumero == conta.getNumero) {
                        jaExiste = true;
                    }
                }
            }
        }

        return jaExiste;
    }

    public listarContasCliente(cpf: string): Conta[] {
        let clienteProcurado: Cliente = this.consultarCliente(cpf);
        let contas: Conta[] = [];

        if (clienteProcurado) {
            contas = clienteProcurado.getContas;
        }
        return contas;
    }

    public totalizarSaldoCliente(cpf: string): number {
        let clienteProcurado: Cliente = this.consultarCliente(cpf);
        let total: number = 0;
        if (clienteProcurado) {
            for (let conta of clienteProcurado.getContas) {
                total += conta.getSaldo
            }
        }

        return total;
    }


    public obterQuantidadeDeContas(): number {
        return this.contas.length;
    }


    public obterTotalDinheiroDepositado(): number {
        let total: number = 0;

        for (let conta of this.contas) {
            total = total + conta.getSaldo;
        }
        return total ;
    }


    public calcularMediaSaldoContas(): number {
        return this.obterTotalDinheiroDepositado()/this.obterQuantidadeDeContas();
    }

    public retirarContaCliente(cpfCliente: string, numeroconta: string) : void {
        const cliente: Cliente = this.consultarCliente(cpfCliente)
        cliente.setContas = cliente.getContas.filter((contaAtual:Conta) => contaAtual.getNumero !== numeroconta && contaAtual)
    }

    public mudarTitularidadeDeConta(cpfClienteAlvo: string, cpfClienteDestino:string, numeroConta: string) : void {
        const clienteAlvo: Cliente = this.consultarCliente(cpfClienteAlvo);
        const clienteDestino: Cliente = this.consultarCliente(cpfClienteDestino);
        const conta: Conta = this.consultarConta(numeroConta);

        if (clienteAlvo && clienteDestino && conta){
            this.retirarContaCliente(clienteAlvo.getCpf, conta.getNumero);
            this.associarContaCliente(clienteDestino.getCpf, conta.getNumero);
        }
    }

    public excluirCliente(cpfCliente: string) : void{
        const cliente: Cliente = this.consultarCliente(cpfCliente);
        const contasDoCliente = this.listarContasCliente(cpfCliente);
        cliente.getContas.map((conta: Conta) => null);
        this.clientes = this.clientes.filter((clienteAtual: Cliente) => clienteAtual !== cliente && clienteAtual)

        for(let i=0; i<contasDoCliente.length; i++){
            this.contas = this.contas.filter((contaAtual: Conta) => contaAtual !== contasDoCliente[i] && contaAtual)
        }
    }

    public excluirConta(cpfCliente: string, numeroConta: string){
        const cliente: Cliente = this.consultarCliente(cpfCliente);
        
        cliente.setContas = cliente.getContas.filter((conta: Conta) => conta.getNumero !== numeroConta && conta);
    }

    public retornarContasSemCliente() : Conta[]{
        const contasSemCliente = this.contas.filter((contaAtual: Conta) => contaAtual.getCliente === undefined && contaAtual)
        return contasSemCliente;
    }

    public efetuarOrdemBancaria(numContaOrigem: string, numContasDestino: string[], valorParaCada: number): boolean{
        const isAllowed = this.consultarConta(numContaOrigem).getSaldo > valorParaCada * numContasDestino.length
        if(isAllowed){
            numContasDestino.forEach((numContaAtual: string) => this.transferir(numContaOrigem, numContaAtual, valorParaCada))
            return isAllowed
        }
        return isAllowed;
    }

}