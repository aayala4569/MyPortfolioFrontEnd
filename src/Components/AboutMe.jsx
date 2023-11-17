import React from "react";
import { Row, Col } from "react-bootstrap";
import { Image } from "react-bootstrap";
// "offset-md-6"
const AboutMe = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div>
<Row>
        <Col  className="aboutMe md-6" id="AboutMe">
          <h3 className="d-flex justify-content-center mb-5 font">
            About me
          </h3>

          <p className="text-center">
            Hello, my name is Angelica Ayala. I am junior web developer sensible
            to front-end and knowledgeable in the back end. I love structure and
            order, I also stand for quality. I am excited to continue refining
            my skills in web programming with your company.
          </p>
        </Col>
 <Row className="d-flex justify-content-center">
      
      
       <Image
            src="src/Images/LinkedIn.png"
            rounded
            style={{ width: "100px", height: "auto" }}
          />
      <Image
       src="src/Images/Git.png"
            rounded
            style={{ width: "100px", height: "auto" }}
          /> 
      
      </Row>
      </Row>

      </div>
      
    </div>
  );
};

export default AboutMe;
