// Exercício 4: Classificação de Desempenho de Vendas
// Você está gerenciando uma equipe de vendedores e deseja avaliar o desempenho de cada vendedor com
// base em suas vendas mensais em relação a uma meta estabelecida. Escreva um programa
// desempenhoIndividualDeVendas que determine a categoria de desempenho de um vendedor com base no
// percentual alcançado em relação à meta. As categorias incluem "Excelente Desempenho" (para vendedores
// que alcançaram ou excederam a meta), "Muito Bom Desempenho" (para vendedores com vendas entre 90% e
// 99% da meta), "Bom Desempenho" (para vendedores com vendas entre 80% e 89% da meta), "Desempenho
// Satisfatório" (para vendedores com vendas entre 61% e 79% da meta) e "Desempenho Insatisfatório" (para
// vendedores com vendas abaixo de 60% da meta). Execute o código e informe a categoria de desempenho do
//     vendedor com base nas vendas mensais e na meta de vendas estabelecida.

function desempenhoIndividualDeVendas(meta, vendasMensais) {
    const percentualAlcancado = (vendasMensais / meta) * 100;

    if (percentualAlcancado >= 100) {
        console.log("Excelente Desempenho");
    } else if (percentualAlcancado >= 90) {
        console.log("Muito Bom Desempenho");
    } else if (percentualAlcancado >= 80) {
        console.log("Bom Desempenho");
    } else if (percentualAlcancado >= 61) {
        console.log("Desempenho Satisfatório");
    } else {
        console.log("Desempenho Insatisfatório");
    }
}

// Testes com os exemplos fornecidos:
console.log("Meta: 1000, Vendas: 1100");
desempenhoIndividualDeVendas(1000, 1100); // Excelente Desempenho

console.log("\nMeta: 1000, Vendas: 999");
desempenhoIndividualDeVendas(1000, 999); // Muito Bom Desempenho

console.log("\nMeta: 1000, Vendas: 800");
desempenhoIndividualDeVendas(1000, 800); // Bom Desempenho

console.log("\nMeta: 1000, Vendas: 700");
desempenhoIndividualDeVendas(1000, 700); // Desempenho Satisfatório

console.log("\nMeta: 1000, Vendas: 400");
desempenhoIndividualDeVendas(1000, 400); // Desempenho Insatisfatório