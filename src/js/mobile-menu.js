class MobileMenu {
  constructor(selectors) {
    this.refs = this.getRefs(selectors);
  }

  getRefs(selectors) {
    const {
      menuBtn,
      mobileMenu
    } = selectors;
    const refs = {};
    refs.menuBtn = document.querySelector(menuBtn);
    refs.mobileMenu = document.querySelector(mobileMenu);

    return refs;
  }

  addHandler() {
    this.refs.menuBtn.addEventListener('click', ()=>this.toggleMobileMenu());
    this.refs.mobileMenu.addEventListener('click', (event)=>this.onMobileMenuClick(event));
  }
    
  toggleMobileMenu() {
    const expanded =
    this.refs.menuBtn.getAttribute("aria-expanded") === "true" || false;

    this.refs.menuBtn.classList.toggle("menu-btn--is-open");
    this.refs.menuBtn.setAttribute("aria-expanded", !expanded);

    this.refs.mobileMenu.classList.toggle("mobile-menu-backdrop--is-open");
    document.body.classList.toggle("modal-open");
  }

  onMobileMenuClick(event) {
    if(event.target.hasAttribute('data-mobile-link')) {
      this.toggleMobileMenu();
    }
  }
}

const mobileMenu = new MobileMenu({
  menuBtn: '[data-menu-button]',
  mobileMenu: '[data-menu]',
})
mobileMenu.addHandler();
