/** @format */
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import ProductDetail from "./components/ProductDetail";
import Home from "./components/Home";
import FavoritePage from "./components/Favorites";
import { FavoriteProvider } from "./components/context/favoriteContext";

function App() {

  return (
    <Router>
      <FavoriteProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/favorites" element={<FavoritePage />} />
        </Routes>
      </FavoriteProvider>
    </Router>
  );
}

export default App;
