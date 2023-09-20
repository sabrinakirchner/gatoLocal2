import React from 'react';
import { Link } from 'react-router-dom';
import * as userService from '../utilities/users-service';

import logo from '../images/gatoLocal.jpg';
import './NavBar.css';

function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-pink">
      <Link to="/Home" className="navbar-brand">
        <img src={logo} alt='logo' className='logo' />
      </Link>

      <div className="button1">
        <Link to="/orders/new" className="nav-item">
          Home
        </Link>
        </div>
        <div className='button2'>
        <Link to="/orders/liked" className="nav-item">
          Cat
        </Link>
      </div>

      <div className="navbar-logout">
        <div className="d-flex">
          <span>{user ? user.name : ''}</span>
          <Link to="" onClick={handleLogOut}>
            Log Out
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;