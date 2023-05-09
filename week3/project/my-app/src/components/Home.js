/** @format */
import React, { useState } from "react";
import "../App.css";
import Products from "./productList.js";
import Categories from "./categories";
import NavBar from "./NavBar";

function Home() {
  const [selectedTab, setSelectedTab] = useState("");

  function handleProduct(category) {
    setSelectedTab(category === selectedTab ? "" : category);
  }

  return (
    <div className="Home">
      <NavBar />
      <Categories handleProduct={handleProduct} selectedTab={selectedTab} />
      <Products selectedTab={selectedTab} />
    </div>
  );
}

export default Home;
