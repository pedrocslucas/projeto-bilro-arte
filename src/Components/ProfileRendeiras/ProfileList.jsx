import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Profile from './Profile';

const ProfileList = ({ onSelectProfile }) => {
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
    <Container>
      <Row>
        {profiles.map((user) => (
          <Col key={user.id} xs={12} md={3}>
            <Profile user={user} onSelectProfile={onSelectProfile} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProfileList;
