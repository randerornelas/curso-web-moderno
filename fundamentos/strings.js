const escola = "Cod3r";

console.log(escola.charAt(4));
console.log(escola.charCodeAt(3)); // pega o valor na tabela ascii
console.log(escola.indexOf(3));

console.log(escola.substring(2));
console.log(escola.substring(0, 3));

console.log("Escola ".concat(escola).concat("!"));
console.log(escola.replace(3, "e")); // substitui o 3 pelo e

console.log("Ana, Maria, Pedro".split(","));