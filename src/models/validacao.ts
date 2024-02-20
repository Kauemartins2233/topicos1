//criar classe validação para validar ingresso

import { Entity, PrimaryGeneratedColumn } from "typeorm";
import { Ingresso } from "./ingresso";
import { Cliente } from "./Cliente";

@Entity()
export class Validar {
    @PrimaryGeneratedColumn()
    //criar função para validar se ingresso existe
    validarIngresso(ingresso: Ingresso | null, cliente: Cliente): boolean {
        if (ingresso === null) {
            console.log(`Ingresso inválido para ${cliente.getNome()}`);
            return false;
        }
        else if (ingresso.getCliente() === cliente.getNome()) {
            console.log(`Ingresso válido para ${cliente.getNome()}`);
            return true;
        }
        else {
            console.log(`Ingresso inválido para ${cliente.getNome()}`);
            return false;
        }
    }
    




}