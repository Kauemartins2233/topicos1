"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const animes_1 = require("./models/animes");
const filmes_1 = require("./models/filmes");
const series_1 = require("./models/series");
const streaming_1 = require("./models/streaming");
const torrent_1 = require("./models/torrent");
//Animes - Nome - Genero - Idioma - Eps - Origem
let vis1 = new animes_1.Animes("Naruto", "Ação", "Japonês", 500, "Japão");
let vis2 = new animes_1.Animes("Dragon Ball", "Ação", "Japonês", 500, "Japão");
let vis3 = new animes_1.Animes("Bleach", "Ação", "Japonês", 500, "Japão");
//Filmes - Nome - Genero - Views - Likes - Deslikes
let vis4 = new filmes_1.Filmes("Vingadores", "Ação", 10000, 10000, 0);
let vis5 = new filmes_1.Filmes("Homem de Ferro", "Ação", 10000, 10000, 0);
let vis6 = new filmes_1.Filmes("Homem Aranha", "Ação", 10000, 10000, 0);
//Series - Nome - Genero - Eps - Temps
let vis7 = new series_1.Series("The Flash", "Ação", 100, 10);
let vis8 = new series_1.Series("Arrow", "Ação", 100, 10);
let vis9 = new series_1.Series("Supergirl", "Ação", 100, 10);
let torrent1 = new torrent_1.Torrents();
let Stream = new streaming_1.stream();
vis1.check(Stream);
