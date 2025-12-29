// Exercício 5: Verificação de Velocidade
// Crie uma função chamada verificarVelocidade que recebe a velocidade de um veículo como argumento e
// retorna true se o veículo estiver dentro do limite de velocidade (limite igual ou inferior a 80 km/h) e false caso contrário, utilizando o operador ternário

function verificarVelocidade(velocidade) {
    velocidade <= 80 ? console.log(true) : console.log(false);
}

verificarVelocidade(100);
verificarVelocidade(70);