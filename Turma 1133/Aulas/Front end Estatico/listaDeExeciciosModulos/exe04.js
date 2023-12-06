const alunos = [
    { nome: 'Ana', notas: [7, 8, 9] },
    { nome: 'Pedro', notas: [5, 6, 7] },
    { nome: 'Maria', notas: [9, 8, 10] },
    { nome: 'João', notas: [6, 7, 8] },
    { nome: 'Lucas', notas: [8, 9, 7] },
    { nome: 'Julia', notas: [10, 8, 9] }
  ]
  const mediaAlunos = new Map()
  
  setMedia = (nome, notas) =>{ 
    for (let i = 0; i < 1 ; i++) {
        mediaAlunos.set(nome,  notas.reduce((acumulador, value) => acumulador + value)/3); 
    } 
    
  }
  
  for (const key in alunos) {
       setMedia(alunos[key].nome, alunos[key].notas)
  }
  
  console.log(mediaAlunos)