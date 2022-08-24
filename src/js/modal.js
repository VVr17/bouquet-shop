(()=>{
    const refs = {
      openModalBtn: document.querySelector("[data-question-form-modal-open]"),
      closeModalBtn: document.querySelector("[data-question-form-modal-close]"),
      modal: document.querySelector("[data-question-form-modal]"),
    };

    refs.openModalBtn.addEventListener("click", openModal);
    refs.closeModalBtn.addEventListener("click", closeModal);
    refs.modal.addEventListener('click', onBackdropClick);

    function openModal() {
      refs.modal.classList.remove("backdrop--is-hidden");
      document.body.classList.add("modal-open");
      document.addEventListener('keydown', onEscKeyDown);
    }

    function closeModal() {
      refs.modal.classList.add("backdrop--is-hidden");
      document.body.classList.remove("modal-open");
      document.removeEventListener('keydown', onEscKeyDown);
    }

    function onBackdropClick(event) {
      if(event.target.closest('.modal')){
        return;
      }
      closeModal();       
    }

    function onEscKeyDown(event) {
      if(event.code !== 'Escape') {
        return
      }
      closeModal();
    }
})()

