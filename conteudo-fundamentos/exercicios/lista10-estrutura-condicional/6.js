// Exercício 6: Semáforo de Trânsito
// Crie uma função mensagemSemaforo que recebe uma cor de semáforo como argumento (por exemplo,
//     "vermelho", "amarelo" ou "verde") e retorna uma mensagem indicando a ação a ser tomada com base na cor
// do semáforo. Utilize o operador ternário para determinar a mensagem.

function mensagemSemaforo(cor) {
    cor === "Vermelho" ? console.log("Fechado!") : cor === "Amarelo" ? console.log("Atenção!") : console.log("Aberto!");
}

mensagemSemaforo("Verde");
mensagemSemaforo("Amarelo");
mensagemSemaforo("Vermelho");
