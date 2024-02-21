"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Alimentos_1 = require("../Alimentos");
class Chocolate extends Alimentos_1.Alimentos {
    Nome_Pedido() {
        console.log("Seu pedido é: Chocolate");
    }
    Preco_Pedido(cliente) {
        console.log("Seu pedido custa: 10");
    }
    Verificar_Saldo(cliente) {
        if (cliente.getSaldo() < 10) {
            console.log("Saldo insuficiente Para Fazer o Pedido");
            return false;
        }
        else {
            cliente.setSaldo(cliente.getSaldo() - 10);
            return true;
        }
    }
}
exports.default = Chocolate;
