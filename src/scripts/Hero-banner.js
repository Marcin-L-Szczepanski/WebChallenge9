"use strict";

const scrollDown = document.getElementById('scroll-down');
scrollDown.addEventListener('click', function() {
  window.scrollBy({ top: (window.innerHeight - window.pageYOffset) + 1, left: 0, behavior: 'smooth' });
});