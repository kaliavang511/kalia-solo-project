import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './AddTribute.css';

function AddTribute() {
  const dispatch = useDispatch();
  const history = useHistory();
//declaring it in order to use it

  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [obituary, setObituary] = useState('');
  const [image, setImage] = useState('');
  const [video, setVideo] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [dateOfDeath, setDateOfDeath] = useState('');
  //setting up state. state is currently a empty string.

  
  const handleSubmit = (event) => {
    event.preventDefault();
    //prevent default so page loads correctly 

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
//sending an action type 'add_tribute' & payload to store
    setFirstName('');
    setMiddleName('');
    setLastName('');
    setObituary('');
    setImage('');
    setVideo('');
    setDateOfBirth('');
    setDateOfDeath('');
//making sure it goes back to an empty string after being sent
    history.push('/editpage');
    // Navigate to the '/editpage' route
  };

  const handleAutoFill = () => {
    setFirstName('Ema');
    setMiddleName('');
    setLastName('Her');
    setObituary('Emma, our cherished companion, brought joy and unconditional love into our lives for 13 wonderful years. With her gentle spirit and playful energy, she filled our home with laughter and warmth. Emma was more than just a pet; she was a loyal friend and a source of endless comfort. Her affectionate nature and wagging tail greeted us every day, reminding us of the simple pleasures in life. Though her time with us has ended, the memories of her boundless love and the happiness she brought will remain in our hearts forever. Rest in peace, sweet Emma. You will be deeply missed and forever loved.');
    setImage('https://scontent.ffcm1-1.fna.fbcdn.net/v/t39.30808-6/449356488_8007703559291052_749910300539338298_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=h45j6aUv3MoQ7kNvgEHVLpa&_nc_ht=scontent.ffcm1-1.fna&oh=00_AYCbGK2t6mY1-ugUILyRg-qPE4rAQ_Pn5MQV_MAZM8Xxvw&oe=6691BBCB');
    setVideo('https://vimeo.com/980644668?share=copy');
    setDateOfBirth('Nov. 20, 2011');
    setDateOfDeath('July 03, 2024');
  };
  //making an arrow function to autofill the values on the inputs

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label className="label">First Name</label>
          <input
            type='text'
            className='input'
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label className="label">Middle Name</label>
          <input
            type='text'
            className='input'
            value={middleName}
            onChange={(event) => setMiddleName(event.target.value)}
          />
        </div>
      
        <div className="input-group">
          <label className="label">Last Name</label>
          <input
            type='text'
            className='input'
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label className="label">Obituary</label>
          <textarea
            className='input'
            value={obituary}
            onChange={(event) => setObituary(event.target.value)}
            rows={4}
          />
        </div>

        <div className="input-group">
          <label className="label">Image URL</label>
          <input
            type='text'
            className='input'
            value={image}
            onChange={(event) => setImage(event.target.value)}
          />
        </div>

        <div className="input-group">
          <label className="label">Video URL</label>
          <input
            type='text'
            className='input'
            value={video}
            onChange={(event) => setVideo(event.target.value)}
          />
        </div>

        <div className="input-group">
          <label className="label">Date of Birth</label>
          <input
            type='date'
            className='input'
            value={dateOfBirth}
            onChange={(event) => setDateOfBirth(event.target.value)}
          />
        </div>

        <div className="input-group">
          <label className="label">Date of Death</label>
          <input
            type='date'
            className='input'
            value={dateOfDeath}
            onChange={(event) => setDateOfDeath(event.target.value)}
          />
        </div>

        <button className='button'>Submit</button>
        <button className='autoFill' onClick={handleAutoFill}>Auto Fill</button>
      </form>
    </div>
  );
}

export default AddTribute;
