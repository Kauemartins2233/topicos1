import { Visual } from "./EntreterimentoVisual";

export class Series extends Visual {
    eps: number = 0;
    temps: number = 0;
    
    constructor(nome:string,genero:string,eps:number,temps:number){
        super();
        this.nome = nome;
        this.genero = genero;
        this.eps = eps;
        this.temps = temps;
    }
 }


 