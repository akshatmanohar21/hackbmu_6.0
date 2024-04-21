import React, { useState } from 'react';
import Title from './Components/Title/Title';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Programs from './Components/Aim/Aim';
import About from './Components/About/About';
import Kuthir from './Components/Kudhir/Kudhir';
import Campus from './Components/Hands/Hands'
import KishanLab from './Components/Kishan_Lab/Kishan-Lab';


const App = () => {

  return (
    <div>
     <Navbar/>
     <Hero/>
     <div className="container">
        <h3 style={{ color: 'green', textAlign: 'center', fontSize: '24px' }}>Our Aim</h3>
        <h2 style={{ textAlign: 'center' }}>What We Are Trying To Achieve</h2>
        <p className="aim-paragraph" style={{ textAlign: 'center' }}>
          Our aim at Krishak Unnati is to revolutionize farming technology by increasing efficiency and productivity. Through innovative solutions and cutting-edge technology, we strive to empower farmers and agricultural professionals to achieve sustainable practices and maximize their yields. By leveraging the latest advancements in farming technology, we aim to create a more sustainable and prosperous future for the agricultural sector.
        </p>
        <Programs/>
        <About/>
        <Kuthir/>
        <Title title='Hands-Meet Club'/>
        <h2 style={{ textAlign: 'center' }}>Connecting Farmers with Experts for Personalized Agricultural Guidance and Support.</h2>
        <br></br>
        <p className="hands-paragraph" style={{textAlign:'center'}}>The Hands-Meet Club connects farmers with agricultural experts, fostering personalized guidance and support. Through this program, farmers gain access to valuable advice, innovative techniques, and mentorship, helping them enhance yields, implement sustainable practices, and overcome challenges. It's a platform that strengthens farming communities and promotes agricultural sustainability.</p>
        <Campus/>
        <KishanLab/>
        
     </div>
     
    </div>
  )
}

export default App;
