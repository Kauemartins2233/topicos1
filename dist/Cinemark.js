"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cinemark_Plaza = void 0;
const Bilheteria_1 = require("./Bilheteria");
class Cinemark_Plaza extends Bilheteria_1.Bilheteria {
    constructor(nome = "Cinemark", horario_abertura, horario_fechamento) {
        super(nome, horario_abertura, horario_fechamento);
    }
    static getCimemark(horario_abertura, horario_fechamento) {
        if (!Cinemark_Plaza.cinemark) {
            Cinemark_Plaza.cinemark = new Cinemark_Plaza("Cinemark", horario_abertura, horario_fechamento);
        }
        return Cinemark_Plaza.cinemark;
    }
    setNewHorario(horario_abertura, horario_fechamento) {
        this.horario_abertura = horario_abertura;
        this.horario_fechamento = horario_fechamento;
    }
}
exports.Cinemark_Plaza = Cinemark_Plaza;
