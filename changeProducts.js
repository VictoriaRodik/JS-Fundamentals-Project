import { localProducts } from './script.js';
import { selectProduct } from './loadProducts.js';

const addBtn = document.querySelector(".add");
const changeBtn = document.querySelector(".change");
const removeBtn = document.querySelector(".remove");

function selectedProduct(){
  const selected = document.querySelector(".selected");
  const idSelected = selected.getAttribute("id");

localProducts.map((item) =>{
  const { id, name, category, price, image } = item;
    if (idSelected == item.id){

  let productSelected = {
  id: item.id,
  name: item.name,
  category: item.category,
  price: item.price,
  img: item.image
}   
localStorage.setItem("productSelected", JSON.stringify(productSelected));        
    }
  })  
};

addBtn.addEventListener("click", function() {
  localStorage.clear();
  window.open("productCard/productCard.html");
})

changeBtn.addEventListener("click", function() {
localStorage.clear();
selectedProduct();
window.open("productCard/productCard.html");
});

removeBtn.addEventListener("click", function() {
localStorage.clear();
selectedProduct();  
  (async () => {
    try {
      let product = JSON.parse(localStorage.productSelected);
      let response = await fetch('products.json', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(product)
      });
      if (response.ok) {
        console.log("Product deleted");
      } else {
        console.log("Failed to delete product");

      }
    } catch (error) {
      console.error("An error occurred during the delete request:", error);
    }
  })();
});