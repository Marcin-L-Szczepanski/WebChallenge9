export default function initMenu() {
  menuHidable();
  createMenuBtn();
}

function menuHidable() {
  const menu = document.getElementById('menu');
  const menuItems = document.getElementById('menu-items');
  menuItems.classList.add('menu__items--hidable', 'menu__items--closed');
}

function createMenuBtn() {
  const menuBtn = document.createElement('button');
  menuBtn.classList.add('menu__button');
  menuBtn.innerHTML = "Open Menu"
  menu.insertBefore(menuBtn, menu.childNodes[0]);
}