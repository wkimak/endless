import './App.css';
import './typography.css';
import { useState } from 'react';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import HowItWorks from './components/HowItWorks';
import ProfileModal from './components/ProfileModal';

function App() {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [savedPreferences, setSavedPreferences] = useState(null);

  const toggleModal = (isOpen) => {
    setIsProfileModalOpen(isOpen);
  };

  const handleSavePreferences = (values) => {
    toggleModal(false);

    const hasSavedPreferences = Object.values(values).some(field => field.length);
    setSavedPreferences(hasSavedPreferences ? values : null);
  };

  return (
    <div className="app-container">
      <NavBar />
      <Banner
        hasSavedPreferences={savedPreferences !== null}
        toggleModal={toggleModal} />
      <HowItWorks />
      {
        isProfileModalOpen &&
        <ProfileModal
          savedPreferences={savedPreferences}
          toggleModal={toggleModal} 
          handleSavePreferences={handleSavePreferences} />
      }
    </div>
  );
}

export default App;
