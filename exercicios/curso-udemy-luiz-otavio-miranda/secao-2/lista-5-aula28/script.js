let numero = Number(prompt('Digite um número:'));
let h1 = document.querySelector('h1');

h1.textContent = `Seu número é: ${numero}`;

let raizQuadrada = Math.sqrt(numero);
let eInteiro = Number.isInteger(numero);
let eNaN = Number.isNaN(numero);
let arrendondandoParaBaixo = Math.floor(numero);
let arrendondandoParaCima = Math.ceil(numero);
let numeroComDuasCasasDecimais = numero.toFixed(2);

h1.insertAdjacentHTML('afterend',
    `
    <h3>Raiz quadrada: ${raizQuadrada} </h3>
    <h3>${numero} é inteiro: ${eInteiro} </h3>
    <h3>${numero} é NaN: ${eNaN} </h3>
    <h3>Arrendondando o número para baixo: ${arrendondandoParaBaixo} </h3>
    <h3>Arrendondando o número para cima: ${arrendondandoParaCima} </h3>
    <h3>O número com duas casas decimais: ${numeroComDuasCasasDecimais} </h3>
    `
);
