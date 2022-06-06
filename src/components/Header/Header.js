import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
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
      <Nav.Link  href="home"> Home </Nav.Link>
      <Nav.Link href="blogs"> Blogs </Nav.Link>
     
    </Nav>
    <Nav>
      <Nav.Link href="login"> 
  <Button variant="primary"> Login </Button></Nav.Link>
      <Nav.Link href="register">
      <Button variant="info"> Register </Button>{' '}
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;