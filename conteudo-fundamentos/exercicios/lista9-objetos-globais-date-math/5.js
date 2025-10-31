// Exercício 5: Crie uma função que receba uma data e extraia o ano, mês e dia dessa data.
//     Exiba as informações no console.
//     Exemplo Entrada: // 2024-10-07
//     Exemplo Saída: // Ano: 2024, Mês: 10, Dia: 6

function extrairData(dataStr) {
    const data = new Date(dataStr);
    const ano = data.getFullYear();
    const mes = data.getMonth() + 1;
    const dia = data.getDate();
    console.log(`Ano: ${ano}, Mês: ${mes}, Dia: ${dia}`);
}

extrairData("2024-10-07");