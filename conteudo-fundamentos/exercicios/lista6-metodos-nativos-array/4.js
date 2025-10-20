// Exercício 4: Dado o array [2, 5, 8, 1], verifique se pelo menos um dos números é maior
// que 7.
// Exemplo de Saída: // true
let array = [2, 5, 8, 1];
for (let item of array) {
    if (item > 7) {
        console.log(true);
        break;
    }
}

/*
    let numeros = [2, 5, 8, 1];
    let resultadoSome = numeros.some((numero) => numero > 7);
    console.log("Resultado: ", resultadoSome);

 */