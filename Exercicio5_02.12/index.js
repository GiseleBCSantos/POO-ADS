"use strict";
exports.__esModule = true;
var Banco_1 = require("./Banco");
var Cliente_1 = require("./Cliente");
var Conta_1 = require("./Conta");
function executarTesteBanco() {
    console.log("=== Testes de Funcionalidades da Classe Banco ===\n");
    // Criar instância do banco
    var banco = new Banco_1.Banco();
    console.log("Banco inicializado com sucesso.\n");
    // Criar clientes
    console.log("Criando clientes...");
    var cliente1 = new Cliente_1.Cliente(1, "João Silva", "123.456.789-10", new Date("1990-01-01"));
    var cliente2 = new Cliente_1.Cliente(2, "Maria Souza", "987.654.321-00", new Date("1985-05-15"));
    console.log("Clientes criados com sucesso:\n", cliente1, cliente2);
    // Adicionar clientes ao banco
    console.log("\nAdicionando clientes ao banco...");
    banco.inserirCliente(cliente1);
    banco.inserirCliente(cliente2);
    console.log("Clientes adicionados com sucesso.");
    // Criar contas
    console.log("\nCriando contas...");
    var conta1 = new Conta_1.Conta(1, "001", 500); // Conta de João Silva
    var conta2 = new Conta_1.Conta(2, "002", 1000); // Conta de Maria Souza
    var conta3 = new Conta_1.Conta(3, "003", 200); // Conta extra para testes
    console.log("Contas criadas com sucesso:\n", conta1, conta2, conta3);
    // Inserir contas no banco
    console.log("\nInserindo contas no banco...");
    banco.inserirConta(conta1);
    banco.inserirConta(conta2);
    banco.inserirConta(conta3);
    console.log("Contas inseridas no banco com sucesso.");
    // Consultar conta pelo número
    console.log("\nConsultando conta pelo número...");
    var contaConsultada = banco.consultarConta("001");
    console.log("Conta encontrada:", contaConsultada);
    // Associar contas aos clientes
    console.log("\nAssociando contas aos clientes...");
    banco.associarContaCliente("001", "123.456.789-10"); // Associar conta1 a João
    banco.associarContaCliente("002", "987.654.321-00"); // Associar conta2 a Maria
    console.log("Contas associadas com sucesso.");
    // Tentar associar a mesma conta novamente
    console.log("\nTentando associar novamente a conta 001 a João...");
    banco.associarContaCliente("001", "123.456.789-10"); // Deve exibir mensagem de erro
    // Listar contas de um cliente
    console.log("\nListando contas do cliente João Silva...");
    var contasCliente1 = banco.listarContasCliente("123.456.789-10");
    console.log("Contas de João Silva:", contasCliente1);
    console.log("\nListando contas do cliente Maria Souza...");
    var contasCliente2 = banco.listarContasCliente("987.654.321-00");
    console.log("Contas de Maria Souza:", contasCliente2);
    // Consultar cliente pelo CPF
    console.log("\nConsultando cliente pelo CPF...");
    var clienteConsultado = banco.consultarCliente("123.456.789-10");
    console.log("Cliente encontrado:", clienteConsultado);
    // Totalizar saldo de um cliente
    console.log("\nTotalizando saldo do cliente João Silva...");
    var saldoTotalJoao = banco.totalizarSaldoCliente("123.456.789-10");
    console.log("Saldo total de Jo\u00E3o Silva: R$".concat(saldoTotalJoao));
    console.log("\nTotalizando saldo do cliente Maria Souza...");
    var saldoTotalMaria = banco.totalizarSaldoCliente("987.654.321-00");
    console.log("Saldo total de Maria Souza: R$".concat(saldoTotalMaria));
    console.log("\n=== Fim dos testes ===");
}
executarTesteBanco();
