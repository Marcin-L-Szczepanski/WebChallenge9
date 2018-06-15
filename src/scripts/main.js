require('./Menu.js');
require('./Hero-banner.js');
require('./Footer.js');
require('./vendor/siema.js');

import smoothscroll from 'smoothscroll-polyfill';

// kick off the polyfill!
smoothscroll.polyfill();
/*
import initMenu from './Menu';

document.addEventListener('DOMContentLoaded', function() {
  initMenu();
});

import changeMenuOpacity from './Menu';
document.addEventListener('scroll', changeMenuOpacity);
*/




//import { people } from './test';

//people = require('./test.js');
//console.log(people);
