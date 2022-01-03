/*
CPF = 168.995.350-09
------------------------------------------------
1 * 10 = 10           #    1 * 11 = 11 <-
6 * 9  = 54           #    6 * 10 = 60
8 * 8  = 64           #    8 *  9 = 72
9 * 7  = 63           #    9 *  8 = 72
9 * 6  = 54           #    9 *  7 = 63
5 * 5  = 25           #    5 *  6 = 30
3 * 4  = 12           #    3 *  5 = 15
5 * 3  = 15           #    5 *  4 = 20
0 * 2  = 0            #    0 *  3 = 0
                      # -> 0 *  2 = 0
         297          #             343
11 - (297 % 11) = 11  #     11 - (343 % 11) = 9
11 > 9 = 0            #
Digito 1 = 0          #   Digito 2 = 9
*/

function validaCpf(cpf) {
    let reverso = 10
    let soma = 0
    let digito = ''

    cpf = cpf.substring(0, 9)

    for(let n = 0; n < 2; n++) {
        for(let i = 0; i < cpf.length; i++) {
            soma += cpf[i] * reverso
            reverso--
        }

        const result = 11 - (soma % 11)

        if(result > 9) {
            digito += 0
        } else {
            digito += result
        }

        cpf += digito

        reverso = 11
        soma = 0
        digito = ''
    }

    return cpf
}

function comparaCpf(cpf) {
    if(cpf === validaCpf(cpf)) {
        return 'CPF Válido!'
    } else {
        return 'CPF Inválido!'
    }
}

const cpf = '02494874103'

console.log(comparaCpf(cpf))