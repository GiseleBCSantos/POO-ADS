"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cliente_1 = require("../questao4/Cliente");
var Conta_1 = require("../questao4/Conta");
var cliente1 = new Cliente_1.Cliente("Gisele Santos", "123.456.789-00", new Date("1990-01-01"));
cliente1.setId = 1;
var cliente2 = new Cliente_1.Cliente("Carlos Silva", "987.654.321-00", new Date("1985-05-15"));
cliente2.setId = 2;
var conta1 = new Conta_1.Conta("001", 1000);
var conta2 = new Conta_1.Conta("002", 500);
conta1.setCliente = cliente1;
conta2.setCliente = cliente2;
console.log("Saldo da conta 1: ".concat(conta1.getSaldo));
console.log("Saldo da conta 2: ".concat(conta2.getSaldo));
conta1.depositar(500);
console.log("Saldo da conta 1 ap\u00F3s dep\u00F3sito de 500: ".concat(conta1.getSaldo));
conta1.sacar(200);
console.log("Saldo da conta 1 ap\u00F3s saque de 200: ".concat(conta1.getSaldo));
conta1.transferir(conta2, 300);
console.log("Saldo da conta 1 ap\u00F3s transfer\u00EAncia de 300: ".concat(conta1.getSaldo));
console.log("Saldo da conta 2 ap\u00F3s recebimento de 300: ".concat(conta2.getSaldo));
// testeConta.ts:29:24 - error TS2341: Property 'cliente' is private and only accessible within class 'Conta'.
// testeConta.ts:30:24 - error TS2341: Property 'saldo' is private and only accessible within class 'Conta'.
// try{
//     console.log(conta1.cliente);
//     console.log(conta1.saldo);
// } catch (e){
//     console.error("Erro ao acessar atributos.")
// }
