/** @format */
import React from "react";
import { Link } from "react-router-dom"
import "../App.css";

const NavBar = () => {
    return (
      <div className="navbar">
        <h1 className="navbar-title">Products</h1>
        <div className="navbar-links">
          <Link to={`/`}>
            <p>Products</p>
          </Link>
          <Link to={`/favorites`}>
            <p>Favorites</p>
          </Link>
        </div>
      </div>
    );
};

export default NavBar;
