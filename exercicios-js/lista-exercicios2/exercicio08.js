/* Elabore uma função que receba um array de números e retorne um array que tenha todos os
números que são pares e que também tenham índices pares. */

function receberSomenteOsParesDeIndicesPares(arr) {
    const result = []

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 == 0 && i % 2 == 0) {
            result.push(arr[i])
        }
    }

    return result
}

const nums = [10, 70, 22, 43]

console.log(receberSomenteOsParesDeIndicesPares(nums))