import { loadProducts, selectProduct } from './loadProducts.js';

const addBtn = document.querySelector(".add");
const changeBtn = document.querySelector(".change");
const removeBtn = document.querySelector(".remove");



addBtn.addEventListener("click", function () {
  sessionStorage.clear();
  window.open("productCard/productCard.html");
})

changeBtn.addEventListener("click", function () {
  const localProducts = JSON.parse(localStorage.getItem("products"));
  sessionStorage.clear();
  const selected = document.querySelector(".selected");
  const idSelected = selected.getAttribute("id");

  localProducts.map((item) => {
    const { id, name, category, price, image } = item;
    if (idSelected == item.id) {

      let productSelected = {
        id: item.id,
        name: item.name,
        category: item.category,
        price: item.price,
        img: item.image
      }
      sessionStorage.setItem("productSelected", JSON.stringify(productSelected));
    }
  })
  window.open("productCard/productCard.html");
});

removeBtn.addEventListener("click", function () {
  const localProducts = JSON.parse(localStorage.getItem("products"));
  const selected = document.querySelector(".selected");
  const idSelected = selected.getAttribute("id");
  const products = localProducts.filter(item => {
    if (item.id !== idSelected) {
      return item;
    }
  });
  localStorage.clear();
  localStorage.setItem("products", JSON.stringify(products));
  loadProducts();
  selectProduct();
});