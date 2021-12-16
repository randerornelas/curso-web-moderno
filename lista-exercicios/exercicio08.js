/*
Dada uma lista string = “pontuação1 pontuação2 pontuação3 etc..”, escreva uma função que ao recebê-la
irá comparar os valores um a um e irá retornar um vetor com o número de vezes que ele bateu seu recorde
de maior número de pontos e quando fez seu pior jogo. (Número do pior jogo).
Obs.: O primeiro jogo não conta como novo recorde do melhor.
Exemplo:
String: “10 20 20 8 25 3 0 30 1”
Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
aconteceu no sétimo jogo.)
*/
let pontuacoes = "10, 20, 20, 8, 25, 3, 0, 30, 1"
 
 
function avaliaPontuacoes (pontuacoes) {
    let pontos = pontuacoes.split(", ")
    let qtdQuebraDeRecords = 0
    let piorJogo = 1
    let maiorPontuacao = 0
    let menorPontuacao = pontos[0]

    for (let i = 0; i < pontos.length; i++) {
        if(pontos[i] > maiorPontuacao) {
            maiorPontuacao = pontos[i]
            qtdQuebraDeRecords++
        }else if (pontos[i] < menorPontuacao) {
            menorPontuacao = pontos[i]
            piorJogo = i+1;
        }
    }
    return [qtdQuebraDeRecords, piorJogo]
}
 
console.log(avaliaPontuacoes(pontuacoes))