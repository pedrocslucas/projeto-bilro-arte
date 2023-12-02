import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfileList from './Components/ProfileRendeiras/ProfileList';
import ProfilePage from './Components/ProfileRendeiras/ProfilePage';

function App() {
  const [selectedProfileId, setSelectedProfileId] = useState(null);

  const onSelectProfile = (id) => {
    setSelectedProfileId(id);
  };

  return (
    <div className="App">
      {!selectedProfileId ? (
        <ProfileList onSelectProfile={onSelectProfile} />
      ) : (
        <ProfilePage selectedProfileId={selectedProfileId} />
      )}
    </div>
  );
}

export default App;
