/** @format */

function Products({ filteredProducts, isLoading, hasError}) {
  return (
    <div>
      {hasError && <p>Something went wrong.</p>}
      {isLoading ? (
        <p>Loading ...</p>
      ) : (
        <ul className="products">
          {filteredProducts?.map((product) => {
            return (
              <li className="productItem" key={product.id}>
                <img src={product.image} alt={product.title} />
                <p>{product.title}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Products;
