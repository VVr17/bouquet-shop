import ProductCards from '../../classes/productCards';

if (window.location.pathname === '/catalog.html') {
  // in catalog.html

  const catalogCards = new ProductCards({
    productList: '#catalog-list',
    loadMoreBtn: '.js-load-more-button',
  });

  console.log('inside catalog')
  catalogCards.renderProductCards('','catalog__item');
  catalogCards.addLoadMoreBtnHandler('','catalog__item');
}
