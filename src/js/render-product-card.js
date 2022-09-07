import axios from 'axios';
import productCardTemplate from "../templates/product-card.hbs";


// class ProductList {
//   constructor(selector) {
//     this.ref = document.querySelector(selector)

//   }

// }


const galleryList = document.querySelector('#catalog-list');

async function fetchPhoto() {

  try {
    // ссылка на таблицы
    const response = await axios.get(`https://sheet.best/api/sheets/c18f7bf8-af73-4384-ad69-39b8dfc13c08`);
    console.log(response.data) 
    // return response.data

    const itemsPerPage = await response.data.filter(item => item.id <= 10) 
    console.log('itemsPerPage',itemsPerPage)

    galleryList.insertAdjacentHTML('beforeend',productCardTemplate(itemsPerPage))
    
    const galleryItems = Array.from(galleryList.children)
    galleryItems.forEach(child => {
      // console.log(child)
      child.classList.add('catalog__item')
    })

  } catch (error) {
    console.error(error);
    console.log(error.response.status);
  }
}

fetchPhoto();
