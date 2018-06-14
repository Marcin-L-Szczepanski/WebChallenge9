import Siema from 'siema';

function printSlideIndex() {
  console.log(opinionsCarousel.currentSlide);
}

const opinionsCarouselElement = document.getElementById('opinions-carousel');
const opinionsCarousel = new Siema({
  selector: opinionsCarouselElement,
  duration: 500,
  easing: 'ease-out',
  perPage: 1,
  startIndex: 0,
  draggable: true,
  multipleDrag: true,
  threshold: 20,
  loop: true,
  rtl: false,
  onInit: () => {
    
  },
  onChange: () => {
    markActiveDot();
  },
});

createDots();
printSlideIndex();

function createDots () {
  const opinionsSection = document.getElementById('opinions-section');
  const carouselElements = opinionsCarousel.innerElements;
  const carouselDots = document.createElement('div');
  carouselDots.classList.add('carousel__dots');
  opinionsSection.appendChild(carouselDots);
  
  carouselElements.forEach(element => {
    const carouselDot = document.createElement('div');
    carouselDot.classList.add('carousel__dot');
    carouselDots.appendChild(carouselDot);
    //console.log(carouselDot);
  });
 markActiveDot();
}

function markActiveDot () {
  let carouselDots = document.getElementsByClassName('carousel__dot');
  carouselDots = [...carouselDots]; // Change node list to array
  carouselDots.forEach(dot => {
    dot.classList.remove('carousel__dot--active');
  });
  carouselDots[opinionsCarousel.currentSlide].classList.add('carousel__dot--active');
}
