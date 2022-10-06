import ViewMoreBtn from '../classes/ViewMoreBtn';

const reviewList = document.querySelector('#customer-review');
const customerReviewMoreBtn = new ViewMoreBtn('button[data-viewMoreBtn]');
customerReviewMoreBtn.addViewMoreBtnHandler(onBtnClick);

function onBtnClick(event) {
  reviewList.classList.toggle('is-hidden');
  customerReviewMoreBtn.toggleBtn();
}
