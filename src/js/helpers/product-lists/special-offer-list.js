import ProductCards from '../../classes/productCards';

if (window.location.pathname === '/index.html') {
  // in index.html

  const specialOfferCards = new ProductCards({
    productList: '#special-offer-list',
  });

  specialOfferCards.renderProductCards('specialOffer','special-offer__item');
}
