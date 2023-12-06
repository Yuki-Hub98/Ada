const empregados = [
    { nome: 'João', salario: 1200 },
    { nome: 'Maria', salario: 1500 },
    { nome: 'Pedro', salario: 1800 },
    { nome: 'Ana', salario: 1400 },
    { nome: 'Carlos', salario: 2000 }
  ]
const array = []
const maiorSalario = (salario) => salario >= 1500
const menorSalario = (salario) => salario <= 1000
let contadorMaior = 0
let contadorMenor = 0
for (const key in empregados) {
    array.push(empregados[key].salario)
    if (array.some(maiorSalario)) {
        contadorMaior++
        if (array[key] === empregados[key].salario) {
            console.log(`A pressoas que tem o salario maior ou a igual a 1500 são: ${empregados[key].nome}`);
        } 
    }else if(array.some(menorSalario)){
        contadorMenor++
        if (array[key] === empregados[key].salario) {
            console.log(`A pressoas que tem o salario menor ou a igual a 1000 são: ${empregados[key].nome}`);
        } 
    }   
}
console.log(`Um total de ${contadorMaior} tem o salario maior ou igual a 1500`);
console.log(`Um total de ${contadorMenor} tem o salario menor ou igual a 1000`);





