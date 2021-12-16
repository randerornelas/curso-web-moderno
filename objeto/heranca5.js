console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.inverso = function() {
    return this.split('').reverse().join('')
}

console.log('Escola Cod3r'.inverso())

Array.prototype.primeiroElemento = function() {
    return this[0]
}

console.log([1, 2, 3, 4, 5].primeiroElemento())
console.log(['a', 'b', 'c'].primeiroElemento())