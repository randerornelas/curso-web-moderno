const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop() // exclui o último elemento
console.log(pilotos)

pilotos.push('Verstappen') // Adiciona na última posição
console.log(pilotos)

pilotos.shift() // exclui o primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona na primeira posição
console.log(pilotos)

// splice pode adicionar e remover elementos

// adicionar
// a partir do índice 2, exclui 0 e adiciona dois elementos
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
// a partir do índice 3, excluir 1 elemento
pilotos.splice(3, 1)
console.log(pilotos)

// retorna um novo array, a partir do índice 2
const algunsPilotos = pilotos.slice(2)
console.log(algunsPilotos)

// retorna um novo array, a partir do índice 1 até o índice 4, não incluindo o 4
const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)