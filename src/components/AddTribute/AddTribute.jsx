import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './AddTribute.css';

function AddTribute() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [obituary, setObituary] = useState('');
  const [image, setImage] = useState('');
  const [video, setVideo] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [dateOfDeath, setDateOfDeath] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

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
    setDateOfBirth('');
    setDateOfDeath('');

    history.push('/editpage');
  };

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

        <button type='submit' className='button'>Submit</button>
      </form>
    </div>
  );
}

export default AddTribute;

