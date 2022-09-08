export default class BasketCounter {
  constructor(refs) {
    this.refs = refs;
    this.counter = 1;
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
