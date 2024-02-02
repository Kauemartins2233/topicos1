"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Visual = void 0;
const streaming_1 = require("./streaming");
const torrent_1 = require("./torrent");
class Visual {
    constructor() {
        this.nome = "";
        this.genero = "";
        this.duracao = 0;
    }
    getDuracao(perfil) {
        if (perfil == "adm")
            return this.duracao;
    }
    setDuracao(duracao, perfil) {
        if (perfil == "adm")
            this.duracao = duracao;
    }
    check(auto) {
        if (auto instanceof torrent_1.Torrents) {
            console.log("Tem torrent");
        }
        else if (auto instanceof streaming_1.stream) {
            console.log("Tem stream");
        }
    }
}
exports.Visual = Visual;
