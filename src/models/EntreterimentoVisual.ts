import { Animes } from "./animes";
import { Filmes } from "./filmes";
import { Series } from "./series";

export class Visual {
    nome: string = "";
    genero: string = "";
    duracao: number = 0;   
    
    // Polimorfismo
    reproduzir(filmes: Filmes): void;
    reproduzir(animes: Animes): void;
    reproduzir(series: Series): void;
    reproduzir(visual: any): void {
        if (visual instanceof Animes)
            console.log("Reproduzindo o anime: " + visual.nome);  
        else if (visual instanceof Filmes)
            console.log("Reproduzindo o filme: " + visual.nome);  
        else if (visual instanceof Series)
            console.log("Reproduzindo a série: " + visual.nome);
       
    }
}


