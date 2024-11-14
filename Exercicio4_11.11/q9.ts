class Conta {
  numero: String;
  saldo: number;

  constructor(numero: String, saldo: number) {
    this.numero = numero;
    this.saldo = saldo;
  }

  sacar(valor: number): boolean {
    if (this.saldo > valor){
        this.saldo -= valor
        return true
    }
    return false;
  }

  depositar(valor: number): void {
    this.saldo = this.saldo + valor;
  }

  transferir(conta: Conta, valor: number): boolean {
    if (this.saldo < valor){
        return false
    }
    this.saldo -= valor
    conta.saldo += valor
    return true
  }

  consultarSaldo(): number {
    return this.saldo;
  }
}

const conta = new Conta("1234", 500);
  
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

const conta1 = new Conta("1234", 500);
const conta2 = new Conta("5678", 300);

console.log("Saldo conta1 inicial:", conta1.consultarSaldo()); 
console.log("Saldo conta2 inicial:", conta2.consultarSaldo());

console.log("Transferência de 200 da conta1 para conta2:", conta1.transferir(conta2, 200)); 
console.log("Saldo conta1 após transferência:", conta1.consultarSaldo());
console.log("Saldo conta2 após transferência:", conta2.consultarSaldo());

console.log("Transferência de 400 da conta1 para conta2:", conta1.transferir(conta2, 400)); 
console.log("Saldo conta1 após transferência falha:", conta1.consultarSaldo()); 
console.log("Saldo conta2 após transferência falha:", conta2.consultarSaldo()); 