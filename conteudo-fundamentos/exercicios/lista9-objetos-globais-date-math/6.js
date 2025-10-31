// Exercício 6: Crie uma função que receba a data de nascimento de uma pessoa e calcule sua
// idade com base na data atual. Exiba a idade no console.
//     Exemplo Entrada: // 1990-05-15
//     Exemplo Saída: // Idade: 34

function idade(dataStr) {
    const dataNascimento = new Date(dataStr);
    const dataAtual = new Date();

    let idade = dataAtual.getFullYear() - dataNascimento.getFullYear();

    // Ajuste: verifica se o aniversário ainda não aconteceu neste ano
    const mesAtual = dataAtual.getMonth();
    const diaAtual = dataAtual.getDate();
    const mesNasc = dataNascimento.getMonth();
    const diaNasc = dataNascimento.getDate();

    if (mesAtual < mesNasc || (mesAtual === mesNasc && diaAtual < diaNasc)) {
        idade--; // ainda não fez aniversário este ano
    }

    console.log(`Idade: ${idade}`);
}

idade("1990-05-15");
