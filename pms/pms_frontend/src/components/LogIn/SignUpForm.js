import React, { useState, useEffect, useContext } from "react"
import {useDispatch} from "react-redux"
import {ownerSignup} from "../../features/login_signup/ownerSlice"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import {OwnerContext} from "./OwnerContext"
import "./SignUpForm.css"

function SignUpForm() {

  //set up dispatch to call the reducer function that's needed to change state
  const dispatch = useDispatch() 
  //access the OwnerContext to see if a User is logged in/signed up already
  const {isLoggedIn, setIsLoggedIn} = useContext(OwnerContext)
  //create an allErrors state to store all errors to be mapped to JSX
  const [allErrors, setAllErrors] = useState([])
  //create an errors hash map to store the backend variable names with display names
  const errorKey = {
    password: "Password ",
    username: "Username ",
    firstName: "First name ",
    lastName: "Last name ",
    email: "Email ",
    password_confirmation: "Password confirmation "
  }
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

  //onChange event when the form is being updated
  function handleInputChange(e){
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  //onSubmit event
  const handleOwnerSignupSubmit = (e) => {
    e.preventDefault()
    dispatch(ownerSignup(formData))
      .then(res => {
        if(res.type === "owners/signup/fulfilled"){
          setIsLoggedIn(true)
        }else if(res.type === "owners/signup/rejected"){
           //if no one is already logged in or there is an error message with the submit
          //set the user log in boolean value to false
          setIsLoggedIn(false)
          //show error message if the submit was unsuccessful
          let errorsContainer = []
          let errorsObj = res["payload"]["errors"]
          for(const error in errorsObj){
            let indivArr = errorsObj[error]
            for(let i =0; i < indivArr.length; i++){
                if(indivArr[i] === "Email has already been used"){
                  errorsContainer.push(indivArr[i])
                }else{
                  errorsContainer.push(errorKey[error] + indivArr[i])
                }
            }
          }
          setAllErrors(errorsContainer)
        }
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

                {allErrors.map(error => {
                  if(typeof error !== "number"){
                    return <p className="error-msg" key={error}>{error}</p>
                  }
                })}
                
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
                      {(isLoggedIn) ? 
                        <Button variant="primary" type="submit" disabled>
                          Signup
                        </Button> :
                        <Button variant="primary" type="submit">
                        Signup
                        </Button>
                      }
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