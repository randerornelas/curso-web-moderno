/* ​Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C,
de 7,0 a 8,9 o conceito B e de 9,0 a 10,0 o conceito A. */

function conceitos(vetorNotas) {
    const conceitos = []
    
    for(let i = 0; i < vetorNotas.length; i++) {
        if(vetorNotas[i] >= 0 && vetorNotas[i] <= 4.9) {
            conceitos.push('D')
        } else if(vetorNotas[i] >= 5 && vetorNotas[i] <= 6.9) {
            conceitos.push('C')
        } else if(vetorNotas[i] >= 7 && vetorNotas[i] <= 8.9) {
            conceitos.push('B')
        } else if(vetorNotas[i] >= 9 && vetorNotas[i] <= 10) {
            conceitos.push('A')
        } else {
            conceitos.push('Nota inválida!')
        }
    }

    console.log(vetorNotas)
    console.log(conceitos)
}

const notas = [2.5, 6.9, 7.5, 9.6, 9.8, 4.5, 2.6, 5.7]

conceitos(notas)