import axios from 'axios';

export default class ProductsData {
  constructor() {
    this.perPage = 10;
    this.showedItems = 0;
    this.itemsToShow = this.perPage;
  }

  async fetchProductsData() {
    try {
      //link to Google sheets
      const response = await axios.get(
        `https://sheet.best/api/sheets/c18f7bf8-af73-4384-ad69-39b8dfc13c08`
      );
      return response.data;
    } catch (error) {
      console.error('fetch-error', error);
    }
  }

  incrementShowedItemsAndItemToShow() {
    this.showedItems += this.perPage;
    this.itemsToShow += this.perPage;
  }
}