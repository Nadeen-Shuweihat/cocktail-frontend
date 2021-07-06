import React, { Component } from "react";
import {Navbar} from 'react-bootstrap';

class Footer extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
            <p>copyright </p>
        </Navbar>
      </div>
    );
  }
}

export default Footer;
