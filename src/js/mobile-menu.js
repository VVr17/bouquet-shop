(() => {

  const refs = {
    menuBtn: document.querySelector("[data-menu-button]"),
    mobileMenu: document.querySelector("[data-menu]"),
  }

  refs.menuBtn.addEventListener('click', toggleMobileMenu);
  refs.mobileMenu.addEventListener('click', onMobileMenuClick);

  function toggleMobileMenu() {
    const expanded =
    refs.menuBtn.getAttribute("aria-expanded") === "true" || false;

    refs.menuBtn.classList.toggle("menu-btn--is-open");
    refs.menuBtn.setAttribute("aria-expanded", !expanded);

    refs.mobileMenu.classList.toggle("mobile-menu-backdrop--is-open");
    document.body.classList.toggle("modal-open");
  }

  function onMobileMenuClick(event) {
    if(event.target.hasAttribute('data-mobile-link')) {
      toggleMobileMenu();
    }
  }
  
})();

