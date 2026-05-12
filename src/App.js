import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import MenuPage from './pages/MenuPage'; 
import Cart from './pages/Cart';
import { CartProvider } from './context/CartContext';

const ContactPlaceholder = () => <div className="text-center mt-5"><h2>Contact Page (Teammate Work)</h2></div>;

function App() {
  return (
    // Wrap the entire Router inside the CartProvider
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/contact" element={<ContactPlaceholder />} />
          <Route path="/cart" element={<Cart />} />

        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;