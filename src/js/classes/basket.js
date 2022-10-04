import { Counters } from '../classes/basketCounter';
import { basketItemsList } from '../helpers/buy-button-handler';
import { basketModal } from '../helpers/modal/basket-modal';
import ProductsData from './productsData';
const basketCounters = new Counters();

class Basket {
  constructor(basketSelector) {
    this.ref = document.querySelector(basketSelector);
    this.productsData = new ProductsData();
  }

  addBasketHandler() {
    this.ref.addEventListener('click', this.onCounterBtnClick);
    this.ref.addEventListener('click', this.onDeleteBtnClick);
  }

  removeBasketHandler() {
    this.ref.removeEventListener('click', this.onCounterBtnClick);
    this.ref.removeEventListener('click', this.onDeleteBtnClick);
  }

  onCounterBtnClick(event) {
    if (!event.target.nodeName == 'BUTTON') return;

    if (event.target.hasAttribute('data-decrement')) {
      const basketCounterClicked = basketCounters.allCounters.find(
        basketCounter => basketCounter.refs.decrementBtn === event.target
      );
      basketCounterClicked.decrementCounter();
    }

    if (event.target.hasAttribute('data-increment')) {
      const basketCounterClicked = basketCounters.allCounters.find(
        basketCounter => basketCounter.refs.incrementBtn === event.target
      );
      basketCounterClicked.incrementCounter();
    }

    basketCounters.countTotalPrice();
  }

  // при закрытии модального окна проверить, какие элементы имеют display=none и сделать remove()
  onDeleteBtnClick(event) {
    if (!event.target.nodeName == 'BUTTON') return;

    if (event.target.hasAttribute('data-btn-delete-item')) {
      // event.target.closest('.js-basket-card').remove();
      const itemToRemove = event.target.closest('.js-basket-card');
      basketItemsList.removeBasketItem(itemToRemove);
      basketCounters.removeCounter(itemToRemove);
    }
    basketCounters.countTotalPrice();
  }
}

export { basketCounters, Basket };
