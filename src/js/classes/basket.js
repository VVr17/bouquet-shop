import { Counters } from '../classes/basketCounter';
let basketCounters = new Counters();

class Basket {
  constructor(basketSelector) {
    this.ref = document.querySelector(basketSelector);
  }

  addBasketHandler() {
    this.ref.addEventListener('click', this.onCounterBtnClick);
  }

  removeBasketHandler() {
    this.ref.removeEventListener('click', this.onCounterBtnClick);
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
}

export { basketCounters, Basket };
