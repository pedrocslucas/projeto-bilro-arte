// src/components/ProfileList.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Profile from './Profile';

const ProfileList = ({ profiles }) => {
  return (
    <Container>
      <Row>
        {profiles.map((user) => (
          <Col key={user.id} xs={12} md={3}>
            <Profile user={user} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProfileList;
