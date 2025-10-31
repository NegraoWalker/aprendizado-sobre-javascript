// Exercício 2: Crie uma função que receba uma lista de números e retorne o valor máximo e o
// valor mínimo dessa lista.
//     Exemplo Entrada: // 10, 5, 20, 40, 1, 7
//     Exemplo Saída: // Valor mínimo: 1
//     Valor máximo: 40

function listaNumeros(numeros) {
    const maiorValor = Math.max(...numeros);
    const menorValor = Math.min(...numeros);
    console.log("Maior valor: ", maiorValor);
    console.log("Menor valor: ", menorValor);
}

listaNumeros([10, 5, 20, 40, 1, 7]);