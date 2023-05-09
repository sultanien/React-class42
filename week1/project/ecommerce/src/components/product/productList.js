/** @format */

import './Product.css'

function Products({ filteredProducts, isLoading }) {
  return (
    <div>
      <ul className="products">
        {isLoading? 'Loading' : filteredProducts.map((product) => {
        {filteredProducts?.map((product) => { 
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
