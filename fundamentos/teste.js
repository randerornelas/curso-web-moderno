const familia = {
    receitas: [200, 150, 250],
    despesas: [50, 35, 200, 32, 150, 65]
}

function soma(array) {
    let total = 0

    for (let i in array) {
        total += array[i]
    }

    return total
}

function balanco() {
    const totalReceitas = soma(familia.receitas)
    const totalDespesas = soma(familia.despesas)

    let total = totalReceitas - totalDespesas

    return total
}

if(balanco() >= 0) {
    console.log(`Saldo positivo de R$ ${balanco()}.`)
} else {
    console.log(`Saldo negativo de R$ ${balanco()}.`)
}