"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prompt = require("prompt-sync")();
var Banco_1 = require("./Banco");
var Conta_1 = require("./Conta");
var input = prompt;
var banco = new Banco_1.Banco();
function inserir() {
    console.log("\nCadastrar conta\n");
    var numero = input("Digite o número da conta: ");
    var conta = new Conta_1.Conta(numero);
    banco.inserir(conta);
    console.log("Conta cadastrada com sucesso!");
}
function consultar() {
    console.log("\nConsultar conta\n");
    var numero = input("Digite o número da conta: ");
    var conta = banco.consultar(numero);
    if (conta) {
        console.log("Conta: ".concat(conta.numero, " | Saldo: ").concat(conta.consultarSaldo()));
    }
}
function sacar() {
    console.log("\nSaque\n");
    var numero = input("Digite o número da conta: ");
    var valor = parseFloat(input("Digite o valor do saque: "));
    banco.sacar(numero, valor);
}
function depositar() {
    console.log("\nDepósito\n");
    var numero = input("Digite o número da conta: ");
    var valor = parseFloat(input("Digite o valor do depósito: "));
    banco.depositar(numero, valor);
}
function excluir() {
    console.log("\nExcluir conta\n");
    var numero = input("Digite o número da conta: ");
    banco.excluir(numero);
    console.log("Conta excluída, se existente.");
}
function transferir() {
    console.log("\nTransferência\n");
    var origem = input("Digite o número da conta de origem: ");
    var destino = input("Digite o número da conta de destino: ");
    var valor = parseFloat(input("Digite o valor da transferência: "));
    banco.transferir(origem, destino, valor);
}
function totalizacoes() {
    console.log("\nTotalizações\n");
    console.log("Total de contas: ".concat(banco.quantidadeDeContas()));
    console.log("Saldo total: ".concat(banco.totalDinheiroDepositado()));
    console.log("Saldo m\u00E9dio: ".concat(banco.mediaSaldo()));
}
function mostrarMenu() {
    console.log("1 - Inserir \n2 - Consultar \n3 - Sacar \n4 - Depositar \n5 - Excluir \n6 - Transferir \n7 - Totalizações \n0 - Sair");
}
// Menu interativo
var opcao = "";
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
    if (opcao !== "0")
        input("\nPressione <enter> para continuar...");
} while (opcao !== "0");
