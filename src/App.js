// src/App.js
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProfileList from './components/ProfileList';
import ProfilePage from './components/ProfilePage';

function App() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://65439d5501b5e279de20aa31.mockapi.io/api/rendeiras');
        const data = await response.json();
        setProfiles(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ProfileList profiles={profiles} />} />
          <Route path="/profile/:id" element={<ProfilePage profiles={profiles} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
