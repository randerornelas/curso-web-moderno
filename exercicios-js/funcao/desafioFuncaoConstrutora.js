class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}.`)
    }
}

const p1 = new Pessoa('João')
p1.falar()

// transformando a classe em função construtora
function Pessoa2(nome) {
    // pode colocar ou não o this
    // porém, com o this é possível acessar a variável de fora da função
    this.nome = nome

    this.falar = () => {
        console.log(`Meu nome é ${this.nome}.`)
    }
}

const p2 = new Pessoa2('João')
p2.falar()
