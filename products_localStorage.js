const products = [
  {
    "id": "1",
    "name": "La'dor Perfect Hair Fill-Up",
    "category": "Hair",
    "price": 65.00,
    "image": "img/lador-perfect-hair.jpg"
  },
  {
    "id": "2",
    "name": "PL Cosmetic Camphor Cool Shampoo",
    "category": "Hair",
    "price": 1180.00,
    "image": "img/camphor-cool-shampoo.jpg"
  },
  {
    "id": "3",
    "name": "Pedison Institut-Beaute Mango Rich Protein Hair Shampoo",
    "category": "Hair",
    "price": 395.00,
    "image": "img/mango-rich-protein-shampoo.jpg"
  },
  {
    "id": "4",
    "name": "Fraijour Biome 5-Lacto Treatment Ampoule",
    "category": "Face",
    "price": 595.00,
    "image": "img/fraijour-biome-5lacto.jpg"
  },
  {
    "id": "5",
    "name": "Heimish All Clean Balm Mandarin",
    "category": "Face",
    "price": 695.00,
    "image": "img/heimish-all-clean.jpg"
  },
  {
    "id": "6",
    "name": "Medi-Peel Peptide 9 Aqua Essence Lifting Eye Cream",
    "category": "Eyes",
    "price": 645.00,
    "image": "img/medi-peel-peptide-9aqua.jpg"
  },
  {
    "id": "7",
    "name": "A'pieu Pure Block Daily Sun Cream EX SPF50+ PA++++",
    "category": "Face",
    "price": 395.00,
    "image": "img/apieu-pure-block.jpg"
  },
  {
    "id": "8",
    "name": "Purito Dermide Relief Barrier Moisturizer",
    "category": "Face",
    "price": 645.00,
    "image": "img/purito-dermide.jpg"
  },
  {
    "id": "9",
    "name": "3W Clinic Multi protection UV Sun Block SPF50+ PA+++",
    "category": "Face",
    "price": 275.00,
    "image": "img/3w-clinic-multi-protection.jpg"
  },
  {
    "id": "10",
    "name": "Medi Peel Peptide 9 UV Derma Sun Cream SPF 50+ PA+++",
    "category": "Face",
    "price": 795.00,
    "image": "img/medi-peel-peptide.jpg"
  }
]

localStorage.setItem("products", JSON.stringify(products));
const localProducts = JSON.parse(localStorage.getItem("products"));

