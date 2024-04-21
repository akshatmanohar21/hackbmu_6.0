import React from 'react';
import './Hero.css';
import dark_arrow from '../../assets/dark-arrow.png';

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Empowering Farming Technology for a Sustainable Future</h1>
        <p>Our innovative solutions are tailored to revolutionize the agricultural sector, ensuring sustainable practices and maximizing productivity</p>
        <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  );
};

export default Hero;
