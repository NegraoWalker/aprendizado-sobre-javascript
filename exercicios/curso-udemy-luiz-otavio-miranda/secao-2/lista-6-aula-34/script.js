const arrayPessoa = [];
const elementoHTMLBotao = document.getElementById("botao");

elementoHTMLBotao.addEventListener("click", () => {
    const elementoInputCampoNomeValor = document.getElementById("nome").value;
    const elementoInputCampoSobrenomeValor = document.getElementById("sobrenome").value;
    const elementoInputCampoPesoValor = document.getElementById("peso").value;
    const elementoInputCampoAlturaValor = document.getElementById("altura").value;

    const pessoa = {
        nome: elementoInputCampoNomeValor,
        sobrenome: elementoInputCampoSobrenomeValor,
        peso: parseFloat(elementoInputCampoPesoValor),
        altura: parseFloat(elementoInputCampoAlturaValor)
    };

    arrayPessoa.push(pessoa);
    
    const elementoHTMLH3 = document.createElement("h3");
    elementoHTMLH3.innerHTML = `${pessoa.nome} ${pessoa.sobrenome} ${pessoa.peso} quilos ${pessoa.altura} metros`
    document.getElementById("form").appendChild(elementoHTMLH3);
});


