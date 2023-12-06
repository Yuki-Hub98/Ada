const numbers = []
const main = (number) => {
    for (let i = 0; i <= number; i++) {
        numbers.push(i);
    }
    return primeNumber(numbers);
}

const primeNumber = (array) => {
    const primeNumbers = array.map((numberPrime) => {
        return numberPrime
    }).filter((prime) => isPrime(prime));
    return som(primeNumbers)  
}

const som = (primeNumbers) => {
    const some = primeNumbers.reduce((acum, value) => {return acum + value}, 0)
    return some
}

const isPrime = (num) => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return num > 1
}


console.log(main(1000))

