/** @format */
import React, { useState, useEffect } from "react";
import "./App.css";
import Products from "./components/productList.js";
import Categories from "./components/categories";
import { fetchData, filterProducts } from "./helpers/servers";

function App() {
  const [selectedTab, setSelectedTab] = useState("");
  const [categories, setCategories] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const categoryUrl = "https://fakestoreapi.com/products/categories";
  const allProductsUrl = "https://fakestoreapi.com/products";

  useEffect(() => {
    fetchData(categoryUrl, setCategories, setIsLoading, setHasError);
  }, []);

  useEffect(() => {
    fetchData(allProductsUrl, setAllProducts, setIsLoading, setHasError);
  }, [selectedTab]);

  function handleProduct(category) {
    setSelectedTab(category === selectedTab ? "" : category);
  }

  const filteredProducts =
    selectedTab === "" ? allProducts : filterProducts(allProducts, selectedTab);

  return (
    <div className="App">
      <h1>Products</h1>
      <Categories
        categories={categories}
        handleProduct={handleProduct}
        selectedTab={selectedTab}
      />
      <Products
        filteredProducts={filteredProducts}
        isLoading={isLoading}
        hasError={hasError}
      />
    </div>
  );
}

export default App;
