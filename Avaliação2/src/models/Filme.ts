export class Filme{
    private titulo: string;
    private genero: string;
    private duracao: number;
    private rating: number;
    private preco: number;

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
    

}