import { openModal, closeModal, onBackdropClick } from "./modal.js";

  const refs = {
    openModalBtn: document.querySelector("[data-basket-modal-open]"),
    openModalMobileBtn:document.querySelector('[data-basket-mobile-modal-open]'),
    closeModalBtn: document.querySelector("[data-basket-modal-close]"),
    closeModalBtnDownside: document.querySelector('[data-basket-modal-close-button]'),
    modal: document.querySelector("[data-basket-modal]"),
  };

  refs.openModalBtn.addEventListener("click", openModal(refs.modal));
  refs.openModalMobileBtn.addEventListener("click", openModal(refs.modal));
  refs.closeModalBtn.addEventListener("click", closeModal(refs.modal));
  refs.closeModalBtnDownside.addEventListener("click", closeModal(refs.modal));
  refs.modal.addEventListener('click', onBackdropClick);


