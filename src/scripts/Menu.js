document.addEventListener('DOMContentLoaded', initMenu);
document.addEventListener('scroll', changeMenuOpacity);



function changeMenuOpacity() {
  const menu = document.getElementById('menu');
  const menuLogo = document.getElementById('menu-logo');
    if (pageYOffset > 100) { 
      menu.classList.add('menu--white');
      menuLogo.classList.remove('logo--white');
    } else {
      menu.classList.remove('menu--white');
      menuLogo.classList.add('logo--white');
    }
}

                          
function initMenu() {
  menuHidable();
  createMenuBtn();
};

function menuHidable() {
  const menuItems = document.getElementById('menu-items');
  menuItems.classList.add('menu__items--hidable', 'menu__items--closed');
}

function createMenuBtn() {
  const menuBtn = document.createElement('button');
  menuBtn.classList.add('menu__button');
  menuBtn.innerHTML = 'Open Menu';
  menuBtn.addEventListener('click', openCloseMenu);
  menu.insertBefore(menuBtn, menu.childNodes[0]);
}

function openCloseMenu() {
  const menuItems = document.getElementById('menu-items');
  if (menuItems.classList.contains('menu__items--closed')) {
    menuItems.classList.remove('menu__items--closed');
    menuItems.classList.add('menu__items--open'); 
    this.classList.add('menu__button--menuOpen');
    this.innerHTML = 'Close Menu';
  } else {
    menuItems.classList.remove('menu__items--open');
    menuItems.classList.add('menu__items--closed'); 
    this.classList.remove('menu__button--menuOpen');
    this.innerHTML = 'Open Menu';
  };
}