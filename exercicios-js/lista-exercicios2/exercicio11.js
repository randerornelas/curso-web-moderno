/* Numa aplicação Web de investimento financeiro da qual você faz parte da equipe de desenvolvimento,
pretende-se adicionar a funcionalidade de calcular a média de um conjunto de números informados
pelo usuário. Com o intuito de realizar esse cálculo, crie uma função que receba um array com uma
quantidade indeterminada de números e retorne a média simples desses números. */

function calcularMedia(arr) {
    const soma = arr.reduce((acumulador, valorAtual) => acumulador + valorAtual)
    const media = soma / arr.length

    return media
}

const nums1 = [0, 10]
const nums2 = [1, 2, 3, 4, 5]

console.log(calcularMedia(nums1)) // retornará 5
console.log(calcularMedia(nums2)) // retornará 3