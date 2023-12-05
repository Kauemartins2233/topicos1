import { Visual } from "./models/EntreterimentoVisual";
import { Animes } from "./models/animes";
import { Filmes } from "./models/filmes";
import { Series } from "./models/series";



let Vis1 = new Animes("One Piece","Aventura",24,"Japonês",900,"Japão");
let Vis2 = new Filmes("Batman","Ação",120,true,true,false);
let Vis3 = new Series("Game of Thrones","Aventura",60,73,8);

Vis1.reproduzir(Vis2);


