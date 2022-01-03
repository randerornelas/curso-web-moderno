// ​Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.

function paresImpares(vetorNumeros) {
    let pares = 0
    let impares = 0
    
    for(let i in vetorNumeros) {
        if(vetorNumeros[i] % 2 ==0) {
            pares++
        } else {
            impares++
        }
    }
    
    console.log(`${pares} números pares e ${impares} números ímpares.`)
}

const numeros = [5, 65, 24, 23, 87, 14, 36, 95, 49, 28]
paresImpares(numeros)