// Exercício 8: Verificação de Placa de Veículo
// Crie uma função verificarPlaca que recebe o último dígito da placa de um veículo como argumento (um
// número de 0 a 9) e retorna uma mensagem indicando o dia de rodízio em São Paulo, com base no último
// dígito da placa.

function verificaPlaca(placa) {
    switch (placa) {
        case 1:
        case 2:
            console.log("Rodízio na segunda-feira");
            break;
        case 3:
        case 4:
            console.log("Rodízio na terça-feira");
            break;
        case 5:
        case 6:
            console.log("Rodízio na quarta-feira");
            break;
        case 7:
        case 8:
            console.log("Rodízio na quinta-feira");
            break;
        case 9:
        case 0:
            console.log("Rodízio na sexta-feira");
            break;
        default:
            console.log("Número inválido! Digite um valor de 0 a 9.");
            break;
    }
}

verificaPlaca(1);
verificaPlaca(3);
verificaPlaca(7);