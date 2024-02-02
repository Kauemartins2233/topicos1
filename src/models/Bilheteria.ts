import { Entity } from "typeorm";
import { Cliente } from "./Cliente";
import { Filme } from "./Filme";
import { Ingresso } from "./ingresso";


export class Bilheteria {

    private nome: string;
    private horario_abertura: number;
    private horario_fechamento: number;



    constructor(nome: string, horario_abertura: number, horario_fechamento: number) {
        this.nome = nome;
        this.horario_abertura = horario_abertura;
        this.horario_fechamento = horario_fechamento;
      
    }


    //setters e getters
    getHorario_abertura(): number {
        return this.horario_abertura;
    }
    getHorario_fechamento(): number {
        return this.horario_fechamento;
    }


   //função para criar ingresso
    criarIngresso(cliente: Cliente, filme: Filme, assento: number): Ingresso {
        const ingresso = new Ingresso();
        ingresso.setAssento(assento);
        ingresso.setCliente(cliente.getNome());
        ingresso.setPreco(filme.getPreco());
        ingresso.setNome(filme.getTitulo());
        ingresso.setCliente(cliente.getNome());
        console.log(ingresso)
        return ingresso;
    }




    //vender ingresso verificar horario, saldo e assento
    venderIngresso(cliente: Cliente, filme: Filme, assento: number): void {
        if (cliente.getSaldo() >= filme.getPreco() && this.horario_abertura <= 12 && this.horario_fechamento >= 23 && filme.getAssento().includes(assento)) {
            cliente.setSaldo(cliente.getSaldo() - filme.getPreco());
            //this.criarIngresso(cliente, filme, assento);
            console.log(`Ingresso vendido para ${cliente.getNome()} para o filme ${filme.getTitulo()} no assento ${assento}`);
           
            //retirar assento vendido
            filme.getAssento().splice(assento, 1);
        }
        // se o assento ja foi vendido
        else if (!filme.getAssento().includes(assento)) {
            console.log(`Assento ${assento} já vendido`);
        }
        // se o cliente não tem saldo
       else if (cliente.getSaldo() < filme.getPreco()) {
            console.log(`Saldo insuficiente para ${cliente.getNome()} para o filme ${filme.getTitulo()}`);
        }
        // se o horario não é compativel
        else if (this.horario_abertura > 12 || this.horario_fechamento < 23) {
            console.log(`Horario incompativel para ${cliente.getNome()} para o filme ${filme.getTitulo()}`);
        }

    }

 

}
    

