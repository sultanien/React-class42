/** @format */

import allCategories from "../fake-data/all-categories";

function Button({ handleProduct }) {
  return (
    <div className="categoryButtons">
      {allCategories &&
        allCategories.map((category, index) => {
          return (
            <button
              className="button-item"
              key={index}
              onClick={handleProduct}
            >
              {category}
            </button>
          );
        })}
    </div>
  );
}

export default Button;
