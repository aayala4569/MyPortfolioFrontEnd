import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import {Image} from 'react-bootstrap';


const Skills = () => {
  return (
    <div className="skills">
        <Row>
            <Col className="d-flex justify-content-center space">
            <h3 className="font">Skills</h3>
            </Col>
            </Row>


            <Row>
            <Col className="d-flex justify-content-center">
              <div className="floating-icons-container">
            <Image src="src/Images/CSS.png" rounded/>
            <Image src="src/Images/Java.png" rounded/>
            <Image src="src/Images/HTML.png" rounded/>
           
             </div>
            </Col>
            <Col className="d-flex justify-content-center">
            <div className="floating-icons-container">
              <Image src="src/Images/React.png" rounded/>
             <Image src="src/Images/BootStrap.png" rounded/>
             <Image src="src/Images/Unity.png" rounded/>
            </div>
             
            </Col>
            </Row>  
    </div>
  )
}

export default Skills
