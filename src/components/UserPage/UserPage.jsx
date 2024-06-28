import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const tributeItems = useSelector((store) => store.TributeReducer);

  return (
    <div>
      <h1>My Tribute</h1>

      <div className="container">
        {tributeItems.map((item) => (
          <div key={item.id} className="item-container">
            <div className="item-details">
              <p><strong>First Name:</strong> {item.first_name}</p>
              <p><strong>Middle Name:</strong> {item.middle_name}</p>
              <p><strong>Last Name:</strong> {item.last_name}</p>
              <div>
                {item.image && <img src={item.image} alt={`${item.first_name} ${item.last_name}`} />}
              </div>
            </div>
          </div>
        ))}
      </div>

      <p>
        Click here to add tribute page
        <Link to="/addtribute"> Add a Tribute</Link>
      </p>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
