/** @format */

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import heartBlack from "../assets/heart-solid.svg";
import heartWhite from "../assets/heart-regular.svg";
import { FavoriteContext } from "./context/favoriteContext";
import "./Product.css";

const ProductItem = ({ product }) => {
  const { favorite, addFavorite, removeFavorite } = useContext(FavoriteContext);

  const isFavorite = (id) => {
    return favorite.some((product) => product.id === id);
  };

  return (
    <div>
      <div className="product-item">
        {isFavorite(product.id) ? (
          <img
            className="icon"
            src={heartBlack}
            alt={heartWhite}
            onClick={() => removeFavorite(product)}
          />
        ) : (
          <img
            className="icon"
            src={heartWhite}
            alt={heartWhite}
            onClick={() => addFavorite(product)}
          />
        )}
        <Link to={`/product/${product.id}`}>
          <img
            className="product-item-img"
            src={product.image}
            alt={product.image}
          ></img>
          <p>{product.title} </p>
        </Link>
      </div>
    </div>
  );
};

export default ProductItem;
