/** @format */

import allCategories from "../fake-data/all-categories";

function Button({ handleProduct, selectedTab}) {
  return (
    <div className="categoryButtons">
      {allCategories?.map((category, index) => {
          return (
            <button
              className={
                selectedTab === category
                  ? "button-item selected-button"
                  : "button-item"
              }
              key={index}
              onClick={() => {
                handleProduct(category);
              }}
            >
              {category}
            </button>
          );
        })}
    </div>
  );
}

export default Button;
