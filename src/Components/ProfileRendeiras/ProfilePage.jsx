import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const ProfilePage = ({ selectedProfileId }) => {
  const [profiles, setProfiles] = useState([]);
  const profile = profiles.find((user) => user.id === selectedProfileId);

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
  }, [selectedProfileId]);

  if (!profile) {
    return <div>Loading.</div>;
  }

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col md={6}>
          <Image src={profile.foto} alt={profile.nome} rounded fluid />
          <h2 className="mt-3">{profile.nome}</h2>
          <p>Email: {profile.email}</p>
          <p>Telefone: {profile.telefone}</p>
          <p>Bio: {profile.bio}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfilePage;
