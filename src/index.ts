import { Animes } from "./models/animes";
import { Filmes } from "./models/filmes";
import { Series } from "./models/series";
import { stream } from "./models/streaming";
import { Torrents } from "./models/torrent";




//Animes - Nome - Genero - Idioma - Eps - Origem
let vis1:Animes = new Animes("Naruto","Ação","Japonês",500,"Japão");
let vis2:Animes = new Animes("Dragon Ball","Ação","Japonês",500,"Japão");
let vis3:Animes = new Animes("Bleach","Ação","Japonês",500,"Japão");

//Filmes - Nome - Genero - Views - Likes - Deslikes
let vis4:Filmes = new Filmes("Vingadores","Ação",10000,10000,0);
let vis5:Filmes = new Filmes("Homem de Ferro","Ação",10000,10000,0);
let vis6:Filmes = new Filmes("Homem Aranha","Ação",10000,10000,0);

//Series - Nome - Genero - Eps - Temps
let vis7:Series = new Series("The Flash","Ação",100,10);
let vis8:Series = new Series("Arrow","Ação",100,10);
let vis9:Series = new Series("Supergirl","Ação",100,10);

let torrent1:Torrents = new Torrents();

let Stream:stream = new stream();


vis1.check(Stream);



