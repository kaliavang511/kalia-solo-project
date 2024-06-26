import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function AboutPage() {
  const tributeItems = useSelector((store) => store.TributeReducer);
  const dispatch = useDispatch()
  const[firstName, setFirstName]=useState('')
  const[middleName, setMiddleName]=useState('')
  const[lastName,setLastName]=useState('')
  const[obituary,setObituary]=useState('')
  const[image,setImage]=useState('')
  const[video, setVideo]=useState('')
  const[dateOfBirth, setDateofBirth]=useState('')
  const[dateOfDeath, setDateOfDeath]=useState('')

  useEffect(()=>{
    dispatch({type:'FETCH_TRIBUTE'})
  }, [])
  

  const handleSubmit = (event)=>{
    event.preventDefault()
    
    dispatch({
      type: 'ADD_TRIBUTE',
      payload: {
        firstName,
        middleName,
        lastName,
        obituary,
        image_url: image,
        video_url: video,
        dateOfBirth,
        dateOfDeath
      }
    });

    setFirstName('');
    setMiddleName('');
    setLastName('');
    setObituary('');
    setImage('');
    setVideo('');
    setDateofBirth('');
    setDateOfDeath('');
  };


  return (
    <div className="container">

      <form onSubmit={handleSubmit}>
        <input
        type='text'
        placeholder='First Name'
        value={firstName}
        onChange={(event)=> setFirstName(event.target.value)}
        />

        <input
        type='text'
        placeholder='Middle Name '
        value={middleName}
        onChange={(event)=> setMiddleName(event.target.value)}
        />
      
      <input
        type='text'
        placeholder='Last Name'
        value={lastName}
        onChange={(event)=> setLastName(event.target.value)}
        />
      <input
        type='text'
        placeholder='obituary'
        value={obituary}
        onChange={(event)=> setObituary(event.target.value)}
        />
      <input
        type='text'
        placeholder='image'
        value={image}
        onChange={(event)=> setImage(event.target.value)}
        />
      <input
        type='text'
        placeholder='video'
        value={video}
        onChange={(event)=> setVideo(event.target.value)}
        />
      <input
        type='text'
        placeholder='Date of Birth'
        value={dateOfBirth}
        onChange={(event)=> setDateofBirth(event.target.value)}
        />
         <input
        type='text'
        placeholder='Date of Death'
        value={dateOfDeath}
        onChange={(event)=> setDateOfDeath(event.target.value)}
        />

        <button type='submit'>Submit</button>

      </form>
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
