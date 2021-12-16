let dobro = function(a) {
    return 2 * a
}

dobro = a => {
    return 2 * a
}

dobro = a => 2 * a // return implícito

console.log(dobro(4))

let ola = function() {
    console.log('Olá')
}

ola = () => 'Olá'
ola = _ => 'Olá' // possui um param

console.log(ola())