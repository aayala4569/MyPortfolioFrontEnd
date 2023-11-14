import React from 'react';
import {Row, Col} from 'react-bootstrap';
import {Image} from 'react-bootstrap';

const Skills = () => {
  return (
    <div className="skills">
        <Row >
            <Col className="d-flex justify-content-center">
            <h3>Skills</h3>
            </Col>
            </Row>
            <Row>
            <Col className="d-flex justify-content-center">
            <p>Framework: Bootstrap and Chakra</p>
            </Col>
            <Col className="d-flex justify-content-center">
            <p>Analytical & Problem Solving</p>
            </Col>
            </Row>
            <Row>
            <Col className="d-flex justify-content-center">
            <p>Communication & Interpersonal</p>
            </Col>
            <Col className="d-flex justify-content-center">
             <p>Planning & Time Management</p>
            </Col>
            
            </Row>
            <Row>
                <Col className="d-flex justify-content-center">
                <p>Source Controls: GIT/GITHUB</p>
                </Col>
            </Row>
            <Row>
                <Col>
                <p>Languages:</p>
                </Col>
                </Row>
            <Row>
            <Col className="d-flex justify-content-center">
            <Image src="src/Images/CSS.png" rounded style={{ width: '100px', height: 'auto' }}/>
            <Image src="src/Images/Java.png" rounded style={{ width: '100px', height: 'auto' }}/>
            <Image src="src/Images/HTML.png" rounded style={{ width: '100px', height: 'auto' }}/>
            <Image src="src/Images/React.png" rounded style={{ width: '100px', height: 'auto' }}/>
            <Image src="src/Images/BootStrap.png" rounded style={{ width: '100px', height: 'auto' }}/>
            </Col>
                
                


            </Row>
   
      
    </div>
  )
}

export default Skills
