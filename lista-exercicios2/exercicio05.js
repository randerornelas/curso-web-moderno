/* Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá,
enquanto que o segundo será o número de vezes que haverá repetição. Um array será retornado. */

function repetir(elemento, quantidade) {
    const result = []

    for(let i = 0; i < quantidade; i++) {
        result.push(elemento)
    }

    console.log(result)
}

repetir(5, 3)