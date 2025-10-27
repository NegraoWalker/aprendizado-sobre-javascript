// Exercício 1: Converta valores de texto em números
// Imagine que você tem valores em formato de texto, como "150.50" ou "200px". Seu objetivo é
// convertê-los para números reais.
//     Exemplo de Entrada: // "150.50";
// // "200px";
// // "abc";
//     Exemplo de Saída: // 150.50
// // 200
// // NaN

const str1 = "150.50";
const str2 = "200px";
const str3 = "abc";


const num1 = parseFloat(str1);
const num2 = parseInt(str2);
const num3 = Number(str3);

const teste = Number(num2);

console.log(num1);
console.log(num2);
console.log(num3);

console.log(teste);
