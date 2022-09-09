import ProductCards from '../../classes/productCards';

if (window.location.pathname === '/catalog.html') {
  // in catalog.html

  const catalogCards = new ProductCards({
      listSelector: '#catalog-list',
      loadMoreBtnSelector: '#catalog-list ~ .js-load-more-button',
    } );

  catalogCards.renderProductCards('', 'catalog__item');
}

export { catalogLoadMoreBtn }