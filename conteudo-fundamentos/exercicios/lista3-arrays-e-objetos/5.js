// Exercício 5: Manipulação dos Tipos Referências
//     a. Crie um array estoque e atribua seus valores para um novo array novoEstoque.
//     b. Modifique um elemento de novoEstoque e mostre que estoque não foi alterado.
//     c. Crie um objeto funcionario e atribua seus valores para um novo objeto novoFuncionario.
//     d. Modifique uma propriedade de novoFuncionario e mostre que funcionario não foi alterado.

//a.
estoque = [10, 20, 30, 40];
novoEstoque = [...estoque];
//b.
novoEstoque[0] = 1;
console.log(estoque);
//c.
funcionario = {
    nome: "Juan",
    cargo: "Eletricista",
    salario: 2000
}
novoFuncionario = {...funcionario};
//d.
novoFuncionario.nome = "Lucas";
console.log(funcionario);