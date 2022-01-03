/* Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade
de vezes que o caractere se repete na string. A função deverá ser case-sensitive, ou seja,
irá diferenciar maiúsculas de minúsculas. */

function contarCaractere(caractere, texto) {
    let contador = 0

    for(let i = 0; i < texto.length; i++) {
        if(texto.charAt(i) == caractere) {
            contador++
        }
    }

    return contador
}

console.log(contarCaractere('e', 'A sorte favorece os audazes'))
console.log(contarCaractere('t', 'Conhece-te a ti mesmo'))