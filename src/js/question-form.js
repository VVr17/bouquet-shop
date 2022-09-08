import Modal from './helpers/modal';

const questionFormModal = new Modal ({
  openModalBtn: '[data-question-form-modal-open]',
  closeModalBtn: '[data-question-form-modal-close]',
  modal: '[data-question-form-modal]',
});

questionFormModal.addHandler();