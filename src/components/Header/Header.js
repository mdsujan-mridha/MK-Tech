import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home"> <img className='logo-img' src="https://i.ibb.co/NYHNWXC/kevin-canlas-QYHeh-J9-Iovs-unsplash.jpg" alt="MK"/> </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features"> Home </Nav.Link>
      <Nav.Link href="#pricing"> Blogs </Nav.Link>
     
    </Nav>
    <Nav>
      <Nav.Link href="#deets"> Login </Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
             Register
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;