const moduloA = require('../../moduloA')
console.log(moduloA.ola)

// Na pastaC, basta chamar a pasta, pois se tiver um arquivo chamado index.js
// ele será chamado automaticamente.
// Inclusive no arquivo index.js, pode ser chamado outros módulos, que serão
// automaticamente executados na chamada do index.js.
const c = require('./pastaC')
console.log(c.ola2)