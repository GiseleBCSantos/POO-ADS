"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Calculadora_1 = require("./Calculadora");
console.log("=== Testando a classe Calculadora ===");
var calc = new Calculadora_1.Calculadora(10, 5);
var resultadoSoma = calc.getSoma();
console.log("Soma (10 + 5): ".concat(resultadoSoma));
var resultadoSubtracao = calc.getSubtracao();
console.log("Subtra\u00E7\u00E3o (10 - 5): ".concat(resultadoSubtracao));
// Erro exibido para o seguinte codigo: app.ts:14:26 - error TS2341: Property 'operador1' is private and only accessible within class 'Calculadora'.
// try{
//     console.log(calc.operador1);
// } catch (error){
//     console.error()
// }
