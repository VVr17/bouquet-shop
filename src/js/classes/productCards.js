import { Notify } from 'notiflix/build/notiflix-notify-aio';
import LoadMoreBtn from '../classes/loadMoreBtn';
import ProductsData from './productsData';
import productCardTemplate from '../../templates/product-card.hbs';

export default class ProductCards {
  constructor(selectors) {
    const { listSelector, loadMoreBtnSelector } = selectors;

    this.ref = document.querySelector(listSelector);
    this.loadMoreBtn = new LoadMoreBtn(loadMoreBtnSelector);
    this.productsData = new ProductsData();
  }

  /**
   *
   * @param {string} property recommendation, specialOffer
   */
  async renderProductCards(property = '', listClass = '') {
    try {
      let itemsToRender = [];

      if (!property) {
        // if there is no special list property
        itemsToRender = await this.productsData.fetchProductsData();
      } else {
        // if there is list type property
        itemsToRender = await this.productsData.fetchProductsDataByProperty(
          property
        );
      }

      if (this.productsData.totalItems > this.productsData.perPage) {
        this.loadMoreBtn.show();
        this.loadMoreBtn.disable();
      }

      if (this.productsData.totalItems > this.productsData.offset) {
        this.loadMoreBtn.addLoadMoreBtnHandler(() =>
          this.renderProductCards(property, listClass)
        );
      }

      this.ref.insertAdjacentHTML(
        'beforeend',
        productCardTemplate(itemsToRender)
      );
      this.addSpecificClass(listClass);
      this.productsData.incrementOffset();

      if (this.productsData.totalItems <= this.productsData.offset) {
        this.loadMoreBtn.hide();

        if (this.ref.id === 'catalog-list') {
          Notify.info('Всі доступні букети були завантажені');
        }
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
