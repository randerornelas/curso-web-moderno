/*
O objetivo é que a função receba um array e retorne ele caso o seu tamanho corresponda ao
número enviado como parâmetro na função. Caso contrário, um erro será lançado.

Crie uma função que recebe um array e um número
Realize as seguintes validações
Se os parâmetros não forem enviados, lance um erro do tipo ReferenceError
Se o array não for do tipo 'object', lance um erro do tipo TypeError
Se o número não for do tipo 'number', lance um erro do tipo TypeError
Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo RangeError
Utilize a declaração try...catch
Filtre as chamadas de catch por cada tipo de erro utilizando o operador instanceof
*/

function retornaArray(arr, num) {
    if(!arr && !num) {
        throw new ReferenceError('Preencha os parâmetros.')
    }
    if(typeof arr != 'object') {
        throw new TypeError('O array precisa ser do tipo object.')
    }
    if(typeof num != 'number') {
        throw new TypeError('Número inválido.')
    }
    if(arr.length != num) {
        throw new RangeError('O número não corresponde ao tamanho do array.')
    }

    return arr
}

try {
    console.log(retornaArray([1, 2, 3], 3))
} catch (e) {
    console.log(e)
}