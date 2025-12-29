// Exercício 1: Verificação de Desconto
// Crie um programa verificaDesconto que verifique se um cliente tem direito a um desconto. Se o valor da
// compra for maior ou igual a R$ 100, o cliente recebe um desconto de 10%. Caso contrário, nenhum desconto
// é aplicado. O programa deve imprimir mensagens que retornem o se o cliente possui ou não o direito de
// retorno e o valor da compra no console

function verificaDesconto(valorCompra) {
    let desconto = 0;
    if (valorCompra >= 100) {
        desconto = 10;
        console.log(`Valor da compra: ${valorCompra} - Desconto: ${desconto}%`);
    } else {
        console.log(`Valor da compra: ${valorCompra} - Desconto: ${desconto}`);
    }
}

verificaDesconto(100);
verificaDesconto(80);