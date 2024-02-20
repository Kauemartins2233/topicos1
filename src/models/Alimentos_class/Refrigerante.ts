import { Alimentos } from "../Alimentos";
import { Cliente } from "../Cliente";


class Refrigerante extends Alimentos{
    Nome_Pedido(): void {
        console.log("Seu pedido é: Refrigerante");
    }
    Preco_Pedido(cliente: Cliente): void {
        console.log("Seu pedido custa: 20");
    }
    Verificar_Saldo(cliente: Cliente): boolean {
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
export default Refrigerante