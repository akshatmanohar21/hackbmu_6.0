import React from 'react';
import './Kishan-Lab.css'; 
import labImage from '../../assets/lab_image.png'; 

const KishanLab = () => {
    return (
        <div className="kishan-lab">
            <div className="lab-info">
                <h2>Kisan Lab</h2>
                <p>List of labs near farmer locations supporting testing for seeds, soil quality, water, chemicals, and fertilizers.</p>
                <p>Online appointment booking, report generation, and certificate issuance available. Periodic reminders for testing frequency are sent to farmers.</p>
            </div>
            <div className="lab-image">
                <img src={labImage} alt="Lab" />
            </div>
        </div>
    );
}

export default KishanLab;
