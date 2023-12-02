// src/pages/ProfilePage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image } from 'react-bootstrap';

const ProfilePage = ({ profiles }) => {
  const { id } = useParams();
  const profile = profiles.find((user) => user.id === id);

  if (!profile) {
    return <div>Perfil não encontrado.</div>;
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
