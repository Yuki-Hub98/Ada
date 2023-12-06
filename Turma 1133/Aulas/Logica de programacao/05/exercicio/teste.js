function fibonacci(n) {
    let sequence = [0, 1];
  
    for (let i = 2; i < n; i++) {
      sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
  
    return sequence;
  }
  
  // Chamar a função e imprimir os primeiros 10 números da sequência
  const sequence = fibonacci(10);
  console.log(sequence);