let str1 = "Sequência de caracteres";

console.log(str1.indexOf('e')); //índice 1, senão existir retorna -1
console.log(str1.indexOf('caract')); //índice 13, retorna um número inteiro representando o primeiro índice onde a substring foi encontrada.

console.log(str1.search(/[a-z]/)); //índice 1, pode ser usado uma expressão regular