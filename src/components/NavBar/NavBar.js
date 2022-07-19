import './NavBar.css';
import React from 'react';
import logo from '../../assets/logo-endless.svg';

function NavBar() {
  return (
    <div className="nav-bar-container">
      <img className="logo" src={logo} alt="endless logo" />
    </div>
  );
}

export default NavBar;