import React from 'react';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  return (
    <div className="container">
      <h2>Info Page</h2>
      <img src='https://t4.ftcdn.net/jpg/06/13/84/71/360_F_613847152_eIaQ8FxLpxU6jFQ7cmN7mmxVfGSJTgVX.jpg'/>
      <p>
        Contact Info: Name: Kalia Vang
      </p>
      <p>
        Phone Number: (888)888-8888
      </p>
      <p > 
        Email Address: LegacyQR@gmail.com
      </p>
    </div>
  );
}

export default InfoPage;
