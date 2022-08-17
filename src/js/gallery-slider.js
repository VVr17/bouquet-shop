  // core version + navigation, pagination modules:
  import Swiper, { Pagination } from 'swiper';
  // import Swiper and modules styles
  import 'swiper/swiper.min.css';

const gallerySlider = document.querySelector('.js-gallery-swiper');

const swiper = new Swiper(gallerySlider, {
  modules: [Pagination],

  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
});
