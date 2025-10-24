// Exercício 10: Adicione uma nova propriedade data ao objeto Venda, definindo-a como não
// enumerável. Exiba todas as propriedades do objeto Venda e, em seguida, exiba o valor da
// nova propriedade data separadamente.

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

//Adiciona a nova propriedade "data" como não enumerável
Object.defineProperty(venda, "data", {
    value: new Date().toLocaleDateString(),
    enumerable: false
});

//Exibe todas as propriedades enumeráveis do objeto
console.log("Propriedades enumeráveis do objeto venda:");
console.log(Object.keys(venda));  // "data" não aparecerá

//Exibe o valor da propriedade 'data' separadamente
console.log("Data da venda:", venda.data);
