const avo = {
    sobrenome: this.sobrenome
}

const pai = {
    __proto__: avo,
    sobrenome: this.sobrenome,
    profissao: 'Professor'
}

const filho = {
    __proto__: pai,
    sobrenome: 'Silva'
}

console.log(filho.sobrenome, filho.profissao)