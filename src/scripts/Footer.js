"use strict";

const scrollUp = document.getElementById('scroll-up');
scrollUp.addEventListener('click', function() {
  window.scroll({ top: 0, left: 0, behavior: 'smooth' });
});