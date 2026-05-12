import React from 'react';
import ProductCard from '../components/ProductCard'; 
import { useCart } from '../context/CartContext';

const MenuPage = () => {
  const { addToCart } = useCart();

  // Removed the two items with broken image links
  const burgers = [
    {
      id: 1,
      name: "The Boss Burger",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" 
    },
    {
      id: 2,
      name: "Cheese Champion",
      price: 10.49,
      image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 3,
      name: "BBQ Bacon Beast",
      price: 14.50,
      image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 5,
      name: "Mushroom Swiss Master",
      price: 13.25,
      image: "https://images.unsplash.com/photo-1586816001966-79b736744398?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 6,
      name: "The Veggie Vault",
      price: 9.99,
      image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 7,
      name: "Double Trouble",
      price: 16.99,
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" // Note: This one is a salad! You can swap the URL later if you want.
    }
  ];

  return (
    <div style={{ padding: '40px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '2.5rem', color: '#333' }}>Our Menu</h2>
      
      {/* Updated CSS logic here: added maxWidth, centered the container with margin, and increased the gap */}
      <div style={{ 
        display: 'flex', 
        gap: '30px', 
        justifyContent: 'center', 
        flexWrap: 'wrap',
        maxWidth: '1000px', // This stops the row from getting too wide
        margin: '0 auto'    // This centers the 1000px container on the page
      }}>
        {burgers.map((burger) => (
          <ProductCard 
            key={burger.id}
            name={burger.name}
            price={burger.price}
            image={burger.image}
            onAddToCart={() => addToCart(burger)}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuPage;