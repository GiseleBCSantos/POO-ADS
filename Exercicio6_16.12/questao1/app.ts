import {Calculadora} from "./Calculadora"

console.log("=== Testando a classe Calculadora ===");

    const calc = new Calculadora(10, 5);

    const resultadoSoma = calc.getSoma();
    console.log(`Soma (10 + 5): ${resultadoSoma}`); 

    const resultadoSubtracao = calc.getSubtracao();
    console.log(`Subtração (10 - 5): ${resultadoSubtracao}`);

    // Erro exibido para o seguinte codigo: app.ts:14:26 - error TS2341: Property 'operador1' is private and only accessible within class 'Calculadora'.

    // try{
    //     console.log(calc.operador1);
    // } catch (error){
    //     console.error()
    // }