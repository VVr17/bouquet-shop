import ProductCards from '../../classes/productCards';

if (window.location.pathname === './index.html') {
  // in index.html

  const specialOfferCards = new ProductCards({
    listSelector: '#special-offer-list',
    loadMoreBtnSelector: '#special-offer-list ~ .js-load-more-button',
  });
  specialOfferCards.renderProductCards('specialOffer','special-offer__item');
}
