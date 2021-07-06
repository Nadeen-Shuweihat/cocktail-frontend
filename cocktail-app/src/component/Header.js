import React, { Component } from "react";
import {Navbar,Container,Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>Cocktail App</Navbar.Brand>
            <Nav className="me-auto">
              <Link to='/'>Home</Link>
              <Link to='/fav'>Favorite</Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Header;


