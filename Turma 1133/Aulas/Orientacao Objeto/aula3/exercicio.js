/* 
Exercício 1: Crie um objeto literal representando um carro com os seguintes atributos: marca, modelo, ano e cor.

Exercício 2: Crie um objeto literal representando um círculo com os atributos raio e calcularÁrea (um método que calcula a área do círculo).

Exercício 3: Crie um objeto chamado "aluno" com os atributos nome, idade e um método chamado "mostrarInformacoes" que imprime os dados do aluno.

Exercício 4: Crie um objeto chamado "livro" com os atributos título, autor e um método chamado "detalhes" que imprime os detalhes do livro.

Exercício 5: Crie uma classe chamada "Retângulo" com os atributos "largura" e "altura" e um método chamado "calcularÁrea" que retorna a área do retângulo.

*/


let carro = {
    marca: "", //Volkswagen
    modelo: "", //Gol
    ano: 0 , //2015
    cor: "" //preto
}

let circulo = {
    raio:0,
    calcularArea(){
        console.log(`${parseFloat(( this.raio*this.raio)*3,14).toFixed(2)} cm²`)
    }
}

//circulo.raio = 3

//circulo.calcularArea();

let aluno = {
    nome: "",
    idade:0 ,
    mostrarInformacoes(){
        console.log(`O nome do aluno é: ${this.nome} e a idade: ${this.idade}`)
    }

}

let livro = {
    titulo: "",
    autor:"" ,
    detalhes(){
        console.log(`O titulo do livro ${this.titulo} e o autor ${this.autor}`)
    }

}

class Retangulo {
    constructor(largura, altura){
        this.largura = largura;
        this.altura = altura;
    }
    calcularArea(){
       console.log(` a area do retangulo é: ${((this.largura * this.largura) + (this.alura * this.altura))}`)
    }

}

const retangulo1 = new Retangulo(2,2)