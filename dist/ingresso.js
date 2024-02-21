"use strict";
//classe ingresso que é filha da classe filme
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
exports.Ingresso = void 0;
const typeorm_1 = require("typeorm");
let Ingresso = class Ingresso {
    //setters
    setAssento(assento) {
        this.assento = assento;
    }
    setPreco(preco) {
        this.preco = preco;
    }
    setNome(nome) {
        this.nome_fime = nome;
    }
    setCliente(cliente) {
        this.cliente = cliente;
    }
    //getters
    getAssento() {
        return this.assento;
    }
    getPreco() {
        return this.preco;
    }
    getNome() {
        return this.nome_fime;
    }
    getCliente() {
        return this.cliente;
    }
};
exports.Ingresso = Ingresso;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Ingresso.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Ingresso.prototype, "assento", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Ingresso.prototype, "preco", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Ingresso.prototype, "nome_fime", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Ingresso.prototype, "cliente", void 0);
__decorate([
    (0, typeorm_1.Column)()
    //setters
    ,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], Ingresso.prototype, "setAssento", null);
exports.Ingresso = Ingresso = __decorate([
    (0, typeorm_1.Entity)()
], Ingresso);
