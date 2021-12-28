// sem promise...
const http = require('http')

const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`

    http.get(url, res => { // com o res, os resultados vão chegando aos poucos
        let resultado = ''

         // à medida que os resultados vão chegando, concatena com a variável resultado
        res.on('data', dados => {
            resultado += dados
        })

        // quando todos os dados tiverem chegado
        res.on('end', () => {
            callback(JSON.parse(resultado))
        })
    })
}

let nomes = []

getTurma('A', alunos => {
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))

    getTurma('B', alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))

        getTurma('C', alunos => {
            nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))

        console.log(nomes)
        })
    })
})