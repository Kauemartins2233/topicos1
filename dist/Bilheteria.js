"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Cliente_1 = require("./Cliente");
const Filme_1 = require("./Filme");
class Bilheteria {
    venderIngresso(cliente, filme) {
        cliente.comprarIngresso(filme);
    }
}
const cliente1 = new Cliente_1.Cliente("João", 20, 0);
// titulo, genero, duracao, rating, preco
const filme1 = new Filme_1.Filme("O Rei Leão", "aventura", 120, 30, 14);
const Cinemark = new Bilheteria();
Cinemark.venderIngresso(cliente1, filme1);
