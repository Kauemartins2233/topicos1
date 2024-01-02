import { Cliente } from "./Cliente";
import { Filme } from "./Filme";


class Bilheteria {
    venderIngresso(cliente: Cliente, filme: Filme): void {
        cliente.comprarIngresso(filme);
    }
}

const cliente1 = new Cliente("João", 20, 0);
// titulo, genero, duracao, rating, preco
const filme1 = new Filme("O Rei Leão", "aventura", 120, 30, 14);
const Cinemark = new Bilheteria();

Cinemark.venderIngresso(cliente1, filme1);