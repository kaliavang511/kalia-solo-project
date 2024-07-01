import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './EditPage.css';
import { useHistory } from "react-router-dom";

function EditPage() {
  const tributeItems = useSelector((store) => store.TributeReducer);
  const dispatch = useDispatch();
  const history = useHistory(); 

  useEffect(() => {
    dispatch({ type: 'FETCH_TRIBUTE' });
  }, [dispatch]);

  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [obituary, setObituary] = useState('');
  const [image, setImage] = useState('');
  const [video, setVideo] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [dateOfDeath, setDateOfDeath] = useState('');

  const handleEdit = (itemId) => {
    dispatch({
      type: 'UPDATE_TRIBUTE',
      payload: {
        id: itemId,
        firstName,
        middleName,
        lastName,
        obituary,
        image,
        video,
        dateOfBirth,
        dateOfDeath,
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
  };

  const handleSubmit = () => {
    history.push('/tributePage'); 
  };

  return (
    <div className="container">
      {tributeItems.map((item) => (
        <div key={item.id} className="item-container">
          <div className="item-details">
            <p><strong>First Name:</strong> {item.first_name}</p>
            <p><strong>Middle Name:</strong> {item.middle_name}</p>
            <p><strong>Last Name:</strong> {item.last_name}</p>
            <p><strong>Date of Birth:</strong> {item.date_of_birth}</p>
            <p><strong>Date of Death:</strong> {item.date_of_death}</p>
            <p><strong>Obituary:</strong> {item.obituary}</p>
            <div className="item-media">
              {item.image && <img src={item.image} alt={`${item.first_name} ${item.last_name}`} className="editImage" />}
              {item.video && (
                <div className="video-container">
                  <iframe
                    title="Vimeo Video"
                    src={`https://player.vimeo.com/video/${item.video.split("/").pop()}`}
                    width="560"
                    height="315"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </div>
          
          </div>
          <div className="edit-form">
            <input
              type='text'
              placeholder='Edit First Name'
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
            <input
              type='text'
              placeholder='Edit Middle Name'
              value={middleName}
              onChange={(event) => setMiddleName(event.target.value)}
            />
            <input
              type='text'
              placeholder='Edit Last Name'
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
            />
            <input
              type='text'
              placeholder='Edit Obituary'
              value={obituary}
              onChange={(event) => setObituary(event.target.value)}
            />
            <input
              type='text'
              placeholder='Edit Image URL'
              value={image}
              onChange={(event) => setImage(event.target.value)}
            />
            <input
              type='text'
              placeholder='Edit Video ID (Vimeo)'
              value={video}
              onChange={(event) => setVideo(event.target.value)}
            />
            <input
              type='text'
              placeholder='Edit Date of Birth'
              value={dateOfBirth}
              onChange={(event) => setDateOfBirth(event.target.value)}
            />
            <input
              type='text'
              placeholder='Edit Date of Death'
              value={dateOfDeath}
              onChange={(event) => setDateOfDeath(event.target.value)}
            />
            <button onClick={() => handleEdit(item.id)}>Edit</button>
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EditPage;
