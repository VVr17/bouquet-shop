import { Counters } from '../classes/basketCounter';
import { basketModal } from "../helpers/modal/basket-modal";
let basketCounters = new Counters();

class Basket {
  constructor(basketSelector) {
    this.ref = document.querySelector(basketSelector);
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
  }

  // при закрытии модального окна проверить, какие элементы имеют display=none и сделать remove()
  onDeleteBtnClick(event) {
    if (!event.target.nodeName == 'BUTTON') return;

    if (event.target.hasAttribute('data-btn-delete-item')) {
      // event.target.closest('.js-basket-card').remove();
      event.target.closest('.js-basket-card').style.display = 'none';
    }
  }
}

export { basketCounters, Basket };
