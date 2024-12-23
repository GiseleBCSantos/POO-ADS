"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hora = void 0;
var Hora = /** @class */ (function () {
    function Hora(hora, minuto, segundo) {
        this.hora = hora;
        this.minuto = minuto;
        this.segundo = segundo;
    }
    Hora.prototype.getHora = function () {
        return this.hora;
    };
    Hora.prototype.getMinuto = function () {
        return this.minuto;
    };
    Hora.prototype.getSegundo = function () {
        return this.segundo;
    };
    Hora.prototype.getHorario = function () {
        return "".concat(this.hora, ":").concat(this.minuto, ":").concat(this.segundo);
    };
    return Hora;
}());
exports.Hora = Hora;
