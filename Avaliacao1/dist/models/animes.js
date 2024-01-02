"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animes = void 0;
const EntreterimentoVisual_1 = require("./EntreterimentoVisual");
class Animes extends EntreterimentoVisual_1.Visual {
    constructor(nome, genero, duracao, idioma, eps, origem) {
        super();
        this.idioma = "";
        this.eps = 0;
        this.origem = "";
        this.nome = nome;
        this.genero = genero;
        this.duracao = duracao;
        this.idioma = idioma;
        this.eps = eps;
        this.origem = origem;
    }
    SetIdioma(idioma) {
        this.idioma = idioma;
    }
    SetEps(eps) {
        this.eps = eps;
    }
    SetOrigem(origem) {
        this.origem = origem;
    }
    GetIdioma() {
        return this.idioma;
    }
    GetEps() {
        return this.eps;
    }
    GetOrigem() {
        return this.origem;
    }
}
exports.Animes = Animes;
