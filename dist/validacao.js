"use strict";
//criar classe validação para validar ingresso
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
exports.Validar = void 0;
const typeorm_1 = require("typeorm");
const Cliente_1 = require("./Cliente");
let Validar = class Validar {
    //criar função para validar se ingresso existe
    validarIngresso(ingresso, cliente) {
        if (ingresso === null) {
            console.log(`Ingresso inválido para ${cliente.getNome()}`);
            return false;
        }
        else if (ingresso.getCliente() === cliente.getNome()) {
            console.log(`Ingresso válido para ${cliente.getNome()}`);
            return true;
        }
        else {
            console.log(`Ingresso inválido para ${cliente.getNome()}`);
            return false;
        }
    }
};
exports.Validar = Validar;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)()
    //criar função para validar se ingresso existe
    ,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Cliente_1.Cliente]),
    __metadata("design:returntype", Boolean)
], Validar.prototype, "validarIngresso", null);
exports.Validar = Validar = __decorate([
    (0, typeorm_1.Entity)()
], Validar);
