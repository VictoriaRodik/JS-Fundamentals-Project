import { localProducts } from './script.js';
import { list, selectProduct, sum } from './loadProducts.js';

const searchBtn = document.querySelector(".search__btn");
const searchInp = document.querySelector(".search__input");

searchBtn.addEventListener("click", function() {
  list.innerHTML = "";
  let sumPrice = 0;
  localProducts.forEach((item) => {
    if (item.name.toLowerCase().includes(searchInp.value.toLowerCase())) {
      const { id, name, category, price, image } = item;
      const productCard = document.createElement("div");
      sumPrice += item.price;

      productCard.classList.add("product-card");
      productCard.setAttribute("id", id);
      list.append(productCard);
      productCard.innerHTML = `
    <img src="${image}" alt="${name}" width="200">
    <p><strong>${name}</strong></p>
    <p>For ${category}</p>
    <p><strong>${parseFloat(price).toFixed(2)}</strong> UAH</p>`;
    }
  });
  sum.innerHTML = `Total sum: ${parseFloat(sumPrice).toFixed(2)} UAH`;
  selectProduct();
});

