import { Visual } from "./EntreterimentoVisual";
import { Filmes } from "./filmes";
import { Series } from "./series";

export class Animes extends Visual  {
    private idioma: string = "";
    private eps: number = 0;
    private origem: string = "";
    
    constructor(nome:string,genero:string,duracao:number,idioma:string,eps:number,origem:string){
        super();
        this.nome = nome;
        this.genero = genero;
        this.duracao = duracao;
        this.idioma = idioma;
        this.eps = eps;
        this.origem = origem;
    }

    GetIdioma() {
        return this.idioma;
    }
    GetEps() {
        return this.eps;
    }
    GetOrigem() {
        return this.origem;
    }
    

}
    


