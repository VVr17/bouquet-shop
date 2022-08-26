function openModal(backdrop) {
  return () => {
    backdrop.classList.remove('backdrop--is-hidden');
    document.body.classList.add('modal-open');
    document.addEventListener('keydown', onEscKeyDown(backdrop));
  };
}

function closeModal(backdrop) {
  return () => {
    backdrop.classList.add('backdrop--is-hidden');
    document.body.classList.remove('modal-open');
    document.removeEventListener('keydown', onEscKeyDown);
  };
}

function onBackdropClick(event) {
  if (event.target.closest('.modal')) {
    return;
  }
  closeModal(event.target.closest('.backdrop'))();
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
