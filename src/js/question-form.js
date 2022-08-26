import { openModal, closeModal, onBackdropClick } from "./modal.js";

const refs = {
  openModalBtn: document.querySelector('[data-question-form-modal-open]'),
  closeModalBtn: document.querySelector('[data-question-form-modal-close]'),
  modal: document.querySelector('[data-question-form-modal]'),
};

refs.openModalBtn.addEventListener('click', openModal(refs.modal));
refs.closeModalBtn.addEventListener('click', closeModal(refs.modal));
refs.modal.addEventListener('click', onBackdropClick);
