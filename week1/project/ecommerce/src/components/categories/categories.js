/** @format */
import { useState, useEffect } from "react";
import './categories.css'
function Button({ handleProduct }) {
  const [categories, setCategories] = useState([]);
  const url = "https://fakestoreapi.com/products/categories";
  const getCategories = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    getCategories()
  }, [])
  return (
    <div className="categoryButtons">
      {categories &&
        categories.map((category, index) => {
          return (
            <button
              className="button-item"
              key={index}
              onClick={handleProduct}
              value={category}
            >
              {category}
            </button>
          );
        })}
    </div>
  );
}

export default Button;
