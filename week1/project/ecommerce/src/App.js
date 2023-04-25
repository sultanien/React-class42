/** @format */
import React, { useState } from "react";
import "./App.css";
import Products from "./components/productList.js";
import Button from "./components/categories";
import allProducts from "./fake-data/all-products";
import { filterProducts } from "./components/servers";

function App() {
  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  function handleProduct(e) {
    const category = e.target.textContent.replace("FAKE: ", "");
    category !== null
      ? setFilteredProducts(filterProducts(allProducts, category))
      : setFilteredProducts(allProducts);
  }

  return (
    <div className="App">
      <h1>Products</h1>
      <Button handleProduct={handleProduct} />
      <Products filteredProducts={filteredProducts} />
    </div>
  );
}

export default App;
