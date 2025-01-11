// Seleciona os elementos necessários
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const closeMenuButton = document.getElementById('close-menu');
const menuItems = document.querySelectorAll('.item');

// Função para abrir o menu
function openMenu() {
  menu.classList.add('open');
}

// Função para fechar o menu
function closeMenu() {
  menu.classList.remove('open');
}

// Fecha o menu ao clicar fora dele
function closeMenuOnClickOutside(event) {
  if (!menu.contains(event.target) && event.target !== menuToggle) {
    closeMenu();
  }
}

// Adiciona os eventos
menuToggle.addEventListener('click', openMenu);
closeMenuButton.addEventListener('click', closeMenu);
document.addEventListener('click', closeMenuOnClickOutside);

// Fecha o menu ao clicar em um item
menuItems.forEach(item => {
  item.addEventListener('click', closeMenu);
});
