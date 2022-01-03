/* Elabore uma função que recebe um número como parâmetro e retorne uma string com o
símbolo "+" na quantidade especificada no parâmetro. */

function simboloMais(num) {
    let simboloMais = ''

    for(let i = 0; i < num; i++) {
        simboloMais += '+'
    }

    console.log(simboloMais)
}

simboloMais(3)