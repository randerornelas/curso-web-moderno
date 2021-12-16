/* ​Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de
cada elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e
somente se o valor do elemento for maior que 5. */

function multiplicacaoVetor1(vetorNumeros, elemento) {
    const novoVetor = []

    for(let i = 0; i < vetorNumeros.length; i++) {
        novoVetor.push(vetorNumeros[i] * elemento)
    }

    return novoVetor
}

function multiplicacaoVetor2(vetorNumeros, elemento) {
    const novoVetor = []

    for(let i = 0; i < vetorNumeros.length; i++) {
        if(elemento > 5) {
            novoVetor.push(vetorNumeros[i] * elemento)
        } else {
            return 'O elemento deve ser maior que 5'
        }
    }

    return novoVetor
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(multiplicacaoVetor1(numeros, 3))
console.log(multiplicacaoVetor2(numeros, 6))