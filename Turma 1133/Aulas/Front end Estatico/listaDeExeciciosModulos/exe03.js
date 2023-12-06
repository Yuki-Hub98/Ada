const pessoas = [
    { nome: 'João', altura: 1.75, peso: 80 },
    { nome: 'Maria', altura: 1.68, peso: 60 },
    { nome: 'Pedro', altura: 1.80, peso: 70 },
    { nome: 'Ana', altura: 1.65, peso: 55 },
    { nome: 'Carlos', altura: 1.90, peso: 100 }
  ]

  calcImc = (peso, altura) => {
     return (peso / (altura*altura)).toFixed(1)
    }

  pessoaImc = (pessoas) => {
        for (const key in pessoas) {
           console.log(`O imc da(o) ${pessoas[key].nome} é ${calcImc(pessoas[key].peso, pessoas[key].altura)}`) 
                
        }
    }
  

    pessoaImc(pessoas);