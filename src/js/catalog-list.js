import ProductCards from './product-list';

if (window.location.pathname === '/catalog.html') {
  // in catalog.html

  const catalogCards = new ProductCards({
    productList: '#catalog-list',
    loadMoreBtn: '.js-load-more-button',
  });

  catalogCards.renderProductCards();
  catalogCards.addLoadMoreBtnHandler();
  catalogCards.addSpecificClass('catalog__item');
}
