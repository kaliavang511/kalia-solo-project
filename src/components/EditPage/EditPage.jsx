import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

function EditPage(props) {
  const tributeItems = useSelector((store) => store.TributeReducer);
  const dispatch = useDispatch();
  const editTribute = useSelector((store) => store.editTribute);

  const handleDelete = (itemId) => {
    dispatch({ type: 'DELETE_ITEM', payload: itemId });
  };

  const handleChange = (event) => {
    dispatch({
      type: 'EDIT_ONCHANGE',
      payload: { property: 'First_Name', value: event.target.value }
    });
  };

  const handleEditClick = () => {
    dispatch({ type: 'SET_EDIT_TRIBUTE', payload: props.editTribute });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`/api/tribute/${editTribute.id}`, editTribute)
      .then(response => {
        dispatch({ type: 'EDIT_CLEAR' });
      })
      .catch(error => {
        console.log('error on PUT: ', error);
      });
  };

  return (
    <>
      <h2>Edit Tribute Page</h2>

      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          placeholder='First Name'
          value={editTribute.First_Name}
        />
         <button onClick={handleEditClick}>Edit!</button>
      </form>

      <div>
        {tributeItems.map((item) => (
          <div key={item.id}>
            <p>First Name: {item.first_name}</p>
            <p>Middle Name: {item.middle_name}</p>
            <p>Last Name: {item.last_name}</p>
            <p>Obituary: {item.obituary}</p>
            {item.image && <img src={item.image} alt={`${item.first_name} ${item.last_name}`} style={{ width: '100%', maxWidth: '500px' }} />}
            {item.video && (
              <video controls style={{ width: '100%', maxWidth: '500px' }}>
                <source src={item.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            <p>Date of Birth: {item.date_of_birth}</p>
            <p>Date of Death: {item.date_of_death}</p>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </div>
        ))}

      </div>
    </>
  );
}

export default EditPage;
