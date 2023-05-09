/** @format */

import React, { useState, createContext } from "react";

export const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const [favorite, setFavorite] = useState([]);

  const addFavorite = (product) => {
    setFavorite([...favorite, product]);
  };
  const removeFavorite = (product) => {
    setFavorite(favorite.filter((fav) => fav.id !== product.id));
  };

  return (
    <FavoriteContext.Provider value={{ favorite, addFavorite, removeFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};
