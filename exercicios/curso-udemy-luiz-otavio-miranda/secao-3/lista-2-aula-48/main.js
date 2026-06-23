const dataAtual = new Date();

const diaSemanaNumero = dataAtual.getDay();
const diaDoMes = dataAtual.getDate();
const mesNumero = dataAtual.getMonth();
const ano = dataAtual.getFullYear();
const hora = String(dataAtual.getHours()).padStart(2, "0");
const minutos = String(dataAtual.getMinutes()).padStart(2, "0");

let diaFormatado;

switch (diaSemanaNumero) {
  case 0:
    diaFormatado = "Domingo";
    break;
  case 1:
    diaFormatado = "Segunda-feira";
    break;
  case 2:
    diaFormatado = "Terça-feira";
    break;
  case 3:
    diaFormatado = "Quarta-feira";
    break;
  case 4:
    diaFormatado = "Quinta-feira";
    break;
  case 5:
    diaFormatado = "Sexta-feira";
    break;
  case 6:
    diaFormatado = "Sábado";
    break;
  default:
    break;
}

let mesFormatado;

switch (mesNumero) {
  case 0:
    mesFormatado = "Janeiro";
    break;
  case 1:
    mesFormatado = "Fevereiro";
    break;
  case 2:
    mesFormatado = "Março";
    break;
  case 3:
    mesFormatado = "Abril";
    break;
  case 4:
    mesFormatado = "Maio";
    break;
  case 5:
    mesFormatado = "Junho";
    break;
  case 6:
    mesFormatado = "Julho";
    break;
  case 7:
    mesFormatado = "Agosto";
    break;
  case 8:
    mesFormatado = "Setembro";
    break;
  case 9:
    mesFormatado = "Outubro";
    break;
  case 10:
    mesFormatado = "Novembro";
    break;
  case 11:
    mesFormatado = "Dezembro";
    break;
  default:
    break;
}

const container = document.getElementById("container");

container.innerHTML = `
  <p class="dia-semana">${diaFormatado}</p>
  <p class="data-completa">${diaDoMes} de ${mesFormatado} de ${ano}</p>
  <hr class="divider">
  <p class="hora">${hora}:${minutos}</p>
`;
