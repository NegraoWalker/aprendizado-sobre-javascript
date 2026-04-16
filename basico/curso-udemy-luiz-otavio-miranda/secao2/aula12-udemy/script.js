let nome = "Walker"; //Variável declarada e inicializada

let idade; //Variável declarada apenas

let sobrenome; //Variável declarada
sobrenome = "Negrão"; //Variável inicializada

let profissao = "Engenheiro Eletricista";

console.log(nome, "nasceu em 1993");
console.log(idade); //A engine do JavaScript inicializa a variável idade com undefined
console.log(sobrenome);
console.log(profissao); //Saida: Engenheiro Eletricista

profissao = "Analista Desenvolvedor de Sistemas Pleno 2"; //Alterando o valor da variável profissao
console.log(profissao); //Saida: Analista Desenvolvedor de Sistemas Pleno 2

//NÃO PODE: Redeclaração de variável
// let nome; //SyntaxError: Identifier 'nome' has already been declared