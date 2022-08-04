import { ProductList } from "./ProductListArray.js";

function getMultipleRandomObjects(ProductList, num) {
  const shuffled = [...ProductList].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
}

let randomList = getMultipleRandomObjects(ProductList, 5);
console.log(randomList);

const createsimilarproductdiv = (spl) => {
  // for (const spl of ProductList) {
  const SimilarStoreDiv = document.createElement("div");
  const SimilarStoreh4 = document.createElement("h4");
  const SimilarStoreh5 = document.createElement("h5");
  const SimilarStoreIcon = document.createElement("img");

  SimilarStoreIcon.src = spl.photo_url;
  SimilarStoreh4.innerHTML = spl.name;
  SimilarStoreh5.innerHTML = spl.price;

  SimilarStoreDiv.appendChild(SimilarStoreIcon);
  SimilarStoreDiv.appendChild(SimilarStoreh4);
  SimilarStoreDiv.appendChild(SimilarStoreh5);
  // };
  return SimilarStoreDiv;
};

const SimilarProductCard = document.getElementById("grid-products-container");
for (const spl of randomList) {
  let car2 = createsimilarproductdiv(spl);
  car2.className = "product-grid-item";
  SimilarProductCard.appendChild(car2);
}
