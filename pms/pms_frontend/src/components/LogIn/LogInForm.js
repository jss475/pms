import React from 'react';
import { Card, Container, Row, Col, Image, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const LogInForm = ({setShowLogIn, setIsLoggedIn}) => {

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={5}>
      <Card className="text-center mt-5" style={{ width: '30rem' }} >
        <Col>
        </Col>
        <Col>
        <Form className='login-form'>
          <h1>
            <span className='font-weight-bold'>Easy Property</span>
          </h1>
          <h2 className='text-center'>Welcome!</h2>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember Me" />
        
      </Form.Group>
      <Button className="mb-2" variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Col>
        </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default LogInForm;