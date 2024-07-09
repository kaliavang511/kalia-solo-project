import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './UserPage.css';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const tributeItems = useSelector((store) => store.tribute);
  const history =useHistory()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: 'FETCH_TRIBUTE' });
  }, [dispatch]);
  
  const tributePage = () => {
    history.push('/tributePage'); 
  };
  return (
    <div>
      <h1 className='userH1'>My Tribute Pages</h1>

      <div className="container">
        {tributeItems.map((item) => (
          <div key={item.id} className="item-container">
            <div className="item-details">
              <p className='userText'>{item.first_name} {item.middle_name} {item.last_name}</p>
              <div>
                {item.image && <img src={item.image} alt={`${item.first_name} ${item.last_name}`} className='homeImage'/>}
              </div>
              <div>
          <button className='tributePageBtn' onClick={tributePage}> Got to Tribute page </button>
      
        </div>
            </div>
          </div>
        ))}
       
      </div>

      <p className='userText'> 
        Click here to add 
        <Link to="/addtribute"> New Tribute Page</Link>
      </p>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
