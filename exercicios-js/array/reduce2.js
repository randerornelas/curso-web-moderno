const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]

const bolsistas = a => a.bolsista

// Desafio 1: todos os alunos são bolsistas?
const todosBolsistas = (acumulador, atual) => acumulador && atual
const resultTodosBolsistas = alunos.map(bolsistas).reduce(todosBolsistas)

console.log(resultTodosBolsistas)

// Desafio 2: algum aluno é bolsista?
const algumBolsista = (acumulador, atual) => acumulador || atual
const resultAlgumBolsista = alunos.map(bolsistas).reduce(algumBolsista)

console.log(resultAlgumBolsista)