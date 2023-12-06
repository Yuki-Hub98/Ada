let numero = Number(prompt("Digite um numero pra a sequencia Fibonacci"))
let resultado = document.getElementById('resposta');
let i = 2
const sequencia = [0, 1]

while(i < numero){
    sequencia.push(sequencia[i - 1] + sequencia[ i- 2])
    resultado.innerHTML = ` Sequência: ${sequencia} ... <br/>`;
    i++;
}