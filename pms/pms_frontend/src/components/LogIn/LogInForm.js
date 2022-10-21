import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {useDispatch} from "react-redux"
import {ownerSignin} from "../../features/login_signup/ownerSlice"
import {OwnerContext} from "./OwnerContext"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';

function LogInForm() {
  //set up dispatch to call the reducer function that's needed to change state
  const dispatch = useDispatch() 
  //set up navigate to send user to home after logging in
  const navigate = useNavigate()
  //access the OwnerContext to see if a User is logged in/signed up already
  const {isLoggedIn, setIsLoggedIn} = useContext(OwnerContext)
  // //set up a useState to take in formData w/onChange event
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })
  //create an allErrors state to store all errors to be mapped to JSX
  const [allErrors, setAllErrors] = useState()

  //onSubmit handle
  const handleOwnerSigninSubmit = (e) => {
    e.preventDefault()
    dispatch(ownerSignin(formData))
    .then(res => {
      if(res.type === "owners/signin/fulfilled"){
        setIsLoggedIn(true)
        navigate("/")
      }else if(res.type === "owners/signin/rejected"){
        //set the user log in boolean value to false
        setIsLoggedIn(false)
        //show error message if the submit was unsuccessful
        setAllErrors(res["payload"]["errorMessage"])
      }
    })
  }
  //onChange event for when form is updated
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
                <h2 className="fw-bold mb-3 text-uppercase ">Keystone Management</h2>
    
                <p className="error-msg">{allErrors}</p>

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
                      {(isLoggedIn) ? 
                        <Button variant="primary" type="submit" disabled>
                          Login
                        </Button> :
                        <Button variant="primary" type="submit">
                          Login
                        </Button> 
                      }
                    </div>
                  </Form>
                  <div className="mt-4">
                    <p className="mb-0  text-center">
                      Don't have an account?{" "}
                      <a href="/signup" className="text-primary fw-bold">
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