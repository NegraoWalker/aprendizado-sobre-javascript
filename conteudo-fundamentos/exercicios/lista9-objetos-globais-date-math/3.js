// Exercício 3: Você deve criar uma função que gere três tipos de números aleatórios: um entre 0
// e 1, outro entre 0 e 100, e um número inteiro aleatório entre dois valores específicos. Exiba os
// resultados no console.
//     Exemplo Entrada: // 50, 100
//     Exemplo Saída: // Aleatório entre 0 e 1: 0.8629821531529918
//     Aleatório entre 0 e 100: 42.48780566605361
// Aleatório entre 50 e 100: 63.70589822740784

function gerarNumerosAleatorios(valor1, valor2) {
    const numero1 = Math.random();
    const numero2 = Math.random() * 100;
    const numero3 = (Math.random() * (valor2 - valor1)) + valor1;
    console.log(`Aleatório entre 0 e 1: ${numero1}`);
    console.log(`Aleatório entre 0 e 100: ${numero2}`);
    console.log(`Aleatório entre ${valor1} e ${valor2}: ${numero3}`);
}

gerarNumerosAleatorios(50, 100);