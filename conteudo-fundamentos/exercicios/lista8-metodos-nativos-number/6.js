// Exercício 6: Verificar se o número é finito
// Você quer garantir que um número não seja Infinity ou NaN antes de usá-lo em cálculos.
//     Exemplo de Entrada: // 1 / 0;
// // NaN ou “abc”;
//     Exemplo de Saída: // ""O número é infinito ou não é um número."
const entrada = 1/0;
if (entrada !== NaN && entrada !== 1/0) {
    console.log("Número válido!");
} else {
    console.log("Não é um número válido!");
}