import { Cliente } from "./Cliente";

export abstract class Alimentos {
    Vender_alimento(cliente: Cliente): void {
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

    // Métodos abstratos que devem ser implementados pelas subclasses
    abstract Nome_Pedido(): void
    abstract Preco_Pedido(cliente: Cliente): void
    abstract Verificar_Saldo(cliente: Cliente): boolean

    // Métodos concretos que são comuns a todas as bebidas quentes
    Fazer_Pedido(): void {
        console.log("Preparando o Pedido");
    }
    Entegrar_Pedido(cliente: Cliente): void {
        console.log("Entegrando o Pedido de " + cliente.getNome());
    }
}

export function Pedido_do_Cliente(cliente: Cliente, alimento: Alimentos): void {
    alimento.Vender_alimento(cliente);
}