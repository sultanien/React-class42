/** @format */
import React, { useState } from "react";
import "./App.css";
import Products from "./components/productList.js";
import Categories from "./components/categories";
import allProducts from "./fake-data/all-products";
import { filterProducts } from "./helpers/servers";

function App() {
  const [selectedTab, setSelectedTab] = useState('')

  function handleProduct(category){
    setSelectedTab(category === selectedTab ? '' : category)
  }
  
  const filteredProducts = selectedTab === '' ? allProducts : filterProducts(allProducts, selectedTab.replace("FAKE: ",""))

  return (
    <div className="App">
      <h1>Products</h1>
      <Categories handleProduct={handleProduct} selectedTab={selectedTab}/>
      <Products filteredProducts={filteredProducts}/>
    </div>
  );
}

export default App;
