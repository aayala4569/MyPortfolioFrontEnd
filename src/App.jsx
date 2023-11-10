import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import NavBar from "./Components/NavBar";
import { Container, Row, Col, Image } from "react-bootstrap";
// import IntroImage from './Components/IntroImage'
import AboutMe from "./Components/AboutMe";
import Skills from "./Components/Skills";
import Portfolio from "./Components/Portfolio";
import ContactMe from "./Components/ContactMe";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Container>
      {/* <Route path="/" element={<AboutMe/>}/> */}
      <Row>
        <Col className="d-flex justify-content-end">
          <NavBar />
        </Col>
      </Row>

      <div>
       
        <Row>
          
          <Col xs={12} md={8} className="d-flex justify-content-start ">
             <h2 className="overlay-text rounded-3">Creative Developer</h2>
          </Col>
        </Row>
       
        <Row className="d-flex justify-content-end">
          <div className="image-container MyImage">
             <Image src="src/Images/MyImage.png" rounded/>
          </div>
        </Row>
      </div>

      <Row>
        <Col>
          {/* <IntroImage/> */}
          <AboutMe />
          <Skills />
          <Portfolio />
          <ContactMe />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
