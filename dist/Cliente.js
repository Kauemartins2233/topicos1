"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
class Cliente {
    constructor(nome, idade, saldo) {
        this.nome = nome;
        this.idade = idade;
        this.saldo = saldo;
    }
    comprarIngresso(filme) {
        //se o saldo for suficiente e a idade for suficiente
        if (this.saldo >= filme.getPreco() && this.idade >= filme.getRating()) {
            this.saldo -= filme.getPreco();
            console.log(`${this.nome} comprou um ingresso para ${filme.getTitulo()} e tem idade o suficiente para assistir o filme. Saldo restante: ${this.saldo}`);
        }
        //se o saldo não for suficiente
        if (this.saldo < filme.getPreco()) {
            console.log(`${this.nome} não tem saldo suficiente para comprar o ingresso para ${filme.getTitulo()}.`);
        }
        //se o saldo for suficiente mas a idade não for suficiente
        if (this.saldo >= filme.getPreco() && this.idade < filme.getRating()) {
            console.log(`${this.nome} tem saldo  suficiente para assistir ${filme.getTitulo()}, mas não tem idade suficiente para comprar o ingresso.`);
        }
    }
}
exports.Cliente = Cliente;
