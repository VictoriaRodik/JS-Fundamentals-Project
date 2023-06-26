const okBtn = document.querySelector(".product-form__ok");
const cancelBtn = document.querySelector(".product-form__cancel");
const productName = document.querySelector("#name");
const cat = document.querySelector("#cat");
const price = document.querySelector("#price");
const img = document.querySelector("#img");

function getProduct(){
  if (localStorage.length > 0){
  let product = JSON.parse( localStorage.productSelected );
   productName.value = product.name;
  cat.value = product.category;
  price.value = product.price;
  img.value = product.img
}
}
getProduct();

okBtn.addEventListener("click", function() {
  //autoId
  //check price input
  (async () => {
    let newProduct = {
      id: "11",
      name: productName.value,
      category: cat.value,
      price: price.value,
      image: img.value
    }
    console.log(newProduct);

    let response = await fetch('../products.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(newProduct)
    });

    let result = await response.json()
    console.log(result);
  })()
});
cancelBtn.addEventListener("click", function() {
  productName.value = "";
  cat.value = "";
  price.value = "";
  img.value = "";
  window.close();
})
