import { Hora } from "./Hora";

console.log("=== Testando a classe Hora ===");

const horaAtual = new Hora(10, 30, 45);

console.log(`Hora: ${horaAtual.getHora()}`); 
console.log(`Minuto: ${horaAtual.getMinuto()}`); 
console.log(`Segundo: ${horaAtual.getSegundo()}`); 

console.log(`Horário completo: ${horaAtual.getHorario()}`); 

