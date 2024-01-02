import { stream } from "./streaming";
import { Torrents } from "./torrent";

export class Visual {
    nome: string = "";
    genero: string = "";
    private duracao: number = 0;   
    
    getDuracao(perfil:string) {
        if(perfil == "adm")
            return this.duracao
    }

    setDuracao(duracao:number,perfil:string) {
        if(perfil == "adm")
            this.duracao = duracao;
    }

    check(torrent:Torrents):void;
    check(Stream:stream):void;
    check(auto: any): void {
        if (auto instanceof Torrents) {
            console.log("Tem torrent");
        }
        else if (auto instanceof stream) {
            console.log("Tem stream");
        }
}}


