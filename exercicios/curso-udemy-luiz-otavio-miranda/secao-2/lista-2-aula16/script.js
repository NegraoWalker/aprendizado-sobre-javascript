/*
    Exibir na tela: $"NOME" $"SOBRENOME" tem $IDADE anos, pesa $PESO Kg tem $ALTURA e seu IMC é de $VALOR
*/
let nome = "Walker";
let sobrenome = "Negrão";
let idade = 33;
let peso = 102.5;
let altura = 1.88;

let imc;
let anoDeNascimento;


imc = (peso / (altura * altura));
anoDeNascimento = 2026 - 33;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} Kg tem ${altura} metros e seu IMC é de ${imc.toFixed(2)}.
${nome} ${sobrenome} nasceu em ${anoDeNascimento}`);