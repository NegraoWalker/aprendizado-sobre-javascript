// Exercício 2: Dado o array ['Produto X', 'Produto Y'], adicione 'Produto Z' ao final
// e una com a nova lista ['Produto A', 'Produto B']. Exiba a lista final de produtos
// disponíveis.
//     Exemplo de Saída: // ['Produto X', 'Produto Y', 'Produto Z', 'Produto A', 'Produto B']

let array1 = ['Produto X', 'Produto Y'];
array1.push('Produto Z');
let array2 = ['Produto A', 'Produto B'];

console.log(array1.concat(array2));