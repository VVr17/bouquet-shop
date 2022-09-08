import ProductCards from '../../classes/productCards';

if (window.location.pathname === '/index.html') {
  // in index.html

  const recommendationCards = new ProductCards({
    productList: '#recommendation-list',
  });

  recommendationCards.renderProductCards('recommendation','recommendation__item');
}
