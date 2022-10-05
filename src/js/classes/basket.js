import { Notify } from 'notiflix';
import { Counters } from '../classes/basketCounter';
import { basketItemsList } from '../helpers/buy-button-handler';
import { basketModal, orderCompleteModal } from '../helpers/modal/basket-modal';
import ProductsData from './productsData';
const basketCounters = new Counters();

class Basket {
  constructor(basketSelector) {
    this.ref = document.querySelector(basketSelector);
    this.formRef = document.querySelector('#basket-form');
    this.submitBtnRef = document.querySelector('button[data-basket-submit]');
    this.productsData = new ProductsData();
  }

  addBasketHandler() {
    this.ref.addEventListener('click', this.onCounterBtnClick);
    this.ref.addEventListener('click', this.onDeleteBtnClick);
    this.formRef.addEventListener('submit', this.onFormSubmit);
  }

  removeBasketHandler() {
    this.ref.removeEventListener('click', this.onCounterBtnClick);
    this.ref.removeEventListener('click', this.onDeleteBtnClick);
    this.formRef.removeEventListener('submit', this.onFormSubmit);
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

  onFormSubmit(event) {
    event.preventDefault();
    const { name, phone, email, totalPrice } = event.currentTarget.elements;
    const order = {
      name: name.value,
      phone: phone.value,
      email: email.value,
      items: [],
      totalPrice: totalPrice.value,
    };

    basketItemsList.basketItems.forEach(item => {
      const counter = basketCounters.allCounters.find(
        counter => counter.id === `counter-${item.id}`
      );

      item = { ...item };
      item.quantity = counter.counter;
      item.totalPricePerItem = item.quantity * item.price;

      order.items.push(item);
    });

    basketItemsList.onSubmitBtn();
    basketCounters.onSubmitBtn();

    orderCompleteModal.openModal();
    event.currentTarget.reset();
    basketModal.closeModal();
  }
}

export { basketCounters, Basket };
