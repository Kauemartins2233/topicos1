import { Cliente } from "./Cliente";
import { Filme } from "./Filme";
import { Bilheteria } from "./Bilheteria";
import { DataSource } from "typeorm";
import { Ingresso } from "./ingresso";
import { Validar } from "./validacao";

const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "cinema",
    entities: [Cliente, Filme, Bilheteria, Ingresso],
    synchronize: true,
    logging: false,
})

AppDataSource.initialize().then(() => {
    console.log("Conexão com o banco de dados estabelecida")
}).catch((error) => {
    console.log("Erro ao conectar com o banco de dados")
    console.log(error)
    
})


// nome - idade - saldo
const cliente1 = new Cliente("João", 2, 15);
const cliente2 = new Cliente("Maria", 25, 100);

// titulo, genero, duracao, rating, preco
const filme1 = new Filme("O Rei Leão", "aventura", 120, 5, 14);
const filme2 = new Filme("Vingadores", "ação", 180, 5, 20);

// nome, horario_abertura, horario_fechamento
const cinema1 = new Bilheteria('Cinemark', 12, 23);


//vender ingresso
cinema1.venderIngresso(cliente1, filme1, 1);
cinema1.venderIngresso(cliente2, filme1, 1);

const ingresso1 = cinema1.criarIngresso(cliente1, filme1, 1);

cinema1.venderIngresso(cliente2, filme1, 1);


//validar ingresso
const validar = new Validar();
validar.validarIngresso(ingresso1, cliente1);
