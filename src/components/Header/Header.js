import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header-container">
      <div className="header-text-container">
        <h3 className="header-title">New Games & Accessories</h3>
        <div className="header-statement">
          <p>Monthly packages.</p>
          <p>Excitement delivered daily.</p>
        </div>
        <p className="header-body">
          What's the best way to shop for the video games and peripherals? 
          How about never shopping at all? 
          You'll get new stuff on your doorstep - every month.
        </p>
        <button>GET STARTED</button>
      </div>
    </div>
  )
}

export default Header;