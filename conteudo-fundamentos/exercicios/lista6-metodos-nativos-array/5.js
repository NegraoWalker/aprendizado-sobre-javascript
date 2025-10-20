// Exercício 5: Dado o array [4, 6, 8, 2], verifique se todos os números são maiores que 3.
// Exemplo de Saída: // false

let array = [4, 6, 8, 2];
for (let item of array) {
    if (item < 3) {
        console.log(false);
        break;
    }
}

/*
    let listaNumeros = [4, 6, 8, 2];
    let resultadoEvery = listaNumeros.every((numero) => numero > 3);
    console.log( "Resultado: ", resultadoEvery);
 */