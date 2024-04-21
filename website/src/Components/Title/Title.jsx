import React from 'react';
import './Title.css';

const Title = ({ subTitle, title }) => {
  return (
    <div className='title'>
      <p>{subTitle}</p>
      <h2 style={{ color: '#36763d' }}>{title}</h2> {/* Changed from color='#36763d' to style={{ color: '#36763d' }} */}
    </div>
  );
}

export default Title;
