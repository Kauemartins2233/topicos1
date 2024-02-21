"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Alimentos_1 = require("../Alimentos");
class Pipopca extends Alimentos_1.Alimentos {
    Nome_Pedido() {
        console.log("Seu pedido é: Pipoca");
    }
    Preco_Pedido(cliente) {
        console.log("Seu pedido custa: 32");
    }
    Verificar_Saldo(cliente) {
        if (cliente.getSaldo() < 32) {
            console.log("Saldo insuficiente Para Fazer o Pedido");
            return false;
        }
        else {
            cliente.setSaldo(cliente.getSaldo() - 32);
            return true;
        }
    }
}
exports.default = Pipopca;
