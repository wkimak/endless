import './Banner.css';
import React from 'react';

function Banner({ hasSavedPreferences, toggleModal }) {
  return (
    <div className="banner-container">
      <div className="banner-text-container">
        <h3 className="banner-title">New Games & Accessories</h3>
        <div className="banner-statement">
          <p>Monthly packages.</p>
          <p>Excitement delivered daily.</p>
        </div>
        <p className="banner-body">
          What's the best way to shop for the video games and peripherals?
          How about never shopping at all?
          You'll get new stuff on your doorstep - every month.
        </p>
        <button className="btn get-started" onClick={() => toggleModal(true)}>
          {!hasSavedPreferences ? 'GET STARTED' : 'EDIT PREFERENCES'}
        </button>
      </div>
    </div>
  )
}

export default Banner;