class BasketCounter {
  constructor(itemSelector, itemId, itemPrice) {
    this.id = `counter-${itemId}`;
    this.refs = this.getRefs(itemSelector);
    this.counter = 1;
    this.pricePerItem = Number(itemPrice);
    this.itemPrice = 0;
  }

  /**
   *
   * @param {string} itemSelector parent item-card selector
   */
  getRefs(cardRef) {
    const refs = {};
    refs.card = document.querySelector(`[${cardRef}]`);
    refs.decrementBtn = refs.card.querySelector('button[data-decrement]');
    refs.counterInput = refs.card.querySelector('input[data-counter]');
    refs.incrementBtn = refs.card.querySelector('button[data-increment]');
    refs.itemPrice = refs.card.querySelector('input[data-item-price]');
    return refs;
  }

  incrementCounter() {
    if (this.counter < 20) {
      this.counter += 1;
      this.refs.counterInput.value = this.counter;
    }
    this.countItemPrice();
  }

  decrementCounter() {
    if (this.counter > 1) {
      this.counter -= 1;
      this.refs.counterInput.value = this.counter;
    }
    this.countItemPrice();
  }

  countItemPrice() {
    this.itemPrice = this.pricePerItem * this.counter;
    this.refs.itemPrice.value = this.itemPrice;
  }
}

// Class that holds a collection of counters and properties and functions for the group
class Counters {
  constructor() {
    this.counters = [];
    this.totalPrice = 0;
    this.totalPriceRef = document.querySelector(`[data-total-price]`);
  }
  // create a new counter and save it in the collection
  newCounter(itemSelector, itemId, itemPrice) {
    let counter = new BasketCounter(itemSelector, itemId, itemPrice);
    counter.countItemPrice();
    this.counters.push(counter);
    return counter;
  }

  get allCounters() {
    return this.counters;
  }

  countTotalPrice() {
    this.totalPrice = this.counters.reduce(
      (total, counter) => (total += counter.itemPrice),
      0
    );
    this.totalPriceRef.value = this.totalPrice;
  }

  removeCounter(itemToRemove) {
    const itemId = parseInt(Object.keys(itemToRemove.dataset)[0].match(/\d+/));

    this.counters = this.counters.filter(
      counter => parseInt(counter.id.match(/\d+/)) !== itemId
    );
  }
}

export { BasketCounter, Counters };
