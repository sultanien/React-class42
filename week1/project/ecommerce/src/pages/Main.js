/** @format */

import React, { useState, useEffect } from "react";
import Products from "../components/product/productList";
import Button from "../components/categories/categories";
import { filterProducts } from "../components/servers";

function Main() {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [isLoading, setIsLoading] = useState(true);

  const url = "https://fakestoreapi.com/products";

  const getProducts = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setAllProducts(data);
      setTimeout(() => {
        setFilteredProducts(data);
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  function handleProduct(e) {
    e.preventDefault();
    const category = e.target.value;
    category !== null
      ? setFilteredProducts(filterProducts(allProducts, category))
      : setFilteredProducts(allProducts);
  }
  return (
    <div className="Main">
      <h1>Products</h1>
      <Button handleProduct={handleProduct} />
      {isLoading ? (
        "Loading..."
      ) : (
        <Products filteredProducts={filteredProducts} isLoading={isLoading} />
      )}
    </div>
  );
}

export default Main;
