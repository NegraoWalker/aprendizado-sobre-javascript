// Exercício 3: Você tem um orçamento de R$ 250,00 e deseja verificar se o custo de um
// produto, após aplicar um desconto de R$ 50,00, está dentro do orçamento. O custo do produto
// é R$ 300,00

const ORCAMENTO = 250.00;
const DESCONTO = 50.00;
const CUSTO_PRODUTO = 300.00;

CUSTO_PRODUTO - DESCONTO === ORCAMENTO ? console.log("Está dentro do orçamento!") : console.log("Não está dentro do orçamento!");