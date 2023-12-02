// src/components/Profile.js
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Profile = ({ user }) => {
  return (
    <Link to={`/profile/${user.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <Card style={{ width: '10rem', cursor: 'pointer' }}>
        <Card.Img variant="top" src={user.foto} alt={user.nome} />
        <Card.Body>
          <Card.Title>{user.nome}</Card.Title>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default Profile;
