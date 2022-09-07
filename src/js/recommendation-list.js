import ProductCards from './product-list';

if (window.location.pathname === '/index.html') {
  // in index.html

  const recommendationCards = new ProductCards({
    productList: '#recommendation-list',
  });

  recommendationCards.renderProductCards('recommendation');
  recommendationCards.addSpecificClass('recommendation__item');
}
