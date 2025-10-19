// Exercício 4: Dada a string 'cadeira, mesa, sofá, armário', divida essa string em um array de
// produtos e remova o item 'sofá' da lista.
//     Exemplo de Saída: “["cadeira", "mesa", "armário"]”

const str = "cadeira, mesa, sofá, armário";
const substring = str.split(", ");
substring.splice(2,1);
console.log(substring);