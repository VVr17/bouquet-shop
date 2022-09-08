import throttle from 'lodash.throttle';

class Header {
  defaultOffset = 500;

  constructor(selector) {
    this.ref = document.querySelector(selector);
    this.lastScroll = 0; // previous scroll position
  }

  addHandler() {
    window.addEventListener('scroll', throttle(onWindowScroll,100))
  }
}

const header = new Header ('.header');
header.addHandler();


// current scroll position
const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop

// if header contains class "is-hidden"
const containHidden = () => header.ref.classList.contains('header--is-hidden')


function onWindowScroll() {
  if(scrollPosition() > header.lastScroll && !containHidden() && scrollPosition() > header.defaultOffset) {
    // scroll down 
    header.ref.classList.add('header--is-hidden')

  } else if (scrollPosition() < header.lastScroll && containHidden()) {
    // scroll up
    header.ref.classList.remove('header--is-hidden')
  }

  header.lastScroll = scrollPosition();
}