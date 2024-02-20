import { Entity } from "typeorm";
import { Cliente } from "./Cliente";
import { Filme } from "./Filme";
import { Ingresso } from "./ingresso";

// Interface para a Bilheteria e o seu Proxy
interface BilheteriaProxy {
    venderIngresso(cliente: Cliente, filme: Filme, assento: number): Ingresso | null;
}

// Implementação concreta da Bilheteria
export class Bilheteria implements BilheteriaProxy{
    private nome: string;
    protected horario_abertura: number;
    protected horario_fechamento: number;

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
    venderIngresso(cliente: Cliente, filme: Filme, assento: number): Ingresso | null {
        cliente.setSaldo(cliente.getSaldo() - filme.getPreco());
        console.log(`Ingresso vendido para ${cliente.getNome()} para o filme ${filme.getTitulo()} no assento ${assento}`);
        const ingresso = this.criarIngresso(cliente, filme, assento);

        //retirar assento vendido
        let indexAssento = filme.getAssento().indexOf(assento);
        filme.getAssento().splice(indexAssento, 1);
        return ingresso;
    }
}

// Implementação do Proxy para a Bilheteria
export class Proxy_Bilheteria implements BilheteriaProxy {
    private bilheteriaReal: Bilheteria;


    // Construtor do Proxy
    constructor(bilheteriaReal: Bilheteria) {
        this.bilheteriaReal = bilheteriaReal;
    }

    // Proxy para o método venderIngresso
    venderIngresso(cliente: Cliente, filme: Filme, assento: number): Ingresso | null {

        // Verificação de acesso para o ingresso
        if (this.check_Saldo(cliente, filme) && this.check_Horario(cliente, filme) && this.check_Assento(filme, assento)) {
            console.log('Proxy: Verificação de acesso bem-sucedida.');
            const ingresso = this.bilheteriaReal.venderIngresso(cliente, filme, assento);
            this.nota_Fiscal();
            return ingresso;
        } else {
            console.log('Proxy: Verificação de acesso falhou. A operação foi bloqueada.');
            return null;
        }
    }

    // Método do Proxy para verificar se o ingresso pode ser vendido
    private check_Saldo(cliente: Cliente, filme: Filme): boolean {
        if (cliente.getSaldo() < filme.getPreco()) {
            console.log('Proxy: Saldo insuficiente.');
            console.log(`Saldo insuficiente para ${cliente.getNome()} para o filme ${filme.getTitulo()}`);
            return false;
        }
        else{
            return true;
        }
    }

    //Metodo do Proxy para verificar horário
    private check_Horario(cliente: Cliente, filme: Filme): boolean {
        if (this.bilheteriaReal.getHorario_abertura() > 12 && this.bilheteriaReal.getHorario_fechamento() < 23) {
            console.log('Proxy: Horário incompatível.');
            console.log(`Horario incompativel para ${cliente.getNome()} para o filme ${filme.getTitulo()}`);
            return false;
        }
        else{
            return true;
        }
    }

    //Metodo do Proxy para verificar se o assento pode ser vendido
    private check_Assento(filme: Filme, assento: number): boolean {
        if (!filme.getAssento().includes(assento)) {
            console.log('Proxy: Assento incompatível.');
            console.log(`Assento ${assento} já vendido`);
            return false;
        }
        else{
            return true;
        }
    }

    // Implementação da nota fiscal
    private nota_Fiscal(): void {
        console.log('Proxy: Foi feito a nota fiscal do ingresso.');
    }
}

