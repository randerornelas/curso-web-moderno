// Fazer um programa para encontrar todos os pares entre 1 e 100.

function paresDe1A100() {
    const pares = []

    for(let i = 1; i <= 100; i++) {
        if(i % 2 == 0) {
            pares.push(i)
        }
    }

    return pares
}

console.log(paresDe1A100())