const elementos = [
  { tag: "p", texto: "Frase 1" },
  { tag: "div", texto: "Frase 2" },
  { tag: "footer", texto: "Frase 3" },
  { tag: "section", texto: "Frase 4" },
];

const elementoSection = document.querySelector(".container");

for (let index = 0; index < elementos.length; index++) {
  const elementoHTML = document.createElement(elementos[index].tag);
  elementoHTML.innerText = elementos[index].texto;
  elementoSection.appendChild(elementoHTML);
}
