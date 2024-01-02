"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Filmes = void 0;
const EntreterimentoVisual_1 = require("./EntreterimentoVisual");
class Filmes extends EntreterimentoVisual_1.Visual {
    constructor(nome, genero, duracao, exclusivo, netflix, amazon) {
        super();
        this.ExclusivoCinema = false;
        this.TemNetflix = false;
        this.TemAmazon = false;
        this.nome = nome;
        this.genero = genero;
        this.duracao = duracao;
        this.ExclusivoCinema = exclusivo;
        this.TemNetflix = netflix;
        this.TemAmazon = amazon;
    }
    setExclusivoCinema(ExclusivoCinema) {
        this.ExclusivoCinema = true;
    }
    setNotExclusivoCinema(ExclusivoCinema) {
        this.ExclusivoCinema = false;
    }
    setTemNetflix(TemNetflix) {
        this.TemNetflix = true;
    }
    setNotTemNetflix(TemNetflix) {
        this.TemNetflix = false;
    }
    setTemAmazon(TemAmazon) {
        this.TemAmazon = true;
    }
    setNotTemAmazon(TemAmazon) {
        this.TemAmazon = false;
    }
    getExclusivoCinema() {
        return this.ExclusivoCinema;
    }
    getTemNetflix() {
        return this.TemNetflix;
    }
    getTemAmazon() {
        return this.TemAmazon;
    }
}
exports.Filmes = Filmes;
