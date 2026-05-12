import React from 'react';
import '../styles/ProductCard.css';

const ProductCard = ({ name, price, image, onAddToCart }) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={image} alt={name} className="product-image" />
      </div>
      
      <div className="product-details">
        <h3 className="product-name">{name}</h3>
        {/* Changed to EGP to match your Alexandria theme */}
        <p className="product-price">{price.toFixed(2)} EGP</p>
        
        <button 
          className="add-to-cart-btn" 
          onClick={(e) => {
            e.preventDefault();
            onAddToCart();
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;