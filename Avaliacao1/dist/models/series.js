"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Series = void 0;
const EntreterimentoVisual_1 = require("./EntreterimentoVisual");
class Series extends EntreterimentoVisual_1.Visual {
    constructor(nome, genero, duracao, eps, famoso, legal) {
        super();
        this.eps = 0;
        this.famoso = false;
        this.legal = false;
        this.nome = nome;
        this.genero = genero;
        this.duracao = duracao;
        this.eps = eps;
        this.famoso = famoso;
        this.legal = legal;
    }
}
exports.Series = Series;
