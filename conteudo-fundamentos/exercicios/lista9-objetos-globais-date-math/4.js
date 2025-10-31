// Exercício 4: Crie uma função que receba duas datas e calcule a diferença entre elas em dias.
//     Exiba o resultado no console.
//     Exemplo Entrada: // 2024-01-01, 2024-10-07
//     Exemplo Saída: // Diferença em dias entre 2024-01-01 e 2024-10-07: 280

function diferencaDatas(dataStr1, dataStr2) {
    const data1 = new Date(dataStr1);
    const data2 = new Date(dataStr2);

    const diferencaEmDias = (data2 - data1) / (1000*60*60*24);
    console.log(`Diferença em dias entre ${dataStr1} e ${dataStr2}: ${diferencaEmDias}`);
}

diferencaDatas("2024-01-01", "2024-10-07");