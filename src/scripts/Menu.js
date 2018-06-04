"use strict";

document.addEventListener('DOMContentLoaded', initMenu);
window.addEventListener('resize', toggleMenuItems);
document.addEventListener('scroll', changeMenuOpacity);

const link = document.getElementsByClassName('menu__link');
for (let i=0; i<link.length; i++) {
  link[i].addEventListener('click', closeMenu);
}


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
  createMenuBtn();
  setMenuLayout();
};

function setMenuLayout() {
  const menuItems = document.getElementById('menu-items');
  if (window.innerWidth < 760) {
    menuItems.classList.add('menu__items--hidable', 'menu__items--closed');
  }
}

function toggleMenuItems() {
  const menuItems = document.getElementById('menu-items');
  if (window.innerWidth < 760) {
    menuItems.classList.add('menu__items--hidable', 'menu__items--closed');
  } else {
    menuItems.classList.remove('menu__items--hidable');
    if menuItems.classList.contains('menu__items--closed') {
      menuItems.classList.remove('menu__items--closed')
    }
  }
}

function createMenuBtn() {
  const menuBtn = document.createElement('button');
  menuBtn.setAttribute('id', 'menu-btn');
  menuBtn.classList.add('menu__button');
  menuBtn.innerHTML = 'Open Menu';
  menuBtn.addEventListener('click', toggleMenu);
  menu.insertBefore(menuBtn, menu.childNodes[0]);
}

function toggleMenu() {
  const menuItems = document.getElementById('menu-items');
  if (menuItems.classList.contains('menu__items--closed')) {
    menuItems.classList.remove('menu__items--closed');
    menuItems.classList.add('menu__items--open'); 
    this.classList.add('menu__button--menuOpen');
    this.innerHTML = 'Close Menu';
  } else {
    closeMenu();
  };
}

function closeMenu() {
    const menuItems = document.getElementById('menu-items');
    const menuBtn = document.getElementById('menu-btn');
    menuItems.classList.remove('menu__items--open');
    menuItems.classList.add('menu__items--closed'); 
    menuBtn.classList.remove('menu__button--menuOpen');
    menuBtn.innerHTML = 'Open Menu';
}