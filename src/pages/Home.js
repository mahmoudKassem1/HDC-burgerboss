import React from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import heroBurgerImg from '../assets/images/hero-burger.jpg';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page-fade-in">
      <Hero 
        title="BurgerBoss"
        subtitle="Precision Engineering Meets Culinary Perfection. Experience the best taste Alexandria has to offer."
        imgSource={heroBurgerImg}
        buttonText="View Our Menu"
        onBtnClick={() => navigate('/menu')}
      />
    </div>
  );
}

export default Home;