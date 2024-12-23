import { Cliente } from '../questao4/Cliente';
import { Conta } from '../questao4/Conta';

const cliente1 = new Cliente("Gisele Santos", "123.456.789-00", new Date("1990-01-01"));

console.log(`Cliente: ${cliente1.getNome}`);
console.log(`CPF: ${cliente1.getCpf}`);
console.log(`Data de Nascimento: ${cliente1.getDataNascimento}`);
console.log(`ID do Cliente: ${cliente1.getId}`);

const conta1 = new Conta("001", 1000);
const conta2 = new Conta("002", 500);
cliente1.setContas = [conta1, conta2];

console.log(`Número de contas do cliente: ${cliente1.getContas.length}`);

// testeCliente.ts:18:26 - error TS2341: Property 'nome' is private and only accessible within class 'Cliente'.
// try {
//     console.log(cliente1.nome);  
// } catch (error) {
//     console.error("Erro ao acessar 'nome' diretamente:", error);
// }

// testeCliente.ts:24:26 - error TS2341: Property 'cpf' is private and only accessible within class 'Cliente'.
// try {
//     console.log(cliente1.cpf);  
// } catch (error) {
//     console.error("Erro ao acessar 'cpf' diretamente:", error);
//}

conta1.depositar(200);
console.log(`Saldo da conta 1 após depósito: ${conta1.getSaldo}`);

conta2.sacar(100);
console.log(`Saldo da conta 2 após saque: ${conta2.getSaldo}`);


// testeCliente.ts:36:26 - error TS2341: Property 'contas' is private and only accessible within class 'Cliente'.
// try {
//     console.log(cliente1.contas);  
// } catch (error) {
//     console.error("Erro ao acessar 'contas' diretamente:", error);
// }
