// src/components/Products.jsx
import React from "react";
import "./products.css";

export default function Products({ products, loading, onProductClick }) {
  if (loading) return <h2 className="loading">Loading...</h2>;
  if (!products.length)
    return <h2 className="no-products">No matching products found</h2>;

  return (
    <div className="products-grid">
      {products.map((product) => (
        <div
          className="product-card"
          key={product.id}
          onClick={() => onProductClick(product)}
        >
          <img src={product.image} alt={product.title} />
          <h3>{product.title.slice(0, 25)}...</h3>
          <p className="price">₹ {product.price}</p>
          <p className="category">{product.category}</p>
        </div>
      ))}
    </div>
  );
}
