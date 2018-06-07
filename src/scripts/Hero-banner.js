"use strict";

const scrollDown = document.getElementById('scroll-down');
scrollDown.addEventListener('click', function() {
  window.scrollBy({ top: window.innerHeight, left: 0, behavior: 'smooth' });
});