function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.2
    }
}

const produto = criarProduto('Caderno', 25.50)
const produto2 = criarProduto('Notebook', 2199.90)

console.log(produto)
console.log(produto2)
