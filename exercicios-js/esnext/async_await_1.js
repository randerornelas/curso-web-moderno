function esperarPor(tempo = 2000) {
    return new Promise(resolve => {
        setTimeout(function() {
            console.log(`Async/Await...`)
            resolve()
        }, tempo)
    })
}

// function retornarValor() {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(10), 5000)
//     })
// }

async function executar() {
    // let valor = await retornarValor()

    await esperarPor(1500)
    await esperarPor(1500)
    await esperarPor(1500)
}

executar()