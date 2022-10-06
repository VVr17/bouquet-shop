export default class ViewMoreBtn {
  constructor(selector) {
    this.buttonRef = document.querySelector(selector);
  }

  addViewMoreBtnHandler(handler) {
    this.buttonRef.addEventListener('click', handler);
  }

  toggleBtn() {
    this.buttonRef.textContent =
      this.buttonRef.textContent === 'Розгорнути' ? 'Згорнути' : 'Розгорнути';
    this.buttonRef.classList.toggle('content-is-hidden');
  }
}
