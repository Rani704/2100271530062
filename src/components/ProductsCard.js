import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} />
        <h2>{product.name}</h2>
        <p>{product.company}</p>
        <p>${product.price}</p>
        <p>Rating: {product.rating}</p>
      </Link>
    </div>
  );
}

export default ProductCard;
