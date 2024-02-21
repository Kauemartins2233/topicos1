"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Proxy_Bilheteria = exports.Bilheteria = void 0;
const ingresso_1 = require("./ingresso");
// Implementação concreta da Bilheteria
class Bilheteria {
    constructor(nome, horario_abertura, horario_fechamento) {
        this.nome = nome;
        this.horario_abertura = horario_abertura;
        this.horario_fechamento = horario_fechamento;
    }
    //setters e getters
    getHorario_abertura() {
        return this.horario_abertura;
    }
    getHorario_fechamento() {
        return this.horario_fechamento;
    }
    //função para criar ingresso
    criarIngresso(cliente, filme, assento) {
        const ingresso = new ingresso_1.Ingresso();
        ingresso.setAssento(assento);
        ingresso.setCliente(cliente.getNome());
        ingresso.setPreco(filme.getPreco());
        ingresso.setNome(filme.getTitulo());
        ingresso.setCliente(cliente.getNome());
        console.log(ingresso);
        return ingresso;
    }
    //vender ingresso verificar horario, saldo e assento
    venderIngresso(cliente, filme, assento) {
        cliente.setSaldo(cliente.getSaldo() - filme.getPreco());
        console.log(`Ingresso vendido para ${cliente.getNome()} para o filme ${filme.getTitulo()} no assento ${assento}`);
        const ingresso = this.criarIngresso(cliente, filme, assento);
        //retirar assento vendido
        let indexAssento = filme.getAssento().indexOf(assento);
        filme.getAssento().splice(indexAssento, 1);
        return ingresso;
    }
}
exports.Bilheteria = Bilheteria;
// Implementação do Proxy para a Bilheteria
class Proxy_Bilheteria {
    // Construtor do Proxy
    constructor(bilheteriaReal) {
        this.bilheteriaReal = bilheteriaReal;
    }
    // Proxy para o método venderIngresso
    venderIngresso(cliente, filme, assento) {
        // Verificação de acesso para o ingresso
        if (this.check_Saldo(cliente, filme) && this.check_Horario(cliente, filme) && this.check_Assento(filme, assento)) {
            console.log('Proxy: Verificação de acesso bem-sucedida.');
            const ingresso = this.bilheteriaReal.venderIngresso(cliente, filme, assento);
            this.nota_Fiscal();
            return ingresso;
        }
        else {
            console.log('Proxy: Verificação de acesso falhou. A operação foi bloqueada.');
            return null;
        }
    }
    // Método do Proxy para verificar se o ingresso pode ser vendido
    check_Saldo(cliente, filme) {
        if (cliente.getSaldo() < filme.getPreco()) {
            console.log('Proxy: Saldo insuficiente.');
            console.log(`Saldo insuficiente para ${cliente.getNome()} para o filme ${filme.getTitulo()}`);
            return false;
        }
        else {
            return true;
        }
    }
    //Metodo do Proxy para verificar horário
    check_Horario(cliente, filme) {
        if (this.bilheteriaReal.getHorario_abertura() > 12 && this.bilheteriaReal.getHorario_fechamento() < 23) {
            console.log('Proxy: Horário incompatível.');
            console.log(`Horario incompativel para ${cliente.getNome()} para o filme ${filme.getTitulo()}`);
            return false;
        }
        else {
            return true;
        }
    }
    //Metodo do Proxy para verificar se o assento pode ser vendido
    check_Assento(filme, assento) {
        if (!filme.getAssento().includes(assento)) {
            console.log('Proxy: Assento incompatível.');
            console.log(`Assento ${assento} já vendido`);
            return false;
        }
        else {
            return true;
        }
    }
    // Implementação da nota fiscal
    nota_Fiscal() {
        console.log('Proxy: Foi feito a nota fiscal do ingresso.');
    }
}
exports.Proxy_Bilheteria = Proxy_Bilheteria;
