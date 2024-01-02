import { Filme } from "./Filme";

export class Cliente{
    private nome: string;
    private idade: number;
    private saldo: number;

    constructor(nome: string, idade: number, saldo: number){
        this.nome = nome;
        this.idade = idade;
        this.saldo = saldo;
    }

    comprarIngresso(filme:Filme): void{
        if (this.saldo >= filme.getPreco()) {
            this.saldo -= filme.getPreco();
            console.log(`${this.nome} comprou um ingresso para ${filme.getTitulo()}`);
          } else {
            console.log(`${this.nome} não possui saldo suficiente para comprar o ingresso`);
          }
        }
}