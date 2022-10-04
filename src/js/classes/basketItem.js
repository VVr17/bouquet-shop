import { basketCounters } from './basket';
import basketCardTemplate from '../../templates/basket-card.hbs';
import { basket } from './modal';

class BasketItem {
  basket = document.querySelector('#basket');

  constructor(basketItemId) {
    this.basketItemId = basketItemId;
  }

  async addItemToBasket() {
    try {
      const itemToRender = await basket.productsData.fetchProductDataById(
        this.basketItemId
      );
      this.basket.insertAdjacentHTML(
        'beforeend',
        basketCardTemplate(...itemToRender)
      );

      basketCounters.newCounter(
        `data-id-${itemToRender[0].id}`,
        itemToRender[0].id,
        itemToRender[0].price
      );
      basketCounters.countTotalPrice();
    } catch (error) {
      console.warn(error);
    }
  }
}

// Class that holds a collection of counters and properties and functions for the group
class BasketItemsList {
  constructor() {
    this.basketItems = [];
    this.removedItems = [];
  }
  // create a new item and save it in the collection
  newBasketItem(basketItemId) {
    let basketItem = new BasketItem(basketItemId);
    basketItem.addItemToBasket();
    this.basketItems.push(basketItem);
    return basketItem;
  }

  get allCounters() {
    return this.basketItems;
  }

  removeBasketItem(itemToRemove) {
    itemToRemove.style.display = 'none';
    this.removedItems.push(itemToRemove);
  }

  onBasketModalClose() {
    if (this.removedItems.length > 0)
      this.removedItems.forEach(item => item.remove());
    this.removedItems = [];

    // через reduce собрать все id и проверить в массиве basketItems
    this.basketItems.forEach(() => {});
  }
}

export { BasketItem, BasketItemsList };
