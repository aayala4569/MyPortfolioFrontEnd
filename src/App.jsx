import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './Components/NavBar'
import { Container, Row, Col } from 'react-bootstrap'
import IntroImage from './Components/IntroImage'
import AboutMe from './Components/AboutMe'
import Skills from './Components/Skills'
import Portfolio from './Components/Portfolio'
import ContactMe from './Components/ContactMe'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Container >
      
    
      <Row>
        <Col className="d-flex justify-content-end">
        <NavBar/>
        </Col>
        </Row>
       
        <Row>
        <Col>
        <IntroImage/>
        <AboutMe/>
        <Skills/>
        <Portfolio/>
        <ContactMe/>
        </Col>
      </Row>

      
    </Container>
  )
}

export default App

