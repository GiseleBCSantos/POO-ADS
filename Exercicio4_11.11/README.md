### 1. Assinale verdadeiro ou falso:
( F ) Objetos são modelos para classes;
( F ) Atributos de uma classe devem ser obrigatoriamente inicializados para que as classes compilem;
( F ) Uma variável declarada dentro de um método deve ser inicializada para que a classe seja compilável;
( V ) Uma variável que seja uma classe declarada em um método é automaticamente inicializada com undefined;
( V ) Construtores são rotinas especiais que servem para inicializar e configurar os objetos no momento da instanciação;
( V ) Construtores não possuem tipo de retorno e podem ou não ter parâmetros;
( V ) Uma classe pode ter várias instâncias.


### 2. Suponha uma classe Hotel que sirva apenas para guardar a quantidade de
solicitações de reservas feitas conforme abaixo:

``` javascript
class Hotel {
quantReservas : number;
adicionarReserva() : void {
this.quantReservas++;
}
}
```
Podemos afirmar que haverá um problema de compilação, pois a variável inteira não
foi inicializada previamente? Justifique.
R: Sim, havera erro de compilacao pois a variavel quantReservas nao foi inicializada, pois no momento que o metodo adicionarReserva for chamado ira ser somado undefined + 1, gerando um erro

### 3. Ainda sobre a classe do exemplo anterior, considere o código abaixo:
``` javascript 
let hotel : Hotel = new Hotel(2);
console.log(hotel.quantReservas);
```
Adicione o construtor que aceite um parâmetro inteiro e faça a inicialização do atributo
quantReservas.
``` javascript
class Hotel{
    private quantReservas:number;

    constructor(quantReservas:number){
        this.quantReservas = quantReservas;
    }
}
```

### 4. Considere a classe Radio e as instruções que fazem seu uso abaixo:
```javascript

class Radio {
volume : number;
constructor(volume : number) {
this.volume = volume;

}
}
let r : Radio = new Radio();
r.volume = 10;
```

Justifique o erro de compilação e proponha uma solução.
- O erro de compilação ocorre devido a inicialização do objeto sem passar o volume como parâmetro (que se tornou obrigatório ao declará-lo no construtor)
- Uma solução é :

```javascript

class Radio {
volume : number;
constructor(volume : number) {
this.volume = volume;

}
}
let r : Radio = new Radio(10);
```


### 5. Considerando o uso da classe Conta apresentada em aula e seu uso abaixo:

``` javascript 
let c1: Conta = new Conta("1",100);
let c2: Conta = new Conta("2",100);
let c3: Conta;
c1 = c2; 
c3 = c1; 
c1.sacar(10); 
c1.transferir(c2,50);
console.log(c1.consultarSaldo());
console.log(c2.consultarSaldo());
console.log(c3.consultarSaldo());
```

#### a. Qual o resultado dos três "prints"? Justifique sua resposta.
R >> 90, 90 e 90. Pois c1 aponta para a variavel c2 ("2", 100) e c3 também. portanto, ao sacar de c1, o saldo é reduzido de c2, que é o mesmo valor pra c1 e c3. Da mesma forma, se transferir de c1 para c2 é o mesmo que se transferir de c2 para c2.

#### b. O que acontece com o objeto para o qual a referência c1 apontava?
R >> Deixa de existir na memória.

### 11. A abordagem da questão 9 é retornar códigos de erro ou acerto. Já a da questão 10 é desconsiderar a alteração. Quais das duas você acha mais correta? Compare com seus códigos escritos em outras disciplinas.
R >> Considerando o contexto de APIs, onde é retornado um codigo para caso a requisição de certo ou errado, imagino que o correto é o da questão 9.