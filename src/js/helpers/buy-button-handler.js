import { basketModal } from './modal/basket-modal';
import { BasketItemsList } from '../classes/basketItem';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const basketItemsList = new BasketItemsList();

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

    const isInBasket = basketItemsList.basketItems.some(
      item => +item.basketItemId === +itemToFindId
    );

    if (isInBasket) {
      basketModal.openModal();
      Notify.info(
        `Обраний букет вже є у кошику. Можете змінити кількість за бажанням`
      );
      return;
    }

    basketItemsList.newBasketItem(itemToFindId);
    basketModal.openModal();
  }
}

export { basketItemsList };
