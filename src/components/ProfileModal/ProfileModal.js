import React, { useState } from 'react';
import Select from 'react-select'
import xMark from '../../assets/xmark.svg';
import './ProfileModal.css';

const genreOptions = [
  { value: 'actionAdventure', label: 'Action-adventure' },
  { value: 'platformer', label: 'Platformer' },
  { value: 'puzzlers', label: 'Puzzlers' },
  { value: 'realTimeStrategy', label: 'Real-time strategy' },
  { value: 'rolePlaying', label: 'Role-playing (RPG, ARPG)' },
  { value: 'sports', label: 'Sports' },
  { value: 'survivalAndHorror', label: 'Survival and Horror' },
];

const ratingOptions = [
  { value: 'everyone', label: 'Everyone (E)' },
  { value: 'everyone10', label: 'Everyone 10+ (E10+)' },
  { value: 'teen', label: 'Teen (T)' },
  { value: 'mature', label: 'Mature 17+ (M)' },
];

const releaseYearOptions = [
  { value: '2022', label: '2022' },
  { value: '2021', label: '2021' },
  { value: '2020', label: '2020' },
  { value: '2019', label: '2019' },
  { value: '2018', label: '2018' },
  { value: '2017', label: '2017' },
  { value: '2016', label: '2016' },
];

const scoreOptions = [
  { value: '95-100', label: '95-100' },
  { value: '90-94', label: '90-94' },
  { value: '85-89', label: '85-89' },
  { value: '80-84', label: '80-84' },
  { value: '75-79', label: '75-79' },
  { value: '70-74', label: '70-74' },
];

const platformOptions = [
  { value: 'xboxOne', label: 'Xbox One' },
  { value: 'xbox360', label: 'Xbox 360' },
  { value: 'playstation4', label: 'Playstation 4' },
  { value: 'playstation3', label: 'Playstation 3' },
  { value: 'nintendoSwitch', label: 'Nintendo Switch' },
  { value: 'pc', label: 'PC' },
];

function ProfileForm({ savedPreferences, toggleModal, handleSavePreferences }) {
  const [state, setState] = useState(
    savedPreferences ||
    {
      genres: [],
      ratings: [],
      releaseYears: [],
      scores: [],
      platforms: []
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSavePreferences(state);
  }

  const handleChange = (selected, action) => {
    const name = action.name;

    setState({
      ...state,
      [name]: selected
    });
  }

  return (
    <div className="modal-overlay">
      <form className="profile-form" onSubmit={handleSubmit}>
        <img 
          className="exit-icon" 
          onClick={() => toggleModal(false)}
          src={xMark} 
          alt="exit modal"/>
        <div className="caption">Select game preferences so we only get you games that you love!</div>
        <label>
          Genres
          <Select
            options={genreOptions}
            name="genres"
            isMulti={true}
            value={state.genres}
            onChange={handleChange}
            className="select" />
        </label>
        <label>
          ESRB ratings
          <Select
            options={ratingOptions}
            name="ratings"
            isMulti={true}
            value={state.ratings}
            onChange={handleChange}
            className="select" />
        </label>
        <label>
          Release year
          <Select
            options={releaseYearOptions}
            name="releaseYears"
            isMulti={true}
            value={state.releaseYears}
            onChange={handleChange}
            className="select" />
        </label>
        <label>
          Metacritic score
          <Select
            options={scoreOptions}
            name="scores"
            isMulti={true}
            value={state.scores}
            onChange={handleChange}
            className="select" />
        </label>
        <label>
          Platform
          <Select
            options={platformOptions}
            name="platforms"
            isMulti={true}
            value={state.platforms}
            onChange={handleChange}
            className="select" />
        </label>
        <button className="btn submit">Submit Preferences</button>
      </form>
    </div>
  );
}

export default ProfileForm;