// Exercício 7: Prioridade no Trânsito
// Crie uma função chamada coresDoSemaforo que recebe uma cor de semáforo como argumento (por
// exemplo, "vermelho", "amarelo" ou "verde") e retorna uma mensagem indicando se é seguro passar ou se é
// necessário parar

function coresDoSemaforo(cor) {
    switch (cor) {
        case "Vermelho":
            console.log("Parar!");
            break;
        case "Amarelo":
            console.log("Atenção!");
            break;
        case "Verde":
            console.log("Andar!");
            break;
    }
}

coresDoSemaforo("Vermelho");
coresDoSemaforo("Amarelo");
coresDoSemaforo("Verde");