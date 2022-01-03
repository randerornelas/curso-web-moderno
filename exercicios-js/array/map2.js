// retornar um array apenas com os precos

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lápis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

const jsonParaObj = json => JSON.parse(json)
const precos = prod => prod.preco

const result = carrinho.map(jsonParaObj).map(precos)

console.log(result)