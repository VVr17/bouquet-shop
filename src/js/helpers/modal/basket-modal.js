import { Modal } from '../../classes/modal';

const basketModal = new Modal({
  openModalBtn: '[data-basket-modal-open]',
  openModalMobileBtn: '[data-basket-mobile-modal-open]',
  closeModalBtn: '[data-basket-modal-close]',
  closeModalBtnDownside: '[data-basket-modal-close-button]',
  modal: '[data-basket-modal]',
});

const orderCompleteModal = new Modal({
  modal: '[data-orderComplete]',
  closeModalBtn: '[data-orderComplete-close]',
});

basketModal.addHandler();
orderCompleteModal.addHandler();

export { basketModal, orderCompleteModal };
