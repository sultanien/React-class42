/** @format */

function Button({ categories, handleProduct, selectedTab }) {
  return (
    <div className="categoryButtons">
      {categories?.map((category, index) => {
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
