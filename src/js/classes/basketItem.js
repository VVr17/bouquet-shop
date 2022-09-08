import ProductsData from './productsData';
import basketCardTemplate from '../../templates/basket-card.hbs';

const productsData = new ProductsData();

export default class BasketItem {
  // constructor(selectors) {
  //   this.refs = this.getRefs(selectors);
  // }

  // getRefs(selectors = {}) {
  //   const { productList, loadMoreBtn } = selectors;
  //   const refs = {};
  //   refs.productList = document.querySelector(productList);
  //   if (loadMoreBtn) refs.loadMoreBtn = document.querySelector(loadMoreBtn);
  //   return refs;
  // }

  // проверить на какую кнопку нажали - по ней определить ID товара
  // запросить fetch и сделать render
  addItemToBasket() {

  }

  async renderBasketItems() {
    try {
      const items = await productsData.fetchProductsData();
      const itemToRender = items.find(()=>{ });

      this.refs.productList.insertAdjacentHTML(
        'beforeend',
        basketCardTemplate(itemToRender)
      );
    } catch (error) {
      console.error(error);
    }
  }
}

