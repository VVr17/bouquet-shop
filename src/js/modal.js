function openModal(backdrop) {
  return () => {
    backdrop.classList.remove('is-hidden');
    document.body.classList.add('modal-open');
    document.addEventListener('keydown', onEscKeyDown(backdrop));
  };
}

function closeModal(backdrop) {
  return () => {
    backdrop.classList.add('is-hidden');
    document.body.classList.remove('modal-open');
    document.removeEventListener('keydown', onEscKeyDown);
  };
}

function onBackdropClick(event) {
  if (event.target.closest('.js-modal')) {
    return;
  }
  closeModal(event.target.closest('.js-backdrop'))();
}

function onEscKeyDown(backdrop) {

  return (event) => {
    if (event.code !== 'Escape') {
      return;
    }
    closeModal(backdrop)();
  }
}

export { openModal, closeModal, onBackdropClick };
