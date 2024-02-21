"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Filme = void 0;
const typeorm_1 = require("typeorm");
let Filme = class Filme {
    constructor(titulo, genero, duracao, rating, preco) {
        //criar atributo assento que é uma lista de 0 a 10
        this.assento_disponivel = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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
    getDuracao() {
        return this.duracao;
    }
    getGenero() {
        return this.genero;
    }
    getAssento() {
        return this.assento_disponivel;
    }
};
exports.Filme = Filme;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Filme.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Filme.prototype, "titulo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Filme.prototype, "genero", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Filme.prototype, "duracao", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Filme.prototype, "rating", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Filme.prototype, "preco", void 0);
exports.Filme = Filme = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [String, String, Number, Number, Number])
], Filme);
