import axios from 'axios';

export default class ProductsData {
  constructor() {
    this.perPage = 8;
    this.offset = 0;
    this.totalItems = 0;
  }

  async fetchProductsData() {
    try {
      //link to Google sheets
      const response = await axios.get(
        `https://sheet.best/api/sheets/c18f7bf8-af73-4384-ad69-39b8dfc13c08?_limit=${this.perPage}&_offset=${this.offset}`
      );
      if (!this.totalItems)
        this.totalItems = parseInt(response.headers['x-connection-rows']);
      return response.data;
    } catch (error) {
      console.warn('fetch-error', error);
    }
  }

  async fetchProductsDataByProperty(property) {
    try {
      //link to Google
      const response = await axios.get(
        `https://sheet.best/api/sheets/c18f7bf8-af73-4384-ad69-39b8dfc13c08/${property}/true?_limit=${this.perPage}&_offset=${this.offset}`
      );
      if (!this.totalItems)
        this.totalItems = parseInt(response.headers['x-connection-rows']);
      return response.data;
    } catch (error) {
      console.warn('fetch-error', error);
    }
  }

  incrementOffset() {
    this.offset += this.perPage;
  }
}
