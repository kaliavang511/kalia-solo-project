import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState('');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <div className="container">
      <h2>{heading}</h2>

      <div className="grid">
        <div className="grid-col grid-col_8">
      <h1 className='homeTitle'>
       Legacy 
        
      </h1>
      <p>
      This app offers a new way to honor loved ones by using QR codes on 
      gravestones. Scanning these codes takes users to personalized tribute pages with special memories, photos, and stories.
      </p>
       <p>
        <img src='https://www.romemonuments.com/sites/default/files/qr-codes.jpg'/>
       </p>
        </div>
        <div className="grid-col grid-col_4">
          <RegisterForm />

          <center>
            <h4>Already a Member?</h4>
            <button className="btn btn_sizeSm" onClick={onLogin}>
              Login
            </button>
          </center>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
