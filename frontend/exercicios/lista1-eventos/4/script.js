const elementoImg = document.getElementById('img');

elementoImg.addEventListener('mouseover', () => {
    elementoImg.src = 'imagem2.png';
})

elementoImg.addEventListener('mouseout', () => {
    elementoImg.src = 'imagem1.png';
});
