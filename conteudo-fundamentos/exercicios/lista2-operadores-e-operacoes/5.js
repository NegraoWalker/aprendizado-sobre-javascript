// Exercício 5: Você tem três variáveis: uma que representa se um produto está disponível como
// um booleano (true), outra que representa a quantidade de produtos no estoque (10), e uma
// terceira que representa a quantidade mínima necessária de produtos no estoque (15). Verifique
// se o produto está disponível e se a quantidade é suficiente (igual ou maior que a quantidade
// mínima necessária) usando operadores lógicos NOT e AND. Imprima no console se o produto
// está disponível e tem a quantidade suficiente.

let produtoDisponivel = true;
let quantidadeDeProdutosEmEstoque = 10;
let quantidadeMinimaDeProdutosEmEstoque = 15;

produtoDisponivel === true && quantidadeDeProdutosEmEstoque >= quantidadeMinimaDeProdutosEmEstoque ?
    console.log("Produto disponível e quantidade suficiente em estoque!") :
    console.log("Produto não disponível e quantidade de produtos insuficiente!");