  // core version + navigation, pagination modules:
  import Swiper, { Pagination, Autoplay, EffectCoverflow } from 'swiper';
  import 'swiper/swiper-bundle.min.css';
(()=>{
  const gallerySliderMobile = document.querySelector('.js-gallery-swiper-mobile');
  const gallerySliderTablet = document.querySelector('.js-gallery-swiper-tablet');
  const gallerySliderDesktop = document.querySelector('.js-gallery-swiper-desktop');


const swiperMobile = new Swiper(gallerySliderMobile, {
  modules: [ Pagination, Autoplay, EffectCoverflow ],

  loop: true,
  effect: "coverflow",
  grabCursor: true,
  lazy: true,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination--gallery-mobile',
    clickable: true,
  },
});


const swiperTablet = new Swiper(gallerySliderTablet, {
  modules: [ Pagination, Autoplay, EffectCoverflow ],

  loop: true,
  effect: "coverflow",
  grabCursor: true,
  lazy: true,

  slidesPerView: 3,
  spaceBetween: 20,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination--gallery-tablet',
    clickable: true,
  },
});


const swiperDesktop = new Swiper(gallerySliderDesktop, {
  modules: [ Pagination, Autoplay, EffectCoverflow ],

  loop: true,
  effect: "coverflow",
  grabCursor: true,
  lazy: true,

  slidesPerView: 4,
  spaceBetween: 20,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination--gallery-desktop',
    clickable: true,
  },
});
})()
