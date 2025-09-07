// 1 - Faça uma função que recebe as notas das 3 provas de um aluno e calcula a média dessas. Ao término do processo,
// devemos ter a mensagem "a média desse aluno é x" (sendo x o resultado do cálculo).

function mediaAluno(nota1, nota2, nota3) {
    const resultado = (nota1 + nota2 + nota3) / 3;
    const resultadoArrendondado = Number(resultado.toFixed(2));
    return `A média do aluno é ${resultadoArrendondado}`;
}

console.log(mediaAluno(9, 8, 7.6));