import React, {useState, useEffect} from 'react';
import {Row, Col} from 'react-bootstrap';
import {Image} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Portfolio = () => {
  const numCards = 6; // Adjust the number of cards as needed
  const circleRadius = 150; // Adjust the radius of the circle as needed
  const angleIncrement = (2 * Math.PI) / numCards;

  const [rotationAngle, setRotationAngle] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null);

  const getCardPosition = (index) => {
    const zIndex = index === selectedCard ? 1 : 0;
        const isSelected = index === selectedCard;
        const angle = index * angleIncrement + (isSelected ? -rotationAngle : rotationAngle);
 const x = circleRadius * Math.cos(angle);
    const y = circleRadius * Math.sin(angle);
  
    return { transform: `translate(${x}px, ${y}px)`, zIndex: zIndex };

  };
   
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (selectedCard === null) {
      setRotationAngle((prevAngle) => prevAngle + 0.05); // Adjust the rotation speed as needed
  }}, 50); // Adjust the interval as needed

    return () => clearInterval(intervalId);
  }, [selectedCard]); // Run this effect only once on component mount



  return (
    <div className='projects'>
        <Row>
            <Col className='portfolio'>
            <h3 className="font">Projects</h3>
            </Col>
        </Row>
        <Row className="circle-container">
        {Array.from({ length: numCards }).map((_, index) => (
<Col key={index} style={{...getCardPosition(index), position: 'relative'}}>
             <Card style={{ width: '18rem', cursor: 'pointer' }}
              onClick={() => setSelectedCard(index)}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
         </Col>
     
        ))}
          
         
        </Row>

    </div>
  );}


export default Portfolio
