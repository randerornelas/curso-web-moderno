function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

const pessoa = {
  nome: 'Rander',
  idade: 35
}

const animal = {
  nome: 'Doug',
  idade: 6
}

console.log(calculaIdade.call(pessoa, 5))
console.log(calculaIdade.apply(animal, [4]))
