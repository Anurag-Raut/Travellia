import React from "react";

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
function Header(){

    return <Navbar fixed="top" bg="light">
    <Container>
      <Navbar.Brand href="/">Brand link</Navbar.Brand>
    </Container>
    </Navbar>
    
    

}

export default Header;

