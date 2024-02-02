"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Series = void 0;
const EntreterimentoVisual_1 = require("./EntreterimentoVisual");
class Series extends EntreterimentoVisual_1.Visual {
    constructor(nome, genero, eps, temps) {
        super();
        this.eps = 0;
        this.temps = 0;
        this.nome = nome;
        this.genero = genero;
        this.eps = eps;
        this.temps = temps;
    }
}
exports.Series = Series;
