/* Você está trabalhando numa aplicação pessoal de controle de despesas. Na tela principal dessa
aplicação, é possível adicionar produtos ou serviços, informando nome, categoria e preço.
Uma funcionalidade que você está desenvolvendo no momento é a de somar o total das despesas.
Crie uma função que receba um array de produtos e retorne o total das despesas. */

function despesasTotais(arr) {
    const precos = d => d.preco
    const total = (soma, preco) => (soma + preco)

    const result = arr.map(precos).reduce(total)

    return result
}

const despesas1 = [
    {nome: "Jornal online", categoria: "Informação", preco: 89.99},
    {nome: "Cinema", categoria: "Entretenimento", preco: 150}
]

const despesas2 = [
    {nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99},
    {nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90}
]

console.log(despesasTotais(despesas1))