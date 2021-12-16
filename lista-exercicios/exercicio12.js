// Faça um algoritmo que calcule o fatorial de um número.

function fatorial(num) {
    let resultado = num

    for(let i = 1; i < num; i++) {
        resultado *= i
    }

    return resultado
}

console.log(fatorial(6))