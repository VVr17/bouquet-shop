import basketCardCounterTemplate from '../../templates/product-card.hbs';

const basket = document.querySelector('#basket');
const basketCards = Array.from(basket.querySelectorAll('.js-basket-card'));

basket.addEventListener('click',onBtnClick);

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

function onBtnClick(event) {

  if(!event.target.nodeName =='BUTTON') return;

  if(event.target.hasAttribute('data-decrement')) {
    const basketCounterClicked = basketCounters.find((basketCounter)=>
      basketCounter.refs.decrementBtn === event.target
    )
    basketCounterClicked.decrementCounter()
  }

  if(event.target.hasAttribute('data-increment')) {
    const basketCounterClicked = basketCounters.find((basketCounter)=>
      basketCounter.refs.incrementBtn === event.target
    )
    basketCounterClicked.incrementCounter()
  }
}


const basketCounters = [];
basketCards.forEach((card)=>{
  console.log('card', card.classList)

  const decrementBtn = card.querySelector('.js-counter-decrement')
  console.log('decrementBtn',decrementBtn)

  basketCounters.push(new BasketCounter({
  decrementBtn:  card.querySelector('button[data-decrement]'),
  counterInput: card.querySelector('input[data-counter]'),
  incrementBtn: card.querySelector('button[data-increment]'),
  })
  )
  console.log('basketCounters',basketCounters)
})