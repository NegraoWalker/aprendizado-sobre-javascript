// Exercício 12: Remova a propriedade desconto do objeto Venda. Verifique se a propriedade
// foi removida com sucesso e exiba as propriedades restantes do objeto.

const venda = {
    produto: "TV",
    quantidade: 0,
    precoUnitario: 1599.99,
    desconto: 0.0,

    verificaEstoque() {
        if (this.quantidade === 0) {
            console.log("Venda não pode ser realizada!! Atualizar a quantidade em estoque!");
        } else {
            console.log("Venda pode ser realizada!!");
        }
    },

    aplicarDesconto(desconto) {
        this.desconto = desconto / 100;
    },

    atualizarQuantidade(quantidade) {
        this.quantidade = quantidade;
    },

    calcularTotal() {
        return ((this.quantidade * this.precoUnitario) - this.desconto * (this.quantidade * this.precoUnitario)).toFixed(2);
    },

    detalharVenda() {
        console.log(`Detalhes da Venda: 
            Produto: ${this.produto} 
            Quantidade: ${this.quantidade} 
            Preço Unitário: R$${this.precoUnitario}
            Desconto: ${this.desconto * 100}% 
            Valor Total: R$${this.calcularTotal()}`);
    }
};

//Adicionando a propriedade "data" (não enumerável)
Object.defineProperty(venda, "data", {
    value: new Date().toLocaleDateString(),
    enumerable: false
});

//Removendo a propriedade "desconto"
const removido = delete venda.desconto;

//Verificando se foi removida
console.log("Propriedade 'desconto' removida?", removido);
console.log("A propriedade 'desconto' ainda existe?", "desconto" in venda);
console.log("O objeto possui a propriedade 'desconto'?", venda.hasOwnProperty("desconto"));
console.log("Valor atual de venda.desconto:", venda.desconto);

// Exibindo as propriedades restantes
console.log("\nPropriedades restantes do objeto 'venda':");
console.log(Object.keys(venda));

