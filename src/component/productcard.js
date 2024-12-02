import React from "react";
import "./ProductCard.css"; // For custom styling
import smartphoneImage from "./smartphone.webp"; // Import the local image

const ProductCard = ({ title, description, price }) => {
  return (
    <div className="product-card">
      <img src={smartphoneImage} alt={title} className="product-image" />
      <div className="product-details">
        <h3 className="product-title">{title}</h3>
        <p className="product-description">{description}</p>
        <p className="product-price">${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
