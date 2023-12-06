/* 1- 
Crie uma classe chamada "Carro" com os atributos marca, modelo e ano.
Em seguida, crie um construtor para a classe que inicializa esses atributos.
Crie objetos de carros diferentes e imprima suas informações. 
*/

class Carro{
    constructor(marca, modelo, ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    datelhes(){
        console.log(`\n A marca do carro é: ${this.marca} \n O modelo desse carro é: ${this.modelo} \n O ano desse carro é: ${this.ano}        
        `)
    }
}


const gol = new Carro("Gol", "Volkswagen", 2015);


//gol.datelhes()

/* 2-
Crie uma classe chamada "Pessoa" com os atributos nome, idade e cidade. 
Implemente um construtor para esta classe. 
Em seguida, crie objetos de pessoas e exiba seus detalhes.
*/

class Pessoa {
    constructor(nome, idade, cidade){
        this.nome = nome
        this.idade = idade
        this.cidade = cidade
    }

    datelhes(){
        console.log(` O nome da pessoa é: ${this.nome} \n A idade da pessoa é: ${this.idade} \n A cidade da pessoa é: ${this.cidade}`)
    }
}

const maria = new Pessoa("Maria", 20, "Manaus");

//maria.datelhes()


/* 3-
Crie uma classe chamada "ContaBancaria" com os atributos número da conta, saldo e nome do titular. Adicione um construtor para inicializar esses atributos. 
Crie métodos para depositar e sacar dinheiro da conta. 
Teste esses métodos em objetos de conta bancária.
*/

class ContaBancaria{
    constructor(conta, titular, saldo){
        this.conta = conta;
        this.titular = titular;
        this.saldo = saldo
    }

    sacar(valorSaque){
        this.saldo = this.saldo - valorSaque
        console.log(` Após efetuar saque: R$${valorSaque}\n O valor do saldo é: R$${this.saldo}`)
    }
    deposito(valorDeposito){
        this.saldo = this.saldo + valorDeposito
        console.log(` Após depositar o valor: R$${valorDeposito}\n O valor do saldo é: R$${this.saldo}`)
    }
    detalhes(){
        console.log(` Conta: ${this.conta} \n Titular: ${this.titular} \n Saldo: R$${this.saldo}`)
    }
}


const wellyson = new ContaBancaria(1,"Wellyson",0)

/**
wellyson.detalhes()
wellyson.deposito(100)
wellyson.detalhes()
wellyson.sacar(50)
wellyson.detalhes()
 **/


/** 4-
Defina uma classe chamada "Círculo" que tenha um atributo raio e métodos para calcular 
a área e o perímetro do círculo. Crie objetos de círculos com diferentes raios
e exiba suas áreas e perímetros. 
**/

class Circulo{
    constructor(raio){
        this.raio = raio
    }
    calcularArea(){
        let perimetro = (this.raio ** 2) * 3.14
        console.log(`O perimetro do Raio é: ${perimetro} cm² aproximadamente`);
    }

}
const circulo1 = new Circulo(3)
const circulo2 = new Circulo(5)
/*
circulo1.calcularArea()
circulo2.calcularArea()
 */

/* 5-
Crie uma classe chamada "Livro" com os atributos título, autor e ano de publicação.
Implemente um construtor para esta classe.
Crie objetos de livros e exiba suas informações. 
*/

class Livro{
    constructor(titulo, autor, ano){
        this.titulo = titulo
        this.autor = autor
        this.ano = ano
    }

