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
       Name: Kalia Vang
      </p>
      <p>
     LinkedIn: <a href="https://www.linkedin.com/in/kalia-vang-037b23162/">https://www.linkedin.com/in/kalia-vang-037b23162/</a>
    </p>

      <p > 
        Email Address: <a href= 'kaliavang511@gmail.com'> kaliavang511@gmail.com</a>
      </p>
    </div>
  );
}

export default InfoPage;
