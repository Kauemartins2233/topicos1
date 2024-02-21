"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Cliente_1 = require("./Cliente");
const Filme_1 = require("./Filme");
const Bilheteria_1 = require("./Bilheteria");
const typeorm_1 = require("typeorm");
const ingresso_1 = require("./ingresso");
const validacao_1 = require("./validacao");
const Cinemark_1 = require("./Cinemark");
const Pipoca_1 = __importDefault(require("./Alimentos_class/Pipoca"));
const Alimentos_1 = require("./Alimentos");
const Chocolate_1 = __importDefault(require("./Alimentos_class/Chocolate"));
const Refrigerante_1 = __importDefault(require("./Alimentos_class/Refrigerante"));
const AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "cinema",
    entities: [Cliente_1.Cliente, Filme_1.Filme, Bilheteria_1.Bilheteria, ingresso_1.Ingresso],
    synchronize: true,
    logging: false,
});
//AppDataSource.initialize().then(() => {
//    console.log("Conexão com o banco de dados estabelecida")
//}).catch((error) => {
//    console.log("Erro ao conectar com o banco de dados")
//    console.log(error)
//})
// nome - idade - saldo
const cliente1 = new Cliente_1.Cliente("João", 2, 16);
const cliente2 = new Cliente_1.Cliente("Maria", 25, 100);
const cliente3 = new Cliente_1.Cliente("Pedro", 19, 40);
// titulo, genero, duracao, rating, preco
const filme1 = new Filme_1.Filme("O Rei Leão", "aventura", 120, 5, 14);
const filme2 = new Filme_1.Filme("Vingadores", "ação", 180, 5, 20);
//Faz a instancia da bilheteria do cinemark_plaza
const cinemark = Cinemark_1.Cinemark_Plaza.getCimemark(10, 21);
const cinemark2 = Cinemark_1.Cinemark_Plaza.getCimemark(12, 23); //Mesmo passando o horário de abertura e fechamento, o cinemark2 terá o horário de abertura e fechamento de 10:00 e 21:00 pois é o Singleton
const proxy_Bilheteria_cinemark = new Bilheteria_1.Proxy_Bilheteria(cinemark); // Cria o Proxy para a bilheteria
//Verifica se cinemark e cinemark2 referenciam exatamente a mesma instância (o mesmo objeto) na memória. 
if (cinemark === cinemark2) {
    console.log(cinemark, cinemark2, '---------------- é Singleton OK');
    console.log("\n");
}
else {
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
let validar = new validacao_1.Validar();
validar.validarIngresso(ingresso1, cliente1);
validar.validarIngresso(ingresso2, cliente2);
console.log("\n");
//Vende Pipoca para o cliente1
console.log(cliente1);
(0, Alimentos_1.Pedido_do_Cliente)(cliente1, new Pipoca_1.default());
console.log(cliente1); //Dados finais do cliente 1
console.log("\n");
//Vende Pipoca para o cliente2
console.log(cliente2);
(0, Alimentos_1.Pedido_do_Cliente)(cliente2, new Pipoca_1.default());
//Vende Chocolate para o cliente2
console.log("\n");
(0, Alimentos_1.Pedido_do_Cliente)(cliente2, new Chocolate_1.default());
//Vende Refrigerante para o cliente2
console.log("\n");
(0, Alimentos_1.Pedido_do_Cliente)(cliente2, new Refrigerante_1.default());
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
(0, Alimentos_1.Pedido_do_Cliente)(cliente3, new Chocolate_1.default());
//Vende Refrigerante para o cliente3
console.log("\n");
(0, Alimentos_1.Pedido_do_Cliente)(cliente3, new Refrigerante_1.default());
console.log("\n");
console.log(cliente3); //Dados finais do cliente 2
