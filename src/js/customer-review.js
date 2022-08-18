  // core version + navigation, pagination modules:
  import Swiper, { Pagination } from 'swiper';
  // import Swiper and modules styles
  // import 'swiper/swiper.min.css';
  import 'swiper/swiper-bundle.min.css';

const customerReviewSwiper = document.querySelector('.js-customer-review-slider');

const swiper = new Swiper(customerReviewSwiper, {
  modules: [Pagination],

  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination--customer',
  },
});
