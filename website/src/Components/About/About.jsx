import React from 'react';
import './About.css';
import about_img from '../../assets/meeting.png';

const About = ({ setPlayState }) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="Farming Community" className='about-img'/>
      </div>
      <div className="about-right">
      <h3 style={{ color: 'green', fontSize: '24px' }}>About Our Farming Community</h3>
        <h2>Growing Together, Sustaining Tomorrow</h2>
        <p>Join our vibrant farming community dedicated to nurturing sustainable agricultural practices. Our platform provides a holistic approach to farming, connecting farmers with resources, markets, and expertise.</p>
        <p>Experience the essence of rural life through our Kisan Mela, where farmers come together for recreational meetings, cultural exchanges, and knowledge sharing.</p>
        <p>Discover the convenience of Kuthir Udyog, our direct farmer-to-consumer marketplace, empowering farmers to sell their produce directly to people, fostering fair trade and supporting local economies.</p>
        <p>Engage with our Hands Meet Club, where agricultural professionals offer guidance and mentorship to farmers, helping them implement innovative techniques, improve yields, and navigate challenges.</p>
      </div>
    </div>
  );
}

export default About;
