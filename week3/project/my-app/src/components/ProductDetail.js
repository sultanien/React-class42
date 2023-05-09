/** @format */

import { useParams } from "react-router-dom";
import "./productDetail.css";

import useFetch from "../helpers/useFetch";

function ProductDetail() {
  const { id } = useParams();

  const res = useFetch(`https://fakestoreapi.com/products/${id}`);
  const ProductDetail = res.data;

  return (
    <div className="product-detail">
      {res.error && <p>Something went wrong.</p>}
      {res.loading ? (
        <p>Loading...</p>
      ) : (
        <div className="product-detail--container">
          <h1 className="product-detail-title"> {ProductDetail.title}</h1>
          <div className="product-detail-information">
            <p className="product-detail-description">
              {ProductDetail.description}
            </p>
            <div className="product-detail-img-container">
              <img
                src={ProductDetail.image}
                alt={ProductDetail.title}
                width="420"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetail;
