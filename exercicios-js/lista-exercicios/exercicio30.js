/* ​Escreva um algoritmo que percorre um vetor de inteiros e
defina o maior e menor valor dentro do vetor. */

function maiorEMenor(vetorNumeros) {
    let maior
    let menor

    for(let i = 0; i < vetorNumeros.length; i++) {
        if(maior === undefined && menor === undefined) {
            maior = vetorNumeros[i]
            menor = vetorNumeros[i]
        }
        if(vetorNumeros[i] > maior) {
            maior = vetorNumeros[i]
        }
        if(vetorNumeros[i] < menor) {
            menor = vetorNumeros[i]
        }
    }

    return [maior, menor]
}

const numeros = [6, 65, 24, 23, 87, 14, 36, 93, 49, 28]
console.log(maiorEMenor(numeros))