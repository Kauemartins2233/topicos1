//classe ingresso que é filha da classe filme

import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Ingresso  {
    @PrimaryGeneratedColumn()   
    id: number;

    @Column()
    private assento: number;
    @Column()
    private preco: number;
    @Column()
    private nome_fime: string;
    @Column()
    private cliente: string;
    @Column()

    

    //setters
    setAssento(assento: number): void {
        this.assento = assento;
    }
    setPreco(preco: number): void {
        this.preco = preco;
    }
    setNome(nome: string): void {
        this.nome_fime = nome;
    }
    setCliente(cliente: string): void {
        this.cliente = cliente;
    }
    //getters
    getAssento(): number {
        return this.assento;
    }
    getPreco(): number {
        return this.preco;
    }
    getNome(): string {
        return this.nome_fime;
    }
    getCliente(): string {
        return this.cliente;
    }
    

}
