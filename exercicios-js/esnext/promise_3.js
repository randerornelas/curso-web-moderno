function gerarNumerosEntre(min, max) {
    if(min > max) {
        [max, min] = [min, max]
    }

    return new Promise(resolve => {
        const aleatorio = parseInt(Math.random() * (max - min) + 1) + min
        resolve(aleatorio)
    })
}

gerarNumerosEntre(1, 60)
    .then(numX10 => numX10 * 10)
    .then(num => `O número gerado foi ${num}`)
    .then(console.log)