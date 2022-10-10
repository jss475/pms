import React, { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";

function SignUpForm() {
  return (
    <Container>
      <Row className="vh-100 d-flex justify-content-center align-items-center">
        <Col md={8} lg={6} xs={12}>
          <Card className="shadow">
            <Card.Body>
              <div className="mb-3 mt-md-4">
                <h2 className="fw-bold mb-5 text-uppercase ">Keystone Management</h2>
                <div className="mb-3">

                  <Form>
                    <Form.Group className="mb-4" controlId="signUpFirstName">
                        <Form.Label column="sm">First Name</Form.Label>
                        <Form.Control type="text" placeholder="First Name" />
                    </Form.Group>
                    
                    <Form.Group className="mb-4" controlId="signUpLastName">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control type="text" placeholder="Last Name" />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="signUpUsername">
                      <Form.Label>Username</Form.Label>
                      <Form.Control type="text" placeholder="Username" />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="signUpEmail">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control type="email" placeholder="Email Address" />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicCheckbox">
                      <p className="small">
                        <a className="text-primary" href="#!">Forgot password?</a>
                      </p>
                    </Form.Group>
                    <div className="d-grid">
                      <Button variant="primary" type="submit">
                        Login
                      </Button>
                    </div>
                  </Form>
                  
                  <div className="mt-4">
                    <p className="mb-0  text-center">
                      Don't have an account?{" "}
                      <a href="{''}" className="text-primary fw-bold">
                        Sign Up
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default SignUpForm;