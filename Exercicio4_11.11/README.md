1. Assinale verdadeiro ou falso:
( F ) Objetos são modelos para classes;
( F ) Atributos de uma classe devem ser obrigatoriamente inicializados para que as classes compilem;
( F ) Uma variável declarada dentro de um método deve ser inicializada para que a classe seja compilável;
( V ) Uma variável que seja uma classe declarada em um método é automaticamente inicializada com undefined;
( V ) Construtores são rotinas especiais que servem para inicializar e configurar os objetos no momento da instanciação;
( V ) Construtores não possuem tipo de retorno e podem ou não ter parâmetros;
( V ) Uma classe pode ter várias instâncias.


2. Suponha uma classe Hotel que sirva apenas para guardar a quantidade de
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

3. Ainda sobre a classe do exemplo anterior, considere o código abaixo:
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

4. Considere a classe Radio e as instruções que fazem seu uso abaixo:
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