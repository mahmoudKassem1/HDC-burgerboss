import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #FDF8E4;
  padding: 1rem 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
`;

const NavLinks = styled.div`
  a {
    margin-left: 25px;
    text-decoration: none;
    color: #111;
    font-weight: 700;
    transition: color 0.3s;
  }
  a:hover { color: #E65100; }
`;

function Navbar() {
  return (
    <Nav>
      <h2 style={{ color: '#E65100', fontWeight: '900', margin: 0 }}>BurgerBoss</h2>
      <NavLinks>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/contact">Contact Us</Link>
      </NavLinks>
    </Nav>
  );
}

export default Navbar;