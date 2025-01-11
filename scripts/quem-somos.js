const texto = document.querySelector('.texto__oculto');
const btnMais = document.querySelector('.btn__ver--mais');
const btnMenos = document.querySelector('.btn__ver--menos');

btnMais.addEventListener('click', () => {
    texto.style.display = 'block';
    btnMais.style.display = 'none'
});

btnMenos.addEventListener('click', () => {
    texto.style.display = 'none';
    btnMais.style.display = 'flex'
});

