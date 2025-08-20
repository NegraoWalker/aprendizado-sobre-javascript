// Exercício 1: Você tem um produto que custa R$ 200,00 e recebeu um desconto de R$ 40,00.
// Além disso, há um imposto de R$ 12,00 sobre o preço com desconto. Calcule o preço final do
// produto após aplicar o desconto e o imposto.

const CUSTO_PRODUTO = 200.00;
const DESCONTO = 40.00;
const IMPOSTO = 12.00;

let precoFinalDoProduto = CUSTO_PRODUTO - DESCONTO + IMPOSTO;
console.log(`Preço final do produto: R$${precoFinalDoProduto}`);