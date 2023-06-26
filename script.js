let response = await fetch("./products.json");
export let localProducts = await response.json();