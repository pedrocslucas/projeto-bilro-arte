import React from 'react';
import { Card } from 'react-bootstrap';

const Profile = ({ user, onSelectProfile }) => {
  return (
    <div
      style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
      onClick={() => onSelectProfile(user.id)}
    >
      <Card style={{ width: '10rem' }}>
        <Card.Img variant="top" src={user.foto} alt={user.nome} />
        <Card.Body>
          <Card.Title>{user.nome}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Profile;
