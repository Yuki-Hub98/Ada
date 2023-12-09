/*1 -
Crie uma classe NaveEspacial com atributos como nome, velocidade máxima e capacidade de tripulação. 
Implemente métodos como acelerar() e adicionarTripulante().
*/

class NaveEspacial{
    constructor(nome){
        this.nome = nome
        this.velocidade = 0
        this.tripulacao = []
    }
    acelera(aceleracao){
        let velocidadeNave = this.velocidade
        velocidadeNave = velocidadeNave + aceleracao
        this.velocidade = velocidadeNave
        console.log(`A nave está acelerando a: ${velocidadeNave} km/s`);
    }
    adicionarTripulante(tripulante){
        let tripulacaoNave = this.tripulacao
        tripulacaoNave.push(tripulante);
        this.tripulacao = tripulacaoNave
        console.log(`A tripulação da nave ${this.nome} é:\n${tripulacaoNave}`)
    }
    detalheNave(){
        console.log(`A nave ${this.nome} está voando a uma velocidade: ${this.velocidade} km/s \nCom a tripulação composta por: ${this.tripulacao}`)
    }
}

const nave = new NaveEspacial("Ragatanga");
/*
nave.adicionarTripulante("Yuki")
nave.acelera(3)
nave.detalheNave()
*/


/* 2 -
Desenvolva uma classe Dragao com atributos como nome, cor, elemento (fogo, gelo, etc.) e nível de saúde. 
Inclua métodos como voar(), cuspirFogo() e comer(). 
*/

class Dragao {
    constructor(nome,cor,elemento,saude){
        this.nome = nome
        this.cor = cor
        this.elemento = elemento
        this.saude = saude
    }
    voar(){
        console.log(`O dragão ${this.nome} está voando`)
    }
    pousar(){
        console.log(`O dragão ${this.nome} pousou`)
    }
    rajada(){
        console.log(`O dragão ${this.nome} está soutando uma rajada de ${this.elemento}`)
    }
    comer(){
        console.log(`O dragão ${this.nome} está comendo, seu nivel de saude subiu para: ${++this.saude}`)
    }
}

const drag = new Dragao("Esmeralda", "Azul", "Gelo", 10);
/*
drag.voar()
drag.pousar()
drag.rajada()
drag.comer()
*/

/*
Projete uma classe ConsoleRetro com atributos como nome, ano de lançamento e jogos disponíveis. 
Adicione métodos para adicionarJogo() e jogar().
*/

class ConsoleRetro{
    constructor(nome, ano){
        this.nome = nome
        this.ano = ano
        this.jogos = []
    }
    adicionarJogo(jogo){
        let jogosNoGame = this.jogos
        jogosNoGame.push(jogo)
        this.jogos = jogosNoGame
    }
}