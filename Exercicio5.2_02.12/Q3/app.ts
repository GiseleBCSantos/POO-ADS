const prompt = require("prompt-sync")();
import { log } from "console";
import { Banco } from "./Banco";
import { Conta } from "./Conta";

let input = prompt;
let banco = new Banco();


function inserir(): void {
    console.log("\nCadastrar conta\n");
    let numero: string = input("Digite o número da conta: ");
    let conta = new Conta(numero);
    banco.inserir(conta);
    console.log("Conta cadastrada com sucesso!");
}

function consultar(): void {
    console.log("\nConsultar conta\n");
    let numero: string = input("Digite o número da conta: ");
    let conta = banco.consultar(numero);
    if (conta) {
        console.log(`Conta: ${conta.numero} | Saldo: ${conta.consultarSaldo()}`);
    }
}

function sacar(): void {
    console.log("\nSaque\n");
    let numero: string = input("Digite o número da conta: ");
    let valor: number = parseFloat(input("Digite o valor do saque: "));
    banco.sacar(numero, valor);
}

function depositar(): void {
    console.log("\nDepósito\n");
    let numero: string = input("Digite o número da conta: ");
    let valor: number = parseFloat(input("Digite o valor do depósito: "));
    banco.depositar(numero, valor);
}

function excluir(): void {
    console.log("\nExcluir conta\n");
    let numero: string = input("Digite o número da conta: ");
    banco.excluir(numero);
    console.log("Conta excluída, se existente.");
}

function transferir(): void {
    console.log("\nTransferência\n");
    let origem: string = input("Digite o número da conta de origem: ");
    let destino: string = input("Digite o número da conta de destino: ");
    let valor: number = parseFloat(input("Digite o valor da transferência: "));
    banco.transferir(origem, destino, valor);
}

function totalizacoes(): void {
    console.log("\nTotalizações\n");
    console.log(`Total de contas: ${banco.quantidadeDeContas()}`);
    console.log(`Saldo total: ${banco.totalDinheiroDepositado()}`);
    console.log(`Saldo médio: ${banco.mediaSaldo()}`);
}

function mostrarMenu():void{
    console.log("1 - Inserir \n2 - Consultar \n3 - Sacar \n4 - Depositar \n5 - Excluir \n6 - Transferir \n7 - Totalizações \n0 - Sair");
    
}

// Menu interativo
let opcao: string = "";
do {
    console.log("\nBem vindo\nDigite uma opção:");
    mostrarMenu();
    opcao = input("Opção: ");
    switch (opcao) {
        case "1":
            inserir();
            break;
        case "2":
            consultar();
            break;
        case "3":
            sacar();
            break;
        case "4":
            depositar();
            break;
        case "5":
            excluir();
            break;
        case "6":
            transferir();
            break;
        case "7":
            totalizacoes();
            break;
        case "0":
            console.log("Aplicação encerrada.");
            break;
        default:
            console.log("Opção inválida!");
    }
    if (opcao !== "0") input("\nPressione <enter> para continuar...");
} while (opcao !== "0");
