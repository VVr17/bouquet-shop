import Swiper, { Pagination, Autoplay, EffectCoverflow } from 'swiper';
import 'swiper/swiper-bundle.min.css';

// if (window.location.pathname === '/index.html') {
// in index.html
// };

const gallerySlider = document.querySelector('.js-gallery-swiper');

const sliderParams = {
  modules: [Pagination, Autoplay, EffectCoverflow],

  loop: true,
  effect: 'coverflow',
  grabCursor: true,
  lazy: true,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
};

const swiper = new Swiper(gallerySlider, sliderParams);

// check when gallery will be within window view
const observer = new IntersectionObserver(onIntersection, { threshold: 0.5 });
let prevIntersectionRatio = 0.0;

window.addEventListener('resize', setParamsDueToWindowSize);

swiper.autoplay.stop();
observer.observe(gallerySlider);
setParamsDueToWindowSize();

function setParamsDueToWindowSize() {
  if (window.matchMedia('(max-width:767.98px )').matches) {
    swiper.params.slidesPerView = 1;
    swiper.params.spaceBetween = 0;
  } else if (window.matchMedia('(max-width:1439.98px )').matches) {
    swiper.params.slidesPerView = 3;
    swiper.params.spaceBetween = 20;
  } else {
    swiper.params.slidesPerView = 4;
    swiper.params.spaceBetween = 20;
  }
}

function onIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.intersectionRatio > prevIntersectionRatio) {
      swiper.autoplay.start();
    } else {
      swiper.autoplay.stop();
    }

    prevIntersectionRatio = entry.intersectionRatio;
  });
}
