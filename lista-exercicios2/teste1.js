/* Crie uma função que recebe uma lista de preços e um número representando o saldo disponível.
Calcule qual será o saldo final após subtrair todos os preços da lista enviada. */

function calculaSaldo(produtos, saldoDisponivel) {
    const precos = p => p.preco
    const subtracaoPrecos = (acumulador, preco) => acumulador - preco
    const saldoFinal = produtos.map(precos).reduce(subtracaoPrecos, saldoDisponivel)

    return saldoFinal
}

const produtos = [
    {
        nome: 'Monitor 19',
        preco: 700
    },
    {
        nome: 'Teclado',
        preco: 90
    },
    {
        nome: 'Mouse',
        preco: 70
    }
]

const saldo = 1000

console.log(calculaSaldo(produtos, saldo).toFixed(2))