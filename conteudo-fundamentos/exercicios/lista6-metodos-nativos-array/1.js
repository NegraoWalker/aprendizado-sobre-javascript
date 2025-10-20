// Exercício 1: Dado o array ['Produto A', 'Produto B'], adicione 'Produto C' ao final,
//     remova o primeiro item e exiba o carrinho atualizado.
//     Exemplo de Saída: // ['Produto B', 'Produto C']

let array1 = ['Produto A', 'Produto B'];
array1.push('Produto C');
array1.shift();
console.log(array1);