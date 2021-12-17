/* A fim de criar um mecanismo de busca para sua aplicação, você precisa iniciar criando uma
função para identificar palavras semelhantes. Escreva uma função que recebe como primeiro
parâmetro uma palavra e, como segundo parâmetro, um array de strings. A função deverá
filtrar as palavras do array que contêm nelas a string do primeiro parâmetro. */

function buscarPalavrasSemelhantes(termo, lista) {
    /*let novaLista = []
    
    for(let i = 0; i < lista.length; i++) {
        if(lista[i].includes(termo)) {
            novaLista.push(lista[i])
        }
    }*/

    const result = lista.filter(palavra => palavra.includes(termo))

    return result
}

console.log(buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]) )
console.log(buscarPalavrasSemelhantes("java", ["javascript", "java", "c++"]))