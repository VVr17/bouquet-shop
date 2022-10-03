const vieMoreBtn = document.querySelector('button[data-viewMoreBtn]');
const reviewList = document.querySelector('.customer-review__list');
console.log(vieMoreBtn);

vieMoreBtn.addEventListener('click', onBtnClick);

function onBtnClick(event) {
  // console.log(event.currentTarget);
  console.log('reviewList', reviewList);
  reviewList.classList.remove('is-hidden');
}
