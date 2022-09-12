import ProductCards from '../../classes/productCards';

  const recommendationCards = new ProductCards(
  {
    listSelector: '#recommendation-list',
    loadMoreBtnSelector: '#recommendation-list ~ .js-load-more-button',
  } );
  recommendationCards.renderProductCards('recommendation','recommendation__item');


/*
if (window.location.pathname === '/index.html') {
  // in index.html

  const recommendationCards = new ProductCards(
  {
    listSelector: '#recommendation-list',
    loadMoreBtnSelector: '#recommendation-list ~ .js-load-more-button',
  } );
  recommendationCards.renderProductCards('recommendation','recommendation__item');
}
*/