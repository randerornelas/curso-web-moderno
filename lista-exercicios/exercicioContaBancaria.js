class ContaBancaria {
	constructor(agencia, numero, tipo) {
		this.agencia = agencia;
		this.numero = numero;
		this.tipo = tipo;
		this._saldo = 0;
	}
    
    set saldo(valor) {
        this._saldo = valor;
    }

    get saldo() {
        return this._saldo;
    }
    
	sacar(valor) {
		if (valor > this._saldo) {
			return console.log('Saldo insuficiente!');
		}

		this._saldo -= valor;
	}

	depositar(valor) {
		this._saldo += valor;
	}

}

class ContaCorrente extends ContaBancaria {
	constructor(agencia, numero, cartaoCredito) {
		super(agencia, numero);
		this.tipo = 'corrente';
		this._cartaoCredito = cartaoCredito;
	}

	set cartaoCredito(valor) {
		this._cartaoCredito = valor;
	}

	get cartaoCredito() {
		return this._cartaoCredito;
	}
}

class ContaPoupanca extends ContaBancaria {
	constructor(agencia, numero) {
		super(agencia, numero);
		this.tipo = 'poupança';
	}
}

class ContaUniversitaria extends ContaBancaria {
	constructor(agencia, numero) {
		super(agencia, numero);
		this.tipo = 'universitária';
	}

	sacar(valor) {
		if (valor > 500) {
			return 'Operação negada.';
		}

		this._saldo -= valor;
	}
}

const corrente = new ContaCorrente(1202, 45678, 546546546546)

corrente.depositar(700)
console.log(corrente.saldo)

corrente.sacar(250)
console.log(corrente.saldo)