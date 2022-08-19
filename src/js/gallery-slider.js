  // core version + navigation, pagination modules:
  import Swiper, { Navigation, Pagination, Autoplay, EffectCoverflow, EffectFade } from 'swiper';

  // import Swiper and modules styles
  // import 'swiper/swiper.min.css';
  // import 'swiper/css/navigation';
  // import 'swiper/css/pagination';
  
  import 'swiper/swiper-bundle.min.css';

const gallerySlider = document.querySelector('.js-gallery-swiper');

const swiper = new Swiper(gallerySlider, {
  modules: [Navigation, Pagination, Autoplay, EffectFade, EffectCoverflow ],

  loop: true,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination--gallery',
  },


  effect: "coverflow",
  grabCursor: true,

    // effect: "cube",
    // grabCursor: true,
    // cubeEffect: {
    //   shadow: true,
    //   slideShadows: true,
    //   shadowOffset: 20,
    //   shadowScale: 0.94,
    // },

      // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
});
