import { Alimentos } from "../Alimentos";
import { Cliente } from "../Cliente";


class Pipopca extends Alimentos{
    Nome_Pedido(): void {
        console.log("Seu pedido é: Pipoca");
    }
    Preco_Pedido(cliente: Cliente): void {
        console.log("Seu pedido custa: 32");
    }
    Verificar_Saldo(cliente: Cliente): boolean {
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
export default Pipopca