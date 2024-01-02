"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const animes_1 = require("./models/animes");
const filmes_1 = require("./models/filmes");
const series_1 = require("./models/series");
let onepiece = new animes_1.Animes("One Piece", "Aventura", 24, "Japonês", 900, "Japão");
let batman = new filmes_1.Filmes("Batman", "Ação", 120, true, true, false);
let got = new series_1.Series("Game of Thrones", "Aventura", 60, 73, true, true);
