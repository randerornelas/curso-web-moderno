let p = new Promise(function(cumprirPromessa) {
    cumprirPromessa('teste') // só é possível passar apenas um valor
})

// valorCumprido é o que foi passado na chamada da função cumprirPromessa, no caso 'teste'
p.then(function(valorCumprido) {
    console.log(valorCumprido)
})

// -----------------------

let p2 = new Promise((resolve) => {
    // só é possível passar apenas um valor, no caso um array
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

p2.then(valorCumprido => valorCumprido[0]) // valorCumprido é o que foi passado na chamada da função resolve
    .then(primeiroElemento => primeiroElemento[0]) // o valor é o resultado da função then anterior
    .then(primeiraLetra => primeiraLetra.toLowerCase())
    .then(letraMinuscula => console.log(letraMinuscula))