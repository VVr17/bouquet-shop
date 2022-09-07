import ProductCards from './product-list';

if (window.location.pathname === '/index.html') {
  // in index.html

  const specialOfferCards = new ProductCards({
    productList: '#special-offer-list',
  });

  specialOfferCards.renderProductCards('specialOffer');
  specialOfferCards.addSpecificClass('special-offer__item');
}
