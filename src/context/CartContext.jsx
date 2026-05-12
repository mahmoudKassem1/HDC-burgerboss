import React, { createContext, useState, useContext } from 'react';

// 1. Create the Context
const CartContext = createContext();

// 2. Create the Provider Component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // The function to add a product to the cart
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      // Bonus: Check if item already exists to increase quantity instead of duplicating
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      // If it's a new item, add it with a quantity of 1
      return [...prevItems, { ...product, quantity: 1 }];
    });
    
    alert(`${product.name} added to cart!`);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// 3. Create a custom hook so any component can easily access the cart
export const useCart = () => {
  return useContext(CartContext);
};