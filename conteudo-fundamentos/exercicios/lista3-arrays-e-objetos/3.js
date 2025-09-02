// Exercício 3: Manipulação de Objetos - parte 1
//     a. Crie um objeto chamado produto com as propriedades nome, preco e quantidade.
//     b. Acesse e imprima o nome do produto.
//     c. Modifique o preço do produto e imprima o objeto atualizado.

//a.
produto = {
    nome: "Juan",
    preco: 1000.45,
    quantidade: 2
};
//b.
console.log(produto.nome);
//c.
produto.preco = 999.99;
console.log(produto);