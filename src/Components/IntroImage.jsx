import React from 'react';
import {Image, Row, Col} from 'react-bootstrap';





const IntroImage = () => {
    
  return (
    <div>
        <Row className="d-flex justify-content-center">

        <Col xs={12} md={12} className="text-center" >
            <div>
                <Image src="src/Images/MyImage.png" rounded/>
                 <h2>Creative Developer</h2>
                 
            </div>
        </Col>
        </Row>

    </div>
  )
}

export default IntroImage
