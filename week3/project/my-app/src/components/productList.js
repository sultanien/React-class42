/** @format */
import { Link } from "react-router-dom";
import useFetch from "../helpers/useFetch";

function Products({ selectedTab }) {
  const url = selectedTab
    ? `https://fakestoreapi.com/products/category/${selectedTab}`
    : "https://fakestoreapi.com/products";
    
  const res = useFetch(url);
  return (
    <div>
      {res.error && <p>Something went wrong.</p>}
      {res.loading ? (
        <p>Loading ...</p>
      ) : (
        <ul className="products">
          {res.data?.map((product) => {
            return (
              <li className="productItem" key={product.id}>
                <Link to={`/product/${product.id}`}>
                  <img src={product.image} alt={product.title} />
                  <p>{product.title}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Products;
