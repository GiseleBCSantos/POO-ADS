"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Hora_1 = require("./Hora");
console.log("=== Testando a classe Hora ===");
var horaAtual = new Hora_1.Hora(10, 30, 45);
console.log("Hora: ".concat(horaAtual.getHora()));
console.log("Minuto: ".concat(horaAtual.getMinuto()));
console.log("Segundo: ".concat(horaAtual.getSegundo()));
console.log("Hor\u00E1rio completo: ".concat(horaAtual.getHorario()));
