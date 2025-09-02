// Exercício 4: Manipulação de Objetos - parte 2
//     a. Crie um objeto chamado venda com as propriedades cliente, produto e valor.
//     b. Adicione a propriedade data ao objeto.
//     c. Remova a propriedade produto e imprima o objeto atualizado.

//a.
venda = {
    cliente: "Lucas",
    produto: "TV",
    valor: 1999
};
//b.
venda.data = "01/09/2025";
//c.
delete venda.produto;
console.log(venda);