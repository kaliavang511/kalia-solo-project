import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      <Link to="/home">
         <img className='image' src='https://scontent.ffcm1-2.fna.fbcdn.net/v/t1.15752-9/448860440_491515196672501_409587879698736790_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=9f807c&_nc_ohc=LuOA3Uqz4NoQ7kNvgH7NbQo&_nc_ht=scontent.ffcm1-2.fna&oh=03_Q7cD1QE0lZ0RgxTPPoc7W85OqgiyY3XlEmBzZdSX-wnLnYKdxA&oe=66A57EC7'/>
      </Link>

      <div>
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        )}
        

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            <Link className="navLink" to="/user">
              Home
            </Link>

            <Link className="navLink" to="/info">
              Info Page
            </Link>

            <LogOutButton className="navLink" />
          </>
        )}

        <Link className="navLink" to="/about">
          About
        </Link>
      </div>
    </div>
  );
}

export default Nav;
