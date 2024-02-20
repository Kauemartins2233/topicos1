
import { Alimentos } from "../Alimentos";
import { Cliente } from "../Cliente";


class Chocolate extends Alimentos{
    Nome_Pedido(): void {
        console.log("Seu pedido é: Chocolate");
    }
    Preco_Pedido(cliente: Cliente): void {
        console.log("Seu pedido custa: 10");
    }
    Verificar_Saldo(cliente: Cliente): boolean {
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
export default Chocolate