const elementoParagrafo = document.getElementById('paragrafo');

elementoParagrafo.addEventListener('mouseover', () => {
    elementoParagrafo.style.color = 'red';
})

elementoParagrafo.addEventListener('mouseout', () => {
    elementoParagrafo.style.color = '';
});