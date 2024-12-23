import { Cliente } from "../questao4/Cliente";
import { Conta } from "../questao4/Conta";

const cliente1 = new Cliente("Gisele Santos", "123.456.789-00", new Date("1990-01-01"));
cliente1.setId = 1;

const cliente2 = new Cliente("Carlos Silva", "987.654.321-00", new Date("1985-05-15"));
cliente2.setId = 2;

const conta1 = new Conta("001", 1000);
const conta2 = new Conta("002", 500);

conta1.setCliente = cliente1;
conta2.setCliente = cliente2;

console.log(`Saldo da conta 1: ${conta1.getSaldo}`);
console.log(`Saldo da conta 2: ${conta2.getSaldo}`);

conta1.depositar(500);
console.log(`Saldo da conta 1 após depósito de 500: ${conta1.getSaldo}`);
conta1.sacar(200);
console.log(`Saldo da conta 1 após saque de 200: ${conta1.getSaldo}`);

conta1.transferir(conta2, 300);
console.log(`Saldo da conta 1 após transferência de 300: ${conta1.getSaldo}`);
console.log(`Saldo da conta 2 após recebimento de 300: ${conta2.getSaldo}`);


// testeConta.ts:29:24 - error TS2341: Property 'cliente' is private and only accessible within class 'Conta'.
// testeConta.ts:30:24 - error TS2341: Property 'saldo' is private and only accessible within class 'Conta'.
// try{
//     console.log(conta1.cliente);
//     console.log(conta1.saldo);
// } catch (e){
//     console.error("Erro ao acessar atributos.")
// }


