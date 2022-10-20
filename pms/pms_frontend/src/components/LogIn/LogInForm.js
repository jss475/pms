import React, { useState } from 'react';
import {useSelector, useDispatch} from "react-redux"
import {ownerSignin} from "../../features/login_signup/ownerSlice"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';

function LogInForm() {
  //set up dispatch to call the reducer function that's needed to change state
  const dispatch = useDispatch() 

  
  // //set up a useState to take in formData w/onChange event
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })

  //see if there is an error message
  const state = useSelector((state)=> state);
  console.log(state)

  const handleOwnerSigninSubmit = (e) => {
    e.preventDefault()
    dispatch(ownerSignin(formData))
  }

  function handleInputChange(e){
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <Container>
      <Row className="vh-100 d-flex justify-content-center align-items-center">
        <Col md={8} lg={6} xs={12}>
          <Card className="shadow">
            <Card.Body>
              <div className="mb-3 mt-md-4">
                <h2 className="fw-bold mb-5 text-uppercase ">Keystone Management</h2>
                <div className="mb-3">

                  <Form onSubmit = {handleOwnerSigninSubmit}>
                    <Form.Group className="mb-4" controlId="logInUsername">
                      <Form.Label>Username</Form.Label>
                      <Form.Control type="text" placeholder="Username" name="username" onChange={handleInputChange}/>
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="logInPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" name="password" onChange={handleInputChange}/>
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="forgotPasswordCheckbox">
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

export default LogInForm;