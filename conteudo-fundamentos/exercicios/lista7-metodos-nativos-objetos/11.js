// Exercício 11: Crie um novo objeto DescontoEspecial que herde as propriedades do objeto
//     Venda, mas com um desconto fixo de 20%. Exiba as propriedades do novo objeto e verifique
// se o desconto foi aplicado corretamente.
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

Object.defineProperty(venda, "data", {
    value: new Date().toLocaleDateString(),
    enumerable: false
});

console.log("Propriedades enumeráveis de 'venda':");
console.log(Object.keys(venda));
console.log("Data da venda:", venda.data);

//Criando objeto que herda de 'venda'
const descontoEspecial = Object.create(venda);

// Aplica desconto fixo de 20%
descontoEspecial.aplicarDesconto(20);

// Atualiza a quantidade
descontoEspecial.atualizarQuantidade(2);

// Exibe as propriedades do novo objeto
console.log("\nPropriedades enumeráveis de 'descontoEspecial':");
console.log(Object.keys(descontoEspecial));

// Exibe os detalhes da venda com desconto especial
console.log("\nDetalhes da venda com desconto especial:");
descontoEspecial.detalharVenda();

