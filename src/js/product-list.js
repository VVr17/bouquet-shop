import ProductsData from './get-data';
import productCardTemplate from '../templates/product-card.hbs';

const productsData = new ProductsData();

export default class ProductCards {
  //! static property - label
  static Label = {
    HIT: {
      class: 'product-card__label--hit',
      text: 'Хіт продажів',
    },
    NEW: {
      class: 'product-card__label--new',
      text: 'Новинка',
    },
  };

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

  addLoadMoreBtnHandler() {
    this.refs.loadMoreBtn.addEventListener('click', () =>
      this.renderProductCards()
    );
  }

  /**
   *
   * @param { string } property property to filter
   * @returns { array } filteredCards
   */
  // ! проверить, как работает фильтр по свойству
  async filterByProperty(property) {
    try {
      const itemsToFilter = await productsData.fetchProductsData();
      return itemsToFilter.filter(item => item.property);
    } catch (error) {
      console.error(error);
    }
  }

  async renderProductCards(property = '') {
    try {
      let items = [];

      // ! проверить, как if по пустой строке
      // ! проверить сработает ли async на else
      if (!property) {
        // если свойство не указано, идем запрашивать данные
        items = await productsData.fetchProductsData();
      } else {
        // иначе - если свойсво указано
        items = this.filterByProperty(property); //!
      }

      const itemsToRender = items.filter(
        (item, index) =>
          index >= productsData.showedItems && index < productsData.itemsToShow
      );
      productsData.incrementShowedItemsAndItemToShow();

      this.refs.productList.insertAdjacentHTML(
        'beforeend',
        productCardTemplate(itemsToRender)
      );
      this.addLabel(itemsToRender); //?

    } catch (error) {
      console.error(error);
    }
  }

  addSpecificClass(listClass = '') {
    const galleryItems = Array.from(this.refs.productList.children);
    galleryItems.forEach(child => child.classList.add(listClass));
  }

  /**
   *
   * @param {array} cardsList
   */
  // addLabelClass(cardsList) {
  //   // <p class='product-card__label product-card__label--hit'>Хіт продажів</p>
  //   // <p class="product-card__label product-card__label--new">Новинка</p>

  //   cardsList.map(card => {
  //     if(card.hit) {
        
  //       this.Label.labelToAdd.class
  //     }

  //     if(card.new) {
  //       this.createLabel(NEW)
  //     }
  //   })
  // }
}

/* 
 createLabel(labelToAdd) {
  // <p class='product-card__label product-card__label--hit'>Хіт продажів</p>
  // <p class="product-card__label product-card__label--new">Новинка</p>

  const label = `
  <p class='product-card__label ${this.Label.labelToAdd.class}'>
  ${this.Label.labelToAdd.text}</p>
  `;
}*/



/* 
export default class ProductCards {
  constructor(selectors) {
    this.refs = this.getRefs(selectors);
  }

  getRefs(selectors) {
    const { productList, loadMoreBtn } = selectors;
    const refs = {};
    refs.productList = document.querySelector(productList);
    if(loadMoreBtn) refs.loadMoreBtn = document.querySelector(loadMoreBtn);
    return refs;
  }

  addLoadMoreBtnHandler() {
    this.refs.loadMoreBtn.addEventListener('click', () =>
      this.renderProductCards()
    );
  }

  async renderProductCards() {

    try {
      const productCards = await productsData.fetchProductsData();
      const CardsToRender = productCards.filter(
        (item, index) =>
          index >= productsData.showedItems && index < productsData.itemsToShow
      );
      productsData.incrementShowedItemsAndItemToShow();

      this.refs.productList.insertAdjacentHTML(
        'beforeend',
        productCardTemplate(CardsToRender)
      );
    } catch (error) {
      console.error(error);
    }
  }

  addListClass(listClass) {
    const galleryItems = Array.from(this.refs.productList.children);
    galleryItems.forEach(child => child.classList.add(listClass));
  }
}

*/