    informacoes(){
        console.log(` Titulo: ${this.titulo} \n Autor: ${this.autor} \n Ano publicação: ${this.ano}`);
    }
}

const tubarao = new Livro("Tubarao", "Wellyson", 2015)
//tubarao.informacoes()

/*6-
Crie uma classe chamada "Retângulo" com os atributos largura e altura.
Adicione um construtor para inicializar esses atributos.
Implemente um método para calcular a área do retângulo.
Crie objetos de retângulos com diferentes dimensões e exiba suas áreas. 
*/

class Retangulo {
    constructor(largura, altura){
        this.largura = largura;
        this.altura = altura;
    }
    calcularArea(){
       console.log(`A area do retangulo é: ${((this.largura * this.largura) + (this.altura * this.altura))}`)
    }

}

const retangulo1 = new Retangulo(2,2)
//retangulo1.calcularArea()

/*7-
Desenvolva uma classe chamada "Aluno" com os atributos nome, matrícula e lista de notas.
Implemente um construtor para inicializar os atributos e um método para calcular a média das notas do aluno.
Crie objetos de alunos e calcule suas médias.
*/

class Aluno {
    constructor(nome, matricula){
        this.nome = nome
        this.matricula = matricula
        this.nota =  0
        this.media = 0
    }
    calcularNotas(notas){
        this.nota  = notas.reduce((acum, value)=> {return acum + value}, 0)
        this.media = this.nota / notas.length
        console.log(`A notas dos aluno ${this.nome} de matricula ${this.matricula} é:\n${this.media.toFixed(2)}`)
    }
}
const roberto = new Aluno("Roberto", 1)
/*

roberto.calcularNotas([9,9,7])
*/

/* 8-
Crie uma classe chamada "Triângulo" com os atributos lado1, lado2 e lado3. 
Adicione um construtor para inicializar esses atributos. 
Implemente um método para verificar se os lados formam um triângulo válido (a soma de dois lados deve ser maior que o terceiro) e outro método para calcular a área do triângulo.
Teste com diferentes conjuntos de lados.
 */
class Triagulo{
    constructor(lado1,lado2,base){
        this.lado1 = lado1;
        this.lado2 = lado2;
        this.base = base;
        this.area = 0
       
    }

    verificacao(){
        let verifica = this.lado1 && this.lado2 && this.base
        if (verifica) {
           if((this.lado1 + this.lado2) > this.base){
            console.log("Você pode criar o triangulo sem problemas")
           }else{
            console.log("O triangulo não pode ser criado, a soma de dois lados deve ser maior que o terceiro")
           }
        } else{
            console.log("Está faltando algum dos lados do triangulo")
         }
    }
    calculoArea(){
        let baseD = this.base / 2
        let ladoMaior =  this.lado1 > this.lado2 ? this.lado1 : this.lado2;
        let lado = this.lado1 === this.lado2 ? this.lado1 : ladoMaior
        let altura = parseFloat(Math.sqrt((lado ** 2) - (baseD**2)).toFixed(2))
        this.area = parseFloat(((altura * this.base) / 2).toFixed(2))
        console.log(`A area do triangulo é: ${this.area}`)

    }
}
const triangulo1 = new Triagulo(18,18,20)
/*

triangulo1.verificacao()
triangulo1.calculoArea()
 */


/*9-
Crie uma classe chamada "Produto" com os atributos nome, preço e quantidade em estoque. 
Implemente um construtor para inicializar esses atributos e métodos para calcular o valor total em estoque e para adicionar ou remover unidades do estoque. 
Crie objetos de produtos e teste os métodos.
*/

class Produto{
    constructor(nome, preco, quantidade){
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade
        this.valorTotalEstoque = 0
    }
    calcularValorTotalEstoque(){
        this.valorTotalEstoque = this.preco * this.quantidade
        console.log(` O valor total no estoque desse produto: R$ ${this.valorTotalEstoque}`)
    }
    adicionarQuantidadeProduto(qtd){
        let quantidade = this.quantidade;
        quantidade = quantidade + qtd
        this.quantidade = quantidade
        console.log(` Você acabou de adicionar ${qtd} no estoque\n Agora o estoque tem um total de: ${quantidade} produtos`)
        
    }
    removerQuantidadeProduto(qtd){
        let quantidade = this.quantidade;
        quantidade = quantidade - qtd
        this.quantidade = quantidade
        console.log(` Você acabou de remover ${qtd} produtos do estoque\n Agora o estoque tem um total de: ${quantidade} produtos`)
    }
}
const arroz = new Produto("Arroz", 5, 1)
/*
arroz.calcularValorTotalEstoque()
arroz.adicionarQuantidadeProduto(2)
arroz.calcularValorTotalEstoque()
arroz.removerQuantidadeProduto(1)
arroz.calcularValorTotalEstoque()
 */

/*10-
Desenvolva uma classe chamada "Funcionário" com os atributos nome, cargo e salário. 
Adicione um construtor para inicializar esses atributos. 
Implemente um método para aumentar o salário de um funcionário em uma determinada porcentagem. 
Crie objetos de funcionários e teste o método de aumento de salário.
*/

class Funcionario{
    constructor(nome, cargo, salario){
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
    }

    aumento(porcetagem){
        let salario = this.salario
        let calculo = salario * (porcetagem / 100) 
        console.log(` Salario anterior: R$${this.salario}\n Porcetagem do aumento: %${porcetagem}`);
        salario = salario + calculo
        this.salario = salario
        console.log(` Salario novo com o aumento incluso: R$${salario}`)
    }
}

const kleber = new Funcionario("Kebler", "TI", 2500)
kleber.aumento(20)