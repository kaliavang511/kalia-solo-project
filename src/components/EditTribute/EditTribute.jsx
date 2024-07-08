import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

function EditTribute() {
  const { id } = useParams();
  //to extract the id parameter from the URL
  const tributeItems = useSelector((store) => store.tribute);
  const tribute = tributeItems.find((item) => item.id === parseInt(id));
  //find matching IDs. converted id into INT
  const dispatch = useDispatch();
  const history = useHistory();

  const [firstName, setFirstName] = useState(tribute.first_name);
  const [middleName, setMiddleName] = useState(tribute.middle_name);
  const [lastName, setLastName] = useState(tribute.last_name);
  const [obituary, setObituary] = useState(tribute.obituary);
  const [image, setImage] = useState(tribute.image);
  const [video, setVideo] = useState(tribute.video);
  const [dateOfBirth, setDateOfBirth] = useState(tribute.date_of_birth);
  const [dateOfDeath, setDateOfDeath] = useState(tribute.date_of_death);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleEdit = (item) => {
    dispatch({
      type: 'UPDATE_TRIBUTE',
      payload: {
        id: tribute.id, 
        firstName,
        middleName,
        lastName,
        obituary,
        image,
        video,
        dateOfBirth,
        dateOfDeath,
      },
    });
    setSelectedItem(item);
    history.push({
      pathname: '/tributePage',
      state: { item }
    })
  };

  return (
    <div className="container">
      <h2>Edit Tribute for {tribute.first_name} {tribute.last_name}</h2>
      <form>
        <div className="input-group">
          <label className="label">First Name</label>
          <input
            type="text"
            className="input"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label className="label">Middle Name</label>
          <input
            type="text"
            className="input"
            value={middleName}
            onChange={(e) => setMiddleName(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label className="label">Last Name</label>
          <input
            type="text"
            className="input"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label className="label">Obituary</label>
          <textarea
            className="input"
            value={obituary}
            onChange={(e) => setObituary(e.target.value)}
            rows={4}
          />
        </div>
        <div className="input-group">
          <label className="label">Image URL</label>
          <input
            type="text"
            className="input"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label className="label">Video URL</label>
          <input
            type="text"
            className="input"
            value={video}
            onChange={(e) => setVideo(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label className="label">Date of Birth</label>
          <input
            type="date"
            className="input"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label className="label">Date of Death</label>
          <input
            type="date"
            className="input"
            value={dateOfDeath}
            onChange={(e) => setDateOfDeath(e.target.value)}
          />
        </div>
        <button type="button" className="button" onClick={handleEdit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default EditTribute;
