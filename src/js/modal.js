{
  const refs = {
    openModalBtn: document.querySelector("[data-question-form-modal-open]"),
    closeModalBtn: document.querySelector("[data-question-form-modal-close]"),
    modal: document.querySelector("[data-question-form-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("backdrop--is-hidden");
    document.body.classList.toggle("modal-open");
  }
};

