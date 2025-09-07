// 4 - Quando estava passeando em Nova York, Bruno se surpreendeu com uma realidade diferente da
// que conhecia. Ao tentar pagar um produto, ele percebeu que o valor cobrado era sempre um pouco
// maior do que o que estava presente na etiqueta da prateleira onde o achou. Isso acontece porque a
// etiqueta não contém o valor do imposto pago sobre o produto, que é calculado no caixa. Esse imposto
// é de 8,875% em cima do valor do produto. Faça uma função que recebe o valor do produto presente na
// etiqueta e registre na tela a frase:
//     O valor a ser pago é x (sendo x o resultado do acréscimo dos impostos sobre o valor inicial).

function valorASerPago(valorEtiqueta) {
    const imposto = (valorEtiqueta * 8.875) / 100;
    const resultado = Number((valorEtiqueta + imposto).toFixed(2));
    return `O valor a ser pago é ${resultado}`;
}

console.log(valorASerPago(99.99));