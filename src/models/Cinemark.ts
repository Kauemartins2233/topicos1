import { Bilheteria } from "./Bilheteria";

export class Cinemark_Plaza extends Bilheteria{
    private static cinemark: Cinemark_Plaza;

    private constructor(nome = "Cinemark", horario_abertura: number, horario_fechamento: number) { 
        super(nome, horario_abertura, horario_fechamento);
    }

    public static getCimemark(horario_abertura: number, horario_fechamento: number): Cinemark_Plaza {
        if(!Cinemark_Plaza.cinemark){
            Cinemark_Plaza.cinemark = new Cinemark_Plaza("Cinemark", horario_abertura, horario_fechamento);
        }
        return Cinemark_Plaza.cinemark;
    }

    public setNewHorario(horario_abertura: number, horario_fechamento: number): void {
        this.horario_abertura = horario_abertura;
        this.horario_fechamento = horario_fechamento;
    }
}