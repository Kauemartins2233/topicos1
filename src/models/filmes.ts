import { Visual } from "./EntreterimentoVisual";

export class Filmes extends Visual {
    ExclusivoCinema: boolean;
    TemNetflix: boolean;
    TemAmazon: boolean;

    constructor(nome:string,genero:string,duracao:number,ExclusivoCinema:boolean,TemNetflix:boolean,TemAmazon:boolean){
        super();
        this.nome = nome;
        this.genero = genero;
        this.duracao = duracao;
        this.ExclusivoCinema = ExclusivoCinema;
        this.TemNetflix = TemNetflix;
        this.TemAmazon = TemAmazon;
    }

    getExclusivoCinema() {
        return this.ExclusivoCinema;
    }
    getTemNetflix() {
        return this.TemNetflix;
    }
    getTemAmazon() {
        return this.TemAmazon;
    }
 }