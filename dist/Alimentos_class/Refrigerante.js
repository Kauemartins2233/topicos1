"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Alimentos_1 = require("../Alimentos");
class Refrigerante extends Alimentos_1.Alimentos {
    Nome_Pedido() {
        console.log("Seu pedido é: Refrigerante");
    }
    Preco_Pedido(cliente) {
        console.log("Seu pedido custa: 20");
    }
    Verificar_Saldo(cliente) {
        if (cliente.getSaldo() < 20) {
            console.log("Saldo insuficiente Para Fazer o Pedido");
            return false;
        }
        else {
            cliente.setSaldo(cliente.getSaldo() - 20);
            return true;
        }
    }
}
exports.default = Refrigerante;
