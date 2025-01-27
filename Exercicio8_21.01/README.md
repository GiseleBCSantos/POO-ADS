# Exercicio 8 para Programação Orientada a Objetos

## Questões teóricas serão feitas a seguir no README.md, Questões práticas serão feitas em código nessa mesma pasta.

### 1) Enumere os 3 tipos mais comuns de tratamento de erros e exemplifique com códigos seus ou pesquisados na internet.

#### 1. Tratamento de Erros com Blocos try-catch

O bloco try-catch é utilizado para capturar e tratar exceções que podem ocorrer durante a execução de um código. O bloco try contém o código que pode gerar uma exceção, e o bloco catch captura e trata a exceção.

```typescript
function dividir(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Divisão por zero não é permitida.");
  }
  return a / b;
}

try {
  const resultado = dividir(10, 0);
  console.log("Resultado:", resultado);
} catch (error) {
  console.error("Erro:", error.message);
}
```

#### 2. Retorno de Códigos de Erro

É possível usar códigos de retorno para indicar sucesso ou falha em uma função.

```typescript
type ResultadoDivisao = {
  sucesso: boolean;
  resultado?: number;
  mensagemErro?: string;
};

function dividir(a: number, b: number): ResultadoDivisao {
  if (b === 0) {
    return {
      sucesso: false,
      mensagemErro: "Divisão por zero não é permitida.",
    };
  }
  return { sucesso: true, resultado: a / b };
}

const resultado = dividir(10, 0);

if (!resultado.sucesso) {
  console.error("Erro:", resultado.mensagemErro);
} else {
  console.log("Resultado:", resultado.resultado);
}
```

#### 3. Uso de Exceções Personalizadas

É possível criar exceções personalizadas para tratar erros específicos da aplicação.

```typescript
class ErroSaldoInsuficiente extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ErroSaldoInsuficiente";
  }
}

class ContaBancaria {
  private saldo: number;

  constructor(saldo: number) {
    this.saldo = saldo;
  }

  sacar(valor: number): void {
    if (valor > this.saldo) {
      throw new ErroSaldoInsuficiente(
        "Saldo insuficiente para realizar o saque."
      );
    }
    this.saldo -= valor;
    console.log(`Saque de ${valor} realizado. Novo saldo: ${this.saldo}`);
  }
}

try {
  const conta = new ContaBancaria(100);
  conta.sacar(150); // Isso causará uma exceção personalizada
} catch (error) {
  if (error instanceof ErroSaldoInsuficiente) {
    console.error("Erro:", error.message); // Exibe a mensagem de erro
  } else {
    console.error("Erro desconhecido:", error);
  }
}
```

### 2) Explique por que cada um dos 3 métodos acima possui limitações de uso.

#### 1. Tratamento de Erros com try-catch

Limitações:

- Desempenho: Usar try-catch pode ser mais lento do que outras abordagens, porque o JavaScript/TypeScript precisa preparar o ambiente para capturar exceções. Se você usar try-catch em um loop, por exemplo, pode impactar a performance.
- Complexidade: Se o código dentro do try for muito grande, fica difícil saber exatamente onde o erro ocorreu. Isso pode dificultar a depuração.
- Erros silenciosos: Se você esquecer de tratar o erro no catch, ele pode passar despercebido, causando problemas em outras partes do código.

#### 2. Retorno de Códigos de Erro

Limitações:

- Verboso: Você precisa sempre verificar o valor de retorno da função para saber se deu certo ou não. Isso pode deixar o código cheio de ifs e difícil de ler.
- Propagação de erros: Se uma função chama outra função que retorna códigos de erro, você precisa propagar esses códigos manualmente. Isso pode ser confuso e propenso a erros.
- Falta de contexto: Um código de erro (como -1) não diz muita coisa sobre o que realmente deu errado. Você precisa de uma convenção ou documentação para entender o significado de cada código.

#### 3. Uso de Exceções Personalizadas

Limitações:

- Complexidade: Criar exceções personalizadas pode ser overkill para projetos pequenos ou simples. Às vezes, é mais fácil usar exceções padrão.
- Propagação: Se você não capturar a exceção no lugar certo, ela pode "vazar" e quebrar o programa. Isso exige um bom entendimento do fluxo do código.
- Abuso: Alguns desenvolvedores usam exceções para controlar o fluxo do programa (por exemplo, lançar uma exceção para sair de um loop). Isso é considerado uma má prática, porque exceções são para erros, não para lógica de negócios.

### 3) Com o código repassado, crie duas contas e teste o método transferir de modo que a conta a ser debitada não possua saldo suficiente. Explique o que ocorreu.

```typescript
conta1: Conta = new Conta(1, "111-1", 100);
conta2: Conta = new Conta(2, "111-2", 50);

banco.inserirConta(conta1);
banco.inserirConta(conta2);

try {
  banco.transferir("111-1", "111-2", 150);
  console.log("Transferência realizada com sucesso!");
} catch (error) {
  console.error("Erro durante a transferência:", error.message);
}

console.log("Saldo da Conta 1:", conta1.saldo);
console.log("Saldo da Conta 2:", conta2.saldo);
```

Inicialmente se cria as 2 contas e as insere na instancia de Banco. Após isso é verificado por meio de um bloco try/catch se há alguma exceção para ser tratada. Como no caso apresentado há uma exceção, o código foi para o tratamento de erro e exibiu a mensagem "Erro durante a transferencia: Saldo insuficiente: 100".

### 4) Instancie uma classe App e, caso necessário, crie duas contas. Acesse a opção de transferir com valor alto o suficiente para lançar uma exceção/erro. Verifique que o lançamento da exceção foi “propagado” para o método conta.transferir(), banco.transferir() e App.menu()? Como você avalia a confiabilidade dessa implementação.

A exceção foi propagada com sucesso desde o metodo conta.sacar() até o método app.menu(), e acredito que esta implementação seja confiável pois há a propagação correta, há a integridade dos dados (saldo nao foi debitado) e há um feedback para o usuário do erro em questão.

### 5) Crie um método chamado validaValor(valor) na que lance um erro caso o valor repassado seja menor ou igual a zero ou em formato inválido. Chame o método no construtor da classe conta para validar o saldo inicial. Chame o método também nos métodos sacar e depositar. Reexecute a classe App e chame as opções de menu que aceitam valores referentes a saldo, débito, crédito e transferir. Avalie o tratamento do erro.

```typescript

validaValor(valor: number):void{
    if (valor <= 0){
        throw new Error("Valor inválido: deve ser maior que zero.")
    }
    return valor;
}


// Construtor da classe Conta
constructor(id: number, numero: string, saldo: number) {
    this._id = id;
    this._numero = numero;
    this._saldo = validaValor(saldo);
}

// Método sacar
public sacar(valor: number): void {
    this.validaValor(valor)
    if (this._saldo < valor) {
        throw new Error('Saldo insuficiente:' + this._saldo);
    }

    this._saldo = this._saldo - valor;

}

// Método depositar
public depositar(valor: number): void {
    this.validaValor(valor);
    this._saldo = this._saldo + valor;
}

// Método transferir da classe Banco
public transferir(contaDestino: Conta, valor: number): void {
    this.sacar(valor);
    contaDestino.depositar(valor);
}
```
