// Exercício 2: Dada a string "Aprendendo Javascript", extraia a palavra "Aprendendo" e, em seguida, converta essa palavra para letras
// minúsculas.
//     Exemplo de Saída: // “aprendendo”

const str = "Aprendendo Javascript";
const substring = str.split(" ");
console.log(substring[0].toLowerCase());