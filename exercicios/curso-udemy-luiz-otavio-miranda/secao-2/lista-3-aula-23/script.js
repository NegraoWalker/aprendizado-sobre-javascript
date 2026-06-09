/*
    Dadas as variáveis:
        let varA = 'A';
        let varB = 'B';
        let varC = 'C';
    Altere os valores das mesmas para que seja exibido na tela:
        B
        C
        A
*/

let varA = 'A';
let varB = 'B';
let varC = 'C';

let aux;
aux = varA;

varA = varB;
varB = varC;
varC = aux;

/*
    Forma moderna de resolver: [varA, varB, varC] = [varB, varC, varA];
*/

console.log(
`
${varA}
${varB}
${varC}
`
);