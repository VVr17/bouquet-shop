import { basketModal } from './modal/basket-modal';
import BasketItem from '../classes/basketItem';

const recommendationList = document.querySelector('#recommendation-list');
const specialOfferList = document.querySelector('#special-offer-list');
const catalogList = document.querySelector('#catalog-list');

recommendationList?.addEventListener('click', onBuyBtnClick);
specialOfferList?.addEventListener('click', onBuyBtnClick);
catalogList?.addEventListener('click', onBuyBtnClick);

function onBuyBtnClick(event) {
  if (
    event.target.nodeName === 'BUTTON' &&
    event.target.hasAttribute('data-buy-button')
  ) {
    const itemToFindId = event.target.closest('.product-card').id;
    const basketItem = new BasketItem(itemToFindId);
    basketItem.addItemToBasket();
    basketModal.openModal();
  }
}
