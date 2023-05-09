/** @format */
import React, { useState } from "react";
import "./App.css";
import Products from "./components/productList.js";
import Categories from "./components/categories";

function App() {
  const [selectedTab, setSelectedTab] = useState("");

  function handleProduct(category) {
    setSelectedTab(category === selectedTab ? "" : category);
  }

  return (
    <div className="App">
      <h1>Products</h1>
      <Categories handleProduct={handleProduct} selectedTab={selectedTab}/>
      <Products selectedTab={selectedTab}/>
    </div>
  );
}

export default App;
