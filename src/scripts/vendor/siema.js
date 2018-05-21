import Siema from 'siema';
new Siema({
  selector: '.opinions__slider',
  duration: 200,
  easing: 'ease-out',
  perPage: 1,
  startIndex: 1,
  draggable: true,
  multipleDrag: true,
  threshold: 20,
  loop: false,
  rtl: false,
  onInit: () => {},
  onChange: () => {},
});