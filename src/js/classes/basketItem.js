import { productsData } from './productCards';
import { basketCounters } from './basket';
import basketCardTemplate from '../../templates/basket-card.hbs';

export default class BasketItem {
  basket = document.querySelector('#basket');

  constructor(basketItemId) {
    this.basketItemId = basketItemId;
  }

  async addItemToBasket() {
    try {
      const itemToRender = await productsData.fetchProductDataById(
        this.basketItemId
      );
      this.basket.insertAdjacentHTML(
        'beforeend',
        basketCardTemplate(...itemToRender)
      );

      basketCounters.newCounter(`data-id-${itemToRender[0].id}`);
    } catch (error) {
      console.warn(error);
    }
  }
}
