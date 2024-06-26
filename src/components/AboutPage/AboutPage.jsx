import React from 'react';
import { useSelector } from 'react-redux';

function AboutPage() {
  const tributeItems = useSelector((store) => store.TributeReducer);

  return (
    <div className="container">
      <p>
        Inspired by the loss of a beloved father, this application offers a modern way
        to memorialize loved ones using QR codes on headstones. These codes link to personalized
        tribute pages, filled with cherished memories, photos, and stories. Our goal is to help families
        honor and celebrate their loved ones' lives in a heartfelt and meaningful way, keeping their memories
        alive for future generations.
      </p>

      <div>
        {tributeItems.map((item) => (
          <div key={item.id}>
            <p>{item.first_name} {item.middle_name} {item.last_name}</p>
            <p>{item.obituary}</p>
            {item.image && <img src={item.image} alt={`${item.first_name} ${item.last_name}`} style={{ width: '100%', maxWidth: '500px' }} />}
            {item.video && 
              <video controls style={{ width: '100%', maxWidth: '500px' }}>
                <source src={item.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            }
            <p>{item.date_of_birth}</p>
            <p>{item.date_of_death}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutPage;
