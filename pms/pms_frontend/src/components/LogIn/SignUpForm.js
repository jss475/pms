import React, { useState, useEffect } from "react"
import {useSelector, useDispatch} from "react-redux"
import {ownerSignup, ownerLoggedIn} from "../../features/login_signup/ownerSlice"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";

function SignUpForm({isLoggedIn}) {

  //set up dispatch to call the reducer function that's needed to change state
  const dispatch = useDispatch() 

  // console.log(isLoggedIn)
  //useSelector
  const state = useSelector((state) => state.owner)
  //set up a useState to take in formData w/onChange event
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
    loggedIn: false
  })

  const handleOwnerSignupSubmit = (e) => {
    e.preventDefault()
    dispatch(ownerSignup(formData))
  }

  //set up the fact that the user is loggedIn
  useEffect(() => {
    if(state["errorMessage"] || !state.username){
      dispatch(ownerLoggedIn(false))

    }else{
      dispatch(ownerLoggedIn(true))
    }
    if(state.loggedIn){
      // console.log(state.loggedIn)
    }
  },[state])

  // console.log(state)

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

                  <Form onSubmit = {handleOwnerSignupSubmit}>
                    <Form.Group className="mb-4" controlId="signUpFirstName">
                        <Form.Label column="sm">First Name</Form.Label>
                        <Form.Control type="text" placeholder="First Name" name="firstName" value={formData.firstName} onChange={handleInputChange} />
                    </Form.Group>
                    
                    <Form.Group className="mb-4" controlId="signUpLastName">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control type="text" placeholder="Last Name" name="lastName" value={formData.lastName} onChange={handleInputChange}/>
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="signUpUsername">
                      <Form.Label>Username</Form.Label>
                      <Form.Control type="text" placeholder="Username" name="username" value={formData.username} onChange={handleInputChange}/>
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="signUpEmail">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control type="email" placeholder="Email Address" name="email" value={formData.email} onChange={handleInputChange}/>
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" name="password" value={formData.password} onChange={handleInputChange}/>
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formPasswordConfirmation">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password Confirmation" name="password_confirmation" value={formData.password_confirmation} onChange={handleInputChange}/>
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicCheckbox">
                      <p className="small">
                        <a className="text-primary" href="#!">Forgot password?</a>
                      </p>
                    </Form.Group>
                    <div className="d-grid">
                      <Button variant="primary" type="submit">
                        Signup
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