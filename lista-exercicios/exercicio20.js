/* Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1. */

function saque(valor) {
    cont1 = 0
    cont5 = 0
    cont10 = 0
    cont20 = 0
    cont50 = 0
    cont100 = 0

    while (valor > 0) {
        if(valor >= 100) {
            valor -= 100
            cont100++
        } else if(valor >= 50) {
            valor -= 50
            cont50++
        } else if(valor >= 20) {
            valor -= 20
            cont20++
        } else if(valor >= 10) {
            valor -= 10
            cont10++
        } else if(valor >= 5) {
            valor -= 5
            cont5++
        } else if(valor >= 1) {
            valor -= 1
            cont1++
        } else {
            console.log('Valor não permitido.')
        }
    }

    return distribuirCedulas(cont100, cont50, cont20, cont10, cont5, cont1)
}

function distribuirCedulas(c100, c50, c20, c10, c5, c1) {
    let resultado = ''

    if(c100 > 0) {
        resultado += `${c100} nota(s) de R$ 100,00\n`
    }
    if(c50 > 0) {
        resultado += `${c50} nota(s) de R$ 50,00\n`
    }
    if(c20 > 0) {
        resultado += `${c20} nota(s) de R$ 20,00\n`
    }
    if(c10 > 0) {
        resultado += `${c10} nota(s) de R$ 10,00\n`
    }
    if(c5 > 0) {
        resultado += `${c5} nota(s) de R$ 5,00\n`
    }
    if(c1 > 0) {
        resultado += `${c1} nota(s) de R$ 1,00\n`
    }

    return resultado
}

console.log(saque(97))