import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';




const NavBar = () => {
  return (
    <>
    

    <Container>
      <h3>Angelica Ayala</h3>

    </Container>


    <Navbar expand="xxl" className="bg-body-tertiary">


    <Container fluid className="d-flex justify-content-end ">
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link className="mx-4" href="#home">Home</Nav.Link>
          <Nav.Link className="mx-4" href="#link">About Me</Nav.Link>
          <Nav.Link className="mx-4" href="#link">Skills</Nav.Link>
          <Nav.Link className="mx-4" href="#link">Portfolio</Nav.Link>
          <Nav.Link className="mx-4" href="#link">Contact Me</Nav.Link>
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>  
 </>
   
  );
};

export default NavBar;

