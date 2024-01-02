import { Visual } from "./EntreterimentoVisual";

export class Filmes extends Visual {
    Views: number = 0;
    Likes: number = 0;
    Dislikes: number = 0;

    constructor(nome: string, genero: string, Views: number, Likes: number, Dislikes: number) {
        super();
        this.nome = nome;
        this.genero = genero;
        this.Views = Views;
        this.Likes = Likes;
        this.Dislikes = Dislikes;
    }

 }