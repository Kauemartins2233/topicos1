import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Ingresso } from "./ingresso";

@Entity()
export class Filme{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    private titulo: string;
    @Column()
    private genero: string;
    @Column()
    private duracao: number;
    @Column()
    private rating: number;
    @Column()
    private preco: number;
    



    //criar atributo assento que é uma lista de 0 a 10
    private assento_disponivel: number[] = [0,1,2,3,4,5,6,7,8,9,10];

    constructor(titulo: string, genero: string, duracao: number, rating: number, preco: number){
        this.titulo = titulo;
        this.genero = genero;
        this.duracao = duracao;
        this.rating = rating;
        this.preco = preco;
    }

    getTitulo(): string {
        return this.titulo;
      }
    
      getPreco(): number {
        return this.preco;
      }
    
    getRating(): number {
        return this.rating;
      }
    
    getDuracao(): number {
        return this.duracao;
      }
    getGenero(): string {
        return this.genero;
      }
    getAssento(): number[] {
        return this.assento_disponivel;
      }

}