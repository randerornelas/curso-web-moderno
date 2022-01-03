// IIFE -> Immediately Invoked Function Expression
// é muito utilizado quando se quer fugir do escopo global

(function() {
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
})()
