"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Filme = void 0;
class Filme {
    constructor(titulo, genero, duracao, rating, preco) {
        this.titulo = titulo;
        this.genero = genero;
        this.duracao = duracao;
        this.rating = rating;
        this.preco = preco;
    }
    getTitulo() {
        return this.titulo;
    }
    getPreco() {
        return this.preco;
    }
    getRating() {
        return this.rating;
    }
}
exports.Filme = Filme;
