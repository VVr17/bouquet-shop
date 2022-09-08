import ProductsData from './productsData';
import productCardTemplate from '../../templates/product-card.hbs';

const productsData = new ProductsData();

export default class ProductCards {
  constructor(selectors) {
    this.refs = this.getRefs(selectors);
  }

  getRefs(selectors = {}) {
    const { productList, loadMoreBtn } = selectors;
    const refs = {};
    refs.productList = document.querySelector(productList);
    if (loadMoreBtn) refs.loadMoreBtn = document.querySelector(loadMoreBtn);
    return refs;
  }

  addLoadMoreBtnHandler(property = '', listClass = '') {
    this.refs.loadMoreBtn.addEventListener('click', () =>
      this.renderProductCards(property, listClass)
    );
  }

  /**
   *
   * @param {string} property recommendation, specialOffer
   */
  async renderProductCards(property = '', listClass = '') {
    try {
      let items = [];

      if (!property) {
        // if there is no special list property
        items = await productsData.fetchProductsData();
      } else {
        // if there is list type property
        const itemsToFilter = await productsData.fetchProductsData();
        items = itemsToFilter.filter(item => `item.${property}`);
      }

      const itemsToRender = items.filter(
        (item, index) =>
          index >= productsData.showedItems && index < productsData.itemsToShow
      );
      productsData.incrementShowedItemsAndItemToShow();

      // console.log(items[0].hit)
      this.refs.productList.insertAdjacentHTML(
        'beforeend',
        productCardTemplate(itemsToRender)
      );
      this.addSpecificClass(listClass);
    } catch (error) {
      console.error(error);
    }
  }

  addSpecificClass(listClass = '') {
    const galleryItems = Array.from(this.refs.productList.children);
    galleryItems.forEach(child => {
      if (!child.classList.contains('listClass')) {
        child.classList.add(listClass);
      }
    });
  }
}
