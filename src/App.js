import { useState } from 'react';
import './App.css';
import Header from './components/Header';
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
      <Header
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
