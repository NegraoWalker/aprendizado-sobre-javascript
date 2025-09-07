// 3 - Escreva uma função que recebe do usuário um valor de temperatura em graus Celsius e escreve na
// tela o texto:
// a temperatura correspondente em Farenheit é de xºF (sendo x o resultado da conversão.)
// Obs: temperatura em Farenheit = (9/5)*( temperatura em Celsius ) + 32

const conversaoTemperatura = function (temperaturaCelsius) {
    const resultado = (9/5) * (temperaturaCelsius) + 32;
    const resultadoArrendondado = Number(resultado.toFixed(2));
    return `A temperatura correspondente em Farenheit é de ${resultadoArrendondado}ºF`;
}

console.log(conversaoTemperatura(100));