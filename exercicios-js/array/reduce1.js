// o reduce transforma um array em um único elemento

const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]

const notas = a => a.nota
const somaNotas = (acumulador, atual) => acumulador + atual

const resultado = alunos.map(notas).reduce(somaNotas)

console.log(resultado)