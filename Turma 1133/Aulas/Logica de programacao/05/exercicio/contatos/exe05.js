//let input = prompt("Digite um numero pra a sequencia Fibonacci")
let resultado = document.getElementById('contato');
let input = '';
const lista = {
    nome : undefined,
    idade: undefined,
    telefone: undefined,
    profissao: undefined,

}

for (const i in lista) {
  if(lista[i] === undefined){
    if(lista.nome === undefined){
        input = prompt("Digite seu Nome");
        lista.nome = input;
        resultado.innerHTML += `Nome: ${lista[i]} <br>`;
    }else if(lista.idade === undefined){
        input = prompt("Digite sua Idade");
        lista.idade = input;
        resultado.innerHTML += `Idade: ${lista[i]}  <br>`;
    }else if(lista.telefone === undefined){
        input = prompt("Digite Telefone");
        lista.telefone = input;
        resultado.innerHTML += `Telefone: ${lista[i]}  <br>`;
    }else if(lista.profissao === undefined){
        input = prompt("Digite seu Profissão");
        lista.profissao = input;
        resultado.innerHTML += `Profissão: ${lista[i]}  <br>`;
    }
    
  }
  
  
    
} 


