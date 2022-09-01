import Modal from './modal';

const basketModal = new Modal ({
  openModalBtn: '[data-basket-modal-open]',
  openModalMobileBtn: '[data-basket-mobile-modal-open]',
  closeModalBtn: '[data-basket-modal-close]',
  closeModalBtnDownside: '[data-basket-modal-close-button]',
  modal: '[data-basket-modal]',
});

basketModal.addHandler();
