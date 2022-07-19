import { useCallback, useState } from 'react';
import './App.css';
import Header from './components/Header';
import HowItWorks from './components/HowItWorks';
import ProfileModal from './components/ProfileModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [savedPreferences, setSavedPreferences] = useState({
    genres: [],
    ratings: [],
    releaseYears: [],
    scores: [],
    platforms: []
  });

  const handleOpenModal = useCallback(() => {
    setIsModalOpen(true);
  });

  const handleSavePreferences = (values) => {
    setIsModalOpen(false);
    setSavedPreferences(values);
  }

  return (
    <div className="app-container">
      <Header
        hasSavedPreferences={
          Object.values(savedPreferences)
            .filter(field => field.length).length > 0
        }
        handleOpenModal={handleOpenModal} />
      <HowItWorks />
      {
        isModalOpen &&
        <ProfileModal
          handleSavePreferences={handleSavePreferences}
          savedPreferences={savedPreferences} />
      }
    </div>
  );
}

export default App;
