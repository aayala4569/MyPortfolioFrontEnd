import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import {Image, Row, Col} from 'react-bootstrap';





const NavBar = () => {
  return (
    <>
<Container>
     <Row >
      <h3 className="d-flex justify-content-start MyName" >Angelica Ayala</h3>

    </Row>
    </Container>
   
   
<Row>



    <Navbar expand="xxl" className="bg-body-tertiary m-5 NavMargin" >


    <Container>
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link href="#NavBar">Home</Nav.Link>
          <Nav.Link href="#AboutMe">About Me</Nav.Link>
          <Nav.Link href="#Skills">Skills</Nav.Link>
          <Nav.Link href="#Portfolio">Portfolio</Nav.Link>
          <Nav.Link href="#ContactMe">Contact Me</Nav.Link>
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar> 
    </Row>
    </>
  );
};

export default NavBar;

