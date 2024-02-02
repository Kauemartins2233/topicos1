import { Column, Entity, JoinColumn, JoinTable, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Filme } from "./Filme"; // Certifique-se de importar corretamente a classe Filme
import { Ingresso } from "./ingresso";

@Entity()
export class Cliente {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    private nome: string;
    @Column()
    private idade: number;
    @Column()
    private saldo: number;


    constructor(nome: string, idade: number, saldo: number) {
        this.nome = nome;
        this.idade = idade;
        this.saldo = saldo;
    }







    // Setters e getters

    getNome(): string {
        return this.nome;
    }
    getIdade(): number {
        return this.idade;
    }
    setSaldo(saldo: number): void {
        this.saldo = saldo;
    }
    getSaldo(): number {
        return this.saldo;
    }


}
