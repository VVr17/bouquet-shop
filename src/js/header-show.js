const refs = {
  header: document.querySelector('.header'),
}

let lastScroll = 0; // previous scroll position
const defaultOffset = 400;

window.addEventListener('scroll', onWindowScroll)

// current scroll position
const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop

// if header contains class "is-hidden"
const containHidden = () => refs.header.classList.contains('header--is-hidden')


function onWindowScroll() {
  if(scrollPosition() > lastScroll && !containHidden() && scrollPosition() > defaultOffset) {
    // scroll down
    refs.header.classList.add('header--is-hidden')

  } else if (scrollPosition() < lastScroll && containHidden()) {
    // scroll up
    refs.header.classList.remove('header--is-hidden')
  }

  lastScroll = scrollPosition();
}
