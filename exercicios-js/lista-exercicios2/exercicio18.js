/* Elabore uma função que recebe um objeto com estudantes e suas notas. As notas de cada estudante
estarão num array, conforme exemplo abaixo. Você deverá calcular a média da nota de cada aluno e retornar
um objeto com os atributos nome e media, que indica o aluno que teve o melhor desempenho nas notas. */

function recerberMelhorEstudante(estudantes) {
    const melhorEstudante = {}

    let soma
    let maiorMedia = 0

    for(let[chave, valor] of Object.entries(estudantes)) {
        soma = valor.reduce((acumulador, atual) => acumulador + atual)
        media = soma / valor.length
        
        if(media > maiorMedia) {
            maiorMedia = media
            melhorEstudante.nome = chave
            melhorEstudante.media = maiorMedia
        }
    }

    return melhorEstudante

}

const estudantes = {
    Joao: [8, 7.6, 8.9, 6], // média 7.625
    Mariana: [9, 6.6, 7.9, 8], // média 7.875
    Carla: [7, 7, 8, 9] // média 7.75
}

console.log(recerberMelhorEstudante(estudantes))