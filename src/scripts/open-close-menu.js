document.addEventListener("DOMContentLoaded", openCloseMenu);

function openCloseMenu() {
  const menu = document.getElementById('menu');
  menu.classList.add('menu__items--hidable', 'menu__items--closed');
}