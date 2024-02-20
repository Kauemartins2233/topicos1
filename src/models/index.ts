import { Cliente } from "./Cliente";
import { Filme } from "./Filme";
import { Bilheteria, Proxy_Bilheteria } from "./Bilheteria";
import { DataSource } from "typeorm";
import { Ingresso } from "./ingresso";
import { Validar } from "./validacao";
import { Cinemark_Plaza } from "./Cinemark";
import Pipopca from "./Alimentos_class/Pipoca";
import { Alimentos, Pedido_do_Cliente } from "./Alimentos";
import Chocolate from "./Alimentos_class/Chocolate";
import Refrigerante from "./Alimentos_class/Refrigerante";

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

//AppDataSource.initialize().then(() => {
//    console.log("Conexão com o banco de dados estabelecida")
//}).catch((error) => {
//    console.log("Erro ao conectar com o banco de dados")
//    console.log(error)
    
//})


// nome - idade - saldo
const cliente1 = new Cliente("João", 2, 16);
const cliente2 = new Cliente("Maria", 25, 100);
const cliente3 = new Cliente("Pedro", 19, 40);

// titulo, genero, duracao, rating, preco
const filme1 = new Filme("O Rei Leão", "aventura", 120, 5, 14);
const filme2 = new Filme("Vingadores", "ação", 180, 5, 20);

//Faz a instancia da bilheteria do cinemark_plaza
const cinemark = Cinemark_Plaza.getCimemark(10, 21);
const cinemark2 = Cinemark_Plaza.getCimemark(12, 23); //Mesmo passando o horário de abertura e fechamento, o cinemark2 terá o horário de abertura e fechamento de 10:00 e 21:00 pois é o Singleton

const proxy_Bilheteria_cinemark = new Proxy_Bilheteria(cinemark); // Cria o Proxy para a bilheteria

//Verifica se cinemark e cinemark2 referenciam exatamente a mesma instância (o mesmo objeto) na memória. 
if (cinemark === cinemark2) {
    console.log(cinemark, cinemark2, '---------------- é Singleton OK');
    console.log("\n");
} else {
    console.log(cinemark, cinemark2, 'Singleton NOK');
    console.log("\n");
}

//Setando novo horário do cinemark e cinemark2 já que Cinemark_Plaza é Singleton
cinemark2.setNewHorario(12, 23);

console.log(cinemark);
console.log("\n");

//vender ingresso e Cria o ingresso se nãoo tiver erro na venda
let ingresso1 = proxy_Bilheteria_cinemark.venderIngresso(cliente1, filme1, 1);
console.log("\n");

//não vai conseguir vender ingresso pois o acesso já foi escolhido pelo cliente1
let ingresso2 = proxy_Bilheteria_cinemark.venderIngresso(cliente2, filme1, 1);
console.log("\n");

// Se a venda inicial falhar, tente novamente com outro assento
if (ingresso2 === null) {
    console.log('Tentativa inicial de venda falhou. Tentando novamente com outro assento...');
    ingresso2 = proxy_Bilheteria_cinemark.venderIngresso(cliente2, filme1, 2);
}

//validar ingresso
console.log("\n");
let validar = new Validar();
validar.validarIngresso(ingresso1, cliente1);
validar.validarIngresso(ingresso2, cliente2);
console.log("\n");

//Vende Pipoca para o cliente1
console.log(cliente1);
Pedido_do_Cliente(cliente1, new Pipopca());
console.log(cliente1); //Dados finais do cliente 1
console.log("\n");

//Vende Pipoca para o cliente2
console.log(cliente2);
Pedido_do_Cliente(cliente2, new Pipopca());

//Vende Chocolate para o cliente2
console.log("\n");
Pedido_do_Cliente(cliente2, new Chocolate());

//Vende Refrigerante para o cliente2
console.log("\n");
Pedido_do_Cliente(cliente2, new Refrigerante());
console.log("\n");

console.log(cliente2); //Dados finais do cliente 2


//------------------------------------------------------
//Teste com o cliente3 no Filme 2

console.log("\n");
console.log("\n");
let ingresso3 = proxy_Bilheteria_cinemark.venderIngresso(cliente3, filme2, 1);
console.log("\n");

//validar ingresso
validar.validarIngresso(ingresso3, cliente1); //Verifica se o ingresso3 é valido para o cliente1
validar.validarIngresso(ingresso3, cliente3); //Verifica se o ingresso3 é valido para o cliente3

//Vende Chocolate para o cliente3
console.log("\n");
Pedido_do_Cliente(cliente3, new Chocolate());

//Vende Refrigerante para o cliente3
console.log("\n");
Pedido_do_Cliente(cliente3, new Refrigerante());
console.log("\n");

console.log(cliente3); //Dados finais do cliente 2