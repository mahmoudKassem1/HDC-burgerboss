import React from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import heroBurgerImg from '../assets/images/hero-burger.jpg';

function Home() {
  const navigate = useNavigate();

  return (
    <Hero 
      title="BurgerBoss"
      subtitle="The Best Taste in Town, Engineered to Perfection."
      imgSource={heroBurgerImg}
      buttonText="Explore Menu"
      onBtnClick={() => navigate('/menu')}
    />
  );
}

export default Home;