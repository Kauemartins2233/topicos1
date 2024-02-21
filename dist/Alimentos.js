"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pedido_do_Cliente = exports.Alimentos = void 0;
class Alimentos {
    Vender_alimento(cliente) {
        this.Nome_Pedido();
        this.Preco_Pedido(cliente);
        const validacao = this.Verificar_Saldo(cliente);
        if (validacao) {
            this.Fazer_Pedido();
            this.Entegrar_Pedido(cliente);
        }
        else {
            console.log("Pedido não realizado por Saldo Insuficiente");
        }
    }
    // Métodos concretos que são comuns a todas as bebidas quentes
    Fazer_Pedido() {
        console.log("Preparando o Pedido");
    }
    Entegrar_Pedido(cliente) {
        console.log("Entegrando o Pedido de " + cliente.getNome());
    }
}
exports.Alimentos = Alimentos;
function Pedido_do_Cliente(cliente, alimento) {
    alimento.Vender_alimento(cliente);
}
exports.Pedido_do_Cliente = Pedido_do_Cliente;
