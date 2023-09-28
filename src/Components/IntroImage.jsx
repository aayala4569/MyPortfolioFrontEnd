import React from 'react';
import Image from 'react-bootstrap/Image';

const IntroImage = () => {
  return (
    <div>
        <h2>Creative Developer</h2>
        <Col xs={6} md={4}>
          <Image src="./Images/MyImage.png" rounded />
        </Col>
      
    </div>
  )
}

export default IntroImage
