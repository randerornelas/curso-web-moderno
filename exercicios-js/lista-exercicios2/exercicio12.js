// Criar uma função que receba um array de números e retorne o menor número desse array.

function menorNumero(arr) {
    // const menor = Math.min(...arr)
    const menor = arr.reduce((anterior, atual) => anterior < atual ? anterior : atual)

    return menor
}

const nums1 = [10, 5, 35, 65]
const nums2 = [5, -15, 50, 3]

console.log(menorNumero(nums1)) // retornará 5
console.log(menorNumero(nums2)) // retornará -15