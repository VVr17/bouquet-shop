import ProductCards from '../../classes/productCards';

console.log('otside catalog.html')

if (window.location.pathname === './catalog.html') {
  // in catalog.html
  console.log('in catalog html')

  const catalogCards = new ProductCards({
      listSelector: '#catalog-list',
      loadMoreBtnSelector: '#catalog-list ~ .js-load-more-button',
    } );

  catalogCards.renderProductCards('', 'catalog__item');
}

export { catalogLoadMoreBtn }
