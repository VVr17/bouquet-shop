class BasketCounter {
  constructor(itemSelector) {
    this.refs = this.getRefs(itemSelector);
    this.counter = 1;
  }

  /**
   * 
   * @param {string} itemSelector parent item-card selector 
   */
  getRefs(cardRef) {
    const refs = {};
    refs.card = document.querySelector(`[${cardRef}]`)
    refs.decrementBtn = refs.card.querySelector('button[data-decrement]');
    refs.counterInput = refs.card.querySelector('input[data-counter]');
    refs.incrementBtn = refs.card.querySelector('button[data-increment]');
    return refs;
  }
  
  incrementCounter() {
    this.counter += 1;
    this.refs.counterInput.value = this.counter;
  }

  decrementCounter() {
    this.counter -= 1;
    this.refs.counterInput.value = this.counter;
  }
}

// Class that holds a collection of counters and properties and functions for the group
class Counters {
  constructor(){
    this.counters = []
  }
  // create a new counter and save it in the collection
  newCounter (itemSelector){
    let counter = new BasketCounter(itemSelector)
    this.counters.push(counter)
    return counter;
  }

  get allCounters(){
    return this.counters;
  }
}

export { BasketCounter, Counters }