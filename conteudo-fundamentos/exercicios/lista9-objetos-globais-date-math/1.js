// Exercício 1: Você precisa criar uma função que receba um número decimal e o arredonde de
// três formas diferentes: para baixo, para cima e para o valor inteiro mais próximo. Mostre o
// resultado de cada arredondamento no console.
//     Exemplo Entrada: // 7.89
//     Exemplo Saída: // Arredondado para baixo: 7
//     Arredondado para cima: 8
// Arredondado para o valor mais próximo: 8

function arrendondar(numero) {
    console.log("Arredondado para o valor mais próximo: " + Math.round(numero));
    console.log("Arredondado para baixo: " + Math.floor(numero));
    console.log("Arredondado para cima:" + Math.ceil(numero));
}

arrendondar(7.89);
