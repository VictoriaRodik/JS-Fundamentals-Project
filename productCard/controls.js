const okBtn = document.querySelector(".product-form__ok");
const cancelBtn = document.querySelector(".product-form__cancel");
const productName = document.querySelector("#name");
const cat = document.querySelector("#cat");
const price = document.querySelector("#price");
const img = document.querySelector("#img");
let idProduct;
let change = 0;

function getProduct() {
  if (sessionStorage.length > 1) {
    let product = JSON.parse(sessionStorage.getItem("productSelected"));
    idProduct = product.id
    productName.value = product.name;
    cat.value = product.category;
    price.value = product.price;
    img.value = product.img;
    change = 1;
  }
}

getProduct();

function findId() {
  idProduct = 0;
  const localProducts = JSON.parse(localStorage.getItem("products"));
  localProducts.forEach(item => {
    if (Number(item.id) > idProduct) {
      idProduct = item.id;
    }
  });
  idProduct++;
}

console.log(idProduct);
okBtn.addEventListener("click", function () {
  const localProducts = JSON.parse(localStorage.getItem("products"));
  if (change == 0) {
    findId();

    //check price input
    let newProduct = {
      id: String(idProduct),
      name: productName.value,
      category: cat.value,
      price: price.value,
      image: img.value
    }

    localProducts.push(newProduct);
    localStorage.clear();
    localStorage.setItem("products", JSON.stringify(localProducts));

    productName.value = "";
    cat.value = "";
    price.value = "";
    img.value = "";
    alert("New product was added!");
  };
  if (change == 1) {
    let products = localProducts.map((item) => {
      if (item.id === idProduct) {
        return {
          id: idProduct,
          name: productName.value,
          category: cat.value,
          price: price.value,
          image: img.value
        }
      } else {
        return item;
      }
    });

    localStorage.clear();
    localStorage.setItem("products", JSON.stringify(products));

    productName.value = "";
    cat.value = "";
    price.value = "";
    img.value = "";
    alert("The product was changed!");
  };
  window.close();
});


cancelBtn.addEventListener("click", function () {
  productName.value = "";
  cat.value = "";
  price.value = "";
  img.value = "";
  window.close();
})
