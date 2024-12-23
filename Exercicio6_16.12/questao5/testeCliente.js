"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cliente_1 = require("../questao4/Cliente");
var Conta_1 = require("../questao4/Conta");
var cliente1 = new Cliente_1.Cliente("Gisele Santos", "123.456.789-00", new Date("1990-01-01"));
console.log("Cliente: ".concat(cliente1.getNome));
console.log("CPF: ".concat(cliente1.getCpf));
console.log("Data de Nascimento: ".concat(cliente1.getDataNascimento));
console.log("ID do Cliente: ".concat(cliente1.getId));
var conta1 = new Conta_1.Conta("001", 1000);
var conta2 = new Conta_1.Conta("002", 500);
cliente1.setContas = [conta1, conta2];
console.log("N\u00FAmero de contas do cliente: ".concat(cliente1.getContas.length));
try {
    console.log(cliente1.nome);
}
catch (error) {
    console.error("Erro ao acessar 'nome' diretamente:", error);
}
try {
    console.log(cliente1.cpf);
}
catch (error) {
    console.error("Erro ao acessar 'cpf' diretamente:", error);
}
conta1.depositar(200);
console.log("Saldo da conta 1 ap\u00F3s dep\u00F3sito: ".concat(conta1.getSaldo));
conta2.sacar(100);
console.log("Saldo da conta 2 ap\u00F3s saque: ".concat(conta2.getSaldo));
try {
    console.log(cliente1.contas);
}
catch (error) {
    console.error("Erro ao acessar 'contas' diretamente:", error);
}
