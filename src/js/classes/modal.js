import { Basket } from '../classes/basket';
import { basketItemsList } from '../helpers/buy-button-handler';
const basket = new Basket('#basket');

class Modal {
  constructor(selectors) {
    this.refs = this.getRefs(selectors);
  }

  getRefs(selectors) {
    const {
      openModalBtn,
      closeModalBtn,
      modal,
      openModalMobileBtn,
      closeModalBtnDownside,
    } = selectors;

    const refs = {};
    refs.openModalBtn = document.querySelector(openModalBtn);
    refs.closeModalBtn = document.querySelector(closeModalBtn);
    refs.modal = document.querySelector(modal);

    if (openModalMobileBtn)
      refs.openModalMobileBtn = document.querySelector(openModalMobileBtn);
    if (closeModalBtnDownside)
      refs.closeModalBtnDownside = document.querySelector(
        closeModalBtnDownside
      );

    return refs;
  }

  addHandler() {
    this.refs.openModalBtn?.addEventListener('click', () => this.openModal());
    this.refs.closeModalBtn?.addEventListener('click', () => this.closeModal());
    this.refs.modal?.addEventListener('click', event =>
      this.onBackdropClick(event)
    );
    if (this.refs.openModalMobileBtn)
      this.refs.openModalMobileBtn.addEventListener('click', () =>
        this.openModal()
      );
    if (this.refs.closeModalBtnDownside)
      this.refs.closeModalBtnDownside.addEventListener('click', () =>
        this.closeModal()
      );
  }

  openModal() {
    this.refs.modal.classList.remove('is-hidden');
    document.body.classList.add('modal-open');
    document.addEventListener(
      'keydown',
      this.onEscKeyDown(this.closeModal.bind(this))
    );

    if (this.refs.modal.querySelector('#basket')) {
      basket.addBasketHandler();
    }
  }

  closeModal() {
    this.refs.modal.classList.add('is-hidden');
    document.body.classList.remove('modal-open');
    document.removeEventListener('keydown', this.onEscKeyDown);

    if (this.refs.modal.querySelector('#basket')) {
      basket.removeBasketHandler();
      basketItemsList.onBasketModalClose();
    }
  }

  onBackdropClick(event) {
    if (event.target.closest('.js-modal')) return;
    this.closeModal();
  }

  onEscKeyDown(closeModal) {
    return event => {
      if (event.code !== 'Escape') {
        return;
      }
      closeModal();
    };
  }
}

export { basket, Modal };
