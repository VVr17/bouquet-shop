import { basketCounters } from './basket';
import basketCardTemplate from '../../templates/basket-card.hbs';
import { basket } from './modal';
const basketRef = document.querySelector('#basket');

class BasketItem {
  constructor(basketItemId) {
    this.basketItemId = basketItemId;
  }

  async addItemToBasket() {
    try {
      const itemToRender = await basket.productsData.fetchProductDataById(
        this.basketItemId
      );
      basketRef.insertAdjacentHTML(
        'beforeend',
        basketCardTemplate(...itemToRender)
      );

      basketCounters.newCounter(
        `data-id-${itemToRender[0].id}`,
        itemToRender[0].id,
        itemToRender[0].price
      );
      basketCounters.countTotalPrice();

      return itemToRender;
    } catch (error) {
      console.warn(error);
    }
  }
}

// Class that holds a collection of counters and properties and functions for the group
class BasketItemsList {
  constructor() {
    this.removedItemsId = [];
    this.removedItemsRef = [];
    this.basketItems = [];
  }
  // create a new item and save it in the collection
  async newBasketItem(basketItemId) {
    if (this.removedItemsId.length === 0)
      basketRef.children[0].classList.add('is-hidden');

    let basketItem = new BasketItem(basketItemId);
    const item = await basketItem.addItemToBasket();
    this.basketItems.push(...item);
    this.removedItemsId.push(basketItem);
    basket.submitBtnRef.removeAttribute('disabled');
    return basketItem;
  }

  get allCounters() {
    return this.removedItemsId;
  }

  removeBasketItem(itemToRemove) {
    itemToRemove.style.display = 'none';
    const itemId = parseInt(Object.keys(itemToRemove.dataset)[0].match(/\d+/));
    this.basketItems = this.basketItems.filter(item => +item.id !== itemId);
    this.removedItemsRef.push(itemToRemove);

    this.onAllItemsRemoved();
  }

  onAllItemsRemoved() {
    const isAllItemsRemoved = Array.from(basketRef.children)
      .filter(child => child.classList.contains('js-basket-card'))
      .every(li => li.style[0] === 'display');

    if (isAllItemsRemoved) {
      basketRef.children[0].classList.remove('is-hidden');
      basket.submitBtnRef.setAttribute('disabled', true);
    }
  }

  onBasketModalClose() {
    if (this.removedItemsRef.length > 0) {
      this.removedItemsRef.forEach(item => item.remove());

      const itemsToRemoveId = this.removedItemsRef.reduce((allId, item) => {
        const itemId = parseInt(Object.keys(item.dataset)[0].match(/\d+/));
        allId.push(itemId);
        return allId;
      }, []);

      this.removedItemsId = this.removedItemsId.filter(
        item => !itemsToRemoveId.includes(+item.basketItemId)
      );

      this.removedItemsRef = [];
    }
  }

  onSubmitBtn() {
    Array.from(basketRef.children)
      .filter(child => child.classList.contains('js-basket-card'))
      .forEach(item => this.removeBasketItem(item));
    this.onBasketModalClose();
    this.removedItemsId = [];
    this.removedItemsRef = [];
    this.basketItems = [];
    basketRef.children[0].classList.remove('is-hidden');
  }
}

export { BasketItem, BasketItemsList };
