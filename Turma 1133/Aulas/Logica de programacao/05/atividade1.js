const numeroAleatorio = Math.ceil(Math.random() * 100);
console.log(numeroAleatorio);
let tentativas = 0;

while(true){
  let numeroDigitado = prompt('Digite um número')
  tentativas++
  
  if (numeroDigitado === numeroAleatorio) {
    alert(`Parabéns voce acertou o numero em ${tentativas} tentativas`)
    break;
  } else if (numeroDigitado > numeroAleatorio) {
    alert(`${numeroDigitado} é maior que o número aleatório`)
  } else{
    alert(`${numeroDigitado} é menor que o número aleatório`) }

    break;
}