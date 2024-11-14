var Conta = /** @class */ (function () {
    function Conta(numero, saldo) {
        this.numero = numero;
        this.saldo = saldo;
    }
    Conta.prototype.sacar = function (valor) {
        if (this.saldo > valor) {
            this.saldo -= valor;
            return true;
        }
        return false;
    };
    Conta.prototype.depositar = function (valor) {
        this.saldo = this.saldo + valor;
    };
    Conta.prototype.transferir = function (conta, valor) {
        if (this.saldo < valor) {
            return false;
        }
        this.saldo -= valor;
        conta.saldo += valor;
        return true;
    };
    Conta.prototype.consultarSaldo = function () {
        return this.saldo;
    };
    return Conta;
}());
var conta = new Conta("1234", 500);
console.log("Saldo inicial:", conta.consultarSaldo());
console.log("Saque 200:", conta.sacar(200));
console.log("Saldo após saque de 200:", conta.consultarSaldo());
console.log("Saque 400:", conta.sacar(400));
console.log("Saldo após saque falho:", conta.consultarSaldo());
console.log("Saldo inicial:", conta.consultarSaldo());
conta.depositar(300);
console.log("Saldo após depósito de 300:", conta.consultarSaldo());
conta.depositar(0);
console.log("Saldo após depósito de 0:", conta.consultarSaldo());
var conta1 = new Conta("1234", 500);
var conta2 = new Conta("5678", 300);
console.log("Saldo conta1 inicial:", conta1.consultarSaldo());
console.log("Saldo conta2 inicial:", conta2.consultarSaldo());
console.log("Transferência de 200 da conta1 para conta2:", conta1.transferir(conta2, 200));
console.log("Saldo conta1 após transferência:", conta1.consultarSaldo());
console.log("Saldo conta2 após transferência:", conta2.consultarSaldo());
console.log("Transferência de 400 da conta1 para conta2:", conta1.transferir(conta2, 400));
console.log("Saldo conta1 após transferência falha:", conta1.consultarSaldo());
console.log("Saldo conta2 após transferência falha:", conta2.consultarSaldo());
