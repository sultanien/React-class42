/** @format */

import React, { useContext } from "react";
import { FavoriteContext } from "./context/favoriteContext";
import Product from "./Product";
import "./Favorites.css"

const FavoritePage = () => {
  const { favorite } = useContext(FavoriteContext);

  return (
    <div>
      <div className="favorite-list">
        {favorite.length === 0 ? (
          <p>You haven't chosen any favorites yet!</p>
        ) : (
          favorite.map((item, index) => <Product product={item} key={index} />)
        )}
      </div>
    </div>
  );
};

export default FavoritePage;
