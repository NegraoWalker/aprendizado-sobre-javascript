const elementoHTMLButton = document.getElementById("botao");

elementoHTMLButton.addEventListener("click", () => {
  const resultadoAnterior = document.querySelector("h3");
  if (resultadoAnterior) {
    resultadoAnterior.remove();
  }

  const campoPeso = document.getElementById("peso").value;
  const campoAltura = document.getElementById("altura").value;

  const elementoHTMLH3 = document.createElement("h3");

  const erro = validarCampos(campoPeso, campoAltura);

  if (erro) {
    elementoHTMLH3.innerHTML = erro;
    document.getElementById("form").appendChild(elementoHTMLH3);
    return;
  }

  const peso = parseFloat(campoPeso);
  const altura = parseFloat(campoAltura);

  const imc = calcularIMC(peso, altura);

  indicarCategoria(imc, elementoHTMLH3);
  document.getElementById("form").appendChild(elementoHTMLH3);
});

function validarCampos(campoPeso, campoAltura) {
  if (!campoPeso || !campoAltura) {
    return "Por favor, informe o peso e a altura!";
  }

  const peso = parseFloat(campoPeso);
  const altura = parseFloat(campoAltura);

  if (isNaN(peso) || isNaN(altura)) {
    return "Peso ou altura inválidos. Digite apenas números!";
  }

  if (peso <= 0 || altura <= 0) {
    return "Peso e altura devem ser maiores que zero!";
  }

  return false;
}

function calcularIMC(peso, altura) {
  return peso / (altura * altura);
}

function indicarCategoria(imc, elementoHTMLH3) {
  if (imc < 18.5) {
    elementoHTMLH3.innerHTML = `Seu IMC é ${imc.toFixed(2)} - Abaixo do peso`;
  } else if (imc <= 24.9) {
    elementoHTMLH3.innerHTML = `Seu IMC é ${imc.toFixed(2)} - Peso normal`;
  } else if (imc <= 29.9) {
    elementoHTMLH3.innerHTML = `Seu IMC é ${imc.toFixed(2)} - Sobrepeso`;
  } else if (imc <= 34.9) {
    elementoHTMLH3.innerHTML = `Seu IMC é ${imc.toFixed(2)} - Obesidade grau 1`;
  } else if (imc <= 39.9) {
    elementoHTMLH3.innerHTML = `Seu IMC é ${imc.toFixed(2)} - Obesidade grau 2`;
  } else {
    elementoHTMLH3.innerHTML = `Seu IMC é ${imc.toFixed(2)} - Obesidade grau 3`;
  }
}
