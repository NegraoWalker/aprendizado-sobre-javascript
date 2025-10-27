// Exercício 5: Verificar se a entrada é um número válido
// Você recebe uma entrada do usuário e precisa garantir que seja um número válido antes de
// realizar qualquer operação.
//     Exemplo de Entrada: // "123abc";
//     Exemplo de Saída: // "A entrada não é um número válido."

const entrada = "123abc";
if (Number(entrada)) {
    console.log("Número válido!");
} else {
    console.log("Não é um número válido!");
}
