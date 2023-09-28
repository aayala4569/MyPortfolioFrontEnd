import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './Components/NavBar'
import { Container, Row, Col } from 'react-bootstrap'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container>
      <Row>
        <Col>
        <h1>Angelica Ayala</h1>
        <NavBar/>
        </Col>
      </Row>
    </Container>
  )
}

export default App

