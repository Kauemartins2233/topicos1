"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animes = void 0;
const EntreterimentoVisual_1 = require("./EntreterimentoVisual");
class Animes extends EntreterimentoVisual_1.Visual {
    constructor(nome, genero, idioma, eps, origem) {
        super();
        this.idioma = "";
        this.eps = 0;
        this.origem = "";
        this.nome = nome;
        this.genero = genero;
        this.idioma = idioma;
        this.eps = eps;
        this.origem = origem;
    }
}
exports.Animes = Animes;
