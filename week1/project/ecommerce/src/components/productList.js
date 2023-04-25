/** @format */

function Products({ filteredProducts }) {
  return (
    <div>
      <ul className="products">
        {filteredProducts.map((product) => {
          return (
            <li className="productItem" key={product.id}>
              <img src={product.image} alt={product.title} />
              <p>{product.title}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Products;
