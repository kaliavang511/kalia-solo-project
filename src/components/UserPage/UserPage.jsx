import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    // <div className="container">
    //   <h2>Welcome, {user.username}!</h2>
    //   <p>Your ID is: {user.id}</p>
    //   <LogOutButton className="btn" />
    // </div>

    <div>
      <p>
      My Tribute
      </p>
      <p>
        Click here to add tribute page
      <Link to="/addtribute"> Add a Tribute</Link>
      </p>

    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
