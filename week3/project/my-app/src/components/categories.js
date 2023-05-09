/** @format */

import useFetch from "../helpers/useFetch";

function Categories({ handleProduct, selectedTab }) {
  const res = useFetch("https://fakestoreapi.com/products/categories");
  return (
    <div className="categoryButtons">
      {res.data?.map((category, index) => {
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

export default Categories;
