import { Visual } from "./EntreterimentoVisual";

export class Animes extends Visual  {
    idioma: string = "";
    eps: number = 0;
    origem: string = "";
    
    constructor(nome:string,genero:string,idioma:string,eps:number,origem:string){
        super();
        this.nome = nome;
        this.genero = genero;
        this.idioma = idioma;
        this.eps = eps;
        this.origem = origem;
    }

   
}
    


