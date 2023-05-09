import { useParams } from "react-router-dom";
import { fetchData } from "../helpers/servers";
import { useState, useEffect } from "react";
import "./productDetail.css";


function ProductDetail(){
    const {id} = useParams();
    const [ProductDetail, setProductDetail] = useState({});
     const [isLoading, setIsLoading] = useState(false);
     const [hasError, setHasError] = useState(false);
    const productUrl = `https://fakestoreapi.com/products/${id}`;

    useEffect(() => {
        fetchData(productUrl, setProductDetail, setIsLoading, setHasError);
    }, [productUrl]);

    return (
      <div className="product-detail">
        {hasError && <p>Something went wrong.</p>}
        {isLoading ? (
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
