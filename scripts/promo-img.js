let imagePromo = document.querySelector('.promo__img--um')

if (window.matchMedia("(min-width: 600px)").matches) {
    // A tela tem pelo menos 600px de largura
    imagePromo.src = 'images/grau-promo.jpg'
    // Faça algo aqui
} else {
    // A tela tem menos de 600px de largura
    imagePromo.src = 'images/grau-promo.jpg'
}
  