import React from 'react';
import '../styles/ProductCard.css';

const ProductCard = ({ name, price, image, onAddToCart }) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        {/* If no image is provided, it will show a fallback alt text */}
        <img src={image} alt={name} className="product-image" />
      </div>
      
      <div className="product-details">
        <h3 className="product-name">{name}</h3>
        <p className="product-price">${price.toFixed(2)}</p>
        
        <button className="add-to-cart-btn" onClick={onAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;