const sortOptions = document.querySelectorAll("option");
const select = document.querySelector("select");
export const sum = document.querySelector(".sum");
export const list = document.querySelector(".list__products");

export function loadProducts() {
const localProducts = JSON.parse(localStorage.getItem("products"));
  if (select.selectedOptions[0].value === "new") {
    localProducts.sort(function (a, b) {
      if ((a.id - b.id) < 0 ) {
        return 1;
      }
      if ((a.id - b.id) > 0) {
        return -1;
      }
      return 0;
    });
  };
  if (select.selectedOptions[0].value === "name") {
    localProducts.sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
  };
  if (select.selectedOptions[0].value === "price") {
    localProducts.sort(function (a, b) {
      if (a.price < b.price) {
        return -1;
      }
      if (a.price > b.price) {
        return 1;
      }
      return 0;
    });
  };
  if (select.selectedOptions[0].value === "category") {
    localProducts.sort(function (a, b) {
      if (a.category < b.category) {
        return -1;
      }
      if (a.category > b.category) {
        return 1;
      }
      return 0;
    });
  };
  let sumPrice = 0;
  list.innerHTML = "";
  localProducts.map((item) => {
    const { id, name, category, price, image } = item;
    const productCard = document.createElement("div");

    sumPrice += Number(item.price);
    productCard.classList.add("product-card");
    productCard.setAttribute("id", id);
    list.append(productCard);

    productCard.innerHTML = `
    <img src="${image}" alt="${name}">
    <p><strong>${name}</strong></p>
    <p>For ${category}</p>
    <p><strong>${parseFloat(price).toFixed(2)}</strong> UAH</p>`;
  });
  sum.innerHTML = `Total sum: ${parseFloat(sumPrice).toFixed(2)} UAH`;
}
  loadProducts();

// changing selected option on event
select.addEventListener("change", function (event) {
  event.preventDefault();
  sortOptions.forEach(option => {
    if (option === event.target.selectedOptions[0]) {
      option.setAttribute("selected", "");
    } else {
      option.removeAttribute("selected");
    }
  });
  loadProducts();
  selectProduct();
});


export function selectProduct() {
  const productCards = document.querySelectorAll(".product-card");
  productCards.forEach(item => {
    item.addEventListener("click", function () {
      item.classList.toggle("selected");
    })
  });
};

selectProduct();