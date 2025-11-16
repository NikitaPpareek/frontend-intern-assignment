// src/components/Modal.jsx
import React from "react";
import "./Modal.css";

export default function Modal({ product, onClose }) {
  if (!product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-body"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={product.image}
          alt={product.title}
          className="modal-img"
        />

        <h2 className="modal-title">{product.title}</h2>

        <p className="modal-category">
          Category: <span>{product.category}</span>
        </p>

        <p className="modal-desc">{product.description}</p>

        <p className="modal-price">₹ {product.price}</p>

        <button className="modal-close" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}
