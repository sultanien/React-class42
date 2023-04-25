/** @format */
import React, { useState } from "react";
import allProducts from "../fake-data/all-products.js";
import Button from "./categories.js";

function Component() {
  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  function filterProducts(category) {
    let filteredProducts = allProducts.filter(
      (item) => item.category === category
    );
    return filteredProducts;
  }
  function handleProduct(e) {
    let categoryType = e.target.textContent.replace("FAKE: ", "");
    categoryType !== null
      ? setFilteredProducts(filterProducts(categoryType))
      : setFilteredProducts(allProducts);
  }

  return (
    <div>
      <Button handleProduct={handleProduct} />
      <ul className="products">
        {filteredProducts.map((product) => {
          return (
            <li className="productItem" key={product.id}>
              <img src={product.image} alt={product.title} />
              <p>{product.title}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Component;
