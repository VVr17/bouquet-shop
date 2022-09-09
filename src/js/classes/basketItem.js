import { productsData } from './productCards';
import initiateBasketCounters from "../helpers/basket-counter";
import BasketCounter from '../classes/basketCounter';


import basketCardTemplate from '../../templates/basket-card.hbs';

export default class BasketItem {
  constructor(basketItemId) {
    this.basket = document.querySelector('#basket')
    this.basketItemId = basketItemId;
  }

  async addItemToBasket() {
    try {
      const itemToRender = await productsData.fetchProductDataById(this.basketItemId);
      this.basket.insertAdjacentHTML(
        'beforeend',
        basketCardTemplate(...itemToRender)
      );

      // переделать initiateBasketCounters - у каждого айтема будет свой счетчик
      const basketCounter = new BasketCounter();
      // инициировать счетчик
      // initiateBasketCounters();

    } catch (error) {
      console.warn(error);
    }
  }
}

