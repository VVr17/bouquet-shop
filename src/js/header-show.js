import throttle from 'lodash.throttle';


const refs = {
  header: document.querySelector('.header'),
}

let lastScroll = 0; // previous scroll position
const defaultOffset = 500;

window.addEventListener('scroll', throttle(onWindowScroll,100))

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
