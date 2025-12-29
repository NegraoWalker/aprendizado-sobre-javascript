const elementoInput = document.getElementById('input');

elementoInput.addEventListener('focus', () => {
    elementoInput.value = 'Campo em foco'
});

elementoInput.addEventListener('blur', () => {
    elementoInput.value = '';
});