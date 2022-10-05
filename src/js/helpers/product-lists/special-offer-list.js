import ProductCards from '../../classes/productCards';

const specialOfferCards = new ProductCards({
  listSelector: '#special-offer-list',
  loadMoreBtnSelector: '#special-offer-list ~ .js-load-more-button',
});
specialOfferCards.renderProductCards('specialOffer', 'special-offer__item');
