// Desafio: Crie uma função que receba uma data e a formate no padrão brasileiro (dia/mês/ano).
//     Exiba o resultado no console.
//     Exemplo Entrada: // 2024-10-07
//     Exemplo Saída: // Data formatada no padrão brasileiro: 07/10/2024

function formatarData(dataStr) {
    const data = new Date(dataStr);

    // Extrai dia, mês e ano em UTC
    const dia = data.getUTCDate().toString().padStart(2, '0');
    const mes = (data.getUTCMonth() + 1).toString().padStart(2, '0');
    const ano = data.getUTCFullYear();

    // Monta a data formatada no padrão brasileiro
    const dataFormatada = `${dia}/${mes}/${ano}`;

    console.log(`Data formatada no padrão brasileiro: ${dataFormatada}`);
}

formatarData("2024-10-07");