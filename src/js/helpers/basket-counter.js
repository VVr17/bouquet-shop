import BasketCounter from '../classes/basketCounter';

export default function initiateBasketCounters() {
  console.log('im inside basketcounter')

  const basket = document.querySelector('#basket');
  const basketCards = Array.from(basket.querySelectorAll('.js-basket-card'));
  const basketCounters = [];

  basket.addEventListener('click', onBtnClick);

  basketCards.forEach(card => {
    basketCounters.push(
      new BasketCounter({
        decrementBtn: card.querySelector('button[data-decrement]'),
        counterInput: card.querySelector('input[data-counter]'),
        incrementBtn: card.querySelector('button[data-increment]'),
      })
    );
  });

  function onBtnClick(event) {
    if (!event.target.nodeName == 'BUTTON') return;

    if (event.target.hasAttribute('data-decrement')) {
      const basketCounterClicked = basketCounters.find(
        basketCounter => basketCounter.refs.decrementBtn === event.target
      );
      basketCounterClicked.decrementCounter();
    }

    if (event.target.hasAttribute('data-increment')) {
      const basketCounterClicked = basketCounters.find(
        basketCounter => basketCounter.refs.incrementBtn === event.target
      );
      basketCounterClicked.incrementCounter();
    }
  }
}
