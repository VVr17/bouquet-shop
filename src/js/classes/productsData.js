import axios from 'axios';

export default class ProductsData {
  // #BASE_URL = ' https://sheet.best/api/sheets/c18f7bf8-af73-4384-ad69-39b8dfc13c08'; // GOOGLE SHEET
  #BASE_URL = 'https://sheetdb.io/api/v1/qjso21gugm7yo'; // SHEET DB

  constructor() {
    this.perPage = 8;
    this.offset = 0;
    this.totalItems = 0;
  }

  fetchProductsData = async () => {
    try {
      //link to Google sheets
      // const response = await axios.get(
      //   `https://sheet.best/api/sheets/c18f7bf8-af73-4384-ad69-39b8dfc13c08?_limit=${this.perPage}&_offset=${this.offset}`
      // );
      // if (!this.totalItems)
      //   this.totalItems = parseInt(response.headers['x-connection-rows']);

      const response = await axios.get(
        `${this.#BASE_URL}?limit=${this.perPage}&offset=${this.offset}`
      );
      if (!this.totalItems) {
        const total = await axios.get(`${this.#BASE_URL}`);
        this.totalItems = total.data.length;
      }

      return response.data;
    } catch (error) {
      console.warn('fetch-error', error);
    }
  };

  fetchProductsDataByProperty = async property => {
    try {
      //link to Google
      // const response = await axios.get(
      //   `https://sheet.best/api/sheets/c18f7bf8-af73-4384-ad69-39b8dfc13c08/${property}/true?_limit=${this.perPage}&_offset=${this.offset}`
      // );
      // if (!this.totalItems)
      // this.totalItems = parseInt(response.headers['x-connection-rows']);
      const response = await axios.get(
        `${this.#BASE_URL}/search?${property}=true`
      );

      return response.data;
    } catch (error) {
      console.warn('fetch-error', error);
    }
  };

  fetchProductDataById = async id => {
    try {
      //link to Google
      // const response = await axios.get(
      //   `https://sheet.best/api/sheets/c18f7bf8-af73-4384-ad69-39b8dfc13c08/id/${id}`
      // );
      const response = await axios.get(`${this.#BASE_URL}/search?id=${id}`);
      return response.data;
    } catch (error) {
      console.warn('fetch-error', error);
    }
  };

  incrementOffset() {
    this.offset += this.perPage;
  }
}
