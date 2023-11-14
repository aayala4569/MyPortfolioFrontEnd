import React, { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here to handle form submission
    console.log('Form submitted:', formData);
    // You can send the form data to a server, perform validation, etc.
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Row className='contact'>
        <Col md={12} lg={10}>
          <h3 className='text-center'>Contact Me</h3>
          <Form onSubmit={handleSubmit} className='contact-form'>
            <Form.Group controlId='formName'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter your name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                style={{ width: '200%', fontSize: '20px', padding: '15px', marginBottom: '10px' }}
                required
              />
            </Form.Group>

            <Form.Group controlId='formEmail'>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter your email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                style={{ width: '200%', fontSize: '20px', padding: '10px', marginBottom: '10px' }}
                required
              />
            </Form.Group>

            <Form.Group controlId='formMessage'>
              <Form.Label>Message</Form.Label>
              <Form.Control
                as='textarea'
                rows={6}
                placeholder='Enter your message'
                name='message'
                value={formData.message}
                onChange={handleChange}
                style={{ width: '200%', fontSize: '20px', padding: '10px', marginBottom: '100px'}}
                
                required
              />
            </Form.Group>

            <Button variant='primary' type='submit'>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default ContactMe;


















