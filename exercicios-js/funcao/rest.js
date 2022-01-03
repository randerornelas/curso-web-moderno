function soma(...valores) {
    let total = 0

    for(const num in valores) {
        total += valores[num]
    }

    return total
}

console.log(soma(1, 2, 3))