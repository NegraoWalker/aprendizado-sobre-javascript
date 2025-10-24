// Exercício 9: Crie um novo objeto NovaVenda que contenha as mesmas propriedades e
// valores de Venda, mas com um produto e quantidade diferentes. Exiba o novo objeto
// NovaVenda.
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
}

const novaVenda = {...venda};
novaVenda.atualizarQuantidade(1);
novaVenda.produto = "Prato";
console.log(novaVenda);