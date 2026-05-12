import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext'; // Import the hook

const Nav = styled.nav`
  background-color: #FDF8E4;
  padding: 1rem 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;

  a {
    margin-left: 25px;
    text-decoration: none;
    color: #111;
    font-weight: 700;
    transition: color 0.3s;
  }
  
  a:hover { 
    color: #E65100; 
  }
`;

const CartWrapper = styled(Link)`
  display: flex;
  align-items: center;
  position: relative;
  color: #111;
  margin-left: 30px;
  transition: transform 0.2s ease;
  text-decoration: none;

  &:hover {
    transform: scale(1.1);
    color: #E65100 !important;
  }
`;

const CartBadge = styled.span`
  position: absolute;
  top: -8px;
  right: -10px;
  background-color: #E65100;
  color: white;
  font-size: 0.7rem;
  padding: 2px 6px;
  border-radius: 50%;
  font-weight: 800;
  min-width: 18px;
  text-align: center;
`;

function Navbar() {
  const { cartItems } = useCart();

  // This calculates the total count of all items in the cart
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Nav>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <h2 style={{ color: '#E65100', fontWeight: '900', margin: 0 }}>BurgerBoss</h2>
      </Link>

      <NavLinks>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/contact">Contact Us</Link>
        
        <CartWrapper to="/cart">
          <ShoppingCart size={24} strokeWidth={2.5} />
          {/* Only show the badge if there are items in the cart */}
          {totalItems > 0 && <CartBadge>{totalItems}</CartBadge>}
        </CartWrapper>
      </NavLinks>
    </Nav>
  );
}

export default Navbar;