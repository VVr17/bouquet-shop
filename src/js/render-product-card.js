import { productCards } from "../data/products.json";
import productCardTemplate from "../templates/product-card.hbs";
// import productCards from "./product-cards";

const galleryList = document.querySelector('#catalog-list');

function markupProductCard(productCards) {
  console.log(productCards)
  galleryList.insertAdjacentHTML('beforeend',productCardTemplate(productCards))
}

markupProductCard([productCards[0],productCards[1],,productCards[2],,productCards[3],,productCards[4],,productCards[5]])