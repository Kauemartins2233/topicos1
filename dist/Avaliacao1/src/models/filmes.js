"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Filmes = void 0;
const EntreterimentoVisual_1 = require("./EntreterimentoVisual");
class Filmes extends EntreterimentoVisual_1.Visual {
    constructor(nome, genero, Views, Likes, Dislikes) {
        super();
        this.Views = 0;
        this.Likes = 0;
        this.Dislikes = 0;
        this.nome = nome;
        this.genero = genero;
        this.Views = Views;
        this.Likes = Likes;
        this.Dislikes = Dislikes;
    }
}
exports.Filmes = Filmes;
