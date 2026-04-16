//NÃO PODE: Alterar o valor da constante
// const TAXA_DE_JUROS = 0.05;
// TAXA_DE_JUROS = 0.10;

// console.log(TAXA_DE_JUROS); //TypeError: Assignment to constant variable.

// Constante global imutável (primitivo) -> UPPER_SNAKE_CASE
const DESCONTO_MAXIMO = 0.15;
console.log(typeof DESCONTO_MAXIMO); //informa o tipo de dado da variável, nesse caso number

// Constante global que referencia um objeto mutável -> camelCase
const configuracaoApp = {
  tema: "escuro",
  idioma: "pt-BR"
};

function aplicarDesconto(valor) {
  // Constante local (primitivo) -> camelCase (aceitável)
  const fator = 1 - DESCONTO_MAXIMO;
  return valor * fator;
}

// Podemos mudar propriedades do objeto, mesmo sendo const:
configuracaoApp.tema = "claro";   // ✅ permitido
console.log(configuracaoApp.tema); // "claro"