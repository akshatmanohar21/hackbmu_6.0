import React from 'react';
import './Kudhir.css'; // Corrected the CSS import path
import about_img from '../../assets/kuthir.png';

const About = ({ setPlayState }) => {
  return (
    <div className='kudhir'> 
      <div className="kudhir-left"> 
        <h3 style={{ color: 'green', fontSize: '24px' }}>Kuthir Udyog: Our Own B2C Market</h3>
        <h2>Growing Together, Sustaining Tomorrow</h2>
        <p>Kuthir Udyog, or direct farmer-to-consumer selling, enables farmers to bypass middlemen and sell their produce directly to consumers. This approach ensures fair prices for farmers and provides consumers with fresh, locally sourced products. </p>
        <p>It fosters transparency, trust, and sustainability in the agricultural sector while supporting local economies.</p>
        <p>Kuthir Udyog not only benefits farmers and consumers but also strengthens the connection between urban and rural communities. Through direct interaction, consumers gain a deeper appreciation for the effort and dedication involved in food production, while farmers receive direct feedback and support from their customers.</p>
        <p>This direct relationship fosters a sense of community and collaboration, leading to stronger ties between those who grow our food and those who consume it.</p>
      </div>
      <div className="kudhir-right"> 
        <img src={about_img} alt="Farming Community" className='kudhir-img'/> 
      </div>
    </div>
  );
}

export default About;
