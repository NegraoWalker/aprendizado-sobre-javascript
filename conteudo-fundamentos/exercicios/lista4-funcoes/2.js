// 2 - Imagine agora que o aluno do item anterior não atingiu a média mínima pra passar, e por isso está de prova final.
// Faça uma nova função que calcula a média final desse aluno a partir de 4 notas, as das 3 primeiras provas + a nota
// da prova final. O cálculo deve ser o seguinte:
// média_final = (média_antes_da_pf + pf)/2
// Você deve usar a função do exercício 1 para calcular a média final. Faça as modificações que julgar
// necessário. Ao término do processo, devemos ter a mensagem "a média final desse aluno é x" (sendo x o
// resultado do cálculo).

function mediaAluno(nota1, nota2, nota3) {
    const resultado = (nota1 + nota2 + nota3) / 3;
    return resultado;
}

function mediaAlunoComProvaFinal(mediaAluno, nota4) {
    const resultado = (mediaAluno + nota4) / 2;
    const resultadoArrendondado = Number(resultado.toFixed(2));
    return `A média final do aluno é ${resultadoArrendondado}`;
}

console.log(mediaAlunoComProvaFinal(mediaAluno(7.6, 4.7, 8.9), 6.78));