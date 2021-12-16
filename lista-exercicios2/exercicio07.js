/* Você escreverá uma função que recebe um objeto como primeiro parâmetro e, como segundo parâmetro,
o nome de uma propriedade contida nesse objeto. Em seguida, retorne uma cópia desse objeto sem a
propriedade especificada no segundo parâmetro. */

function removerPropriedade(obj, propriedade) {
    const copia = Object.assign({}, obj)

    delete copia[propriedade]

    return copia
}

const obj = {a: 1, b: 2, c: 3}

console.log(removerPropriedade(obj, 'b'))