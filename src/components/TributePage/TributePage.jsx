import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import './TributePage.css'; 

function TributePage() {
  const tributeItems = useSelector((store) => store.TributeReducer);
  const dispatch = useDispatch();
  const history = useHistory(); 

  const handleDelete = (itemId) => {
    dispatch({ type: 'DELETE_ITEM', payload: itemId });
  };

  const handleEdit = () => {
    history.push('/EditPage'); 
  };

  const handleConfirm = () => {
    history.push('/QrCode'); 
  };

  return (
    <div className="container">
      {tributeItems.map((item) => (
        <div key={item.id} className="item-container">
          <div className="item-details">
            <p><strong>First Name:</strong> {item.first_name}</p>
            <p><strong>Middle Name:</strong> {item.middle_name}</p>
            <p><strong>Last Name:</strong> {item.last_name}</p>
            <p><strong>Obituary:</strong> {item.obituary}</p>
            <div className="item-media">
              {item.image && <img src={item.image} alt={`${item.first_name} ${item.last_name}`} />}
              {item.video && (
                <video controls>
                  <source src={item.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
            <p><strong>Date of Birth:</strong> {item.date_of_birth}</p>
            <p><strong>Date of Death:</strong> {item.date_of_death}</p>
          </div>
          <div className="buttons-container">
            <button className="back" onClick={handleEdit}>Back</button>
            <button className="delete" onClick={() => handleDelete(item.id)}>Delete</button>
            <button className="confirm" onClick={handleConfirm}>Confirm</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TributePage;
