import React from 'react';
import Container from 'react-bootstrap/Container';
import { useHistory } from 'react-router-dom';
import { VscArrowLeft } from 'react-icons/vsc';
import { VscClose } from 'react-icons/vsc';

const Nav = () => {
  const history = useHistory();
  return (
    <Container className="nav-1">
      <div
        className="profile-icon"
        onClick={() => {
          history.goBack();
        }}
      >
        <VscArrowLeft size="30px" color="grey" />
      </div>

      <h3>StoryLine</h3>

      <div
        className="profile-icon"
        onClick={() => {
          history.push('/');
        }}
      >
        <VscClose size="30px" color="grey" />
      </div>
    </Container>
  );
};
export default Nav;
