function Lancamento(nome = 'Genérico', valor = 0) {
    this.nome = nome
    this.valor = valor
}

function CicloFinanceiro(mes, ano) {
    this.mes = mes
    this.ano = ano
    this.lancamentos = []

    this.addLancamentos = (...lancamentos) => {
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    this.sumario = () => {
        let valorConsolidado = 0

        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })

        return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 4500)
const contaDeLuz = new Lancamento('Luz', -220)

const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contaDeLuz)

console.log(contas.sumario())