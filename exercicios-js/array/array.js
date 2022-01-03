// let aprovados = new Array('Bia', 'Carlos', 'Ana')
let aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados)

aprovados[3] = 'Rafael'
aprovados.push('Abia')
console.log(aprovados)

delete aprovados[2]
console.log(aprovados)

aprovados.sort()
console.log(aprovados)

// a partir do índice [2] exclui 1 registro
aprovados.splice(2, 1)
console.log(aprovados)