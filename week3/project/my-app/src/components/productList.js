/** @format */
import React from "react";
import useFetch from "../helpers/useFetch";
import ProductItem from "./Product";


function Products({ selectedTab }) {
  const url = selectedTab
    ? `https://fakestoreapi.com/products/category/${selectedTab}`
    : "https://fakestoreapi.com/products";
    
  const res = useFetch(url);
  return (
    <div>
      {res.error && <p>Something went wrong.</p>}
      {res.loading ? (
        <p>Loading ...</p>
      ) : (
        <ul className="products">
          {res.data?.map((product) => {
            return (
              <li className="productItem" key={product.id}>
                <ProductItem product={product}/>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Products;
