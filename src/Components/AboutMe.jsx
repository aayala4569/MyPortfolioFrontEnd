import React from 'react';
import {Row, Col} from 'react-bootstrap';
import {Image} from 'react-bootstrap';

const AboutMe = () => {
  return (
    <div>
        <Row >
            <Col className="aboutMe">
            <h3 className="d-flex justify-content-center">About me</h3>
            </Col>
            </Row>
            <Row className="d-flex justify-content-center">
            <Col className="text-center">
            <p className="text-center">
        Hello, my name is Angelica Ayala. I am junior web developer sensible to front-end and knowledgeable in the back end. I love structure and order, I also stand for quality. I am excited to continue refining my skills in web programming with your company.
            </p>
            </Col>
            </Row>
            <Row>
            <Col className="d-flex justify-content-center">
            <Image src="src/Images/LinkedIn.png" rounded style={{ width: '100px', height: 'auto' }}/>
            <Image src="src/Images/Git.png" rounded style={{ width: '100px', height: 'auto' }}/>
            </Col>
            </Row>

    </div>
  )
}

export default AboutMe
