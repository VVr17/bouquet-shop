// import { Notify } from 'notiflix/build/notiflix-notify-aio';
import LoadMoreBtn from '../classes/loadMoreBtn';
import ProductsData from './productsData';
import productCardTemplate from '../../templates/product-card.hbs';

const productsData = new ProductsData();

export default class ProductCards {
  constructor(selectors) {
    const { listSelector, loadMoreBtnSelector } = selectors;

    this.ref = document.querySelector(listSelector);
    this.loadMoreBtn = new LoadMoreBtn(loadMoreBtnSelector);
  }

  /**
   *
   * @param {string} property recommendation, specialOffer
   */
  async renderProductCards(property = '', listClass = '') {
    this.loadMoreBtn.show();
    this.loadMoreBtn.disable();

    try {
      let itemsToRender = [];

      if (!property) {
        // if there is no special list property
        itemsToRender = await productsData.fetchProductsData();
      } else {
        // if there is list type property
        itemsToRender = await productsData.fetchProductsDataByProperty(
          property
        );
      }

      if (productsData.totalItems > productsData.offset) {
        this.loadMoreBtn.addLoadMoreBtnHandler(() =>
          this.renderProductCards(property, listClass)
        );
      }

      this.ref.insertAdjacentHTML(
        'beforeend',
        productCardTemplate(itemsToRender)
      );
      this.addSpecificClass(listClass);
      productsData.incrementOffset();

      if (productsData.totalItems <= productsData.offset) {
        this.loadMoreBtn.hide();
        return;
      }

      this.loadMoreBtn.enable();
    } catch (error) {
      this.loadMoreBtn.hide();
      console.warn(error);
    }
  }

  addSpecificClass(listClass = '') {
    const galleryItems = Array.from(this.ref.children);
    galleryItems.forEach(child => {
      if (!child.classList.contains('listClass')) {
        child.classList.add(listClass);
      }
    });
  }
}
